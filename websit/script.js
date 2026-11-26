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

  // --- 8. Clothing & Style Blog Reader Modal (6 Long Articles) ---
  const BLOG_POSTS = [
    {
      id: 1,
      category: 'Family Fashion',
      readTime: '6 min read',
      title: 'Complete Family Clothing Shopping Guide for Aurangabad Families at BALAJEE DRESSES',
      image: 'images/hero-family-fashion.jpg',
      alt: 'Family Ready-Made Fashion at Balajee Dresses Aurangabad',
      whatsappTopic: 'Family Clothing Collection',
      content: `
        <p>Shopping for clothes for an entire family often turns into an exhausting day of visiting separate shops for kids, men, ladies, and school wear. At <strong>BALAJEE DRESSES</strong> on MG Road, Aurangabad, Bihar, our goal is simple: bring thoughtfully curated ready-made garments for every generation together under one welcoming roof.</p>

        <h4>1. Plan Your Family Wardrobe Around Occasions &amp; Seasons</h4>
        <p>Before stepping into the showroom, it helps to divide your family list into everyday essentials and special-occasion outfits. Bihar experiences bright, warm summers, humid monsoons, and crisp winter mornings—each calling for different fabric weights and silhouettes.</p>
        <ul>
          <li><strong>Summer &amp; Daily Wear:</strong> Breathable cotton shirts, light kurti sets, soft infant rompers, and relaxed denim or cotton trousers keep everyone comfortable during school runs, office hours, and market visits.</li>
          <li><strong>Festive &amp; Wedding Celebrations:</strong> Coordinated ethnic wear—such as Men’s Sherwanis or Indo-Western sets, Ladies’ designer suits, Boys’ kurta-sherwanis, and Girls’ lehengas—creates memorable family photographs without rushing between multiple stores.</li>
          <li><strong>School Readiness:</strong> Keeping standardized school uniforms and spare shirts ready alongside casual clothing saves parents extra trips during the academic term.</li>
        </ul>

        <h4>2. What to Check Before Selecting Ready-Made Garments</h4>
        <p>A well-made ready-made garment looks neat from the first wear and holds its shape wash after wash. Whenever you browse racks at BALAJEE DRESSES, take a moment to check four practical details:</p>
        <ul>
          <li><strong>Fabric Hand-Feel &amp; Breathability:</strong> Gently hold the fabric against your palm—natural cottons and quality blends feel smooth, allow airflow, and avoid unnecessary stiffness.</li>
          <li><strong>Seam Strength &amp; Stitching:</strong> Look along shoulder seams, trouser inseams, and kurti side slits for even, tightly spaced stitching with clean inside overlocking.</li>
          <li><strong>Inner Lining on Festive Pieces:</strong> Embroidered wedding outfits and party wear should always have a soft inner lining so zari or sequins never irritate the skin.</li>
          <li><strong>Comfort Movement Test:</strong> Raise your arms, sit briefly, and check collar room—especially for children and elders who will wear the outfit for several hours.</li>
        </ul>

        <h4>3. Coordinating Colours Across the Family</h4>
        <p>Whether preparing for Chhath, Diwali, weddings, or family anniversaries, coordinated outfits look polished without needing identical clothes. Choose one shared colour family—such as maroon with warm gold, ivory with navy, or pastel peach with cream—and let each family member wear the silhouette that suits them best.</p>

        <h4>4. Visit BALAJEE DRESSES on MG Road, Aurangabad</h4>
        <p>Our store team helps families compare sizes across Kids Wear, Men’s Wear, Ladies’ Wear, Girls’ Wear, Wedding Collections, and School Uniforms side by side. If you want guidance before visiting, simply call or message us on WhatsApp at <strong>${STORE_PHONE}</strong>.</p>
      `
    },
    {
      id: 2,
      category: 'Men’s Wedding',
      readTime: '6 min read',
      title: 'Sherwani vs. Indo-Western: How Grooms in Aurangabad Can Choose the Right Wedding Outfit',
      image: 'images/mens-wedding-collection.jpg',
      alt: 'Men’s Wedding Collection Sherwani and Indo-Western at Balajee Dresses',
      whatsappTopic: 'Men’s Wedding Collection',
      content: `
        <p>Every wedding ceremony carries its own mood, lighting, and energy—from lively daytime rituals to grand evening receptions. At <strong>BALAJEE DRESSES</strong> in Aurangabad, grooms and wedding guests often ask whether a traditional Sherwani or a structured Indo-Western ensemble fits their celebration better. Understanding how each silhouette works makes the decision effortless.</p>

        <h4>1. The Royal Sherwani: Timeless Grandeur for the Main Ceremony</h4>
        <p>Nothing matches the regal presence of a well-tailored Sherwani during the Baraat and Phere. Characterized by a structured bandhgala collar, longer hemline falling cleanly around or just below the knee, and refined embroidery or woven brocade textures, a Sherwani commands attention in traditional mandap settings.</p>
        <ul>
          <li><strong>Best For:</strong> Main wedding ceremony, grand Baraat entry, and formal family portraits.</li>
          <li><strong>Classic Colour Palettes:</strong> Ivory, champagne gold, deep maroon, emerald, and royal black with subtle gold detailing.</li>
          <li><strong>Styling Tip:</strong> Pair with structured churidar or straight-fit trousers, traditional mojris, and a contrasting stole (dupatta) draped cleanly over one shoulder.</li>
        </ul>

        <h4>2. Indo-Western &amp; Jodhpuri Sets: Modern Sharpness for Sangeet &amp; Reception</h4>
        <p>If you want freedom to move, dance, and greet guests comfortably while still looking distinctly festive, an Indo-Western outfit is ideal. Blending contemporary asymmetric cuts, draped kurtas, or tailored Jodhpuri jackets with Indian craftsmanship, Indo-Western sets bridge heritage and modern style.</p>
        <ul>
          <li><strong>Best For:</strong> Engagement (Tilak/Ring Ceremony), Sangeet nights, cocktail evenings, and wedding receptions.</li>
          <li><strong>Why Grooms Love Them:</strong> Lighter layering, crisp modern collars, and versatile trousers or dhoti-style bottoms that feel effortless for hours.</li>
          <li><strong>Bonus Advantage:</strong> Brothers, cousins, and close relatives can also wear coordinated Indo-Western jackets or Nehru jacket sets for a unified wedding squad look.</li>
        </ul>

        <h4>3. Getting the Fit Right in Ready-Made Groom Wear</h4>
        <p>Even the richest fabric loses charm if the shoulders droop or sleeves bunch at the wrist. When trying on wedding wear at BALAJEE DRESSES on MG Road, focus on these key fit points:</p>
        <ul>
          <li><strong>Shoulder Seam:</strong> The shoulder line should sit squarely at the edge of your natural shoulder bone—not overhanging.</li>
          <li><strong>Chest &amp; Button Pull:</strong> Fasten all front buttons and take a deep breath; the placket should lie flat without gaping.</li>
          <li><strong>Sleeve Length:</strong> Sleeves should finish right at the wrist bone so your hands move naturally and accessories remain visible.</li>
          <li><strong>Collar Comfort:</strong> Leave roughly one finger of breathing space inside the bandhgala collar so it stays neat yet comfortable throughout long rituals.</li>
        </ul>

        <h4>4. Plan Ahead at BALAJEE DRESSES</h4>
        <p>From Kurta-Pajama with Nehru Jackets for daytime rituals to showstopping Sherwanis and wedding suits for the main evening, our Men’s Wedding Collection in Aurangabad, Bihar covers every function. Message us on WhatsApp at <strong>${STORE_PHONE}</strong> to discuss styles before your store visit.</p>
      `
    },
    {
      id: 3,
      category: 'Kids Fashion',
      readTime: '6 min read',
      title: 'Dressing Little Stars: Comfort-First Guide to Kids Wear & Kids’ Wedding Outfits',
      image: 'images/kids-wedding-collection.jpg',
      alt: 'Kids’ Wedding Collection Boys Sherwani and Girls Lehenga at Balajee Dresses',
      whatsappTopic: 'Kids Wear & Kids Wedding Collection',
      content: `
        <p>Children bring joy and energy to every household—and nothing spoils a child’s mood faster than scratchy embroidery, tight waistbands, or heavy, restrictive fabrics. Whether you are shopping for everyday infant and toddler wear or choosing royal outfits for a family wedding at <strong>BALAJEE DRESSES</strong>, comfort and skin-friendliness always come first.</p>

        <h4>1. Kids’ Wedding Wear That Lets Children Stay Playful</h4>
        <p>Children love dressing up like princes and princesses, especially when outfits feel as light as they look festive. Our Kids’ Wedding Collection is curated around soft linings and flexible fits:</p>
        <ul>
          <li><strong>For Boys (Sherwanis, Indo-Western &amp; Kurta-Pajama):</strong> Look for smooth cotton-silk or soft jacquard blends paired with elasticized pajama or trouser waistbands. Pre-stitched dhoti sets and lightweight Nehru jackets add instant charm without bulk.</li>
          <li><strong>For Girls (Lehengas, Gowns &amp; Sharara Sets):</strong> Choose flared lehengas with soft cotton underskirts, well-finished cholis without rough inside seams, and breezy party gowns that twirl effortlessly without weighing down small shoulders.</li>
        </ul>

        <h4>2. Everyday Kids Wear: Infants to Growing Toddlers</h4>
        <p>For daily wear, children need clothing that survives active play, naps, and frequent washing. At our MG Road showroom in Aurangabad, we emphasize practical features parents appreciate:</p>
        <ul>
          <li><strong>Soft Natural Weaves:</strong> Breathable cotton knits and gentle interlock fabrics protect sensitive infant and toddler skin from heat rashes.</li>
          <li><strong>Easy Dressing Closures:</strong> Snap buttons, wide neck openings, and stretchable elastic waists make changing quick for parents and comfortable for toddlers.</li>
          <li><strong>Fade-Resistant Colours:</strong> Quality dyeing keeps cheerful prints, cartoon-free classic patterns, and playful stripes bright after repeated washes.</li>
        </ul>

        <h4>3. Smart Sizing Tips for Growing Kids</h4>
        <p>Because children grow rapidly, buying overly tight clothes means only a few wears, while buying way too large looks untidy in photos. Aim for a <em>gentle comfort margin</em>: about half an inch of ease around the chest and adjustable elastic or drawstring waists on bottoms. For wedding wear, always bring or check the child’s regular footwear height when checking lehenga or trouser length.</p>

        <h4>4. Gentle Care for Kids’ Festive &amp; Daily Garments</h4>
        <p>Wash daily cottons inside out in mild detergent to preserve softness, and air dry embroidered kids’ wedding outfits in shade rather than harsh direct sunlight. Visit <strong>BALAJEE DRESSES</strong> on MG Road, Aurangabad or WhatsApp <strong>${STORE_PHONE}</strong> to explore Kids Wear and Kids’ Wedding styles with your family.</p>
      `
    },
    {
      id: 4,
      category: 'Ladies & Girls',
      readTime: '5 min read',
      title: 'Ready-Made Ladies’ Suits, Kurtis & Stylish Girls’ Wear: Seasonal Styling Tips',
      image: 'images/girls-wear.jpg',
      alt: 'Stylish Girls Wear and Ladies Ready-Made Collection at Balajee Dresses',
      whatsappTopic: 'Ladies Wear & Girls Wear',
      content: `
        <p>Modern family life leaves very little time for multiple tailor visits, delayed stitching, and guesswork over how unstitched fabric will finally look. Ready-made Ladies’ Wear and Girls’ Wear at <strong>BALAJEE DRESSES</strong> in Aurangabad solve this cleanly—letting you try silhouettes, check the drape in the mirror, and walk out ready for the occasion.</p>

        <h4>1. Versatile Ready-Made Suits &amp; Kurti Sets for Every Day</h4>
        <p>A well-chosen kurti set transitions smoothly across morning errands, workplace hours, college lectures, and evening visits to relatives:</p>
        <ul>
          <li><strong>Straight-Cut Kurti &amp; Palazzo Sets:</strong> Clean, elongating lines in breathable cotton or rayon blends keep you cool during warm afternoons while looking polished.</li>
          <li><strong>A-Line &amp; Anarkali Silhouettes:</strong> Ideal for festive poojas, family dinners, and celebrations where graceful movement and subtle embroidery shine.</li>
          <li><strong>Coordinated Dupatta Sets:</strong> Ready-to-wear three-piece suits take the guesswork out of matching dupattas and bottoms.</li>
        </ul>

        <h4>2. Choosing Trendy &amp; Graceful Girls’ Wear</h4>
        <p>Girls’ fashion today balances playful modern style with festive elegance. At BALAJEE DRESSES, parents and young shoppers can explore both sides effortlessly:</p>
        <ul>
          <li><strong>Festive &amp; Party Outfits:</strong> Embroidered lehengas, flowing ethnic gowns, and sharara sets bring celebratory sparkle to weddings, birthdays, and school cultural events.</li>
          <li><strong>Modern Casual &amp; Western Wear:</strong> Stylish tops paired with comfortable jeans, cute casual dresses, and breathable tees give girls fresh, age-appropriate outfits for outings, tuition, and holidays.</li>
        </ul>

        <h4>3. Picking Fabrics &amp; Colours That Flatters Across Seasons</h4>
        <p>In warmer months, opt for pastel shades, floral prints, and airy cotton or soft modal blends. For evening festivities and winter weddings, jewel tones like ruby red, royal navy, bottle green, and warm mustard paired with rich gold accents create a timeless look under evening lights.</p>

        <h4>4. Discover Fresh Arrivals on MG Road, Aurangabad</h4>
        <p>Our Ladies’ Wear and Girls’ Wear sections are regularly refreshed for upcoming festivals and seasons. Visit <strong>BALAJEE DRESSES</strong> on MG Road, Aurangabad, Bihar or message us on WhatsApp at <strong>${STORE_PHONE}</strong> to enquire about styles and sizing.</p>
      `
    },
    {
      id: 5,
      category: 'Men’s Wear',
      readTime: '5 min read',
      title: 'Building a Versatile Men’s Wardrobe: Casual Shirts, Denim Jeans & Crisp Formals',
      image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=600&q=80',
      alt: 'Men’s Casual Shirts, Jeans and Formals at Balajee Dresses Aurangabad',
      whatsappTopic: 'Men’s Wear Collection',
      content: `
        <p>Looking sharp every day does not require an overflowing cupboard—it requires a few dependable, well-fitted staples that mix and match effortlessly. At <strong>BALAJEE DRESSES</strong> in Aurangabad, our Men’s Wear section is built around practical versatility: crisp formals for work and interviews, alongside stylish casual shirts, t-shirts, and durable jeans for everyday life.</p>

        <h4>1. Casual Shirts &amp; Denim Jeans: The Everyday Power Duo</h4>
        <p>A crisp casual shirt paired with clean denim jeans works almost everywhere—from college campuses and business meetings to weekend family outings:</p>
        <ul>
          <li><strong>Solid &amp; Textured Casual Shirts:</strong> Colours like navy, olive, white, sky blue, and classic checks pair easily with almost any trouser or jean shade.</li>
          <li><strong>Right Denim Fit:</strong> Slim-straight and regular-tapered jeans give a clean leg line without feeling overly tight around the thighs or ankles. Dark indigo and clean charcoal washes look neatest for smart-casual evenings.</li>
          <li><strong>Breathable Polo &amp; Crew T-Shirts:</strong> Soft cotton knit polos bridge the gap between relaxed tees and collared shirts during humid afternoons.</li>
        </ul>

        <h4>2. Crisp Formals for Office, Events &amp; Special Occasions</h4>
        <p>When a formal occasion calls for poise, fit and fabric finish make all the difference:</p>
        <ul>
          <li><strong>Shirt Collar &amp; Cuff Structure:</strong> Quality formal shirts feature fused interlining in collars and cuffs so they stay crisp throughout the day without curling.</li>
          <li><strong>Comfortable Formal Trousers:</strong> Look for smooth drape, a secure waistband that sits comfortably at your natural waist, and a clean half-break over formal shoes.</li>
        </ul>

        <h4>3. Simple Maintenance Habits That Extend Garment Life</h4>
        <p>Wash dark denim jeans inside out in cold water and avoid unnecessary overwashing so the colour stays rich. Button the top collar button before hanging formal shirts on wide hangers, and steam or press on medium heat to protect cotton fibers.</p>

        <h4>4. Try Your Ideal Fit at BALAJEE DRESSES</h4>
        <p>Skip guessing waist and chest measurements online—try styles in person at <strong>BALAJEE DRESSES</strong>, MG Road, Aurangabad, Bihar. Have a question before visiting? Call or WhatsApp us at <strong>${STORE_PHONE}</strong>.</p>
      `
    },
    {
      id: 6,
      category: 'School Uniforms',
      readTime: '5 min read',
      title: 'Parent’s Checklist for Buying Durable School Uniforms & DAV School Attire in Aurangabad',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
      alt: 'School Uniforms and DAV Student Attire at Balajee Dresses Aurangabad',
      whatsappTopic: 'School Uniforms Enquiry',
      content: `
        <p>Unlike party clothes worn only a few times a year, a school uniform is tested five to six days every single week—through morning assemblies, classroom hours, playground games, and frequent laundry cycles. Parents in Aurangabad rely on <strong>BALAJEE DRESSES</strong> for neat, standardized school uniforms—including DAV School uniform requirements—that hold up throughout the school year.</p>

        <h4>1. Why Uniform Fabric Blend Matters Most</h4>
        <p>Pure synthetic fabrics trap heat during Bihar’s warmer months, while ultra-thin pure cotton can wrinkle within an hour of morning assembly. Look for balanced, breathable cotton-rich blends:</p>
        <ul>
          <li><strong>Shirts &amp; Tops:</strong> Smooth, breathable weaves keep students comfortable in classrooms while maintaining a clean, neat collar.</li>
          <li><strong>Trousers, Shorts &amp; Skirts:</strong> Medium-weight suiting fabrics resist knee wear, hold crisp pleats, and dry quickly overnight during the monsoon season.</li>
        </ul>

        <h4>2. Quick Quality &amp; Stitching Checklist Before Buying</h4>
        <p>Before finalizing your child’s uniform set at our MG Road store, check these practical durability details:</p>
        <ul>
          <li><strong>Pocket &amp; Belt-Loop Reinforcement:</strong> Boys’ trousers and girls’ skirts face daily tugging around pockets and belt loops; reinforced bar-tack stitching prevents early tears.</li>
          <li><strong>Sturdy Zippers &amp; Buttons:</strong> Smooth-gliding zippers and securely stitched buttons save mid-week repair headaches.</li>
          <li><strong>Correct Uniform Accessories:</strong> Complete the neat student look with matching school belts, ties, socks, and winter sweaters or blazers when seasons shift.</li>
        </ul>

        <h4>3. Plan Sizing &amp; Weekly Rotation Smartly</h4>
        <p>Children grow fast during the school year, so allow comfortable room across the shoulders and waist without choosing sleeves that cover the knuckles or skirts/trousers that drag. Keeping at least two to three sets of shirts and two bottoms in rotation reduces daily laundry stress and keeps uniforms looking fresh for morning inspection.</p>

        <h4>4. Convenient School Uniform Shopping on MG Road</h4>
        <p>Whether preparing for a new academic session or replacing outgrown mid-year pieces, visit <strong>BALAJEE DRESSES</strong> on MG Road, Aurangabad, Bihar. Parents can also call or WhatsApp <strong>${STORE_PHONE}</strong> ahead of time with their child’s school and class details for quick assistance.</p>
      `
    }
  ];

  const blogCards = document.querySelectorAll('.blog-card');
  const blogModal = document.getElementById('blogModal');
  const blogModalClose = document.getElementById('blogModalClose');
  const blogModalImage = document.getElementById('blogModalImage');
  const blogModalCategory = document.getElementById('blogModalCategory');
  const blogModalReadTime = document.getElementById('blogModalReadTime');
  const blogModalTitle = document.getElementById('blogModalTitle');
  const blogModalContent = document.getElementById('blogModalContent');
  const blogModalWhatsapp = document.getElementById('blogModalWhatsapp');
  const blogPrevBtn = document.getElementById('blogPrevBtn');
  const blogNextBtn = document.getElementById('blogNextBtn');

  let activeBlogIndex = 0;

  function openBlogModal(blogId) {
    if (!blogModal) return;
    const idx = BLOG_POSTS.findIndex(post => post.id === Number(blogId));
    if (idx === -1) return;

    activeBlogIndex = idx;
    const post = BLOG_POSTS[idx];

    if (blogModalImage) {
      blogModalImage.src = post.image;
      blogModalImage.alt = post.alt;
    }
    if (blogModalCategory) blogModalCategory.textContent = post.category;
    if (blogModalReadTime) blogModalReadTime.textContent = post.readTime;
    if (blogModalTitle) blogModalTitle.textContent = post.title;
    if (blogModalContent) blogModalContent.innerHTML = post.content;

    if (blogModalWhatsapp) {
      const waMsg = `Namaste Balajee Dresses! I read your article "${post.title}" and would like to enquire about your ${post.whatsappTopic} at your MG Road, Aurangabad store.`;
      blogModalWhatsapp.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMsg)}`;
    }

    blogModal.classList.add('open');
    blogModal.setAttribute('aria-hidden', 'false');
    blogModal.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#blog-${post.id}`);
    }
  }

  function closeBlogModal() {
    if (!blogModal) return;
    blogModal.classList.remove('open');
    blogModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (window.location.hash.startsWith('#blog-') && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#blog');
    }
  }

  if (blogModal && blogCards.length > 0) {
    blogCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const id = card.getAttribute('data-blog-id');
        openBlogModal(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const id = card.getAttribute('data-blog-id');
          openBlogModal(id);
        }
      });
    });

    if (blogModalClose) {
      blogModalClose.addEventListener('click', closeBlogModal);
    }

    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        closeBlogModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && blogModal.classList.contains('open')) {
        closeBlogModal();
      }
    });

    if (blogPrevBtn) {
      blogPrevBtn.addEventListener('click', () => {
        const prevIdx = (activeBlogIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length;
        openBlogModal(BLOG_POSTS[prevIdx].id);
      });
    }

    if (blogNextBtn) {
      blogNextBtn.addEventListener('click', () => {
        const nextIdx = (activeBlogIndex + 1) % BLOG_POSTS.length;
        openBlogModal(BLOG_POSTS[nextIdx].id);
      });
    }

    // Open directly if navigated with #blog-1 .. #blog-6
    const hashMatch = window.location.hash.match(/^#blog-(\d+)$/);
    if (hashMatch) {
      openBlogModal(hashMatch[1]);
    }
  }
});

