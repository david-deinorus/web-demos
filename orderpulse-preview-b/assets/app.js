/* OrderPulse home preview (short home) | UI behaviour. No network, no storage. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.__RM = RM;
  if (RM) document.documentElement.classList.add('rm');
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var money = function (n) { return '$' + n.toFixed(2); };
  var visible = function (el, cb) {
    if (!('IntersectionObserver' in window)) { cb(true); return; }
    new IntersectionObserver(function (e) { cb(e[0].isIntersecting); }, { rootMargin: '120px' }).observe(el);
  };

  /* ---------- NAV ---------- */
  var nav = $('#nav'), prog = $('#progress'), burger = $('#burger'), menu = $('#menu'), subBtn = $('.sub-btn'), sub = $('#sub');
  function onScroll() {
    nav.classList.toggle('stuck', window.scrollY > 10);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = 'scaleX(' + (h > 0 ? clamp(window.scrollY / h, 0, 1) : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function setSub(open) { subBtn.setAttribute('aria-expanded', String(open)); sub.classList.toggle('open', open); }
  subBtn.addEventListener('click', function (e) { e.stopPropagation(); setSub(subBtn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('click', function (e) { if (!e.target.closest('.has-sub')) setSub(false); });
  function setMenu(open) { burger.setAttribute('aria-expanded', String(open)); menu.classList.toggle('open', open); if (open) setSub(true); else setSub(false); }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('open')) { setMenu(false); burger.focus(); } else if (sub.classList.contains('open')) { setSub(false); subBtn.focus(); }
  });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  /* ---------- "COMING WITH THE FULL SITE" NOTICE ---------- */
  var dlg = $('#soon'), lastTrigger = null;
  function openSoon(name, trigger) {
    lastTrigger = trigger || null;
    $('#soonP').innerHTML = name;
    if (dlg.showModal) { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute('open', '');
    var b = $('[data-close].btn', dlg); if (b) b.focus();
  }
  function closeSoon() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); if (lastTrigger && lastTrigger.focus) lastTrigger.focus(); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-soon]');
    if (a) { e.preventDefault(); setMenu(false); openSoon(a.getAttribute('data-soon'), a); return; }
    if (e.target.closest('[data-close]')) { closeSoon(); return; }
    if (e.target === dlg) closeSoon();
  });

  /* ---------- REVEAL + CARD SPOTLIGHT ---------- */
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } }); }, { threshold: .12 });
    $$('.reveal').forEach(function (el) { ro.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); }
  $$('.card').forEach(function (c) {
    c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* ---------- HERO CARD LOOP + TILT ---------- */
  (function () {
    var lines = $$('#hoLines .ho-line'), st = $('#hoStatus'), res = $('#hoRes'), resL = $('#hoResL'), rt = $('#hoRoute'), tot = $('#hoTotal');
    function setS(s, t) { st.dataset.s = s; st.textContent = t; }
    function reset() { lines.forEach(function (l) { l.classList.remove('on'); }); setS('draft', 'Draft'); res.style.width = '0'; resL.textContent = 'Stock not reserved yet'; rt.textContent = ''; tot.textContent = '$0.00'; }
    function final() { lines.forEach(function (l) { l.classList.add('on'); }); setS('invoiced', 'Invoiced'); res.style.width = '100%'; resL.textContent = 'Fully reserved'; rt.textContent = 'Route R-07 / stop 4'; tot.textContent = '$48.00'; }
    if (RM) { final(); return; }
    var alive = true, run = 0;
    visible($('#heroCard'), function (v) { alive = v; });
    async function loop() {
      var my = ++run;
      for (;;) {
        reset(); await sleep(900);
        var w = async function (ms) { do { await sleep(ms); } while (!alive); return my === run; };
        await w(300); lines[0].classList.add('on'); tot.textContent = '$48.00';
        await w(1100); lines[1].classList.add('on');
        await w(1300); setS('confirmed', 'Confirmed');
        await w(900); setS('allocated', 'Allocated'); res.style.width = '100%'; resL.textContent = 'Fully reserved';
        await w(1500); setS('invoiced', 'Invoiced'); rt.textContent = 'Route R-07 / stop 4';
        await w(3800);
      }
    }
    loop();
    var hero = $('#top'), card = $('#heroCard');
    if (window.matchMedia('(min-width:901px) and (pointer:fine)').matches) {
      hero.addEventListener('pointermove', function (e) {
        var x = e.clientX / window.innerWidth - .5, y = e.clientY / window.innerHeight - .5;
        card.style.transform = 'perspective(1200px) rotateY(' + (-8 + x * 10) + 'deg) rotateX(' + (4 - y * 8) + 'deg)';
      });
    }
  })();

  /* ---------- ONE SHORT INTERACTIVE MOMENT: build an order, confirm it ---------- */
  (function () {
    var body = $('#tryBody'), hint = $('#tryHint'); if (!body) return;
    var PRODS = [{ id: 'sw', name: 'Sparkling Water 12-pack', sku: 'SW-12', price: 24, stock: 368 }, { id: 'tc', name: 'Tortilla Chips Case', sku: 'TC-24', price: 38, stock: 140 }];
    var ST = { q: { sw: 0, tc: 0 }, phase: 'build' }, focus = null;
    function units() { return ST.q.sw + ST.q.tc; }
    function sub() { return ST.q.sw * 24 + ST.q.tc * 38; }
    function hintText() {
      var u = units();
      if (ST.phase === 'confirmed') return 'Stock reserved automatically. The next step, turning it into an invoice, lives in the Invoicing module.';
      if (u === 0) return 'Add a product to begin.';
      if (u === 1) return 'One unit earns Ten Percent Off. Add one more and Buy Two, Get One takes over.';
      return 'Buy Two, Get One applied: a free item joined the order. Confirm it.';
    }
    function render() {
      var u = units(), s = sub(), disc = u === 1 ? s * .1 : 0, gift = u >= 2, h = '', conf = ST.phase === 'confirmed';
      h += '<div class="ptitle"><h3>SO-1042</h3><span class="pill" data-s="' + (conf ? 'allocated' : 'draft') + '">' + (conf ? 'Allocated' : 'Draft') + '</span></div>';
      h += '<div class="mini-cust"><span class="avatar">H</span><b>Harbor Market</b><span>Main Warehouse</span></div>';
      h += '<div class="promos"><div class="promo' + (gift ? ' hit' : '') + '"><b>Buy Two, Get One</b><em>' + (gift ? 'Applied' : 'Add 2 units') + '</em></div><div class="promo' + (u === 1 ? ' hit' : (gift ? ' off' : '')) + '"><b>Ten Percent Off</b><em>' + (u === 1 ? 'Applied' : (gift ? 'Not combined' : 'Add 1 unit')) + '</em></div></div>';
      h += '<div class="tw"><table class="lines"><thead><tr><th>Product</th><th>Qty</th><th class="r">Amount</th>' + (conf ? '<th>Reserved</th>' : '') + '</tr></thead><tbody>';
      PRODS.forEach(function (p) {
        var q = ST.q[p.id]; if (conf && !q) return;
        h += '<tr><td><b>' + p.name + '</b><br><small style="font:500 11px var(--f-mono);color:#7b849a">' + p.sku + ' &middot; ' + money(p.price) + '</small></td><td>' +
          (conf ? q : '<span class="qty"><button type="button" data-q="dec" data-id="' + p.id + '" data-f="d' + p.id + '" aria-label="Remove one ' + p.name + '"' + (q ? '' : ' disabled') + '>&minus;</button><span aria-live="polite">' + q + '</span><button type="button" data-q="inc" data-id="' + p.id + '" data-f="i' + p.id + '" aria-label="Add one ' + p.name + '">+</button></span>') +
          '</td><td class="r">' + (q * p.price).toFixed(2) + '</td>' + (conf ? '<td><div class="resbar"><i style="width:' + (RM ? 100 : 0) + '%" data-w="100"></i></div></td>' : '') + '</tr>';
      });
      if (gift) h += '<tr class="gift"><td><svg width="14" height="14" aria-hidden="true"><use href="#i-gift"/></svg> Cold Brew 6-pack <span class="tag2">Buy Two, Get One</span></td><td>1</td><td class="r">0.00</td>' + (conf ? '<td><div class="resbar"><i style="width:' + (RM ? 100 : 0) + '%" data-w="100"></i></div></td>' : '') + '</tr>';
      h += '</tbody></table></div>';
      h += '<div class="sum">' + (disc ? '<div><span>Ten Percent Off</span><span>&minus;' + money(disc) + '</span></div>' : '') + '<div class="gt"><span>Total</span><span>' + money(s - disc) + '</span></div></div>';
      h += '<div class="actions-bar">' + (conf
        ? '<a class="abtn green" href="#top" data-soon="Invoicing">Convert to invoice &rarr;</a><button class="abtn sec2" type="button" data-q="reset" data-f="reset">Start over</button>'
        : '<button class="abtn green" type="button" data-q="confirm" data-f="confirm"' + (u ? '' : ' disabled') + '>Confirm order</button>' + (u ? '' : '<span class="hint" style="color:#7b849a">Add a product first</span>')) + '</div>';
      body.innerHTML = h; hint.textContent = hintText();
      $$('.resbar i', body).forEach(function (b) { requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.width = b.getAttribute('data-w') + '%'; }); }); });
      if (focus) { var f = $('[data-f="' + focus + '"]', body); if (f && !f.disabled) f.focus({ preventScroll: true }); }
    }
    body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-q]'); if (!b || b.disabled) return;
      focus = b.getAttribute('data-f'); var a = b.getAttribute('data-q'), id = b.getAttribute('data-id');
      if (a === 'inc') ST.q[id] = Math.min(9, ST.q[id] + 1); else if (a === 'dec') ST.q[id] = Math.max(0, ST.q[id] - 1);
      else if (a === 'confirm') ST.phase = 'confirmed'; else if (a === 'reset') { ST = { q: { sw: 0, tc: 0 }, phase: 'build' }; focus = null; }
      render();
    });
    render();
  })();

  /* ---------- FORM (does not send anything) ---------- */
  (function () {
    var f = $('#demoForm'), done = $('#formDone'), err = $('#formErr');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var iN = $('#f-name'), iM = $('#f-mail'), name = iN.value.trim(), mail = iM.value.trim();
      if (!name) { err.textContent = 'Please add your name.'; iN.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { err.textContent = 'Please add a valid work email.'; iM.focus(); return; }
      err.textContent = ''; f.style.display = 'none'; done.classList.add('on'); done.focus();
    });
    $('#formAgain').addEventListener('click', function () { done.classList.remove('on'); f.style.display = ''; f.reset(); $('#f-name').focus(); });
  })();
})();
