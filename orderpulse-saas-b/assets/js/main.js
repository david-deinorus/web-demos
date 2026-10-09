(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- Nav: mobile menu and shadow on scroll ---------- */
  var nav = $('#nav');
  var menu = $('#menu');
  var burger = $('#burger');

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); }
  });
  $$('a', menu).forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  window.addEventListener('scroll', function () {
    nav.classList.toggle('stuck', window.scrollY > 8);
  }, { passive: true });

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

  /* ---------- Demo form: no backend yet, shows the same notice ---------- */
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
