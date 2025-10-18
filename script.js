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

    // Validation functions
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
      // Allow international format with optional + and spaces/dashes
      const phoneRegex = /^\+?[\d\s\-()]{8,20}$/;
      return phoneRegex.test(phone);
    };

    const validateName = (name) => {
      return name.length >= 2 && name.length <= 100;
    };

    const validateRequirements = (text) => {
      return text.length >= 10 && text.length <= 1000;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */ (form.querySelector('#name'))?.value?.trim() || '';
      const email = /** @type {HTMLInputElement} */ (form.querySelector('#email'))?.value?.trim() || '';
      const phone = /** @type {HTMLInputElement} */ (form.querySelector('#phone'))?.value?.trim() || '';
      const whatsapp = /** @type {HTMLInputElement} */ (form.querySelector('#whatsapp'))?.value?.trim() || '';
      const requirements = /** @type {HTMLTextAreaElement} */ (form.querySelector('#requirements'))?.value?.trim() || '';
      const ringToken = ringTokenInput?.value?.trim() || '';

      // Validation with specific error messages
      if (!name || !email || !phone || !requirements) {
        setStatus('Please fill in all required fields.', 'error');
        return;
      }

      if (!validateName(name)) {
        setStatus('Please enter a valid name (2-100 characters).', 'error');
        return;
      }

      if (!validateEmail(email)) {
        setStatus('Please enter a valid email address.', 'error');
        return;
      }

      if (!validatePhone(phone)) {
        setStatus('Please enter a valid phone number.', 'error');
        return;
      }

      if (whatsapp && !validatePhone(whatsapp)) {
        setStatus('Please enter a valid WhatsApp number.', 'error');
        return;
      }

      if (!validateRequirements(requirements)) {
        setStatus('Requirements must be between 10 and 1000 characters.', 'error');
        return;
      }

      // Require RingCaptcha token if widget is on page
      const ringWidget = document.getElementById('ringcaptcha-widget');
      if (ringWidget && !ringToken) {
        setStatus('Please complete the verification step.', 'error');
        return;
      }

      const endpoint = form.getAttribute('data-apps-script') || '';
      const payload = {
        name: name,
        email: email,
        phone: phone,
        whatsapp: whatsapp || '',
        requirements: requirements,
        ring_token: ringToken,
        page: location.pathname + location.hash,
        source: 'kraft-fit-web',
        timestamp: new Date().toISOString(),
      };

      setStatus('Submitting…');

      if (endpoint && endpoint.includes('script.google.com')) {
        try {
          // Use URLSearchParams for proper form encoding with Google Apps Script
          const formData = new URLSearchParams();
          Object.keys(payload).forEach(key => formData.append(key, payload[key]));

          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
            redirect: 'follow',
          });

          // Check if response is OK (status 200-299)
          if (response.ok || response.status === 200) {
            setStatus('Thanks! We\'ll contact you within 24 hours.', 'success');
            form.reset();
            if (ringTokenInput) ringTokenInput.value = '';
            return;
          } else {
            throw new Error(`Server responded with status ${response.status}`);
          }
        } catch (err) {
          console.error('Apps Script submit failed', err);
          setStatus('Couldn\'t submit to the server. Please try again or contact us directly.', 'error');
          return;
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
