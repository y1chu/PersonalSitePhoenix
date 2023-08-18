document.addEventListener("DOMContentLoaded", function() {
    checkFadeInSection();

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0);
    }

    function checkFadeInSection() {
        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = 1;
            }
        });
    }

    function smoothScrolling(element, event) {
        event.preventDefault();
        const targetSection = document.querySelector(element.getAttribute(event.target.hasAttribute('href') ? 'href' : 'data-section'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listeners for smooth scrolling
    document.querySelectorAll('.nav-link, .icons-container .section-icon').forEach(el => {
        el.addEventListener('click', (event) => smoothScrolling(el, event));
    });

    let lastSectionName = "Home";
    let isUsingFirstText = true;

    window.addEventListener("scroll", function() {
        checkFadeInSection();
        const scrollPercentage = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);

        // Progress bar update
        const progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = `${scrollPercentage * 100}%`;

        const sections = ['#home', '#about', '#experience', '#projects', '#contact'];
        let currentSection = sections[0];

        sections.forEach(section => {
            const elem = document.querySelector(section);
            if (elem.getBoundingClientRect().top < window.innerHeight / 2) {
                currentSection = section;
            }
        });

        // Update icons
        document.querySelectorAll('.debuff-icon, .section-icon').forEach(icon => {
            icon.classList.toggle('active', icon.getAttribute('data-section') === currentSection);
        });

        const newSectionName = currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2);

        // Update section text
        if (lastSectionName !== newSectionName) {
            const sectionTextElement = document.getElementById(isUsingFirstText ? 'current-section-1' : 'current-section-2');
            const otherSectionTextElement = document.getElementById(isUsingFirstText ? 'current-section-2' : 'current-section-1');

            sectionTextElement.style.opacity = 0;
            otherSectionTextElement.textContent = newSectionName;
            otherSectionTextElement.style.opacity = 1;

            isUsingFirstText = !isUsingFirstText;
            lastSectionName = newSectionName;
        }

        // Update gradient
        const r = Math.floor(255 - (scrollPercentage * (255 - 212)));
        const g = Math.floor(112 - (scrollPercentage * 112));
        const b = Math.floor(67 - (scrollPercentage * 67));

        document.querySelector(".content-wrapper").style.background = `linear-gradient(to bottom, #ff7043, rgb(${r},${g},${b}))`;

        // Check fade-in sections
        checkFadeInSection();
    });

    // Homepage fade-in
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.style.opacity = 0;
        homeSection.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            homeSection.style.opacity = 1;
        }, 100);
    }
    // Particles.js configuration for fiery background effect
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#ff0000', '#ff7f00', '#ffff00', '#7fff00']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'grab'
                },
                onclick: {
                    enable: false,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

});



document.addEventListener("DOMContentLoaded", function() {
    // Get all the sections to be observed
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    checkFadeInSection();

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0);
    }

    function checkFadeInSection() {
        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = 1;
            }
        });
    }

    function smoothScrolling(element, event) {
        event.preventDefault();
        const targetSection = document.querySelector(element.getAttribute(event.target.hasAttribute('href') ? 'href' : 'data-section'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listeners for smooth scrolling
    document.querySelectorAll('.nav-link, .icons-container .section-icon').forEach(el => {
        el.addEventListener('click', (event) => smoothScrolling(el, event));
    });

    let lastSectionName = "Home";
    let isUsingFirstText = true;

    window.addEventListener("scroll", function() {
        checkFadeInSection();
        const scrollPercentage = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);

        // Progress bar update
        const progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = `${scrollPercentage * 100}%`;

        const sections = ['#home', '#about', '#experience', '#projects', '#contact'];
        let currentSection = sections[0];

        sections.forEach(section => {
            const elem = document.querySelector(section);
            if (elem && elem.getBoundingClientRect().top < window.innerHeight / 2) {
                currentSection = section;
            }
        });

        // Update icons
        document.querySelectorAll('.debuff-icon, .section-icon').forEach(icon => {
            icon.classList.toggle('active', icon.getAttribute('data-section') === currentSection);
        });

        const newSectionName = currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2);

        // Update section text
        if (lastSectionName !== newSectionName) {
            const sectionTextElement = document.getElementById(isUsingFirstText ? 'current-section-1' : 'current-section-2');
            const otherSectionTextElement = document.getElementById(isUsingFirstText ? 'current-section-2' : 'current-section-1');

            if (sectionTextElement) {
                sectionTextElement.style.opacity = 0;
            }

            if (otherSectionTextElement) {
                otherSectionTextElement.textContent = newSectionName;
                otherSectionTextElement.style.opacity = 1;
            }

            isUsingFirstText = !isUsingFirstText;
            lastSectionName = newSectionName;
        }

        // Update gradient
        const r = Math.floor(255 - (scrollPercentage * (255 - 212)));
        const g = Math.floor(112 - (scrollPercentage * 112));
        const b = Math.floor(67 - (scrollPercentage * 67));

        document.querySelector(".content-wrapper").style.background = `linear-gradient(to bottom, #ff7043, rgb(${r},${g},${b}))`;

        // Check fade-in sections
        checkFadeInSection();
    });

    // Homepage fade-in
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.style.opacity = 0;
        homeSection.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            if (homeSection) {
                homeSection.style.opacity = 1;
            }
        }, 100);
    }
});
