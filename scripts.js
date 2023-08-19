document.addEventListener("DOMContentLoaded", function () {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0);
    }

    function checkFadeInSection() {
        document.querySelectorAll('.fade-in-section').forEach(section => {
            if (isElementInViewport(section)) {
                section.style.opacity = 1;
            }
        });
    }

    function smoothScrolling(element, event) {
        event.preventDefault();
        const targetSection = document.querySelector(element.getAttribute(event.target.hasAttribute('href') ? 'href' : 'data-section'));
        targetSection.scrollIntoView({behavior: 'smooth'});
    }

    document.querySelectorAll('.nav-link, .icons-container .section-icon').forEach(el => {
        el.addEventListener('click', (event) => smoothScrolling(el, event));
    });

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // Scrolling logic
    let lastSectionName = "Home";
    let isUsingFirstText = true;

    window.addEventListener("scroll", function () {
        checkFadeInSection();
        const scrollPercentage = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);

        const progressBar = document.querySelector('.progress-fill');
        progressBar.style.width = `${scrollPercentage * 100}%`;

        let currentSection = '#home';
        ['#home', '#about', '#experience', '#projects', '#contact'].forEach(section => {
            const elem = document.querySelector(section);
            if (elem && elem.getBoundingClientRect().top < window.innerHeight / 2) {
                currentSection = section;
            }
        });

        document.querySelectorAll('.debuff-icon, .section-icon').forEach(icon => {
            icon.classList.toggle('active', icon.getAttribute('data-section') === currentSection);
        });

        const newSectionName = currentSection.slice(1).charAt(0).toUpperCase() + currentSection.slice(2);

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

        const r = Math.floor(255 - (scrollPercentage * (255 - 212)));
        const g = Math.floor(112 - (scrollPercentage * 112));
        const b = Math.floor(67 - (scrollPercentage * 67));
        document.querySelector(".content-wrapper").style.background = `linear-gradient(to bottom, #ff7043, rgb(${r},${g},${b}))`;
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

function updateJobDescription(jobKey) {
    const descriptionDiv = document.getElementById('job-description');
    if (descriptionDiv && jobDescriptions[jobKey]) {
        // Hide the descriptionDiv first
        descriptionDiv.style.opacity = '0';
        descriptionDiv.style.transform = 'translateX(10%)';

        setTimeout(() => {
            // Change its content
            descriptionDiv.innerHTML = jobDescriptions[jobKey];
            // Show the div smoothly
            descriptionDiv.style.opacity = '1';
            descriptionDiv.style.transform = 'translateX(0)';
            descriptionDiv.classList.add('showing');
        }, 300);  // This delay should match the transition duration in CSS
    }
}

const jobDescriptions = {
    'unity': `
        <h3>Unity Developer <span>@ Play Meow</span></h3>
        <p><small>Aug 2023 - Present</small></p>
        <p>Led the transformation of game data from PlayMeow's editor to Unity, enabling the execution of 2D visual novel games.</p>
        <p>Developed the mobile game interface tailored for visual novels, optimizing game effects and rendering within Unity.</p>
        <p>Authored modular and extensible code for future feature integrations and ensured seamless third-party package integration.</p>
        <p>Employed Unity's tools and Git version control practices to enhance game capabilities and maintain code integrity.</p>
    `,
    'tutor': `
        <h3>Computer Science Teacher's Assistant <span>@ UC San Diego</span></h3>
        <p><small>Sep 2021 - Present</small></p>
        <p>Assisted instructors in proctoring exams, grading quizzes and programming assignments, and addressing student inquiries on the Piazza class forum.</p>
        <p>Conducted lab sessions to support students in debugging Java code and navigating the Unix command line.</p>
        <p>Facilitated review sessions and discussions for over 300 students to prepare for quizzes and weekly programming assignments.</p>
    `,
    'cosmos': `
        <h3>COSMOS Cluster Assistant <span>@ UC San Diego</span></h3>
        <p><small>Jun 2023 - Aug 2023</small></p>
        <p>Collaborated with the COSMOS cluster lead faculty to support the implementation of academic course content during the COSMOS Summer 2023 program. <\p>
        <p>Assisted with lab experiences and provided essential support to lead faculty members. <\p>
        <p>Coordinated with COSMOS Program representatives to ensure smooth execution of assigned cluster courses, including content delivery and resource management.<\p>
    `
};

// Add event listeners for job list items
document.querySelectorAll('#job-list li').forEach(li => {
    li.addEventListener('click', function() {
        updateJobDescription(li.getAttribute('data-job'));
    });
});

// Function to update the highlighted experience
function updateHighlightedExperience() {
    const jobList = document.querySelector("#job-list");
    const experiences = jobList.querySelectorAll("li");

    experiences.forEach(exp => {
        exp.classList.remove("selected-experience");
    });

    let selectedExperience = jobList.querySelector("[data-job='unity']") || experiences[0];
    selectedExperience.classList.add("selected-experience");
}

// Event listener to change highlighted experience on click
document.querySelector("#job-list").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        const jobList = document.querySelector("#job-list");
        const experiences = jobList.querySelectorAll("li");

        experiences.forEach(exp => {
            exp.classList.remove("selected-experience");
        });

        event.target.classList.add("selected-experience");
    }
});

// Call the function on page load to set the default highlighted experience
document.addEventListener("DOMContentLoaded", function() {
    updateHighlightedExperience();
});

document.addEventListener("DOMContentLoaded", function() {
    updateHighlightedExperience();
    updateJobDescription('unity'); // This will set the default description to "Play Meow"
});
