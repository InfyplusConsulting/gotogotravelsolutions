document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobileMenu");
    const links = navbar.querySelectorAll("a"); // ✅ Define links globally

    // ✅ Ensure mobile text is black when page loads
    if (window.innerWidth < 768) {
        navbar.style.background = "white";
        navbar.style.color = "#000";
        links.forEach(link => (link.style.color = "#000"));
    }

    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "white";
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
            navbar.style.color = "#333";

            links.forEach(link => (link.style.color = "#333"));
        } else {
            // ✅ Ensure links always remain black on mobile
            if (window.innerWidth < 768) {
                navbar.style.background = "white";
                navbar.style.color = "#000";
                links.forEach(link => (link.style.color = "#000")); // Keep links black
            } else {
                navbar.style.background = "transparent";
                navbar.style.boxShadow = "none";
                navbar.style.color = "#fff";
                links.forEach(link => (link.style.color = "white"));
            }
        }

        // ✅ If mobile menu is open, always set link color to black
        if (window.innerWidth < 768 && mobileMenu.classList.contains("translate-y-0")) {
            links.forEach(link => (link.style.color = "#000"));
        }
    });

    // Burger Menu Toggle with Smooth Transition
    const burgerBtn = document.getElementById("burgerBtn");
    const burgerIcon = document.getElementById("burgerIcon");
    const crossIcon = document.getElementById("crossIcon");

    if (!burgerBtn || !mobileMenu || !burgerIcon || !crossIcon) {
        console.error("Menu elements not found!");
        return;
    }

    burgerBtn.addEventListener("click", () => {
        // Toggle slide effect
        mobileMenu.classList.toggle("translate-y-0");
        mobileMenu.classList.toggle("-translate-y-full");

        // Toggle icons
        burgerIcon.classList.toggle("hidden");
        crossIcon.classList.toggle("hidden");

        // ✅ Keep links black when menu opens on mobile
        if (window.innerWidth < 768) {
            links.forEach(link => (link.style.color = "#000"));
        }
    });

    // Close menu when clicking on cross icon
    crossIcon.addEventListener("click", () => {
        mobileMenu.classList.add("-translate-y-full"); // Slide up
        mobileMenu.classList.remove("translate-y-0");

        burgerIcon.classList.remove("hidden"); // Show burger icon
        crossIcon.classList.add("hidden"); // Hide cross icon

        // ✅ Ensure links always stay black on mobile
        if (window.innerWidth < 768) {
            links.forEach(link => (link.style.color = "#000"));
        }
    });


 const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-link"); // Select all navbar links

    function activateLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id"); // Get section ID
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active"); // Remove active class from all
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active"); // Add active class to the current link
            }
        });

        // ✅ Fix: Ensure default state when at the very top of the page
        if (window.scrollY === 0) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLinks[0].classList.add("active"); // Set first link as active (e.g., 'About')
        }
    }

    window.addEventListener("scroll", activateLink);

    // window.addEventListener("scroll", activateLink);
});
