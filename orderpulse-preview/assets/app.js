/* OrderPulse home preview | UI behaviour (no network, no storage) */
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
  var nav = $('#nav'), prog = $('#progress'), burger = $('#burger'), menu = $('#menu');
  function onScroll() {
    nav.classList.toggle('stuck', window.scrollY > 10);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.transform = 'scaleX(' + (h > 0 ? clamp(window.scrollY / h, 0, 1) : 0) + ')';
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  burger.addEventListener('click', function () {
    var o = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!o)); menu.classList.toggle('open', !o);
  });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { burger.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); } });
  if ('IntersectionObserver' in window) {
    var links = {}; $$('a', menu).forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting && links[e.target.id]) { $$('a', menu).forEach(function (a) { a.classList.remove('on'); }); links[e.target.id].classList.add('on'); } });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }

  /* ---------- REVEAL ---------- */
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } }); }, { threshold: .12 });
    $$('.reveal').forEach(function (el) { ro.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); }

  /* spotlight on cards */
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

  /* ---------- SCROLL-LIT PARAGRAPH ---------- */
  (function () {
    var el = $('#lit'); if (!el) return;
    var hot = /^(stock|twice|invoice|truck)/i;
    var words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = words.map(function (w) { return '<span class="lw' + (hot.test(w) ? ' hot' : '') + '" aria-hidden="true">' + w + '</span>'; }).join(' ');
    var ws = $$('.lw', el);
    if (RM) { ws.forEach(function (w) { w.classList.add('on'); }); return; }
    var tick = false;
    function upd() {
      tick = false;
      var r = el.getBoundingClientRect(), vh = window.innerHeight;
      var p = clamp((vh * .82 - r.top) / (r.height + vh * .3), 0, 1.05);
      var n = Math.round(p * ws.length);
      ws.forEach(function (w, i) { w.classList.toggle('on', i < n); });
    }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  })();

  /* ---------- LIVE DEMO ---------- */
  (function () {
    var CUST = [{ id: 'harbor', name: 'Harbor Market', ini: 'H' }, { id: 'pine', name: 'Pine Street Deli', ini: 'P' }, { id: 'corner', name: 'Corner Fresh', ini: 'C' }];
    var PRODS = [
      { id: 'sw', name: 'Sparkling Water 12-pack', sku: 'SW-12', price: 24, stock: 368 },
      { id: 'tc', name: 'Tortilla Chips Case', sku: 'TC-24', price: 38, stock: 140 },
      { id: 'sp', name: 'Seasonal Special Case', sku: 'SP-06', price: 52, stock: 3 }
    ];
    var GIFT = { id: 'cb', name: 'Cold Brew 6-pack', sku: 'CB-06', stock: 83 };
    var ST, auto = 0, lastAdded = null, lastFocus = null;
    var root = $('#appMain'), coach = $('#coach'), stepper = $$('#stepper li');
    var P = function (id) { return PRODS.filter(function (p) { return p.id === id; })[0]; };
    function fresh() { return { cust: null, lines: [], phase: 'build', res: null, terms: 30, so: 'SO-1042', inv: 'INV-2081' }; }
    ST = fresh();

    function calc() {
      var units = 0, sub = 0;
      ST.lines.forEach(function (l) { units += l.qty; sub += l.qty * P(l.id).price; });
      var gift = units >= 2 ? 1 : 0, disc = (units === 1) ? sub * .1 : 0;
      return { units: units, sub: sub, gift: gift, disc: disc, total: sub - disc };
    }
    function dueDate(days) { var d = new Date(); d.setDate(d.getDate() + days); return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
    function curStep() {
      if (ST.phase === 'posted') return 4;
      if (ST.phase === 'invoice') return 3;
      if (ST.phase === 'draft' || ST.phase === 'confirmed') return 2;
      return ST.cust ? 1 : 0;
    }
    function coachText(c) {
      var p = ST.phase;
      if (p === 'build') {
        if (!ST.cust) return 'Tap a customer to start the order.';
        if (!ST.lines.length) return 'Available promotions appear as soon as you pick a customer. Now add a product.';
        if (c.units === 1) return 'One unit earns Ten Percent Off. Add one more unit to trigger Buy Two, Get One.';
        return 'Buy Two, Get One kicked in and a free item joined the order. Create the order.';
      }
      if (p === 'draft') return 'Saved as a draft. Confirm it to reserve stock automatically.';
      if (p === 'confirmed') return ST.res.short ? 'Confirmed, but the warehouse is short on one item. The invoice will bill only what is reserved.' : 'Stock is reserved. Convert the order into an invoice.';
      if (p === 'invoice') return 'Everything is prefilled from the order. Pick the terms and post it.';
      return 'Done: order, stock, route and invoice in one flow. Try again with a different mix, like 4 Seasonal Specials.';
    }
    function pillFor() {
      var p = ST.phase;
      if (p === 'build') return ['', 'New'];
      if (p === 'draft') return ['draft', 'Draft'];
      if (p === 'confirmed') return ST.res.short ? ['short', 'Confirmed, short'] : ['allocated', 'Allocated'];
      if (p === 'invoice') return ['draft', 'Invoice draft'];
      return ['posted', 'Invoice posted'];
    }
    function giftRow(res) {
      return '<tr class="gift"><td><svg width="14" height="14" style="vertical-align:-2px" aria-hidden="true"><use href="#i-gift"/></svg> ' + GIFT.name + ' <span class="tag2">Buy Two, Get One</span><br><small style="font:500 11px var(--f-mono)">free of charge</small></td><td>1</td><td class="r">0.00</td><td class="r">0.00</td>' + (res ? '<td>' + resCell(1, 1) + '</td>' : '') + '</tr>';
    }
    function resCell(res, qty) {
      var pct = qty ? Math.round(res / qty * 100) : 0, short = res < qty;
      return '<div class="resbar"><i class="' + (short ? 'sh' : '') + '" style="width:' + (RM ? pct : 0) + '%" data-w="' + pct + '"></i></div><div class="rl">' + (short ? 'Reserved ' + res + '/' + qty + ', short ' + (qty - res) : 'Fully reserved') + '</div>';
    }
    function linesTable(editable, showRes, forInvoice) {
      var c = calc(), rows = '', cols = showRes ? '<th>Reservation</th>' : '';
      ST.lines.forEach(function (l) {
        var p = P(l.id), q = l.qty, r = ST.res && ST.res.lines[l.id] ? ST.res.lines[l.id].reserved : q;
        if (forInvoice) q = r;
        if (forInvoice && q === 0) return;
        var left = p.stock - l.qty, warn = editable ? '<br><small style="font:500 11px var(--f-mono);color:' + (left < 0 ? '#c2410c' : '#7b849a') + '">' + (left < 0 ? 'short by ' + (-left) + ' after this line' : left + ' left in stock after this line') + '</small>' : '';
        rows += '<tr class="' + (l.id === lastAdded ? 'in' : '') + '"><td><b>' + p.name + '</b><br><small style="font:500 11px var(--f-mono);color:#7b849a">' + p.sku + '</small>' + warn + '</td><td>' +
          (editable ? '<span class="qty"><button type="button" data-act="dec" data-id="' + l.id + '" data-f="dec-' + l.id + '" aria-label="Decrease ' + p.name + '">&minus;</button><span aria-live="polite">' + l.qty + '</span><button type="button" data-act="inc" data-id="' + l.id + '" data-f="inc-' + l.id + '" aria-label="Increase ' + p.name + '" ' + (l.qty >= 10 ? 'disabled' : '') + '>+</button></span>' : q) +
          '</td><td class="r">' + p.price.toFixed(2) + '</td><td class="r">' + (q * p.price).toFixed(2) + '</td>' +
          (showRes ? '<td>' + resCell(ST.res.lines[l.id].reserved, l.qty) + '</td>' : '') + '</tr>';
      });
      if (c.gift && (!forInvoice || (ST.res && ST.res.gift))) rows += giftRow(showRes);
      if (!rows) rows = '<tr><td colspan="5" class="empty">No lines yet. Add a product to begin.</td></tr>';
      return '<div class="tw"><table class="lines"><thead><tr><th>Product</th><th>Qty</th><th class="r">Unit</th><th class="r">Amount</th>' + cols + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
    }
    function summary(forInvoice) {
      var c = calc(), sub = c.sub, disc = c.disc;
      if (forInvoice && ST.res) {
        sub = 0; ST.lines.forEach(function (l) { sub += ST.res.lines[l.id].reserved * P(l.id).price; });
        disc = c.units === 1 ? sub * .1 : 0;
      }
      return '<div class="sum"><div><span>Subtotal</span><span>' + money(sub) + '</span></div>' +
        (disc ? '<div><span>Ten Percent Off</span><span>&minus;' + money(disc) + '</span></div>' : '') +
        '<div class="gt"><span>Total</span><span>' + money(sub - disc) + '</span></div></div>';
    }

    function render() {
      var c = calc(), pill = pillFor(), h = '';
      var title = ST.phase === 'build' ? 'New Sales Order' : (ST.phase === 'invoice' || ST.phase === 'posted' ? ST.inv : ST.so);
      h += '<div class="crumb">Home / Sales / ' + (ST.phase === 'invoice' || ST.phase === 'posted' ? 'Invoices' : 'Sales Orders') + '</div>';
      h += '<div class="ptitle"><h3>' + title + '</h3><span class="pill" data-s="' + pill[0] + '">' + pill[1] + '</span></div>';

      /* customer */
      if (ST.phase === 'build') {
        h += '<div class="panel"><h4>Customer</h4><div class="cust" role="group" aria-label="Choose a customer">' + CUST.map(function (u) {
          return '<button type="button" class="cbtn' + (!ST.cust ? ' nudge' : '') + '" data-act="cust" data-id="' + u.id + '" data-f="cust-' + u.id + '" aria-pressed="' + (ST.cust === u.id) + '"><span class="avatar">' + u.ini + '</span>' + u.name + '</button>';
        }).join('') + '</div></div>';
      } else {
        var cu = CUST.filter(function (u) { return u.id === ST.cust; })[0];
        h += '<div class="panel" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span class="avatar" style="color:#1a0f08">' + cu.ini + '</span><b>' + cu.name + '</b><span style="color:#7b849a;font-size:13px">Main Warehouse' + ((ST.phase === 'invoice' || ST.phase === 'posted') ? ' &middot; from ' + ST.so : '') + '</span></div>';
      }

      /* promos */
      if (ST.cust && ST.phase === 'build') {
        h += '<div class="panel"><h4><svg width="14" height="14" aria-hidden="true"><use href="#i-gift"/></svg> Available promotions (2)</h4><div class="promos">' +
          '<div class="promo' + (c.units >= 2 ? ' hit' : '') + '"><b>Buy Two, Get One</b>Buy 2 of any product, get 1 Cold Brew free<br><em>' + (c.units >= 2 ? 'Applied' : 'Add 2 units to qualify') + '</em></div>' +
          '<div class="promo' + (c.units === 1 ? ' hit' : (c.units >= 2 ? ' off' : '')) + '"><b>Ten Percent Off</b>Buy 1 unit, get 10% off<br><em>' + (c.units === 1 ? 'Applied' : (c.units >= 2 ? 'Not combined with Buy Two, Get One' : 'Add 1 unit to qualify')) + '</em></div></div></div>';
      }

      /* body */
      if (ST.phase === 'build') {
        if (ST.cust) {
          h += '<div class="grid2"><div class="panel"><h4>Products</h4><div class="prods">' + PRODS.map(function (p) {
            return '<div class="prod"><div><b>' + p.name + '</b><small>' + p.sku + ' &middot; ' + money(p.price) + ' &middot; <span class="' + (p.stock < 10 ? 'low' : '') + '">' + p.stock + ' on hand</span></small></div><button type="button" class="add" data-act="add" data-id="' + p.id + '" data-f="add-' + p.id + '">Add line</button></div>';
          }).join('') + '</div></div><div class="panel"><h4>Order lines</h4>' + linesTable(true, false, false) + summary(false) + '</div></div>';
        }
      } else if (ST.phase === 'draft' || ST.phase === 'confirmed') {
        if (ST.phase === 'confirmed' && ST.res.short) h += '<div class="note"><b>Confirmed with warning.</b> Automatic reservation is short on one item. Reserved quantities are shown per line.</div>';
        if (ST.phase === 'confirmed' && !ST.res.short) h += '<div class="ok"><b>Confirmed.</b> Stock reserved automatically and the order joined tomorrow\'s route.</div>';
        h += '<div class="panel"><h4>Order lines</h4>' + linesTable(false, ST.phase === 'confirmed', false) + summary(false) + '</div>';
      } else {
        h += '<div class="panel invoice"><div class="inv-top"><div><b>' + ST.inv + '</b><div style="color:#7b849a;font-size:13px">Standard invoice &middot; ' + ST.so + '</div></div>' +
          (ST.phase === 'posted' ? '<span class="stamp">POSTED</span>' : '<span class="pill" data-s="draft">Draft</span>') + '</div>' +
          '<div class="terms"><label for="terms">Payment terms</label><select id="terms" data-f="terms" ' + (ST.phase === 'posted' ? 'disabled' : '') + '>' + [15, 30, 45].map(function (d) { return '<option value="' + d + '"' + (ST.terms === d ? ' selected' : '') + '>Net ' + d + '</option>'; }).join('') + '</select><span style="color:#4a5162">Due ' + dueDate(ST.terms) + '</span></div>' +
          linesTable(false, false, true) + summary(true) +
          (ST.res && ST.res.short ? '<div class="note" style="margin:0">Billing basis: reserved quantities. The short units stay open on the order.</div>' : '') + '</div>';
        if (ST.phase === 'posted') h += '<div class="ok">Invoice posted. The order is closed and the stop is ready for delivery on the route.</div>';
      }

      if (ST.phase === 'build' && !ST.cust) h += '<div class="skel" aria-hidden="true"><b>Promotions, products and order lines appear here</b><i></i><i></i><i></i></div>';
      /* actions */
      var a = '';
      if (ST.phase === 'build') a = '<button class="abtn" type="button" data-act="create" data-f="create" ' + (ST.lines.length ? '' : 'disabled') + '>Create sales order</button>' + (ST.lines.length ? '' : '<span class="hint" style="color:#7b849a">Pick a customer and add a line first</span>');
      else if (ST.phase === 'draft') a = '<button class="abtn green" type="button" data-act="confirm" data-f="confirm">Confirm order</button>';
      else if (ST.phase === 'confirmed') a = '<button class="abtn" type="button" data-act="convert" data-f="convert">Convert to invoice</button>';
      else if (ST.phase === 'invoice') a = '<button class="abtn green" type="button" data-act="post" data-f="post">Post invoice</button>';
      else a = '<button class="abtn sec2" type="button" data-act="again" data-f="again">Start a new order</button>';
      h += '<div class="actions-bar">' + a + '</div>';

      root.innerHTML = h;
      coach.textContent = coachText(c);
      var cur = curStep();
      stepper.forEach(function (li, i) { li.classList.toggle('on', i === cur); li.classList.toggle('done', i < cur); });
      /* animate reservation bars */
      $$('.resbar i', root).forEach(function (b) { var w = b.getAttribute('data-w'); requestAnimationFrame(function () { requestAnimationFrame(function () { b.style.width = w + '%'; }); }); });
      if (lastFocus) { var f = $('[data-f="' + lastFocus + '"]', root); if (f && !f.disabled) f.focus({ preventScroll: true }); }
      lastAdded = null;
    }

    var A = {
      cust: function (id) { ST.cust = id; },
      add: function (id) {
        var l = ST.lines.filter(function (x) { return x.id === id; })[0];
        if (l) l.qty = Math.min(10, l.qty + 1); else ST.lines.push({ id: id, qty: 1 });
        lastAdded = id;
      },
      inc: function (id) { ST.lines.forEach(function (l) { if (l.id === id) l.qty = Math.min(10, l.qty + 1); }); },
      dec: function (id) { ST.lines = ST.lines.filter(function (l) { if (l.id === id) { l.qty--; return l.qty > 0; } return true; }); },
      create: function () { ST.phase = 'draft'; },
      confirm: function () {
        var c = calc(), res = { lines: {}, short: false, gift: false };
        ST.lines.forEach(function (l) { var r = Math.min(l.qty, P(l.id).stock); res.lines[l.id] = { reserved: r }; if (r < l.qty) res.short = true; });
        res.gift = !!c.gift; ST.res = res; ST.phase = 'confirmed';
      },
      convert: function () { ST.phase = 'invoice'; },
      post: function () { ST.phase = 'posted'; },
      again: function () { ST = fresh(); lastFocus = null; }
    };
    function act(name, id) { if (A[name]) { A[name](id); } }

    root.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
      auto++; /* a user click cancels the autoplay */ setAutoUi(false);
      lastFocus = b.getAttribute('data-f');
      act(b.getAttribute('data-act'), b.getAttribute('data-id'));
      render();
    });
    root.addEventListener('change', function (e) { if (e.target.id === 'terms') { ST.terms = +e.target.value; lastFocus = 'terms'; render(); } });

    var autoBtn = $('#autoBtn'), resetBtn = $('#resetBtn');
    function setAutoUi(on) { autoBtn.innerHTML = (on ? 'Playing...' : 'Watch it run') + ' <svg aria-hidden="true"><use href="#i-play"/></svg>'; autoBtn.disabled = on; }
    resetBtn.addEventListener('click', function () { auto++; setAutoUi(false); ST = fresh(); lastFocus = null; render(); });
    autoBtn.addEventListener('click', async function () {
      var my = ++auto; ST = fresh(); lastFocus = null; render(); setAutoUi(true);
      try { $('#demo .app').scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'center' }); } catch (e) {}
      var steps = [['cust', 'harbor', 1100], ['add', 'sw', 900], ['add', 'sw', 1100], ['create', null, 1300], ['confirm', null, 1900], ['convert', null, 1700], ['post', null, 1500]];
      for (var i = 0; i < steps.length; i++) {
        await sleep(steps[i][2]); if (my !== auto) return;
        act(steps[i][0], steps[i][1]); render();
      }
      if (my === auto) setAutoUi(false);
    });
    render();
  })();

  /* ---------- ROUTE MAP ---------- */
  (function () {
    var svg = $('#map'); if (!svg) return;
    var NS = 'http://www.w3.org/2000/svg';
    var xs = [90, 260, 430, 600, 770], ys = [70, 190, 310, 430];
    var pts = [[90, 430], [90, 310], [260, 310], [260, 190], [430, 190], [430, 70], [600, 70], [600, 190], [770, 190], [770, 310], [600, 310], [600, 430], [770, 430]];
    function rounded(p, r) {
      var d = 'M' + p[0][0] + ',' + p[0][1];
      for (var i = 1; i < p.length - 1; i++) {
        var a = p[i - 1], b = p[i], c = p[i + 1];
        var l1 = Math.hypot(b[0] - a[0], b[1] - a[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]);
        var rr = Math.min(r, l1 / 2, l2 / 2);
        var p1 = [b[0] - (b[0] - a[0]) / l1 * rr, b[1] - (b[1] - a[1]) / l1 * rr];
        var p2 = [b[0] + (c[0] - b[0]) / l2 * rr, b[1] + (c[1] - b[1]) / l2 * rr];
        d += ' L' + p1[0] + ',' + p1[1] + ' Q' + b[0] + ',' + b[1] + ' ' + p2[0] + ',' + p2[1];
      }
      var e = p[p.length - 1]; return d + ' L' + e[0] + ',' + e[1];
    }
    var h = '<defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stop-color="#ff6a2b"/><stop offset="1" stop-color="#ffc24b"/></linearGradient><filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="900" height="520" fill="#0a0f19"/>';
    var seed = 7, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (var i = -1; i < xs.length; i++) for (var j = -1; j < ys.length; j++) {
      var x0 = i < 0 ? -20 : xs[i] + 14, x1 = i + 1 < xs.length ? xs[i + 1] - 14 : 920, y0 = j < 0 ? -20 : ys[j] + 14, y1 = j + 1 < ys.length ? ys[j + 1] - 14 : 540;
      var park = rnd() > .82;
      h += '<rect x="' + x0 + '" y="' + y0 + '" width="' + (x1 - x0) + '" height="' + (y1 - y0) + '" rx="10" fill="' + (park ? '#0d1d1a' : '#101826') + '" stroke="rgba(255,255,255,.04)"/>';
      if (!park && x1 - x0 > 100) { for (var k = 0; k < 3; k++) { var bw = 26 + rnd() * 34, bh = 16 + rnd() * 26; h += '<rect x="' + (x0 + 12 + rnd() * (x1 - x0 - bw - 24)) + '" y="' + (y0 + 12 + rnd() * (y1 - y0 - bh - 24)) + '" width="' + bw + '" height="' + bh + '" rx="4" fill="rgba(255,255,255,.035)"/>'; } }
    }
    var D = rounded(pts, 22);
    h += '<path id="rbase" d="' + D + '" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 10"/>';
    h += '<path id="rdone" d="' + D + '" fill="none" stroke="url(#rg)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>';
    h += '<g id="rstops"></g>';
    h += '<g id="rdepot"><rect x="66" y="446" width="48" height="22" rx="6" fill="#1b2437" stroke="rgba(255,255,255,.2)"/><text x="90" y="461" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="600" fill="#cbd5e6">DEPOT</text></g>';
    h += '<g id="truck"><circle r="17" fill="rgba(255,106,43,.25)"><animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite"/></circle><g id="trk"><rect x="-13" y="-8" width="20" height="16" rx="3" fill="#ff6a2b"/><path d="M7 -5h6l4 5v5H7z" fill="#ffc24b"/><circle cx="-6" cy="9" r="3" fill="#0a0f19" stroke="#fff" stroke-width="1.2"/><circle cx="10" cy="9" r="3" fill="#0a0f19" stroke="#fff" stroke-width="1.2"/></g></g>';
    svg.innerHTML = h;
    var base = $('#rbase'), done = $('#rdone'), truck = $('#truck'), trk = $('#trk');
    var L = base.getTotalLength();
    var stopsDef = [
      { n: 'Harbor Market', f: .15, t: '07:48', c: '12 cases' }, { n: 'Pine Street Deli', f: .31, t: '08:15', c: '8 cases' },
      { n: 'Corner Fresh', f: .47, t: '08:52', c: '15 cases' }, { n: 'Maple Grocery', f: .63, t: '09:30', c: '6 cases' },
      { n: 'Riverside Mart', f: .79, t: '10:05', c: '20 cases' }, { n: 'Lakeview Foods', f: .94, t: '10:40', c: '9 cases' }
    ];
    var g = $('#rstops'), mk = [];
    stopsDef.forEach(function (s, i) {
      var pt = base.getPointAtLength(s.f * L);
      var el = document.createElementNS(NS, 'g'); el.setAttribute('transform', 'translate(' + pt.x + ',' + pt.y + ')');
      el.innerHTML = '<circle class="ring" r="16" fill="none" stroke="#ff6a2b" stroke-width="2" opacity="0"/><circle class="dot" r="12" fill="#1b2437" stroke="rgba(255,255,255,.35)" stroke-width="2"/><text y="4" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" fill="#fff">' + (i + 1) + '</text>';
      g.appendChild(el); mk.push(el);
    });
    var panel = $('#stops');
    panel.innerHTML = '<div class="kpis"><div class="kpi"><b id="kD">0/6</b><small>Delivered</small></div><div class="kpi"><b id="kI">0</b><small>Invoices ready</small></div><div class="kpi"><b id="kE">07:48</b><small>Next ETA</small></div></div>' +
      stopsDef.map(function (s, i) { return '<button type="button" class="stop" data-i="' + i + '"><span class="n">' + (i + 1) + '</span><span><b>' + s.n + '</b><small>' + s.c + ' &middot; ETA ' + s.t + '</small></span><span class="st">Queued</span></button>'; }).join('');
    var btns = $$('.stop', panel), range = $('#rRange'), play = $('#rPlay');
    var p = 0, playing = false, last = 0, inView = false, raf = 0;
    function draw() {
      var pt = base.getPointAtLength(p * L), pt2 = base.getPointAtLength(Math.min(L, p * L + 2));
      var ang = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
      truck.setAttribute('transform', 'translate(' + pt.x + ',' + pt.y + ')');
      trk.setAttribute('transform', 'rotate(' + (Math.abs(ang) > 90 ? 180 : 0) + ') scale(' + (Math.abs(ang) > 90 ? -1 : 1) + ',1)' + (Math.abs(ang) > 90 ? '' : ''));
      done.style.strokeDasharray = (p * L) + ' ' + L;
      var n = 0, next = -1;
      stopsDef.forEach(function (s, i) {
        var d = p >= s.f - .002; if (d) n++; else if (next < 0) next = i;
        var b = btns[i]; b.classList.toggle('done', d); b.classList.toggle('next', i === next);
        $('.st', b).textContent = d ? 'Delivered' : (i === next ? 'Next stop' : 'Queued');
        var dot = $('.dot', mk[i]), ring = $('.ring', mk[i]);
        dot.setAttribute('fill', d ? '#2fd08a' : (i === next ? '#ff6a2b' : '#1b2437'));
        dot.setAttribute('stroke', d ? '#2fd08a' : (i === next ? '#ff6a2b' : 'rgba(255,255,255,.35)'));
        ring.setAttribute('opacity', i === next ? '.8' : '0');
      });
      $('#kD').textContent = n + '/6'; $('#kI').textContent = n; $('#kE').textContent = next < 0 ? 'Done' : stopsDef[next].t;
      range.value = Math.round(p * 1000);
    }
    function setPlay(v) { playing = v; play.innerHTML = '<svg aria-hidden="true"><use href="#i-' + (v ? 'pause' : 'play') + '"/></svg>'; play.setAttribute('aria-label', v ? 'Pause route' : 'Play route'); if (v) { last = 0; loop(); } }
    function loop(ts) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function (t) {
        if (!playing || !inView) { if (playing) loop(); return; }
        if (last) p += (t - last) / 26000; last = t;
        if (p >= 1) { p = 1; draw(); setPlay(false); return; }
        draw(); loop();
      });
    }
    play.addEventListener('click', function () { if (!playing && p >= 1) p = 0; setPlay(!playing); });
    $('#rReset').addEventListener('click', function () { p = 0; draw(); setPlay(false); });
    range.addEventListener('input', function () { p = range.value / 1000; setPlay(false); draw(); });
    btns.forEach(function (b) { b.addEventListener('click', function () { p = stopsDef[+b.dataset.i].f; setPlay(false); draw(); }); });
    var started = false;
    visible($('.mapbox'), function (v) { inView = v; if (v && !started && !RM) { started = true; setPlay(true); } if (v && playing) { last = 0; loop(); } });
    if (RM) { p = .47; }
    draw(); setPlay(false);
    if (!RM) { /* autoplay begins when visible */ }
  })();

  /* ---------- FEATURE TABS ---------- */
  (function () {
    var tabs = $$('#tabs .tab');
    function sel(i, focus) {
      tabs.forEach(function (t, k) {
        var on = k === i, p = document.getElementById(t.getAttribute('aria-controls'));
        t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
        p.classList.toggle('on', on); if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
      });
      if (focus) tabs[i].focus();
      tabs[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: RM ? 'auto' : 'smooth' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { sel(i); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight') n = (i + 1) % tabs.length; else if (k === 'ArrowLeft') n = (i + tabs.length - 1) % tabs.length;
        else if (k === 'Home') n = 0; else if (k === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); sel(n, true); }
      });
    });
  })();

  /* ---------- HOW: scroll narrative ---------- */
  (function () {
    var steps = $$('.step'), scenes = $$('.scene'); if (!steps.length) return;
    var cur = -1, tick = false;
    function upd() {
      tick = false;
      var mid = window.innerHeight * .5, best = 0, bd = 1e9;
      steps.forEach(function (s, i) { var r = s.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - mid); if (d < bd) { bd = d; best = i; } });
      if (best === cur) return; cur = best;
      steps.forEach(function (s, i) { s.classList.toggle('on', i === best); });
      scenes.forEach(function (s, i) { s.classList.toggle('on', i === best); });
    }
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    window.addEventListener('resize', upd); upd();
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
