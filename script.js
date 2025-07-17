
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

