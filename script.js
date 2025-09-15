// Mobile nav toggle and small helpers
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close on link click (mobile UX)
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 859px)').matches) closeNav();
      })
    );

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeNav();
    });
  }

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form -> RingCaptcha + Google Apps Script submission (with mailto fallback)
  const form = document.getElementById('contact-form');
  if (form) {
    const statusEl = document.getElementById('form-status');
    const setStatus = (msg, type = 'info') => {
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.classList.remove('success', 'error');
      if (type === 'success') statusEl.classList.add('success');
      if (type === 'error') statusEl.classList.add('error');
    };

    // If RingCaptcha widget is present, listen for token updates
    const ringTokenInput = /** @type {HTMLInputElement} */ (form.querySelector('#ring-token'));
    try {
      if (window.RingCaptcha) {
        // Some RingCaptcha widgets dispatch an event or call a callback; attempt to capture token via DOM
        window.RingCaptcha.on && window.RingCaptcha.on('verified', function (data) {
          if (ringTokenInput && data && data.token) ringTokenInput.value = data.token;
        });
      }
    } catch (_) {}

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */ (form.querySelector('#name'))?.value?.trim() || '';
      const email = /** @type {HTMLInputElement} */ (form.querySelector('#email'))?.value?.trim() || '';
      const phone = /** @type {HTMLInputElement} */ (form.querySelector('#phone'))?.value?.trim() || '';
      const whatsapp = /** @type {HTMLInputElement} */ (form.querySelector('#whatsapp'))?.value?.trim() || '';
      const requirements = /** @type {HTMLTextAreaElement} */ (form.querySelector('#requirements'))?.value?.trim() || '';
      const ringToken = ringTokenInput?.value?.trim() || '';

      if (!name || !email || !phone || !requirements) {
        setStatus('Please fill in all required fields.', 'error');
        return;
      }

      // Require RingCaptcha token if widget is on page
      const ringWidget = document.getElementById('ringcaptcha-widget');
      if (ringWidget && !ringToken) {
        setStatus('Please complete the verification step.', 'error');
        return;
      }

      const endpoint = form.getAttribute('data-apps-script') || '';
      const payload = new FormData();
      payload.append('name', name);
      payload.append('email', email);
      payload.append('phone', phone);
      payload.append('whatsapp', whatsapp);
      payload.append('requirements', requirements);
      payload.append('ring_token', ringToken);
      payload.append('page', location.pathname + location.hash);
      payload.append('source', 'kraft-fit-web');
      payload.append('timestamp', new Date().toISOString());

      setStatus('Submitting…');

      if (endpoint) {
        try {
          // Many Apps Script deployments require no-cors
          await fetch(endpoint, {
            method: 'POST',
            mode: 'no-cors',
            body: payload,
          });
          setStatus('Thanks! We’ll contact you shortly.', 'success');
          form.reset();
          if (ringTokenInput) ringTokenInput.value = '';
          return;
        } catch (err) {
          console.error('Apps Script submit failed', err);
          setStatus('Couldn’t submit to the server. Falling back to email…');
        }
      }

      // Fallback: mailto
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWhatsApp: ${whatsapp || 'Not provided'}\n\nRequirements:\n${requirements}`;
      const subject = 'New lead from KRAFT FIT website';
      const mailto = `mailto:kraftfitonline@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }
})();
