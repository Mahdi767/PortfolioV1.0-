// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleBtnMobile = document.getElementById('themeToggleMobile');
    
    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (themeToggleBtnMobile) {
        themeToggleBtnMobile.addEventListener('click', toggleTheme);
    }

    // 2. Scroll Reveal Animation Setup
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // threshold before it activates

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Run once on load
    revealOnScroll();
    
    // Attach to scroll event
    window.addEventListener('scroll', revealOnScroll);

    // 3. Navbar Styling on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm', 'border-b', 'border-brand-lightBorder', 'dark:border-brand-darkBorder');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-3');
        } else {
            navbar.classList.remove('shadow-sm', 'border-b', 'border-brand-lightBorder', 'dark:border-brand-darkBorder');
            navbar.classList.remove('py-3');
            navbar.classList.add('py-4');
        }
    });

    // 4. Smooth offset scrolling for anchor links 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70; // approximate height of navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
