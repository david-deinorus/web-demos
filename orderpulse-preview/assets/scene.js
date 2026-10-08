/* Hero WebGL scene: a small night city with a glowing delivery route. Three.js r149 (jsdelivr, exact version). */
(function () {
  'use strict';
  var canvas = document.getElementById('scene');
  if (!canvas) return;
  var RM = !!window.__RM;
  var conn = navigator.connection || {};
  var small = window.matchMedia('(max-width:900px)').matches;
  var weak = small || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
  if (conn.saveData) { canvas.dataset.mode = 'fallback-savedata'; console.info('scene: fallback (save-data)'); return; }

  function hasGL() {
    try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))); } catch (e) { return false; }
  }
  if (!hasGL()) { canvas.dataset.mode = 'fallback-nowebgl'; console.info('scene: fallback (no WebGL)'); return; }

  function start() {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js';
    s.onload = build; s.onerror = function () { canvas.dataset.mode = 'fallback-load'; console.info('scene: fallback (library not loaded)'); };
    document.head.appendChild(s);
  }
  if (document.readyState === 'complete') setTimeout(start, 50); else window.addEventListener('load', function () { setTimeout(start, 50); });

  function build() {
    var T = window.THREE, hero = document.getElementById('top');
    var renderer;
    try { renderer = new T.WebGLRenderer({ canvas: canvas, antialias: !weak, alpha: true, powerPreference: 'high-performance' }); }
    catch (e) { canvas.dataset.mode = 'fallback-ctx'; console.info('scene: fallback (context failed)'); return; }
    canvas.dataset.mode = 'webgl';
    console.info('scene: webgl ' + (weak ? '(light)' : '(full)'));
    renderer.setClearColor(0x000000, 0);
    var dprMax = weak ? 1 : 1.75;

    var scene = new T.Scene();
    scene.fog = new T.Fog(0x080b12, 32, 78);
    var camera = new T.PerspectiveCamera(small ? 40 : 34, 1, .1, 160);
    var target = new T.Vector3(0, 0, 0);

    scene.add(new T.HemisphereLight(0x9fb4ff, 0x0b0e16, .95));
    var sun = new T.DirectionalLight(0xffd9c0, .9); sun.position.set(-6, 12, 5); scene.add(sun);
    var glow = new T.PointLight(0xff6a2b, 3.4, 12, 1.5); glow.position.set(0, 1.4, 0); scene.add(glow);

    var S = 2.2, N = weak ? 7 : 10;
    /* ground */
    var ground = new T.Mesh(new T.PlaneGeometry(220, 220), new T.MeshBasicMaterial({ color: 0x090d16 }));
    ground.rotation.x = -Math.PI / 2; scene.add(ground);

    /* buildings (instanced) */
    var cells = [];
    for (var i = -N; i < N; i++) for (var j = -N; j < N; j++) cells.push([i, j]);
    var geo = new T.BoxGeometry(1, 1, 1);
    var mat = new T.MeshLambertMaterial({ color: 0xffffff });
    var inst = new T.InstancedMesh(geo, mat, cells.length);
    var m = new T.Matrix4(), q = new T.Quaternion(), pos = new T.Vector3(), sc = new T.Vector3(), col = new T.Color();
    var seed = 11, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    cells.forEach(function (c, k) {
      var cx = (c[0] + .5) * S, cz = (c[1] + .5) * S, d = Math.hypot(cx, cz);
      var h = .25 + Math.pow(rnd(), 2.4) * 1.7 * (1 - Math.min(d / (N * S * 1.1), .8) * .5);
      var w = S - 1.25;
      pos.set(cx, h / 2, cz); sc.set(w, h, w); m.compose(pos, q, sc); inst.setMatrixAt(k, m);
      var t = rnd(); col.setHex(t > .93 ? 0x3a2a24 : (t > .5 ? 0x1b2436 : 0x141b2b)); inst.setColorAt(k, col);
    });
    inst.instanceMatrix.needsUpdate = true; if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    scene.add(inst);

    /* route */
    var raw = [[-4, 3], [-4, 1], [-2, 1], [-2, -1], [0, -1], [0, -3], [2, -3], [2, -1], [4, -1], [4, 1], [2, 1], [2, 3], [4, 3]];
    if (weak) raw = [[-3, 3], [-3, 1], [-1, 1], [-1, -1], [1, -1], [1, -3], [3, -3], [3, 1], [1, 1], [1, 3], [3, 3]];
    var P = raw.map(function (p) { return new T.Vector3(p[0] * S, .09, p[1] * S); });
    var path = new T.CurvePath(), R = .55;
    var cur = P[0].clone();
    for (var a = 1; a < P.length - 1; a++) {
      var p0 = P[a - 1], p1 = P[a], p2 = P[a + 1];
      var d1 = p1.clone().sub(p0).normalize(), d2 = p2.clone().sub(p1).normalize();
      var s1 = p1.clone().addScaledVector(d1, -R), s2 = p1.clone().addScaledVector(d2, R);
      path.add(new T.LineCurve3(cur.clone(), s1)); path.add(new T.QuadraticBezierCurve3(s1, p1.clone(), s2)); cur = s2;
    }
    path.add(new T.LineCurve3(cur.clone(), P[P.length - 1].clone()));
    var SEG = weak ? 220 : 520;
    var tubeGeo = new T.TubeGeometry(path, SEG, .07, 6, false);
    var dim = new T.Mesh(tubeGeo, new T.MeshBasicMaterial({ color: 0xff6a2b, transparent: true, opacity: .22, fog: false }));
    scene.add(dim);
    var bright = new T.Mesh(tubeGeo.clone(), new T.MeshBasicMaterial({ color: 0xffa05a, fog: false, depthTest: false }));
    bright.renderOrder = 3; scene.add(bright);
    var haloGeo = new T.TubeGeometry(path, SEG, .2, 6, false);
    var halo = new T.Mesh(haloGeo, new T.MeshBasicMaterial({ color: 0xff6a2b, transparent: true, opacity: .16, blending: T.AdditiveBlending, depthWrite: false, depthTest: false, fog: false }));
    halo.renderOrder = 2; scene.add(halo);
    var idxTotal = tubeGeo.index.count, idxStep = 6 * 6; /* 6 radial segments * 2 tris * 3 */
    var segIdx = Math.floor(idxTotal / SEG);

    /* stops */
    var stopsF = [.14, .3, .46, .62, .78, .94], stops = [];
    stopsF.forEach(function (f) {
      var pt = path.getPointAt(f);
      var g = new T.Group(); g.position.set(pt.x, 0, pt.z);
      var ring = new T.Mesh(new T.TorusGeometry(.42, .03, 6, 36), new T.MeshBasicMaterial({ color: 0x5aa8ff, transparent: true, opacity: .9, fog: false }));
      ring.rotation.x = Math.PI / 2; ring.position.y = .1; g.add(ring);
      var beam = new T.Mesh(new T.CylinderGeometry(.025, .025, 1.7, 6), new T.MeshBasicMaterial({ color: 0x5aa8ff, transparent: true, opacity: .55, fog: false }));
      beam.position.y = .95; g.add(beam);
      var tip = new T.Mesh(new T.SphereGeometry(.11, 12, 10), new T.MeshBasicMaterial({ color: 0x5aa8ff, fog: false }));
      tip.position.y = 1.85; g.add(tip);
      scene.add(g); stops.push({ f: f, g: g, ring: ring, beam: beam, tip: tip, hit: -1 });
    });
    function colorStop(s, hex) { s.ring.material.color.setHex(hex); s.beam.material.color.setHex(hex); s.tip.material.color.setHex(hex); }

    /* truck */
    var truck = new T.Group();
    var body = new T.Mesh(new T.BoxGeometry(.9, .42, .46), new T.MeshLambertMaterial({ color: 0xff6a2b, emissive: 0x7a2a08 }));
    body.position.set(-.1, .3, 0); truck.add(body);
    var cab = new T.Mesh(new T.BoxGeometry(.34, .32, .42), new T.MeshLambertMaterial({ color: 0xffc24b, emissive: 0x6a4a10 }));
    cab.position.set(.5, .25, 0); truck.add(cab);
    var lamp = new T.Mesh(new T.SphereGeometry(.07, 8, 8), new T.MeshBasicMaterial({ color: 0xffffff, fog: false })); lamp.position.set(.7, .25, .12); truck.add(lamp);
    truck.scale.set(1.5, 1.5, 1.5); scene.add(truck);

    /* motion state */
    var prog = RM ? .5 : 0, pause = 0, clock = new T.Clock(), px = 0, py = 0, tx = 0, ty = 0, scrollY = 0;
    var DUR = 24;
    if (!RM) {
      hero.addEventListener('pointermove', function (e) { tx = e.clientX / window.innerWidth - .5; ty = e.clientY / window.innerHeight - .5; });
      window.addEventListener('scroll', function () { scrollY = window.scrollY; }, { passive: true });
    }

    var W = 0, H = 0;
    function resize() {
      W = Math.max(200, canvas.clientWidth); H = Math.max(200, canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprMax)); renderer.setSize(W, H, false);
      camera.aspect = W / H;
      var wide = W > 900;
      if (wide) camera.setViewOffset(W, H, -W * .22, H * .12, W, H); else camera.clearViewOffset();
      camera.updateProjectionMatrix();
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas); else window.addEventListener('resize', resize);
    resize();

    function clamp01(v) { return Math.max(0, Math.min(.9999, v)); }
    function frame(dt, t) {
      if (!RM) {
        if (pause > 0) { pause -= dt; if (pause <= 0) { prog = 0; stops.forEach(function (s) { s.hit = -1; colorStop(s, 0x5aa8ff); s.g.scale.set(1, 1, 1); }); } }
        else { prog += dt / DUR; if (prog >= 1) { prog = 1; pause = 2.2; } }
      }
      var pt = path.getPointAt(clamp01(prog)) || P[0], pa = path.getPointAt(clamp01(prog - .004)) || pt, pb = path.getPointAt(clamp01(prog + .004)) || pt, tg = pb.clone().sub(pa);
      truck.position.copy(pt); truck.rotation.y = Math.atan2(-tg.z, tg.x);
      glow.position.set(pt.x, 1.2, pt.z);
      var upto = Math.floor(prog * SEG) * segIdx;
      bright.geometry.setDrawRange(0, upto);
      var nextSet = false;
      stops.forEach(function (s) {
        var passed = prog >= s.f - .002;
        if (passed && s.hit < 0) { s.hit = t; colorStop(s, 0x2fd08a); }
        if (!passed && !nextSet) { nextSet = true; colorStop(s, 0xff6a2b); var k = 1 + Math.sin(t * 5) * .12; s.ring.scale.set(k, k, k); }
        if (passed) { var a = Math.min((t - s.hit) / .9, 1); var k2 = 1 + Math.sin(a * Math.PI) * .6; s.ring.scale.set(k2, k2, k2); }
        s.tip.position.y = 1.85 + Math.sin(t * 2 + s.f * 9) * .05;
      });
      /* camera */
      px += (tx - px) * .04; py += (ty - py) * .04;
      var ang = .62 + Math.sin(t * .12) * .07 + px * .22, rad = small ? 22 : 28, hgt = (small ? 19 : 25) - py * 2.2 + Math.min(scrollY, 600) * .004;
      camera.position.set(Math.sin(ang) * rad, hgt, Math.cos(ang) * rad);
      camera.lookAt(target);
      renderer.render(scene, camera);
    }

    var running = false, last = 0, acc = 0, visibleHero = true, tabVisible = !document.hidden;
    function raf(now) {
      if (!running) return;
      requestAnimationFrame(raf);
      var dt = Math.min((now - last) / 1000, .1); last = now;
      if (weak) { acc += dt; if (acc < 1 / 30) return; dt = acc; acc = 0; }
      frame(dt, now / 1000);
    }
    function sync() {
      var should = !RM && visibleHero && tabVisible;
      if (should && !running) { running = true; last = performance.now(); requestAnimationFrame(raf); }
      else if (!should && running) running = false;
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visibleHero = e[0].isIntersecting; sync(); }).observe(hero);
    document.addEventListener('visibilitychange', function () { tabVisible = !document.hidden; sync(); });
    frame(0, 0);
    canvas.classList.add('ready');
    sync();
  }
})();
