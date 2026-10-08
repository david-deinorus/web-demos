/* Hero WebGL, variant B: an abstract route network made of flowing particles.
   Three.js r147 classic build + examples/js (jsdelivr, exact version). No build step. */
(function () {
  'use strict';
  var canvas = document.getElementById('scene');
  if (!canvas) return;
  var RM = !!window.__RM;
  var conn = navigator.connection || {};
  var small = window.matchMedia('(max-width:900px)').matches;
  var weak = small || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  if (conn.saveData) { canvas.dataset.mode = 'fallback-savedata'; console.info('scene: fallback (save-data)'); return; }
  function hasGL2() { try { return !!document.createElement('canvas').getContext('webgl2'); } catch (e) { return false; } }
  if (!hasGL2()) { canvas.dataset.mode = 'fallback-nowebgl'; console.info('scene: fallback (no WebGL2)'); return; }

  var B = 'https://cdn.jsdelivr.net/npm/three@0.147.0/';
  var LIBS = ['build/three.min.js', 'examples/js/shaders/CopyShader.js', 'examples/js/shaders/LuminosityHighPassShader.js', 'examples/js/shaders/FXAAShader.js',
    'examples/js/postprocessing/EffectComposer.js', 'examples/js/postprocessing/RenderPass.js', 'examples/js/postprocessing/ShaderPass.js', 'examples/js/postprocessing/UnrealBloomPass.js'];
  function load(i, done) {
    if (i >= LIBS.length) return done();
    var s = document.createElement('script'); s.src = B + LIBS[i];
    s.onload = function () { load(i + 1, done); };
    s.onerror = function () { canvas.dataset.mode = 'fallback-load'; console.info('scene: fallback (library not loaded: ' + LIBS[i] + ')'); };
    document.head.appendChild(s);
  }
  function start() { load(0, build); }
  if (document.readyState === 'complete') setTimeout(start, 50); else window.addEventListener('load', function () { setTimeout(start, 50); });

  function build() {
    var T = window.THREE, hero = document.getElementById('top'), renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, antialias: false, alpha: false, powerPreference: 'high-performance' }); }
    catch (e) { canvas.dataset.mode = 'fallback-ctx'; console.info('scene: fallback (context failed)'); return; }
    canvas.dataset.mode = 'webgl2';
    var dprMax = weak ? 1.5 : 1.75;
    var C = function (hex) { return new T.Color(hex).convertSRGBToLinear(); };
    var BG = C(0x080b12);
    renderer.setClearColor(BG, 1);
    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(small ? 40 : 32, 1, .1, 200);
    var timeU = { value: 0 };

    /* ---------- network of roads (45 degree "metro map" walks) ---------- */
    var seed = 29, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var DIRS = []; for (var k = 0; k < 8; k++) DIRS.push([Math.round(Math.cos(k * Math.PI / 4) * 1000) / 1000, Math.round(Math.sin(k * Math.PI / 4) * 1000) / 1000]);
    var BX = 30, BZ = 17;
    function curveOf(pts) { return new T.CatmullRomCurve3(pts.map(function (p) { return new T.Vector3(p[0], 0, p[1]); }), false, 'centripetal'); }
    function walk(x, z, dir, steps, turnP, lmin, lmax) {
      var pts = [[x, z]];
      for (var i = 0; i < steps; i++) {
        if (rnd() < turnP) dir = (dir + (rnd() > .5 ? 1 : 7)) % 8;
        var L = lmin + rnd() * (lmax - lmin), nx = x + DIRS[dir][0] * L, nz = z + DIRS[dir][1] * L;
        if (Math.abs(nx) > BX || Math.abs(nz) > BZ) { /* turn toward the middle */
          var best = dir, bd = 1e9; for (var d = 0; d < 8; d++) { var tx = x + DIRS[d][0] * L, tz = z + DIRS[d][1] * L, dd = Math.abs(tx) / BX + Math.abs(tz) / BZ; if (dd < bd) { bd = dd; best = d; } }
          dir = best; nx = x + DIRS[dir][0] * L; nz = z + DIRS[dir][1] * L;
        }
        x = nx; z = nz; pts.push([x, z]);
      }
      return pts;
    }
    var mainPts = [[-27, 8], [-18, 8], [-12, 2], [-4, 2], [2, -4], [10, -4], [15, -9], [27, -9]];
    var mainCurve = curveOf(mainPts), MLEN = mainCurve.getLength();
    var roads = [{ curve: mainCurve, kind: 0, len: MLEN }];
    var stopsF = [.14, .3, .46, .62, .78, .92], stops = [];
    stopsF.forEach(function (f, i) {
      var p = mainCurve.getPointAt(f), tg = mainCurve.getTangentAt(f);
      stops.push({ f: f, x: p.x, z: p.z, tg: tg });
      var nb = weak ? 2 : 3;
      for (var b = 0; b < nb; b++) {
        var base = Math.round((Math.atan2(tg.z, tg.x) / (Math.PI / 4))), side = (b % 2 ? 2 : -2) + (b > 1 ? (rnd() > .5 ? 1 : -1) : 0);
        var dir = ((base + side) % 8 + 8) % 8, pts = walk(p.x, p.z, dir, 4 + Math.floor(rnd() * 4), .4, 2.2, 4.4), c = curveOf(pts);
        roads.push({ curve: c, kind: 1, len: c.getLength() });
      }
    });
    for (var e = 0; e < (weak ? 5 : 9); e++) {
      var f2 = .05 + rnd() * .9, p2 = mainCurve.getPointAt(f2), tg2 = mainCurve.getTangentAt(f2), base2 = Math.round(Math.atan2(tg2.z, tg2.x) / (Math.PI / 4));
      var pts2 = walk(p2.x, p2.z, ((base2 + (rnd() > .5 ? 2 : -2)) % 8 + 8) % 8, 4 + Math.floor(rnd() * 5), .4, 2, 4.2), c2 = curveOf(pts2);
      roads.push({ curve: c2, kind: 1, len: c2.getLength() });
    }
    for (var q = 0; q < (weak ? 16 : 36); q++) {
      var pts3 = walk((rnd() * 2 - 1) * BX, (rnd() * 2 - 1) * BZ, Math.floor(rnd() * 8), 7 + Math.floor(rnd() * 8), .3, 2, 5), c3 = curveOf(pts3);
      roads.push({ curve: c3, kind: 2, len: c3.getLength() });
    }
    var R = roads.length, M = 128, rdata = new Float32Array(M * R * 4);
    roads.forEach(function (r, ri) {
      var sp = r.curve.getSpacedPoints(M - 1);
      for (var i = 0; i < M; i++) { var o = (ri * M + i) * 4; rdata[o] = sp[i].x; rdata[o + 1] = 0; rdata[o + 2] = sp[i].z; rdata[o + 3] = 1; }
    });
    var rtex = new T.DataTexture(rdata, M, R, T.RGBAFormat, T.FloatType); rtex.minFilter = T.NearestFilter; rtex.magFilter = T.NearestFilter; rtex.needsUpdate = true;

    var pulseU = { value: new T.Vector3(-99, 0, 0) };
    var shared = { uTime: timeU, uPx: { value: 800 }, uPulse: pulseU, uFocus: { value: 22 }, uAper: { value: .75 } };

    /* faint structural lines for every road */
    (function () {
      var pos = [], col = [];
      roads.forEach(function (r) {
        var sp = r.curve.getSpacedPoints(80), c = r.kind === 0 ? [.9, .4, .12] : (r.kind === 1 ? [.5, .32, .2] : [.16, .24, .42]), a = r.kind === 0 ? .5 : (r.kind === 1 ? .55 : .5);
        for (var i = 0; i < 80; i++) { pos.push(sp[i].x, 0, sp[i].z, sp[i + 1].x, 0, sp[i + 1].z); col.push(c[0] * a, c[1] * a, c[2] * a, c[0] * a, c[1] * a, c[2] * a); }
      });
      var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new T.Float32BufferAttribute(col, 3));
      var l = new T.LineSegments(g, new T.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: .35, blending: T.AdditiveBlending, depthWrite: false }));
      l.position.y = -.01; scene.add(l);
    })();

    /* ---------- particles that flow along the roads ---------- */
    var NP = weak ? 12000 : 34000;
    var weights = roads.map(function (r) { return (r.kind === 0 ? 7 : (r.kind === 1 ? 1.6 : 1)) * r.len; }), wsum = weights.reduce(function (a, b) { return a + b; }, 0);
    var a1 = new Float32Array(NP * 4), a2 = new Float32Array(NP * 4), idx = 0;
    roads.forEach(function (r, ri) {
      var n = Math.max(40, Math.round(NP * weights[ri] / wsum));
      for (var i = 0; i < n && idx < NP; i++, idx++) {
        var wspeed = r.kind === 0 ? 3.2 + rnd() * 2.2 : (r.kind === 1 ? 1.8 + rnd() * 2.4 : .9 + rnd() * 1.4);
        var dir = (r.kind === 2 && rnd() > .6) ? -1 : 1;
        a1[idx * 4] = ri; a1[idx * 4 + 1] = rnd(); a1[idx * 4 + 2] = wspeed / r.len; a1[idx * 4 + 3] = (rnd() * 2 - 1) * (rnd() > .5 ? 1 : .35);
        a2[idx * 4] = (r.kind === 0 ? .05 + rnd() * .07 : (r.kind === 1 ? .04 + rnd() * .05 : .03 + rnd() * .04)); a2[idx * 4 + 1] = r.kind; a2[idx * 4 + 2] = rnd(); a2[idx * 4 + 3] = dir;
      }
    });
    var pg = new T.BufferGeometry();
    pg.setAttribute('position', new T.BufferAttribute(new Float32Array(NP * 3), 3));
    pg.setAttribute('a1', new T.BufferAttribute(a1, 4)); pg.setAttribute('a2', new T.BufferAttribute(a2, 4));
    var pmat = new T.ShaderMaterial({
      uniforms: { uRoads: { value: rtex }, uM: { value: M }, uR: { value: R }, uTime: timeU, uPx: shared.uPx, uPulse: pulseU, uFocus: shared.uFocus, uAper: shared.uAper, uBoost: { value: 1 } },
      transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      vertexShader: [
        'uniform sampler2D uRoads; uniform float uM,uR,uTime,uPx,uFocus,uAper,uBoost; uniform vec3 uPulse;',
        'attribute vec4 a1; attribute vec4 a2; varying vec3 vC;',
        'vec3 rp(float road,float t,out vec3 tg){ float f=clamp(t,0.,.9999)*(uM-1.); float i0=floor(f); float fr=f-i0; float v=(road+.5)/uR;',
        ' vec3 p0=texture2D(uRoads,vec2((i0+.5)/uM,v)).xyz; vec3 p1=texture2D(uRoads,vec2((i0+1.5)/uM,v)).xyz; tg=normalize(p1-p0+vec3(1e-5,0.,0.)); return mix(p0,p1,fr); }',
        'void main(){',
        ' float kind=a2.y; float t=fract(a1.y+uTime*a1.z*a2.w);',
        ' vec3 tg; vec3 p=rp(a1.x,t,tg); vec3 nr=vec3(-tg.z,0.,tg.x);',
        ' float wd = kind<.5 ? .42 : (kind<1.5 ? .2 : .16);',
        ' float wob=sin(uTime*.7+a2.z*60.+t*14.)*.5;',
        ' p+=nr*(a1.w*wd+wob*.03); p.y=.02+abs(a1.w)*.05+wob*.02;',
        ' float fade=smoothstep(0.,.07,t)*smoothstep(1.,.93,t);',
        ' float d=distance(p.xz,uPulse.xz); float g=exp(-d*d/(kind<.5?9.:26.));',
        ' vec3 col = kind<.5 ? vec3(2.5,.5,.1) : (kind<1.5 ? vec3(1.6,.72,.36) : vec3(.34,.5,1.0));',
        ' float base = kind<.5 ? .85 : (kind<1.5 ? .42 : .24);',
        ' float br = base*(1.+g*(kind<.5?6.:4.)*uBoost);',
        ' vec4 mv=modelViewMatrix*vec4(p,1.); float depth=-mv.z;',
        ' float coc=abs(depth-uFocus)/uFocus*uAper;',
        ' float sz=a2.x*(1.+coc*2.2)*(1.+g*.8); float al=1./(1.+coc*coc*5.);',
        ' vC=col*br*fade*al*(kind<.5?1.:.9);',
        ' gl_PointSize=clamp(sz*uPx/depth,1.,36.); gl_Position=projectionMatrix*mv; }'].join('\n'),
      fragmentShader: 'varying vec3 vC; void main(){ float d=length(gl_PointCoord-.5)*2.; float a=clamp(1.-d,0.,1.); a*=a; gl_FragColor=vec4(vC*a,1.); }'
    });
    var particles = new T.Points(pg, pmat); particles.frustumCulled = false; scene.add(particles);

    /* ---------- dot grid map ---------- */
    (function () {
      var sp = weak ? 1.1 : .7, pos = [], nx = Math.floor(70 / sp), nz = Math.floor(44 / sp);
      for (var i = 0; i < nx; i++) for (var j = 0; j < nz; j++) pos.push((i - nx / 2) * sp, 0, (j - nz / 2) * sp);
      var g = new T.BufferGeometry(); g.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
      var m = new T.ShaderMaterial({
        uniforms: { uTime: timeU, uPx: shared.uPx, uPulse: pulseU, uFocus: shared.uFocus, uAper: shared.uAper },
        transparent: true, depthWrite: false, blending: T.AdditiveBlending,
        vertexShader: [
          'uniform float uTime,uPx,uFocus,uAper; uniform vec3 uPulse; varying vec3 vC;',
          'void main(){ vec3 p=position; float d=distance(p.xz,uPulse.xz);',
          ' float rip=exp(-d*d/60.)*(.5+.5*sin(d*1.1-uTime*2.4));',
          ' p.y+=rip*.5*exp(-d*d/120.);',
          ' float vig=smoothstep(34.,12.,length(p.xz*vec2(.8,1.25)));',
          ' vec3 col=mix(vec3(.28,.4,.8)*.34,vec3(2.2,.6,.16),clamp(rip*1.5,0.,1.));',
          ' vec4 mv=modelViewMatrix*vec4(p,1.); float depth=-mv.z; float coc=abs(depth-uFocus)/uFocus*uAper;',
          ' vC=col*vig*(.55+rip*1.6)/(1.+coc*coc*4.);',
          ' gl_PointSize=clamp(.055*(1.+coc*2.)*uPx/depth,1.,12.); gl_Position=projectionMatrix*mv; }'].join('\n'),
        fragmentShader: 'varying vec3 vC; void main(){ float d=length(gl_PointCoord-.5)*2.; float a=clamp(1.-d,0.,1.); gl_FragColor=vec4(vC*a*a,1.); }'
      });
      var pts = new T.Points(g, m); pts.frustumCulled = false; pts.position.y = -.03; scene.add(pts);
    })();

    /* ---------- main artery (continuous glowing line) ---------- */
    var arteryU = { uTime: timeU, uProg: { value: 0 }, uLen: { value: MLEN } };
    var artery = new T.Mesh(new T.TubeGeometry(mainCurve, weak ? 260 : 520, .05, 6, false), new T.ShaderMaterial({
      uniforms: arteryU, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec2 vUv; uniform float uTime,uProg,uLen;',
        'void main(){ float s=vUv.x*uLen; float flow=pow(.5+.5*sin(s*.9-uTime*4.),5.);',
        ' float behind=mod(uProg-vUv.x+1.,1.); float lit=exp(-behind*5.)*(behind<.5?1.:0.);',
        ' vec3 c=vec3(2.4,.52,.12)*(.3+flow*.6+lit*2.4); gl_FragColor=vec4(c,1.); }'].join('\n')
    }));
    artery.position.y = .03; scene.add(artery);

    /* ---------- stops (nodes that light up when the pulse passes) ---------- */
    var stopObjs = [];
    stops.forEach(function (s, i) {
      var u = { uT: timeU, uIgn: { value: .15 }, uHit: { value: -10 } };
      var mat = new T.ShaderMaterial({
        uniforms: u, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
        fragmentShader: [
          'varying vec2 vUv; uniform float uT,uIgn,uHit;',
          'void main(){ float r=length(vUv-.5)*2.;',
          ' float core=exp(-r*r*70.)*(.7+3.4*uIgn);',
          ' float ring=smoothstep(.05,0.,abs(r-.34))*(.25+1.1*uIgn);',
          ' float ph=clamp((uT-uHit)*.75,0.,1.); float burst=uHit>0.?smoothstep(.09,0.,abs(r-ph*.95))*(1.-ph)*2.4:0.;',
          ' float halo=exp(-r*r*7.)*.12*(.3+uIgn);',
          ' vec3 c=mix(vec3(.5,.62,1.),vec3(2.4,.55,.14),clamp(uIgn*1.4,0.,1.));',
          ' gl_FragColor=vec4(c*(core+ring+burst+halo)*step(r,1.),1.); }'].join('\n')
      });
      var m = new T.Mesh(new T.CircleGeometry(2.4, 48), mat); m.rotation.x = -Math.PI / 2; m.position.set(s.x, .06, s.z); scene.add(m);
      var stem = new T.Mesh(new T.CylinderGeometry(.018, .018, 3.2, 6, 1, true), new T.ShaderMaterial({
        uniforms: { uIgn: u.uIgn }, transparent: true, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide,
        vertexShader: 'varying float vY; void main(){ vY=uv.y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
        fragmentShader: 'varying float vY; uniform float uIgn; void main(){ gl_FragColor=vec4(vec3(2.4,.55,.16)*pow(1.-vY,1.6)*(.12+uIgn*1.2),1.); }'
      }));
      stem.position.set(s.x, 1.6, s.z); scene.add(stem);
      stopObjs.push({ u: u, f: s.f, passed: false });
    });

    /* ---------- the pulse (the order travelling the artery) ---------- */
    var orbG = new T.BufferGeometry(); orbG.setAttribute('position', new T.Float32BufferAttribute([0, .1, 0], 3));
    var orbU = { uPx: shared.uPx, uSize: { value: 1 } };
    var orb = new T.Points(orbG, new T.ShaderMaterial({
      uniforms: orbU, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      vertexShader: 'uniform float uPx; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=clamp(1.4*uPx/-mv.z,4.,90.); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'void main(){ float d=length(gl_PointCoord-.5)*2.; float core=exp(-d*d*14.); float halo=exp(-d*d*3.)*.35; gl_FragColor=vec4(vec3(4.,1.2,.4)*core+vec3(1.5,.35,.1)*halo,1.); }'
    }));
    orb.frustumCulled = false; scene.add(orb);
    var wave = new T.Mesh(new T.CircleGeometry(5, 64), new T.ShaderMaterial({
      uniforms: { uT: timeU }, transparent: true, depthWrite: false, blending: T.AdditiveBlending,
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'varying vec2 vUv; uniform float uT; void main(){ float r=length(vUv-.5)*2.; float a=0.; for(int i=0;i<3;i++){ float ph=fract(uT*.4+float(i)/3.); a+=smoothstep(.05,0.,abs(r-ph))*(1.-ph)*(1.-ph); } gl_FragColor=vec4(vec3(2.,.55,.16)*a*.5*step(r,1.),1.); }'
    }));
    wave.rotation.x = -Math.PI / 2; wave.position.y = .05; scene.add(wave);

    /* ---------- post: bloom, soft tone map, sRGB, vignette, grain, FXAA ---------- */
    var composer, bloom, finish, fxaa, W = 0, H = 0, dpr = 1;
    var finishShader = {
      uniforms: { tDiffuse: { value: null }, uTime: timeU, uRes: { value: new T.Vector2(1, 1) }, uLeft: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime,uLeft; uniform vec2 uRes;',
        'float hh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }',
        'vec3 enc(vec3 c){ return mix(c*12.92, 1.055*pow(c,vec3(1./2.4))-.055, step(.0031308,c)); }',
        'void main(){ vec2 d=vUv-.5; float r2=dot(d,d);',
        ' vec3 c; c.r=texture2D(tDiffuse,vUv+d*r2*.008).r; c.g=texture2D(tDiffuse,vUv).g; c.b=texture2D(tDiffuse,vUv-d*r2*.008).b;',
        ' c*=mix(1.,.42,uLeft*(1.-smoothstep(.16,.56,vUv.x)));',
        ' float mx=max(c.r,max(c.g,c.b)); float tm=1.-exp(-mx*.95); c=c*(tm/max(mx,1e-4)); c=mix(c,vec3(tm),smoothstep(2.5,9.,mx)*.5);',                                    /* soft shoulder: dark values stay exact */
        ' c=enc(max(c,0.));',
        ' c*=1.-smoothstep(.3,1.0,length(d)*1.25)*.35;',
        ' c+=(hh(vUv*uRes+fract(uTime))-.5)*.022;',
        ' gl_FragColor=vec4(c,1.); }'].join('\n')
    };
    function buildComposer() {
      if (composer) { composer.renderTarget1.dispose(); composer.renderTarget2.dispose(); }
      var w = Math.floor(W * dpr), h = Math.floor(H * dpr);
      var rt = new T.WebGLRenderTarget(w, h, { type: T.HalfFloatType, format: T.RGBAFormat, minFilter: T.LinearFilter, magFilter: T.LinearFilter });
      composer = new T.EffectComposer(renderer, rt); composer.setPixelRatio(1); composer.setSize(w, h);
      composer.addPass(new T.RenderPass(scene, camera));
      bloom = new T.UnrealBloomPass(new T.Vector2(Math.floor(w * (weak ? .5 : .7)), Math.floor(h * (weak ? .5 : .7))), weak ? .65 : .7, .45, .92);
      [bloom.renderTargetBright].concat(bloom.renderTargetsHorizontal, bloom.renderTargetsVertical).forEach(function (r) { r.texture.type = T.HalfFloatType; r.dispose(); }); /* r147 bloom uses 8-bit targets: dark haze bands */
      composer.addPass(bloom);
      finish = new T.ShaderPass(finishShader); finish.uniforms.uRes.value.set(w, h); finish.uniforms.uLeft.value = W > 900 ? 1 : 0; composer.addPass(finish);
      var fx = { uniforms: T.UniformsUtils.clone(T.FXAAShader.uniforms), vertexShader: T.FXAAShader.vertexShader, fragmentShader: T.FXAAShader.fragmentShader.replace(/,\s*-100\.0/g, '') };
      fxaa = new T.ShaderPass(fx); fxaa.uniforms.resolution.value.set(1 / w, 1 / h); fxaa.renderToScreen = true; composer.addPass(fxaa);
    }
    function resize() {
      W = Math.max(200, canvas.clientWidth); H = Math.max(200, canvas.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, dprMax);
      renderer.setPixelRatio(1); renderer.setSize(Math.floor(W * dpr), Math.floor(H * dpr), false);
      camera.aspect = W / H;
      if (W > 900) camera.setViewOffset(W, H, -W * .2, 0, W, H); else camera.clearViewOffset();
      camera.updateProjectionMatrix();
      shared.uPx.value = (H * dpr) / (2 * Math.tan(camera.fov * Math.PI / 360));
      buildComposer();
    }
    var rzT = 0;
    function onResize() { cancelAnimationFrame(rzT); rzT = requestAnimationFrame(function () { resize(); frame(0, timeU.value); }); }
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(canvas); else window.addEventListener('resize', onResize);

    /* ---------- loop ---------- */
    var DUR = 16, prog = RM ? .5 : .02, tx = 0, ty = 0, px = 0, py = 0, scrollY = 0, last = 0, tAcc = 0, look = new T.Vector3(3, 0, 0);
    if (!RM) {
      hero.addEventListener('pointermove', function (e) { tx = e.clientX / window.innerWidth - .5; ty = e.clientY / window.innerHeight - .5; });
      window.addEventListener('scroll', function () { scrollY = window.scrollY; }, { passive: true });
    }
    function frame(dt, t) {
      timeU.value = t;
      if (!RM) prog = (prog + dt / DUR) % 1;
      var pp = mainCurve.getPointAt(Math.min(.9999, prog));
      pulseU.value.set(pp.x, 0, pp.z);
      orb.position.set(pp.x, 0, pp.z); wave.position.set(pp.x, .05, pp.z);
      arteryU.uProg.value = prog;
      stopObjs.forEach(function (s) {
        var since = ((prog - s.f) % 1 + 1) % 1, ahead = 1 - since;
        var ign = .14 + .86 * Math.exp(-since * DUR / 3.2) + .25 * Math.exp(-Math.pow(ahead * DUR / 1.1, 2));
        if (RM) ign = since < .5 ? .6 : .15;
        s.u.uIgn.value = ign;
        if (since < .02 && !s.passed) { s.passed = true; s.u.uHit.value = t; } else if (since > .1) s.passed = false;
      });
      px += (tx - px) * .035; py += (ty - py) * .035;
      var d = RM ? 0 : t, ang = Math.sin(d * .045) * .09 + px * .16;
      var rad = small ? 24 : 21, hgt = (small ? 15 : 12.5) - py * 2.2 + Math.min(scrollY, 500) * .006;
      look.set(5 + px * 1.5, 0, small ? 6 : 7.5);
      camera.position.set(look.x + Math.sin(ang) * rad + 1, hgt, look.z + Math.cos(ang) * rad);
      camera.lookAt(look);
      shared.uFocus.value = camera.position.distanceTo(look);
      composer.render();
    }
    var running = false, visibleHero = true, tabVisible = !document.hidden;
    function raf(now) {
      if (!running) return;
      requestAnimationFrame(raf);
      var dt = Math.min((now - last) / 1000, .1); last = now;
      if (weak) { tAcc += dt; if (tAcc < 1 / 40) return; dt = tAcc; tAcc = 0; }
      frame(dt, now / 1000);
    }
    function sync() {
      var should = !RM && visibleHero && tabVisible;
      if (should && !running) { running = true; last = performance.now(); requestAnimationFrame(raf); } else if (!should && running) running = false;
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visibleHero = e[0].isIntersecting; sync(); }).observe(hero);
    document.addEventListener('visibilitychange', function () { tabVisible = !document.hidden; sync(); });
    try {
      resize(); frame(0, 3); frame(.016, 3.016);
      var gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
      console.info('scene: webgl2 ' + (weak ? '(light)' : '(full)') + ', particles=' + NP + ', roads=' + R + (ext ? ' | gpu: ' + gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : ''));
    } catch (e) { canvas.dataset.mode = 'fallback-render'; console.info('scene: fallback (render failed: ' + e.message + ')'); return; }
    canvas.classList.add('ready');
    sync();
  }
})();
