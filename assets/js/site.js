/* Theme toggle. Persists to localStorage; falls back to the OS preference. */
(function () {
  var KEY = 'ar-theme';

  function apply(mode) {
    if (mode === 'light' || mode === 'dark') {
      document.documentElement.setAttribute('data-theme', mode);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    var btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.textContent = label(mode);
  }

  function label(mode) {
    return mode === 'light' ? 'light' : mode === 'dark' ? 'dark' : 'auto';
  }

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  // Apply before first paint where possible.
  apply(stored());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.textContent = label(stored());
    btn.addEventListener('click', function () {
      var order = [null, 'light', 'dark'];
      var next = order[(order.indexOf(stored()) + 1) % order.length];
      try {
        if (next) localStorage.setItem(KEY, next);
        else localStorage.removeItem(KEY);
      } catch (e) {}
      apply(next);
    });
  });
})();
