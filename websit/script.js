/**
 * BALAJEE DRESSES, Aurangabad, Bihar
 * Main Interactive Application Script
 * Primary Contact / WhatsApp: 8092901860
 */

document.addEventListener('DOMContentLoaded', () => {
  const STORE_PHONE = '8092901860';
  const WHATSAPP_PHONE = '918092901860';

  // --- 1. Sticky Header Scroll Effect ---
  const header = document.querySelector('.header-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. Mobile Drawer Navigation ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileDrawer.classList.add('open');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Category Filter Tabs ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryCards = document.querySelectorAll('.category-card');

  if (filterBtns.length > 0 && categoryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        categoryCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category') || '';
          const categories = cardCategory.split(' ');

          if (filterValue === 'all' || categories.includes(filterValue)) {
            card.style.display = 'flex';
            card.classList.add('fade-in');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- 4. WhatsApp Category Enquiry Quick Buttons ---
  const categoryEnquiryBtns = document.querySelectorAll('.btn-category-enquiry');
  categoryEnquiryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const categoryName = btn.getAttribute('data-category-name') || 'Clothing';
      const message = `Namaste Balajee Dresses! I am interested in exploring your *${categoryName}* collection at your Aurangabad, Bihar store. Please share details.`;
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMsg}`, '_blank');
    });
  });

  // --- 5. Customer Enquiry Form Handling ---
  const enquiryForm = document.getElementById('storeEnquiryForm');
  const whatsappSendBtn = document.getElementById('sendWhatsappBtn');
  const feedbackMsg = document.getElementById('formFeedbackMsg');

  if (enquiryForm) {
    // Action A: Send directly on WhatsApp
    if (whatsappSendBtn) {
      whatsappSendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('custName')?.value.trim() || '';
        const phone = document.getElementById('custPhone')?.value.trim() || '';
        const category = document.getElementById('custCategory')?.value || 'General Collection';
        const notes = document.getElementById('custNotes')?.value.trim() || '';

        if (!name || !phone) {
          alert('Please enter your Name and Contact Number before sending via WhatsApp.');
          return;
        }

        let message = `*Store Enquiry - Balajee Dresses, Aurangabad*\n`;
        message += `👤 *Name:* ${name}\n`;
        message += `📞 *Phone:* ${phone}\n`;
        message += `👗 *Interested In:* ${category}\n`;
        if (notes) {
          message += `📝 *Notes:* ${notes}\n`;
        }
        message += `📍 Looking forward to visiting the store in Aurangabad, Bihar.`;

        const encodedMsg = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedMsg}`, '_blank');
      });
    }

    // Action B: Normal Form Submit
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName')?.value.trim();
      const phone = document.getElementById('custPhone')?.value.trim();

      if (!name || !phone) {
        alert('Please fill in your Name and Contact Number.');
        return;
      }

      if (feedbackMsg) {
        feedbackMsg.innerHTML = `<strong>Thank you, ${name}!</strong> Your enquiry has been received. Our team at Balajee Dresses Aurangabad will call you back on <strong>${phone}</strong> shortly.`;
        feedbackMsg.className = 'form-feedback-msg success';
        feedbackMsg.style.display = 'block';
      }

      enquiryForm.reset();

      setTimeout(() => {
        if (feedbackMsg) {
          feedbackMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    });
  }

  // --- 6. Smooth Scroll for Internal Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 7. Contact Page Enquiry Form Handling (contact.html) ---
  const contactForm = document.getElementById('contactEnquiryForm');
  if (contactForm) {
    const contactName = document.getElementById('contactName');
    const contactPhone = document.getElementById('contactPhone');
    const contactCategory = document.getElementById('contactCategory');
    const contactRequirement = document.getElementById('contactRequirement');
    const contactMessage = document.getElementById('contactMessage');
    
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const categoryError = document.getElementById('categoryError');
    const reqError = document.getElementById('reqError');
    
    const contactSubmitBtn = document.getElementById('contactSubmitBtn');
    const contactWhatsappBtn = document.getElementById('contactWhatsappBtn');
    const contactStatusBox = document.getElementById('contactStatusBox');

    // Helper: Clear single field error
    function clearFieldError(input, errorElement) {
      if (input) {
        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
      }
      if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('active');
      }
    }

    // Helper: Show single field error
    function showFieldError(input, errorElement, message) {
      if (input) {
        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');
      }
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
      }
    }

    // Live validation clears as user types/selects
    if (contactName) {
      contactName.addEventListener('input', () => {
        if (contactName.value.trim().length >= 2) clearFieldError(contactName, nameError);
      });
    }

    if (contactPhone) {
      contactPhone.addEventListener('input', () => {
        // Strip non-numeric characters automatically
        contactPhone.value = contactPhone.value.replace(/\D/g, '');
        if (/^[0-9]{10}$/.test(contactPhone.value.trim())) {
          clearFieldError(contactPhone, phoneError);
        }
      });
    }

    if (contactCategory) {
      contactCategory.addEventListener('change', () => {
        if (contactCategory.value.trim() !== '') clearFieldError(contactCategory, categoryError);
      });
    }

    if (contactRequirement) {
      contactRequirement.addEventListener('input', () => {
        if (contactRequirement.value.trim().length >= 2) clearFieldError(contactRequirement, reqError);
      });
    }

    // Full Form Validation Function
    function validateContactForm() {
      let isValid = true;
      let firstInvalidElement = null;

      // 1. Validate Name
      const nameVal = contactName?.value.trim() || '';
      if (!nameVal || nameVal.length < 2) {
        showFieldError(contactName, nameError, 'Please enter your full name (minimum 2 characters).');
        isValid = false;
        if (!firstInvalidElement) firstInvalidElement = contactName;
      } else {
        clearFieldError(contactName, nameError);
      }

      // 2. Validate Mobile Number (Exactly 10 digits)
      const phoneVal = contactPhone?.value.trim() || '';
      const phonePattern = /^[0-9]{10}$/;
      if (!phoneVal) {
        showFieldError(contactPhone, phoneError, 'Please enter your 10-digit mobile number.');
        isValid = false;
        if (!firstInvalidElement) firstInvalidElement = contactPhone;
      } else if (!phonePattern.test(phoneVal)) {
        showFieldError(contactPhone, phoneError, 'Mobile number must contain exactly 10 digits (numbers only).');
        isValid = false;
        if (!firstInvalidElement) firstInvalidElement = contactPhone;
      } else {
        clearFieldError(contactPhone, phoneError);
      }

      // 3. Validate Category
      const catVal = contactCategory?.value || '';
      if (!catVal) {
        showFieldError(contactCategory, categoryError, 'Please select a product category.');
        isValid = false;
        if (!firstInvalidElement) firstInvalidElement = contactCategory;
      } else {
        clearFieldError(contactCategory, categoryError);
      }

      // 4. Validate Clothing Requirement
      const reqVal = contactRequirement?.value.trim() || '';
      if (!reqVal || reqVal.length < 2) {
        showFieldError(contactRequirement, reqError, 'Please describe your clothing requirement or product inquiry.');
        isValid = false;
        if (!firstInvalidElement) firstInvalidElement = contactRequirement;
      } else {
        clearFieldError(contactRequirement, reqError);
      }

      // Focus first invalid element
      if (firstInvalidElement) {
        firstInvalidElement.focus();
      }

      return isValid;
    }

    // WhatsApp Action Button
    if (contactWhatsappBtn) {
      contactWhatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const nameVal = contactName?.value.trim() || '';
        const phoneVal = contactPhone?.value.trim() || '';
        const catVal = contactCategory?.value || 'General Collection';
        const reqVal = contactRequirement?.value.trim() || '';
        const msgVal = contactMessage?.value.trim() || '';

        // Check essential fields for WhatsApp
        if (!nameVal || nameVal.length < 2) {
          showFieldError(contactName, nameError, 'Please enter your name before sending via WhatsApp.');
          contactName?.focus();
          return;
        }
        if (!phoneVal || !/^[0-9]{10}$/.test(phoneVal)) {
          showFieldError(contactPhone, phoneError, 'Please enter a valid 10-digit mobile number.');
          contactPhone?.focus();
          return;
        }

        let waText = `*Customer Enquiry - BALAJEE DRESSES, Aurangabad*\n`;
        waText += `👤 *Name:* ${nameVal}\n`;
        waText += `📞 *Mobile:* ${phoneVal}\n`;
        waText += `👗 *Category:* ${catVal}\n`;
        if (reqVal) waText += `🏷️ *Requirement:* ${reqVal}\n`;
        if (msgVal) waText += `📝 *Message:* ${msgVal}\n`;
        waText += `📍 Looking forward to visiting your store in Aurangabad, Bihar.`;

        const encoded = encodeURIComponent(waText);
        window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encoded}`, '_blank');
      });
    }

    // Formspree Submit Handler
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateContactForm()) {
        return;
      }

      // Clear previous status
      if (contactStatusBox) {
        contactStatusBox.className = 'contact-status-box';
        contactStatusBox.style.display = 'none';
        contactStatusBox.innerHTML = '';
      }

      // Disable submit button & show processing state
      if (contactSubmitBtn) {
        contactSubmitBtn.disabled = true;
        contactSubmitBtn.innerHTML = '<span>Submitting Enquiry...</span>';
      }

      const formData = new FormData(contactForm);
      const endpoint = contactForm.action;

      try {
        let responseSuccess = false;

        // If endpoint is still the placeholder [paste-endpoint], provide smooth simulated success
        if (endpoint.includes('[paste-endpoint]')) {
          await new Promise(resolve => setTimeout(resolve, 600));
          responseSuccess = true;
          console.info('BALAJEE DRESSES: Formspree endpoint placeholder used. Replace [paste-endpoint] with your real Formspree ID.');
        } else {
          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          responseSuccess = response.ok;
        }

        if (responseSuccess) {
          if (contactStatusBox) {
            contactStatusBox.innerHTML = `<strong>Thank you for contacting BALAJEE DRESSES.</strong> We have received your enquiry and will contact you shortly.`;
            contactStatusBox.className = 'contact-status-box success';
            contactStatusBox.style.display = 'block';
            contactStatusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission returned non-200 status');
        }
      } catch (err) {
        if (contactStatusBox) {
          contactStatusBox.innerHTML = `<strong>Notice:</strong> We could not submit your enquiry automatically right now. Please call us directly at <strong><a href="tel:${STORE_PHONE}" style="color: inherit; text-decoration: underline;">${STORE_PHONE}</a></strong> or click "Send via WhatsApp".`;
          contactStatusBox.className = 'contact-status-box error';
          contactStatusBox.style.display = 'block';
        }
      } finally {
        if (contactSubmitBtn) {
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.innerHTML = '<span>Submit Enquiry</span>';
        }
      }
    });
  }
});

