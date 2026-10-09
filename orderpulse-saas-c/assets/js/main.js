(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- Nav: dropdowns, mobile menu, shadow on scroll ---------- */
  var nav = $('#nav');
  var menu = $('#menu');
  var burger = $('#burger');

  function setDropdown(btn, open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.nextElementSibling.classList.toggle('open', open);
  }
  function closeDropdowns(except) {
    $$('.sub-btn').forEach(function (b) { if (b !== except) setDropdown(b, false); });
  }
  $$('.sub-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') !== 'true';
      closeDropdowns(btn);
      setDropdown(btn, open);
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-sub')) closeDropdowns();
  });

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
    if (!open) closeDropdowns();
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeDropdowns();
    if (menu.classList.contains('open')) { setMenu(false); burger.focus(); }
  });
  $$('a', menu).forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  window.addEventListener('scroll', function () {
    nav.classList.toggle('stuck', window.scrollY > 8);
  }, { passive: true });

  /* ---------- Solution tabs ---------- */
  var tabs = $$('.tab');

  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      $('#' + t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    // keep the active tab visible inside the scrollable tab list on small screens
    var list = tab.parentNode;
    if (list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    }
  }
  function tabByKey(key) {
    return tabs.filter(function (t) { return t.getAttribute('data-key') === key; })[0];
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });
  // links with data-tab (nav, hero chip, footer) open that tab before scrolling to it
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-tab]');
    if (!link) return;
    var tab = tabByKey(link.getAttribute('data-tab'));
    if (tab) selectTab(tab, false);
  });

  /* ---------- Integrations ribbon arrows ---------- */
  var ribbon = $('#ribbon');
  function slide(dir) {
    ribbon.scrollBy({ left: dir * Math.max(240, ribbon.clientWidth * 0.7), behavior: 'smooth' });
  }
  $('#rib-prev').addEventListener('click', function () { slide(-1); });
  $('#rib-next').addEventListener('click', function () { slide(1); });

  /* ---------- "This page is part of the full site" notice ---------- */
  var dialog = $('#soon');
  var lastTrigger = null;

  function openNotice(name, trigger) {
    lastTrigger = trigger || null;
    $('#soon-page').textContent = name;
    if (dialog.showModal) { if (!dialog.open) dialog.showModal(); } else { dialog.setAttribute('open', ''); }
    var closeBtn = $('.btn[data-close]', dialog);
    if (closeBtn) closeBtn.focus();
  }
  function closeNotice() {
    if (dialog.close) dialog.close(); else dialog.removeAttribute('open');
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-soon]');
    if (link) {
      e.preventDefault();
      setMenu(false);
      openNotice(link.getAttribute('data-soon'), link);
      return;
    }
    if (e.target.closest('[data-close]') || e.target === dialog) closeNotice();
  });

  /* ---------- Demo form: no backend, shows the same notice ---------- */
  $('#demo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    openNotice('Book a demo', $('#demo-form button[type=submit]'));
  });

  /* ---------- Entrance animations ---------- */
  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();
