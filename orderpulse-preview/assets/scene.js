/* Hero WebGL v2: night city with wet street, glowing route, traffic light trails, bloom + DOF + ACES.
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

  function hasGL2() {
    try { var c = document.createElement('canvas'); return !!c.getContext('webgl2'); } catch (e) { return false; }
  }
  if (!hasGL2()) { canvas.dataset.mode = 'fallback-nowebgl'; console.info('scene: fallback (no WebGL2)'); return; }

  var V = '0.147.0', B = 'https://cdn.jsdelivr.net/npm/three@' + V + '/';
  var LIBS = ['build/three.min.js',
    'examples/js/shaders/CopyShader.js', 'examples/js/shaders/LuminosityHighPassShader.js', 'examples/js/shaders/FXAAShader.js',
    'examples/js/postprocessing/EffectComposer.js', 'examples/js/postprocessing/RenderPass.js', 'examples/js/postprocessing/ShaderPass.js',
    'examples/js/postprocessing/UnrealBloomPass.js', 'examples/js/geometries/RoundedBoxGeometry.js'];
  if (!weak) LIBS.push('examples/js/objects/Reflector.js');

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
    var T = window.THREE, hero = document.getElementById('top');
    var renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, antialias: false, alpha: false, powerPreference: 'high-performance' }); }
    catch (e) { canvas.dataset.mode = 'fallback-ctx'; console.info('scene: fallback (context failed)'); return; }
    canvas.dataset.mode = 'webgl2';
    var dprMax = weak ? 1.25 : 2;
    var Q = location.search;
    var useReflector = !weak && !!T.Reflector && !/noref/.test(Q);
    var useDOF = !weak && !/nodof/.test(Q);
    var log = 'scene: webgl2 ' + (weak ? '(light)' : '(full)') + ', reflector=' + useReflector + ', dof=' + useDOF;

    var C = function (hex) { return new T.Color(hex).convertSRGBToLinear(); };
    var FOG = C(0x20164a);
    var scene = new T.Scene();
    scene.fog = new T.FogExp2(FOG, small ? .032 : .028);
    var camera = new T.PerspectiveCamera(small ? 56 : 42, 1, .1, 400);
    var timeU = { value: 0 }, timeList = [];
    function track(mat) { if (mat.uniforms && mat.uniforms.uTime) timeList.push(mat.uniforms.uTime); return mat; }

    /* ---------- sky ---------- */
    var sky = new T.Mesh(new T.SphereGeometry(300, 32, 16), new T.ShaderMaterial({
      side: T.BackSide, depthWrite: false, fog: false,
      uniforms: { uFog: { value: FOG }, uZen: { value: C(0x04061a) }, uMid: { value: C(0x121043) }, uGlow: { value: C(0xff4a30) }, uPink: { value: C(0x4a2a7a) } },
      vertexShader: 'varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec3 vD; uniform vec3 uFog,uZen,uMid,uGlow,uPink;',
        'float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }',
        'void main(){',
        ' float y=clamp(vD.y,0.,1.);',
        ' vec3 c=mix(uFog,uMid,smoothstep(0.,.22,y)); c=mix(c,uZen,smoothstep(.15,.8,y));',
        ' float az=.4+.6*smoothstep(-.2,.9,-vD.z);',               /* glow behind the city (toward -z) */
        ' float band=exp(-pow(y*7.,1.1));',
        ' c+=uGlow*band*az*.3; c+=uPink*exp(-pow(y*3.2,1.2))*az*.22;',
        ' float cy=y+.12; vec2 cu=vD.xz/cy*1.1; float cl=0.; float am=.5; for(int i=0;i<4;i++){ vec2 ii=floor(cu),ff=fract(cu); ff=ff*ff*(3.-2.*ff); cl+=am*mix(mix(h(ii),h(ii+vec2(1,0)),ff.x),mix(h(ii+vec2(0,1)),h(ii+vec2(1,1)),ff.x),ff.y); cu=cu*2.1+7.; am*=.5; }',
        ' c+=uGlow*pow(cl,2.2)*smoothstep(.02,.18,y)*(1.-smoothstep(.2,.55,y))*az*.55;',
        ' vec2 sp=floor(vD.xz/(1.2+vD.y)*90.+vD.y*120.); float st=step(.9965,h(sp))*smoothstep(.12,.5,y);',
        ' c+=vec3(1.,.9,.8)*st*2.5;',
        ' gl_FragColor=vec4(c,1.); }'].join('\n')
    }));
    sky.renderOrder = -10; scene.add(sky);

    /* ---------- lights ---------- */
    scene.add(new T.HemisphereLight(C(0x5a4ab0), C(0x0a0816), .55));
    var rim = new T.DirectionalLight(C(0xff8a5a), .25); rim.position.set(-8, 14, -30); scene.add(rim);
    var fill = new T.DirectionalLight(C(0x5a90ff), .3); fill.position.set(18, 10, 14); scene.add(fill);
    var truckLight = new T.PointLight(C(0xff7a3a), 2.2, 10, 2); scene.add(truckLight);

    /* ---------- buildings ---------- */
    var S = 4.4, NX = weak ? 8 : 11, NZB = weak ? 9 : 14, NZF = weak ? 8 : 11; /* cells: x in [-NX,NX), z in [-NZB,NZF) */
    var HB = [1.4, 2.4, 3.8, 5.6, 8.0, 11.0];
    function makeWinMat(hx, hy, key) {
      var m = new T.MeshStandardMaterial({ color: C(0x0a0f22), roughness: .32, metalness: .55 });
      m.onBeforeCompile = function (sh) {
        sh.uniforms.uTime = timeU;
        sh.vertexShader = sh.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vWp; varying vec3 vOn; varying vec3 vLoc; varying float vSeed;')
          .replace('#include <project_vertex>', '#include <project_vertex>\n vec4 wp4 = modelMatrix * vec4(transformed,1.0);\n#ifdef USE_INSTANCING\n wp4 = modelMatrix * instanceMatrix * vec4(transformed,1.0);\n vSeed = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898,78.233)))*43758.5453);\n#else\n vSeed = 0.0;\n#endif\n vWp = wp4.xyz; vOn = normal; vLoc = position;');
        sh.fragmentShader = sh.fragmentShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vWp; varying vec3 vOn; varying vec3 vLoc; varying float vSeed; uniform float uTime;\nconst vec3 uHalf = vec3(' + hx.toFixed(3) + ',' + hy.toFixed(3) + ',' + hx.toFixed(3) + ');\nfloat hh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }')
          .replace('#include <emissivemap_fragment>', [
            '#include <emissivemap_fragment>',
            'vec3 an = abs(vOn); float side = smoothstep(.55,.2,an.y);',
            'float hc = an.x>an.z ? vWp.z : vWp.x; float fs = an.x>an.z ? sign(vOn.x) : sign(vOn.z);',
            'float sd = floor(vSeed*4096.0+.5)/4096.0; vec2 g = vec2(hc*4.4, vWp.y*5.6); vec2 id = floor(g); vec2 f = fract(g);',
            'float win = smoothstep(.12,.2,f.x)*smoothstep(.88,.8,f.x)*smoothstep(.16,.24,f.y)*smoothstep(.84,.76,f.y);',
            'float r = hh(id + sd*91.0 + fs*7.0); float on = step(.9, r);',
            'float tg = hh(id*1.7 + sd*13.0 + fs); float fl = step(.9, tg);',
            'on = mix(on, step(.5, sin(uTime*(.5+tg*1.6) + tg*60.0))*step(.8,r+.15), fl);',
            'float k = hh(id.yx + sd*5.0);',
            'vec3 wc = k<.7 ? vec3(1.0,.5,.14) : (k<.92 ? vec3(.2,.55,1.0) : vec3(1.0,.2,.45));',
            'totalEmissiveRadiance += wc * (.8 + 1.2*hh(id+3.0)) * win * on * side * smoothstep(.5,1.2,vWp.y);',
            'vec3 ap = abs(vLoc);',
            'float ex = smoothstep(uHalf.x-.075, uHalf.x-.012, ap.x); float ez = smoothstep(uHalf.z-.075, uHalf.z-.012, ap.z); float ey = smoothstep(uHalf.y-.075, uHalf.y-.012, vLoc.y);',
            'float edge = clamp(ex*ez + ey*(ex+ez), 0., 1.);',
            'vec3 ec = fract(sd*7.31) > .72 ? vec3(1.0,.42,.1) : vec3(.12,.5,1.0);',
            'totalEmissiveRadiance += ec * edge * (1.5 + .6*sin(uTime*.7+sd*40.0));',
            'totalEmissiveRadiance += ec * side * smoothstep(uHalf.y*.35, uHalf.y, vLoc.y) * .12;',
            '/* storefront glow at street level */',
            'totalEmissiveRadiance += vec3(1.0,.5,.2) * side * win * smoothstep(2.2,.3,vWp.y) * (.5+.7*hh(id+9.0)) * step(.45,hh(id*2.3+sd));'
          ].join('\n'));
      };
      m.customProgramCacheKey = function () { return key; };
      return m;
    }

    var seed = 17, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    var buckets = HB.map(function () { return []; }), beacons = [];
    for (var i = -NX; i < NX; i++) for (var j = -NZB; j < NZF; j++) {
      var cx = (i + .5) * S, cz = (j + .5) * S, r = rnd(), b = Math.min(5, Math.floor(Math.pow(r, 1.25) * 6));
      var inRoute = cx > -S && cx < 7 * S && cz > -14 * S && cz < 10.5 * S;
      if (inRoute) b = Math.min(b, rnd() > .95 ? 3 : (rnd() > .5 ? 1 : 2));                 /* low rise around the route so it reads from above */
      else if (cz < -30 || Math.abs(cx) > 24) b = Math.min(5, b + 1 + (rnd() > .5 ? 1 : 0)); /* taller skyline around it */
      var sc = .82 + rnd() * .16;
      buckets[b].push([cx, cz, sc, rnd() * Math.PI * 0]);
      if (b >= 4 && rnd() > .55) beacons.push([cx, HB[b] + .35, cz]);
    }
    var dummy = new T.Object3D(), bMeshes = [];
    buckets.forEach(function (list, bi) {
      if (!list.length) return;
      var g = new T.RoundedBoxGeometry(S - 2.0, HB[bi], S - 2.0, weak ? 2 : 3, .09);
      var im = new T.InstancedMesh(g, makeWinMat((S - 2.0) / 2, HB[bi] / 2, 'opwin_' + bi), list.length);
      list.forEach(function (c, k) { dummy.position.set(c[0], HB[bi] / 2, c[1]); dummy.scale.set(c[2], 1, c[2]); dummy.updateMatrix(); im.setMatrixAt(k, dummy.matrix); });
      im.instanceMatrix.needsUpdate = true; scene.add(im); bMeshes.push(im);
    });

    /* beacons (blinking red aviation lights) + traffic points share a point shader */
    var pointUniforms = { uPx: { value: 600 }, uTime: timeU };
    function pointMat() {
      return new T.ShaderMaterial({
        uniforms: pointUniforms, transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false,
        vertexShader: 'attribute vec3 aCol; attribute vec2 aP; varying vec3 vC; uniform float uPx; uniform float uTime; void main(){ vec4 mv=modelViewMatrix*vec4(position,1.); float bl = aP.y>0. ? step(.5, sin(uTime*2.2+aP.y*6.283)) : 1.; vC=aCol*bl; gl_PointSize=clamp(aP.x*uPx/-mv.z,1.,26.); gl_Position=projectionMatrix*mv; }',
        fragmentShader: 'varying vec3 vC; void main(){ float d=length(gl_PointCoord-.5)*2.; float a=pow(clamp(1.-d,0.,1.),2.2); gl_FragColor=vec4(vC*a,1.); }'
      });
    }
    (function () {
      var n = beacons.length, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), p = new Float32Array(n * 2);
      beacons.forEach(function (b, k) { pos.set(b, k * 3); col.set([6, .25, .25], k * 3); p[k * 2] = .5; p[k * 2 + 1] = rnd(); });
      var g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3)); g.setAttribute('aCol', new T.BufferAttribute(col, 3)); g.setAttribute('aP', new T.BufferAttribute(p, 2));
      var pts = new T.Points(g, pointMat()); pts.frustumCulled = false; scene.add(pts);
    })();

    /* ---------- ground ---------- */
    var floorUniforms = { uTime: timeU, uFog: { value: FOG }, uDen: { value: scene.fog.density }, uS: { value: S }, uRefl: { value: useReflector ? 1 : 0 } };
    var floorMat = track(new T.ShaderMaterial({
      uniforms: floorUniforms, transparent: true, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vW; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }',
      fragmentShader: [
        'varying vec3 vW; uniform vec3 uFog; uniform float uDen,uS,uTime,uRefl;',
        'float hh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }',
        'float vn(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hh(i),hh(i+vec2(1,0)),f.x),mix(hh(i+vec2(0,1)),hh(i+vec2(1,1)),f.x),f.y); }',
        'void main(){',
        ' vec2 p=vW.xz; vec2 q=abs(fract(p/uS+.5)-.5)*uS;',       /* distance to nearest street center line, per axis */
        ' float street=1.-smoothstep(.42,.5,min(q.x,q.y));',
        ' float n=vn(p*1.3)*.6+vn(p*4.1+7.)*.4;',
        ' float a = mix(.62,.28,smoothstep(.35,.75,n));',        /* puddles are more reflective */
        ' a = mix(.97,a,street); if(uRefl<.5) a=mix(.97,.9,street);',
        ' vec3 c=vec3(.02,.025,.05);',
        ' float dash=step(min(q.x,q.y),.035)*step(.5,fract((q.x<q.y? p.y:p.x)/1.0))*street; c+=vec3(.5,.5,.55)*dash*.5;',
        ' float edge=smoothstep(.43,.45,min(q.x,q.y))*(1.-smoothstep(.45,.5,min(q.x,q.y))); c+=vec3(.25,.3,.6)*edge*.8;',
        ' float d=distance(vW,cameraPosition); float ff=1.-exp(-d*d*uDen*uDen);',
        ' c=mix(c,uFog,ff); a=mix(a,1.,ff);',
        ' gl_FragColor=vec4(c,a); }'].join('\n')
    }));
    var floor;
    if (useReflector) {
      floor = new T.Reflector(new T.PlaneGeometry(500, 500), { color: new T.Color(0x9a9ab8), clipBias: .003, textureWidth: 1024, textureHeight: 512, multisample: 0 });
      floor.rotation.x = -Math.PI / 2; scene.add(floor);
    }
    var floor2 = new T.Mesh(new T.PlaneGeometry(500, 500), floorMat); floor2.rotation.x = -Math.PI / 2; floor2.position.y = .004; floor2.renderOrder = 1; scene.add(floor2);
    if (!useReflector) { var base = new T.Mesh(new T.PlaneGeometry(500, 500), new T.MeshBasicMaterial({ color: C(0x05060f) })); base.rotation.x = -Math.PI / 2; base.position.y = -.01; scene.add(base); }

    /* ---------- route (closed loop through the streets) ---------- */
    var raw = weak
      ? [[0, 6], [0, -8], [4, -8], [4, -3], [2, -3], [2, 3], [4, 3], [4, 6]]
      : [[0, 9], [0, -12], [5, -12], [5, -6], [2, -6], [2, 0], [5, 0], [5, 4], [3, 4], [3, 9]];
    var P = raw.map(function (p) { return new T.Vector3(p[0] * S, .08, p[1] * S); });
    var path = new T.CurvePath(), R = 1.7, nP = P.length, ent = [], ext = [];
    for (var a = 0; a < nP; a++) {
      var p0 = P[(a + nP - 1) % nP], p1 = P[a], p2 = P[(a + 1) % nP];
      var d1 = p1.clone().sub(p0).normalize(), d2 = p2.clone().sub(p1).normalize();
      ent.push(p1.clone().addScaledVector(d1, -R)); ext.push(p1.clone().addScaledVector(d2, R));
    }
    for (var a2 = 0; a2 < nP; a2++) {
      var nx = (a2 + 1) % nP;
      path.add(new T.QuadraticBezierCurve3(ent[a2], P[a2].clone(), ext[a2]));
      path.add(new T.LineCurve3(ext[a2], ent[nx]));
    }
    var LEN = path.getLength(), SEG = weak ? 360 : 900;
    var routeU = { uTime: timeU, uProg: { value: 0 }, uLen: { value: LEN }, uCol: { value: C(0xff6a2b) }, uHot: { value: C(0xffd08a) } };
    var routeMat = new T.ShaderMaterial({
      uniforms: routeU, fog: false,
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec2 vUv; uniform float uTime,uProg,uLen; uniform vec3 uCol,uHot;',
        'void main(){',
        ' float s=vUv.x*uLen; float flow=pow(.5+.5*sin(s*1.1-uTime*6.),6.);',
        ' float behind=mod(uProg-vUv.x+1.,1.);',                    /* distance behind the truck, 0..1 */
        ' float lit=mix(1.,.3,smoothstep(.0,.12,behind)*step(behind,.9)); lit=mix(lit,1.,smoothstep(.88,.97,behind));',
        ' float rim=pow(abs(sin(vUv.y*3.1416)),2.);',
        ' vec3 c=mix(uCol*(.7+flow*1.8),uHot*2.6,flow*.3+rim*.15);',
        ' gl_FragColor=vec4(c*lit,1.); }'].join('\n')
    });
    var tube = new T.Mesh(new T.TubeGeometry(path, SEG, .17, 10, true), routeMat); tube.renderOrder = 2; scene.add(tube);
    var halo = new T.Mesh(new T.TubeGeometry(path, Math.floor(SEG / 2), .46, 8, true), new T.ShaderMaterial({
      transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false,
      uniforms: { uCol: { value: C(0xff6a2b) } },
      vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec3 vN; varying vec3 vV; uniform vec3 uCol; void main(){ float f=pow(abs(dot(normalize(vN),normalize(vV))),2.2); gl_FragColor=vec4(uCol*f*.4,1.); }'
    }));
    scene.add(halo);

    /* ---------- stops ---------- */
    var stopsF = [.06, .22, .38, .56, .72, .88], stops = [];
    var ringU = function () { return { uT: timeU, uState: { value: 0 }, uHit: { value: -10 } }; };
    stopsF.forEach(function (f) {
      var pt = path.getPointAt(f), g = new T.Group(); g.position.set(pt.x, 0, pt.z);
      var u = ringU();
      var ringMat = new T.ShaderMaterial({
        uniforms: { uT: timeU, uState: u.uState, uHit: u.uHit }, transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false,
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
        fragmentShader: [
          'varying vec2 vUv; uniform float uT,uState,uHit;',
          'void main(){ float r=length(vUv-.5)*2.;',
          ' vec3 c = uState>1.5 ? vec3(.2,1.,.6) : (uState>.5 ? vec3(1.,.5,.18) : vec3(.35,.6,1.));',
          ' float k=0.; for(int i=0;i<3;i++){ float ph=fract(uT*.55+float(i)/3.); k+=smoothstep(.06,0.,abs(r-ph))*(1.-ph); }',
          ' float core=smoothstep(.07,0.,abs(r-.42))*1.4 + smoothstep(.4,0.,r)*.25;',
          ' float burst = uHit>0. ? smoothstep(.1,0.,abs(r-clamp((uT-uHit)*.9,0.,1.)))*(1.-clamp((uT-uHit)*.9,0.,1.))*2.5 : 0.;',
          ' float m=(k*.9+core+burst)*step(r,1.); gl_FragColor=vec4(c*m*(uState>.5?2.:1.2),1.); }'].join('\n')
      });
      var ring = new T.Mesh(new T.CircleGeometry(1.25, 48), ringMat); ring.rotation.x = -Math.PI / 2; ring.position.y = .1; g.add(ring);
      var beamMat = new T.ShaderMaterial({
        uniforms: { uState: u.uState }, transparent: true, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide, fog: false,
        vertexShader: 'varying float vY; void main(){ vY=uv.y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
        fragmentShader: 'varying float vY; uniform float uState; void main(){ vec3 c = uState>1.5 ? vec3(.2,1.,.6) : (uState>.5 ? vec3(1.,.5,.18) : vec3(.35,.6,1.)); gl_FragColor=vec4(c*pow(1.-vY,2.)*.7*(uState>.5?1.5:.7),1.); }'
      });
      var beam = new T.Mesh(new T.CylinderGeometry(.04, .1, 4.2, 10, 1, true), beamMat); beam.position.y = 2.1; g.add(beam);
      var pinM = new T.MeshBasicMaterial({ color: new T.Color(.5, 1.2, 2.6) });
      var pin = new T.Group();
      var pc = new T.Mesh(new T.ConeGeometry(.3, .62, 16), pinM); pc.rotation.x = Math.PI; pc.position.y = -.18; pin.add(pc);
      var ps = new T.Mesh(new T.SphereGeometry(.31, 18, 14), pinM); ps.position.y = .17; pin.add(ps);
      var ph = new T.Mesh(new T.SphereGeometry(.11, 10, 8), new T.MeshBasicMaterial({ color: new T.Color(.03, .03, .06) })); ph.position.set(0, .17, .26); pin.add(ph);
      pin.position.y = 3.0; g.add(pin);
      scene.add(g); stops.push({ f: f, u: u, g: g, pin: pin, pinM: pinM });
    });

    /* ---------- truck ---------- */
    var truck = new T.Group(), truckInner = new T.Group(); truck.add(truckInner);
    (function () {
      var bodyM = new T.MeshStandardMaterial({ color: C(0x8d96ab), roughness: .5, metalness: .3 });
      var cabM = new T.MeshStandardMaterial({ color: C(0xff6a2b), roughness: .28, metalness: .4, emissive: C(0x401200), emissiveIntensity: .6 });
      var darkM = new T.MeshStandardMaterial({ color: C(0x0a0c14), roughness: .5, metalness: .6 });
      var glassM = new T.MeshStandardMaterial({ color: C(0x0a1426), roughness: .08, metalness: .9, emissive: C(0x16305a), emissiveIntensity: .5 });
      var cargo = new T.Mesh(new T.RoundedBoxGeometry(1.5, .95, .82, 3, .1), bodyM); cargo.position.set(-.25, .98, 0); truckInner.add(cargo);
      var stripe = new T.Mesh(new T.BoxGeometry(1.52, .09, .84), new T.MeshBasicMaterial({ color: new T.Color(3.2, 1.3, .35) })); stripe.position.set(-.25, .62, 0); truckInner.add(stripe);
      var cab = new T.Mesh(new T.RoundedBoxGeometry(.62, .78, .78, 4, .18), cabM); cab.position.set(.8, .84, 0); truckInner.add(cab);
      var wind = new T.Mesh(new T.RoundedBoxGeometry(.1, .34, .62, 3, .05), glassM); wind.position.set(1.08, 1.04, 0); truckInner.add(wind);
      var wsd = new T.Mesh(new T.RoundedBoxGeometry(.4, .3, .05, 3, .03), glassM);
      [-.4, .4].forEach(function (z) { var w = wsd.clone(); w.position.set(.82, 1.05, z); truckInner.add(w); });
      var chassis = new T.Mesh(new T.RoundedBoxGeometry(2.3, .22, .64, 2, .05), darkM); chassis.position.set(.05, .42, 0); truckInner.add(chassis);
      var bumper = new T.Mesh(new T.RoundedBoxGeometry(.12, .2, .84, 2, .05), darkM); bumper.position.set(1.14, .48, 0); truckInner.add(bumper);
      var wheelG = new T.CylinderGeometry(.26, .26, .2, 20); wheelG.rotateX(Math.PI / 2);
      var rimG = new T.CylinderGeometry(.13, .13, .22, 12); rimG.rotateX(Math.PI / 2);
      var rimM = new T.MeshStandardMaterial({ color: C(0xaab0c0), roughness: .25, metalness: .9 });
      [[.8, 1], [.8, -1], [-.55, 1], [-.55, -1], [-1.0, 1], [-1.0, -1]].forEach(function (w) {
        var m = new T.Mesh(wheelG, darkM); m.position.set(w[0], .26, w[1] * .4); truckInner.add(m);
        var r = new T.Mesh(rimG, rimM); r.position.set(w[0], .26, w[1] * .4); truckInner.add(r);
      });
      var lampM = new T.MeshBasicMaterial({ color: new T.Color(7, 6, 4.2) }), tailM = new T.MeshBasicMaterial({ color: new T.Color(5, .2, .2) });
      [-.28, .28].forEach(function (z) {
        var l = new T.Mesh(new T.SphereGeometry(.07, 10, 8), lampM); l.position.set(1.17, .62, z); truckInner.add(l);
        var t = new T.Mesh(new T.BoxGeometry(.05, .1, .2), tailM); t.position.set(-1.03, .66, z * 1.2); truckInner.add(t);
        /* light cone */
        var cg = new T.ConeGeometry(.9, 5, 24, 1, true); cg.translate(0, -2.5, 0); cg.rotateZ(Math.PI / 2);
        var cone = new T.Mesh(cg, new T.ShaderMaterial({
          transparent: true, depthWrite: false, blending: T.AdditiveBlending, side: T.DoubleSide, fog: false,
          vertexShader: 'varying float vX; void main(){ vX=position.x; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
          fragmentShader: 'varying float vX; void main(){ float k=clamp(vX/5.,0.,1.); gl_FragColor=vec4(vec3(1.,.9,.7)*pow(1.-k,2.2)*.28,1.); }'
        }));
        cone.position.set(1.2, .62, z); cone.rotation.z = -.07; truckInner.add(cone);
      });
      /* brand decal on both sides */
      var cv = document.createElement('canvas'); cv.width = 512; cv.height = 256; var cx = cv.getContext('2d');
      cx.clearRect(0, 0, 512, 256); cx.fillStyle = '#ff6a2b'; cx.beginPath(); cx.moveTo(70, 60); cx.arc(70, 78, 26, Math.PI, 0); cx.lineTo(70, 126); cx.closePath(); cx.fill();
      cx.fillStyle = '#e9edf6'; cx.beginPath(); cx.arc(70, 78, 9, 0, 7); cx.fill();
      cx.font = '800 68px Inter, Arial, sans-serif'; cx.textBaseline = 'middle'; cx.fillStyle = '#16181d'; cx.fillText('Order', 108, 86); var ow = cx.measureText('Order').width; cx.fillStyle = '#f65b22'; cx.fillText('Pulse', 108 + ow, 86);
      var tex = new T.CanvasTexture(cv); tex.anisotropy = 4;
      [[1, 0], [-1, Math.PI]].forEach(function (s) {
        var d = new T.Mesh(new T.PlaneGeometry(1.3, .65), new T.MeshBasicMaterial({ map: tex, transparent: true, color: new T.Color(.9, .9, .9) }));
        d.position.set(-.25, .98, s[0] * .415); d.rotation.y = s[1]; truckInner.add(d);
      });
      var dr = new T.Mesh(new T.PlaneGeometry(.78, .39), new T.MeshBasicMaterial({ map: tex, transparent: true, color: new T.Color(.9, .9, .9) }));
      dr.position.set(-1.003, .98, 0); dr.rotation.y = -Math.PI / 2; truckInner.add(dr);
      /* headlight pool on the road */
      var pool = new T.Mesh(new T.CircleGeometry(2.2, 32), new T.ShaderMaterial({
        transparent: true, depthWrite: false, blending: T.AdditiveBlending, fog: false,
        vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
        fragmentShader: 'varying vec2 vUv; void main(){ float r=length(vUv-.5)*2.; gl_FragColor=vec4(vec3(1.,.75,.45)*pow(1.-clamp(r,0.,1.),2.)*.55,1.); }'
      }));
      pool.rotation.x = -Math.PI / 2; pool.position.set(2.4, .06, 0); pool.scale.set(1.2, .7, 1); truckInner.add(pool);
    })();
    truck.scale.setScalar(1.45); scene.add(truck);

    /* ---------- traffic light trails ---------- */
    var NV = weak ? 40 : 150, K = weak ? 12 : 22, vehicles = [];
    var tp = new Float32Array(NV * K * 3), tc = new Float32Array(NV * K * 3), tpp = new Float32Array(NV * K * 2);
    var lines = []; for (var li = -NX + 1; li < NX; li++) lines.push(li * S);
    for (var v = 0; v < NV; v++) {
      var ax = rnd() > .5 ? 0 : 1, line = lines[Math.floor(rnd() * lines.length)], dir = rnd() > .5 ? 1 : -1;
      var lane = dir * (.3 + rnd() * .3), head = dir > 0;
      var span = ax === 0 ? NZB * S : NX * S;
      vehicles.push({ ax: ax, line: line + lane, dir: dir, sp: 3 + rnd() * 6, t: (rnd() * 2 - 1) * span, span: span, head: head, sz: .2 + rnd() * .16, hue: rnd() });
      for (var k = 0; k < K; k++) {
        var fade = Math.pow(1 - k / K, 2), idx = v * K + k;
        var col = head ? [2.2, 1.9, 1.3] : [2.4, .18, .14];
        if (!head && vehicles[v].hue > .7) col = [2.2, .5, .1];
        if (head && vehicles[v].hue > .8) col = [1.2, 1.6, 2.4];
        var f2 = k === 0 ? 2.6 : fade * 1.5;
        tc.set([col[0] * f2, col[1] * f2, col[2] * f2], idx * 3);
        tpp[idx * 2] = vehicles[v].sz * (k === 0 ? 1.5 : .6 + .5 * fade); tpp[idx * 2 + 1] = 0;
      }
    }
    var tg = new T.BufferGeometry(); var posAttr = new T.BufferAttribute(tp, 3); posAttr.setUsage(T.DynamicDrawUsage);
    tg.setAttribute('position', posAttr); tg.setAttribute('aCol', new T.BufferAttribute(tc, 3)); tg.setAttribute('aP', new T.BufferAttribute(tpp, 2));
    var traffic = new T.Points(tg, pointMat()); traffic.frustumCulled = false; scene.add(traffic);
    function stepTraffic(dt) {
      for (var v = 0; v < NV; v++) {
        var c = vehicles[v]; c.t += c.sp * dt * c.dir; if (c.t > c.span) c.t -= 2 * c.span; if (c.t < -c.span) c.t += 2 * c.span;
        for (var k = 0; k < K; k++) {
          var along = c.t - c.dir * k * (c.sz * 2.4), i3 = (v * K + k) * 3;
          if (c.ax === 0) { tp[i3] = c.line; tp[i3 + 2] = along - NZB * S * .0; } else { tp[i3] = along; tp[i3 + 2] = c.line; }
          tp[i3 + 1] = .16 + (k === 0 ? .02 : 0);
        }
      }
      posAttr.needsUpdate = true;
    }

    /* ---------- post-processing ---------- */
    var composer, dofPass, bloom, finish, fxaa, W = 0, H = 0, dpr = 1;
    var finishShader = {
      uniforms: { tDiffuse: { value: null }, uTime: timeU, uRes: { value: new T.Vector2(1, 1) }, uExp: { value: 1.08 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uTime,uExp; uniform vec2 uRes;',
        'vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }',
        'float hh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }',
        'void main(){ vec2 d=vUv-.5; float r2=dot(d,d);',
        ' vec3 c; c.r=texture2D(tDiffuse,vUv+d*r2*.014).r; c.g=texture2D(tDiffuse,vUv).g; c.b=texture2D(tDiffuse,vUv-d*r2*.014).b;',
        ' c*=uExp; c=aces(c); c=pow(c,vec3(1./2.2));',
        ' c=mix(c,c*vec3(1.05,1.0,1.1)+vec3(0.,0.,.012),.6);',
        ' c*=1.-smoothstep(.2,.95,length(d)*1.2)*.5;',
        ' c+=(hh(vUv*uRes+fract(uTime))-.5)*.022;',
        ' gl_FragColor=vec4(c,1.); }'].join('\n')
    };
    var dofShader = {
      uniforms: { tDiffuse: { value: null }, tDepth: { value: null }, uNear: { value: .1 }, uFar: { value: 400 }, uFocus: { value: 26 }, uAper: { value: 1.2 }, uMax: { value: .0055 }, uAsp: { value: 1 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: [
        'varying vec2 vUv; uniform sampler2D tDiffuse,tDepth; uniform float uNear,uFar,uFocus,uAper,uMax,uAsp;',
        'float vz(float d){ float z=d*2.-1.; return (2.*uNear*uFar)/(uFar+uNear-z*(uFar-uNear)); }',
        'void main(){ float z=vz(texture2D(tDepth,vUv).x);',
        ' float coc=clamp(abs(z-uFocus)/uFocus*uAper-.12,0.,1.)*uMax;',
        ' vec3 acc=texture2D(tDiffuse,vUv).rgb; float w=1.;',
        ' for(int i=0;i<20;i++){ float fi=float(i); float rr=sqrt((fi+.5)/20.)*coc; float a=fi*2.39996;',
        '  vec2 o=vec2(cos(a)/uAsp,sin(a))*rr; vec3 s=texture2D(tDiffuse,vUv+o).rgb; float lum=dot(s,vec3(.3,.5,.2)); float bw=1.+lum*.6; acc+=s*bw; w+=bw; }',
        ' gl_FragColor=vec4(acc/w,1.); }'].join('\n')
    };
    var fxaaShader = { uniforms: T.UniformsUtils.clone(T.FXAAShader.uniforms), vertexShader: T.FXAAShader.vertexShader, fragmentShader: T.FXAAShader.fragmentShader.replace(/,\s*-100\.0/g, '') };
    function buildComposer() {
      if (composer) { composer.renderTarget1.dispose(); composer.renderTarget2.dispose(); if (composer.renderTarget1.depthTexture) composer.renderTarget1.depthTexture.dispose(); if (composer.renderTarget2.depthTexture) composer.renderTarget2.depthTexture.dispose(); }
      var rtOpts = { type: T.HalfFloatType, format: T.RGBAFormat, minFilter: T.LinearFilter, magFilter: T.LinearFilter };
      var w = Math.floor(W * dpr), h = Math.floor(H * dpr);
      if (useDOF) { rtOpts.depthTexture = new T.DepthTexture(w, h); rtOpts.depthTexture.type = T.UnsignedIntType; }
      var rt = new T.WebGLRenderTarget(w, h, rtOpts);
      composer = new T.EffectComposer(renderer, rt);
      if (useDOF) { var d2 = new T.DepthTexture(w, h); d2.type = T.UnsignedIntType; composer.renderTarget2.depthTexture = d2; } /* clone() shares the depth texture: give each target its own */
      composer.setPixelRatio(1); composer.setSize(w, h);
      composer.addPass(new T.RenderPass(scene, camera));
      if (useDOF) { dofPass = new T.ShaderPass(dofShader); composer.addPass(dofPass); }
      bloom = new T.UnrealBloomPass(new T.Vector2(Math.floor(w * (weak ? .5 : .75)), Math.floor(h * (weak ? .5 : .75))), weak ? .8 : 1.0, .6, .92);
      bloom.enabled = !/nobloom/.test(Q); composer.addPass(bloom);
      finish = new T.ShaderPass(finishShader); finish.uniforms.uRes.value.set(w, h); composer.addPass(finish);
      fxaa = new T.ShaderPass(fxaaShader); fxaa.uniforms.resolution.value.set(1 / w, 1 / h); fxaa.renderToScreen = true; composer.addPass(fxaa);
    }

    function resize() {
      W = Math.max(200, canvas.clientWidth); H = Math.max(200, canvas.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, dprMax);
      renderer.setPixelRatio(1); renderer.setSize(Math.floor(W * dpr), Math.floor(H * dpr), false);
      camera.aspect = W / H;
      var wide = W > 900;
      if (wide) camera.setViewOffset(W, H, -W * .2, 0, W, H); else camera.clearViewOffset();
      camera.updateProjectionMatrix();
      pointUniforms.uPx.value = (H * dpr) / (2 * Math.tan(camera.fov * Math.PI / 360));
      buildComposer();
      if (useReflector && floor.getRenderTarget) { floor.getRenderTarget().setSize(Math.floor(W * dpr * .6), Math.floor(H * dpr * .6)); }
    }
    var rzT = 0;
    function onResize() { cancelAnimationFrame(rzT); rzT = requestAnimationFrame(function () { resize(); frame(0, timeU.value); }); }
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(canvas); else window.addEventListener('resize', onResize);

    /* ---------- loop ---------- */
    var prog = RM ? .12 : 0, tx = 0, ty = 0, px = 0, py = 0, scrollY = 0, last = 0, tAcc = 0;
    if (!RM) {
      hero.addEventListener('pointermove', function (e) { tx = e.clientX / window.innerWidth - .5; ty = e.clientY / window.innerHeight - .5; });
      window.addEventListener('scroll', function () { scrollY = window.scrollY; }, { passive: true });
    }
    var DUR = 80, tmp = new T.Vector3(), camLook = new T.Vector3(0, 1.6, -10), camPos = new T.Vector3(0, 4, 40);
    function frame(dt, t) {
      timeU.value = t;
      if (!RM) prog = (prog + dt / DUR) % 1;
      var at = function (u) { return path.getPointAt(((u % 1) + 1) % 1); };
      var pt = at(prog), pa = at(prog - .004), pb = at(prog + .004);
      tmp.copy(pb).sub(pa);
      truck.position.set(pt.x, 0, pt.z); truck.rotation.y = Math.atan2(-tmp.z, tmp.x);
      truckInner.position.y = Math.sin(t * 9) * .006; truckInner.rotation.z = Math.sin(t * 2.3) * .004;
      truckLight.position.set(pt.x + tmp.x * 90, 1.4, pt.z + tmp.z * 90);
      routeU.uProg.value = prog;
      var nearest = -1, bestAhead = 9;
      stops.forEach(function (s, i) { var ah = (s.f - prog + 1) % 1; if (ah < bestAhead) { bestAhead = ah; nearest = i; } });
      stops.forEach(function (s, i) {
        var ah = (s.f - prog + 1) % 1, st = 0;
        if (i === nearest) st = 1; else if (ah > .72) st = 2;
        if (st === 2 && s.u.uState.value !== 2) s.u.uHit.value = t;
        s.u.uState.value = st;
        s.pinM.color.setRGB(st > 1.5 ? .3 : (st > .5 ? 3.2 : .5), st > 1.5 ? 2.4 : (st > .5 ? 1.2 : 1.2), st > 1.5 ? 1.2 : (st > .5 ? .3 : 2.6));
        s.pin.position.y = 3.0 + Math.sin(t * 2 + s.f * 20) * .18; s.pin.rotation.y = t * .8;
      });
      stepTraffic(dt);
      /* chase camera: low, behind the truck, slow drift + mouse parallax */
      px += (tx - px) * .04; py += (ty - py) * .04;
      var d = RM ? 0 : t;
      var back = small ? 12 : 13, ahead = small ? 9 : 10;
      var cp = at(prog - back / LEN), la = at(prog + ahead / LEN), cdir = la.clone().sub(cp).setY(0).normalize(), side = new T.Vector3(-cdir.z, 0, cdir.x);
      var camP = cp.clone().addScaledVector(side, .1 + Math.sin(d * .09) * .3 + px * .55);
      camP.y = (small ? 8.4 : 8.2) + Math.sin(d * .07) * .3 - py * .9 + Math.min(scrollY, 500) * .004;
      camLook.lerp(la.clone().setY(.6 - py * .5), RM ? 1 : .08);
      camPos.lerp(camP, RM ? 1 : .09);
      camera.position.copy(camPos); camera.lookAt(camLook);
      if (dofPass) { dofPass.uniforms.uFocus.value = camera.position.distanceTo(truck.position) + 2.0; dofPass.uniforms.uAsp.value = W / H; dofPass.uniforms.tDepth.value = composer.readBuffer.depthTexture; }
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
      if (should && !running) { running = true; last = performance.now(); requestAnimationFrame(raf); }
      else if (!should && running) running = false;
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visibleHero = e[0].isIntersecting; sync(); }).observe(hero);
    document.addEventListener('visibilitychange', function () { tabVisible = !document.hidden; sync(); });

    try {
      resize();
      timeU.value = 3; frame(0, 3); frame(.016, 3.016);
      var gl = renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info');
      console.info(log + (ext ? ' | gpu: ' + gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : ''));
    } catch (e) { canvas.dataset.mode = 'fallback-render'; console.info('scene: fallback (render failed: ' + e.message + ')'); return; }
    canvas.classList.add('ready');
    sync();
  }
})();
