
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobileMenu");
    const burgerBtn = document.getElementById("burgerBtn");
    const burgerIcon = document.getElementById("burgerIcon");
    const crossIcon = document.getElementById("crossIcon");
    const links = navbar?.querySelectorAll("a") || [];
    const navLinks = document.querySelectorAll(".nav-link");

    // ✅ Sections + both footers with ID "contact"
    const sections = document.querySelectorAll("section, footer[id='contact']");

    // ✅ Set default navbar color for mobile on load
    if (window.innerWidth < 768) {
        navbar.style.background = "white";
        navbar.style.color = "#000";
        links.forEach(link => link.style.color = "#000");
    }

    // ✅ Scroll event for navbar styling and active link
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "white";
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            navbar.style.color = "#333";
            links.forEach(link => link.style.color = "#333");
        } else {
            if (window.innerWidth < 768) {
                navbar.style.background = "white";
                navbar.style.color = "#000";
                links.forEach(link => link.style.color = "#000");
            } else {
                navbar.style.background = "transparent";
                navbar.style.boxShadow = "none";
                navbar.style.color = "#fff";
                links.forEach(link => link.style.color = "white");
            }
        }

        if (window.innerWidth < 768 && mobileMenu?.classList.contains("translate-y-0")) {
            links.forEach(link => link.style.color = "#000");
        }

        if (sections.length > 0) {
            activateLink();
        }
    });

    // ✅ Burger menu toggle
    if (burgerBtn && burgerIcon && crossIcon && mobileMenu) {
        burgerBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("translate-y-0");
            mobileMenu.classList.toggle("-translate-y-full");
            burgerIcon.classList.toggle("hidden");
            crossIcon.classList.toggle("hidden");

            if (window.innerWidth < 768) {
                links.forEach(link => link.style.color = "#000");
            }
        });

        crossIcon.addEventListener("click", () => {
            mobileMenu.classList.add("-translate-y-full");
            mobileMenu.classList.remove("translate-y-0");
            burgerIcon.classList.remove("hidden");
            crossIcon.classList.add("hidden");

            if (window.innerWidth < 768) {
                links.forEach(link => link.style.color = "#000");
            }
        });
    }

    // ✅ Highlight active link based on scroll position
    function activateLink() {
        let currentSection = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY + window.innerHeight / 2 >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            link.classList.remove("active");

            if (currentSection && href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });

        if (window.scrollY === 0 && navLinks.length > 0) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[0].classList.add("active");
        }
    }

    // ✅ Initial run
    if (sections.length > 0) {
        activateLink();
    }
});


// greetings 
// timing greet
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Adjust for India Standard Time (IST) which is UTC+5:30
    const utcHour = now.getUTCHours();
    const utcMinute = now.getUTCMinutes();
    let indiaHour = (utcHour + 5) % 24;
    let indiaMinute = utcMinute + 30;

    if (indiaMinute >= 60) {
        indiaHour = (indiaHour + 1) % 24;
        indiaMinute -= 60;
    }

    if (indiaHour >= 12 && indiaHour < 17) { // 12:00 PM to 4:59 PM IST
        return "Good Afternoon";
    } else if (indiaHour >= 5 && indiaHour < 12) { // 5:00 AM to 11:59 AM IST
        return "Good Morning";
    } else { // 5:00 PM to 4:59 AM IST (next day)
        return "Good Evening";
    }
}

// Get the greeting and display it (e.g., in a console or on a webpage)
const greeting = getGreeting();
console.log(greeting);

// To display on a webpage, you can do something like this:
document.getElementById('greeting').innerHTML = `${greeting}! Welcome to GoToGo Fleet`;

// const slider = document.getElementById('imageSlider');
//     let index = 0;

//     function slideImages() {
//         index++;
//         if (index === slider.children.length) {
//             index = 0;
//         }
//         const offset = index * -100;
//         slider.style.transition = 'transform 1s ease-in-out';
//         slider.style.transform = `translateX(${offset}%)`;
//     }

//     setInterval(slideImages, 3000); // Change image every 3 seconds
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    index += step;

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const offset = index * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

