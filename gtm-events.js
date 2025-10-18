/**
 * Google Tag Manager & Google Analytics Event Tracking for Kraft Fit
 * Tracks user interactions and pushes events to dataLayer (GTM) and gtag (GA4)
 */

(function () {
  'use strict';

  // Helper function to push events to dataLayer (GTM) and gtag (GA4)
  const pushEvent = (eventName, eventData = {}) => {
    window.dataLayer = window.dataLayer || [];
    const timestamp = new Date().toISOString();

    // Push to GTM dataLayer
    window.dataLayer.push({
      event: eventName,
      ...eventData,
      timestamp: timestamp,
    });

    // Also send directly to GA4 via gtag (if available)
    if (typeof gtag !== 'undefined') {
      // Remove timestamp from GA4 events (GA4 adds it automatically)
      const ga4Data = { ...eventData };
      delete ga4Data.timestamp;
      gtag('event', eventName, ga4Data);
    }

    console.log('📊 Event Tracked:', eventName, eventData);
  };

  // Page View Tracking (enhanced)
  pushEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });

  // Navigation Click Tracking
  const trackNavigation = () => {
    const navLinks = document.querySelectorAll('.site-nav a, .footer-nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const linkText = link.textContent.trim();
        const linkHref = link.getAttribute('href');
        pushEvent('navigation_click', {
          link_text: linkText,
          link_url: linkHref,
          link_location: link.closest('.site-nav') ? 'header' : 'footer',
        });
      });
    });
  };

  // CTA Button Tracking
  const trackCTAButtons = () => {
    const ctaButtons = document.querySelectorAll('.btn, .cta a');
    ctaButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        const buttonClass = button.className;
        const section = button.closest('section')?.id || 'unknown';

        pushEvent('cta_click', {
          button_text: buttonText,
          button_url: buttonHref,
          button_type: buttonClass.includes('btn-primary') ? 'primary' : 'secondary',
          section_location: section,
        });
      });
    });
  };

  // WhatsApp Click Tracking
  const trackWhatsAppClicks = () => {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    whatsappLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const phoneNumber = link.getAttribute('href').match(/\d+/)?.[0] || 'unknown';
        pushEvent('whatsapp_click', {
          phone_number: phoneNumber,
          link_text: link.textContent.trim(),
          section_location: link.closest('section')?.id || 'unknown',
        });
      });
    });
  };

  // Social Media Click Tracking
  const trackSocialClicks = () => {
    const socialLinks = document.querySelectorAll('a[href*="instagram"], a[href*="facebook"], a[href*="twitter"], a[href*="linkedin"]');
    socialLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const platform = link.getAttribute('href').includes('instagram')
          ? 'Instagram'
          : link.getAttribute('href').includes('facebook')
          ? 'Facebook'
          : link.getAttribute('href').includes('twitter')
          ? 'Twitter'
          : link.getAttribute('href').includes('linkedin')
          ? 'LinkedIn'
          : 'Other';

        pushEvent('social_click', {
          platform: platform,
          link_url: link.getAttribute('href'),
        });
      });
    });
  };

  // Form Interaction Tracking
  const trackFormInteractions = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Track form start (first field interaction)
    let formStarted = false;
    const formFields = form.querySelectorAll('input, textarea, select');
    formFields.forEach((field) => {
      field.addEventListener('focus', () => {
        if (!formStarted) {
          formStarted = true;
          pushEvent('form_start', {
            form_id: 'contact-form',
            form_name: 'Contact Lead Form',
          });
        }
      });

      // Track field completion
      field.addEventListener('blur', () => {
        if (field.value.trim() !== '') {
          pushEvent('form_field_complete', {
            form_id: 'contact-form',
            field_name: field.name || field.id,
            field_type: field.type,
          });
        }
      });
    });

    // Track form submission attempt
    form.addEventListener('submit', (e) => {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        // Don't send PII to analytics, just track field presence
        data[key] = value ? 'filled' : 'empty';
      });

      pushEvent('form_submit', {
        form_id: 'contact-form',
        form_name: 'Contact Lead Form',
        fields_completed: Object.keys(data).filter((k) => data[k] === 'filled').length,
      });
    });
  };

  // Track form submission success/failure
  const trackFormStatus = () => {
    const statusEl = document.getElementById('form-status');
    if (!statusEl) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const statusText = statusEl.textContent.trim();
          if (statusText) {
            const isSuccess = statusEl.classList.contains('success');
            const isError = statusEl.classList.contains('error');

            if (isSuccess) {
              pushEvent('form_submission_success', {
                form_id: 'contact-form',
                form_name: 'Contact Lead Form',
              });
            } else if (isError) {
              pushEvent('form_submission_error', {
                form_id: 'contact-form',
                form_name: 'Contact Lead Form',
                error_message: statusText,
              });
            }
          }
        }
      });
    });

    observer.observe(statusEl, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  };

  // Service Card Click Tracking
  const trackServiceCards = () => {
    const serviceCards = document.querySelectorAll('#services .card');
    serviceCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const serviceName = card.querySelector('h3')?.textContent.trim() || 'Unknown Service';
        pushEvent('service_card_click', {
          service_name: serviceName,
        });
      });
    });
  };

  // Scroll Depth Tracking
  const trackScrollDepth = () => {
    const depths = [25, 50, 75, 100];
    const tracked = new Set();

    const checkScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !tracked.has(depth)) {
          tracked.add(depth);
          pushEvent('scroll_depth', {
            depth_percentage: depth,
          });
        }
      });
    };

    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkScroll, 100);
    });
  };

  // Section View Tracking (when section comes into view)
  const trackSectionViews = () => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionTitle = entry.target.querySelector('h1, h2')?.textContent.trim() || sectionId;

          pushEvent('section_view', {
            section_id: sectionId,
            section_title: sectionTitle,
          });

          // Unobserve after first view
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  };

  // External Link Tracking
  const trackExternalLinks = () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]:not([href*="wa.me"]):not([href*="instagram"]):not([href*="facebook"])');
    externalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        pushEvent('external_link_click', {
          link_url: link.getAttribute('href'),
          link_text: link.textContent.trim(),
        });
      });
    });
  };

  // Mobile Menu Toggle Tracking
  const trackMobileMenu = () => {
    const menuToggle = document.querySelector('.nav-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', (e) => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        pushEvent('mobile_menu_toggle', {
          action: isOpen ? 'close' : 'open',
        });
      });
    }
  };

  // Time on Page Tracking
  const trackTimeOnPage = () => {
    const startTime = Date.now();
    const intervals = [30, 60, 120, 300]; // seconds
    const tracked = new Set();

    const checkTime = () => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      intervals.forEach((interval) => {
        if (timeOnPage >= interval && !tracked.has(interval)) {
          tracked.add(interval);
          pushEvent('time_on_page', {
            duration_seconds: interval,
          });
        }
      });
    };

    setInterval(checkTime, 5000); // Check every 5 seconds
  };

  // Video/Media Tracking (if any videos are added later)
  const trackMediaInteractions = () => {
    const videos = document.querySelectorAll('video, iframe[src*="youtube"], iframe[src*="vimeo"]');
    videos.forEach((media) => {
      media.addEventListener('play', () => {
        pushEvent('media_play', {
          media_type: media.tagName.toLowerCase(),
          media_src: media.src || media.getAttribute('src'),
        });
      });
    });
  };

  // Error Tracking (JavaScript errors)
  const trackErrors = () => {
    window.addEventListener('error', (e) => {
      pushEvent('javascript_error', {
        error_message: e.message,
        error_file: e.filename,
        error_line: e.lineno,
        error_column: e.colno,
      });
    });
  };

  // User Engagement Score
  const trackEngagement = () => {
    let engagementScore = 0;
    const actions = [
      'cta_click',
      'form_start',
      'form_submit',
      'service_card_click',
      'whatsapp_click',
      'social_click',
    ];

    window.addEventListener('beforeunload', () => {
      pushEvent('user_engagement', {
        engagement_score: engagementScore,
      });
    });

    // Listen for tracked events to increment engagement
    const originalPush = window.dataLayer.push;
    window.dataLayer.push = function () {
      const args = Array.from(arguments);
      args.forEach((item) => {
        if (item.event && actions.includes(item.event)) {
          engagementScore += 10;
        }
      });
      return originalPush.apply(window.dataLayer, args);
    };
  };

  // Initialize all tracking when DOM is ready
  const initTracking = () => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initAllTrackers();
      });
    } else {
      initAllTrackers();
    }
  };

  const initAllTrackers = () => {
    trackNavigation();
    trackCTAButtons();
    trackWhatsAppClicks();
    trackSocialClicks();
    trackFormInteractions();
    trackFormStatus();
    trackServiceCards();
    trackScrollDepth();
    trackSectionViews();
    trackExternalLinks();
    trackMobileMenu();
    trackTimeOnPage();
    trackMediaInteractions();
    trackErrors();
    trackEngagement();

    console.log('✅ GTM & GA4 Event Tracking initialized for Kraft Fit');
    console.log('📊 GA4 Measurement ID: G-VRXX1B69B1');
    console.log('🏷️  GTM Container ID: GTM-K458C47C');
  };

  // Start tracking
  initTracking();
})();
