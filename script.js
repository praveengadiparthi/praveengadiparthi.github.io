/* ============================================================
   Portfolio — script.js
   Praveen Gadiparthi | Cloud & DevOps Engineer
   ============================================================ */

/* =============================================
   Mobile Menu
   ============================================= */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');
const navOverlay = document.createElement('div');

navOverlay.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.5);
    backdrop-filter:blur(2px);z-index:1040;display:none;
`;
document.body.appendChild(navOverlay);

function openMenu() {
    hamburger.classList.add('active');
    navLinks.classList.add('open');
    navOverlay.style.display = 'block';
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    navOverlay.style.display = 'none';
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* =============================================
   Navbar — background on scroll
   ============================================= */
const navbar = document.getElementById('navbar');

function handleNavbar() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleNavbar, { passive: true });
handleNavbar();

/* =============================================
   Active Nav Link — highlight on scroll
   ============================================= */
const sections     = Array.from(document.querySelectorAll('section[id]'));
const allNavLinks  = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollMid = window.scrollY + window.innerHeight / 3;
    let current = sections[0].id;

    for (const section of sections) {
        if (section.offsetTop <= scrollMid) {
            current = section.id;
        }
    }
    allNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

/* =============================================
   Typing Effect
   ============================================= */
const typingStrings = [
    'Cloud & DevOps Engineer',
    'AWS Solutions Architect',
    'Kubernetes Administrator',
    'Terraform Expert',
    'GenAI Workloads Specialist',
    'CI/CD Pipeline Engineer',
    'Multi-Cloud Architect',
];

let strIdx    = 0;
let charIdx   = 0;
let deleting  = false;
const typingEl = document.getElementById('typing-text');

function typeEffect() {
    const current = typingStrings[strIdx];

    if (deleting) {
        typingEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
    }

    let delay = deleting ? 55 : 95;

    if (!deleting && charIdx === current.length) {
        delay     = 2200;
        deleting  = true;
    } else if (deleting && charIdx === 0) {
        deleting  = false;
        strIdx    = (strIdx + 1) % typingStrings.length;
        delay     = 500;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

/* =============================================
   Intersection Observer — Fade-In Animations
   ============================================= */
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const siblings = Array.from(el.parentElement.children).filter(c =>
            c.classList.contains('fade-in')
        );
        const idx = siblings.indexOf(el);

        setTimeout(() => el.classList.add('visible'), idx * 110);
        fadeObserver.unobserve(el);
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
});

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* =============================================
   Contact Form — mailto
   ============================================= */
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'Portfolio Contact';
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href =
        `mailto:praveengadiparthi007@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    const original = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Opening Email Client…';
    submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = original;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        contactForm.reset();
    }, 3500);
});

/* =============================================
   Cursor Particle Effect
   ============================================= */
const canvas = document.getElementById('cursor-canvas');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];

document.addEventListener('mousemove', e => {
    if (Math.random() > 0.45) return;
    const hue = Math.random() < 0.5 ? 250 : 320;
    particles.push({
        x:       e.clientX,
        y:       e.clientY,
        size:    Math.random() * 4.5 + 1,
        speedX:  (Math.random() - 0.5) * 2.5,
        speedY:  (Math.random() - 0.5) * 2.5 - 0.8,
        life:    1,
        hue,
    });
});

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.life > 0.01);

    for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.life})`;
        ctx.fill();

        p.x     += p.speedX;
        p.y     += p.speedY;
        p.life  -= 0.022;
        p.size  *= 0.97;
    }

    requestAnimationFrame(animateParticles);
}
animateParticles();

/* =============================================
   Parallax — hero on scroll
   ============================================= */
const heroContent      = document.querySelector('.hero-content');
const heroPhotoWrapper = document.querySelector('.hero-photo-wrapper');

function parallaxHero() {
    const sy = window.scrollY;
    const vh = window.innerHeight;
    if (sy > vh) return;
    if (heroContent)      heroContent.style.transform      = `translateY(${sy * 0.12}px)`;
    if (heroPhotoWrapper) heroPhotoWrapper.style.transform = `translateY(${sy * 0.08}px)`;
}
window.addEventListener('scroll', parallaxHero, { passive: true });

/* =============================================
   Smooth Scroll for all # links
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* =============================================
   Profile Photo — fallback to placeholder
   ============================================= */
(function () {
    const test = new Image();
    test.onload = () => {
        document.getElementById('photo-placeholder').style.display = 'none';
    };
    test.onerror = () => {
        const el = document.getElementById('photo-content');
        if (el) el.style.backgroundImage = 'none';
        const ph = document.getElementById('photo-placeholder');
        if (ph) ph.style.display = 'flex';
    };
    test.src = 'profile-photo.jpg';
})();

/* =============================================
   Footer Year
   ============================================= */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =============================================
   Skill Tag Hover — rainbow pulse on click
   ============================================= */
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transition = 'none';
        tag.style.background = 'linear-gradient(135deg, rgba(102,126,234,0.3), rgba(240,147,251,0.3))';
        tag.style.borderColor = 'rgba(240,147,251,0.5)';
        tag.style.color = '#fff';
        setTimeout(() => {
            tag.style.transition = '';
            tag.style.background = '';
            tag.style.borderColor = '';
            tag.style.color = '';
        }, 600);
    });
});

/* =============================================
   Tech Badge Tooltip (cert cards)
   ============================================= */
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'default';
    });
});
