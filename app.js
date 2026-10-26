// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Change button text
        if (navMenu.classList.contains('active')) {
            navToggle.textContent = 'CLOSE';
        } else {
            navToggle.textContent = 'MENU';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.textContent = 'MENU';
        });
    });
}

// Smooth scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add typing effect to terminal cursor (enhanced)
function enhanceTerminal() {
    const cursor = document.querySelector('.typing-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// Random glitch effect on logo
function glitchEffect() {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        setInterval(() => {
            if (Math.random() < 0.05) {
                logo.style.textShadow = `
                    ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 var(--neon-pink),
                    ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 var(--neon-cyan)
                `;
                setTimeout(() => {
                    logo.style.textShadow = `
                        0 0 10px var(--neon-cyan),
                        0 0 20px var(--neon-cyan)
                    `;
                }, 100);
            }
        }, 2000);
    }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    enhanceTerminal();
    glitchEffect();
    
    // Add subtle flicker to cards
    const cards = document.querySelectorAll('.project-card, .about-card, .contact-card');
    cards.forEach((card, index) => {
        setInterval(() => {
            if (Math.random() < 0.02) {
                card.style.opacity = '0.9';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50);
            }
        }, 3000 + index * 500);
    });
});

// Console easter egg
console.log('%c[ororaiss.exe] SYSTEM INITIALIZED', 'color: #00ff00; font-family: monospace; font-size: 14px; text-shadow: 0 0 10px #00ff00;');
console.log('%c> Welcome to the retro portfolio...', 'color: #00ffff; font-family: monospace;');
console.log('%c> Type "help" for available commands', 'color: #ffff00; font-family: monospace;');
