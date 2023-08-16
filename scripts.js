document.addEventListener("DOMContentLoaded", function() {

    // Event listener for smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const sectionIcons = document.querySelectorAll('.icons-container .section-icon');
    sectionIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const targetSection = document.querySelector(this.getAttribute('data-section'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });


    let lastSectionName = "Home";
    let isUsingFirstText = true;

    window.addEventListener("scroll", function() {
        let scrollPercentage = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
        const progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = `${scrollPercentage * 100}%`;

        // Update active debuff icon
        const sections = ['#home', '#about', '#experience', '#projects', '#contact'];
        let currentSection = sections[0];
        for (let section of sections) {
            const elem = document.querySelector(section);
            const rect = elem.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2) {
                currentSection = section;
            }
        }

        const debuffIcons = document.querySelectorAll('.debuff-icon');
        debuffIcons.forEach(icon => {
            if (icon.getAttribute('data-section') === currentSection) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        });

        // Update active section icon
        const sectionIcons = document.querySelectorAll('.section-icon');
        sectionIcons.forEach(icon => {
            if (icon.getAttribute('data-section') === currentSection) {
                icon.classList.add('active');
            } else {
                icon.classList.remove('active');
            }
        });

        let sectionTextElement1 = document.getElementById('current-section-1');
        let sectionTextElement2 = document.getElementById('current-section-2');
        let newSectionName = currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2);

        if (lastSectionName !== newSectionName) {
            if (isUsingFirstText) {
                sectionTextElement1.style.opacity = 0;
                sectionTextElement2.textContent = newSectionName;
                sectionTextElement2.style.opacity = 1;
            } else {
                sectionTextElement2.style.opacity = 0;
                sectionTextElement1.textContent = newSectionName;
                sectionTextElement1.style.opacity = 1;
            }
            isUsingFirstText = !isUsingFirstText;
            lastSectionName = newSectionName;
        }

        // Calculate the gradient end color
        let r = Math.floor(255 - (scrollPercentage * (255 - 212)));
        let g = Math.floor(112 - (scrollPercentage * 112));
        let b = Math.floor(67 - (scrollPercentage * 67));

        let newColor = `rgb(${r},${g},${b})`;
        document.querySelector(".content-wrapper").style.background = `linear-gradient(to bottom, #ff7043, ${newColor})`;
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
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


