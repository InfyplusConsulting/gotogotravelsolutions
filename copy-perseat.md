<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking per seat - Shuttle To Agra | GoToGo Travel Solutions</title>
    <meta
      name="description"
      content="Offering seamless travel and stay solutions | Local Rides, Intercity Shuttle, Airport Drops and Hotel & Venue Booking"
    />
    <meta property="og:title" content="GoToGo Travel Solution" />
    <meta
      property="og:description"
      content="Offering seamless travel and stay solutions | Local Rides, Intercity Shuttle, Airport Drops and Hotel & Venue Booking"
    />
    <meta
      property="og:image"
      content="https://www.gotogotravelsolutions.com/assets/gotogo%20final%20logos/g2g%20corporate.png"
    />
    <meta property="og:url" content="https://gotogotravelsolutions.com" />
    <meta property="og:type" content="website" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:title" content="GoToGo Travel Solution" />
    <meta
      name="twitter:description"
      content="Offering seamless travel and stay solutions | Local Rides, Intercity Shuttle, Airport Drops and Hotel & Venue Booking"
    />
    <meta
      name="twitter:image"
      content="https://www.gotogotravelsolutions.com/assets/gotogo%20final%20logos/g2g%20corporate.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <link
      rel="icon"
      href="./assets/gotogo final logos/g2g corporate.png"
      type="image/x-icon"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="navbar.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom styles for counter buttons to prevent selection */
        .counter-btn {
            user-select: none;
        }
        .option-box.selected {
            border-color: #f4be30; /* [#f4be30] */
            box-shadow: 0 0 0 2px #f4be30;
        }
        .navbar {
            background: #fff;
            border-bottom: 1px solid #eee;
            width: 100%;
            padding: 8px 30px;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar .container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo img {
            height: 70px;
            width: auto;
        }

        /* Desktop Menu */
        .desktop-links {
            list-style: none;
            display: flex;
            gap: 25px;
        }

        .menu-item {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: 0.3s ease;
            padding: 6px 10px;
        }

        .menu-item:hover,
        .menu-item.active {
            color: #0c52a2; /* heading blue shade */
            border-bottom: 2px solid #0c52a2;
        }

        /* Hamburger */
        .burger {
            display: none;
            width: 35px;
            cursor: pointer;
        }

        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 250px;
            background: #fff;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease-in-out;
            padding: 20px;
            display: flex;
            flex-direction: column;
        }

        .mobile-menu.active {
            right: 0;
        }

        .mobile-menu .close {
            width: 30px;
            margin-left: auto;
            cursor: pointer;
            margin-bottom: 20px;
        }

        .mobile-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .mobile-links a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            font-weight: 500;
        }

        .mobile-links a:hover {
            color: #0c52a2;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .desktop-links {
                display: none;
            }
            .burger {
                display: block;
            }
        }
    </style>
    
</head>

<body class="bg-gray-50 text-gray-800">

            <!-- Navbar -->
<header class="navbar">
  <div class="container">
    <a href="index.html" class="logo">
      <img src="./assets/gotogo final logos/g2g shuttle.png" alt="Logo" />
    </a>

    <nav>
      <ul class="desktop-links">
        <li><a href="index.html" class="menu-item">Home</a></li>
        <li><a href="fleet.html" class="menu-item">Fleet</a></li>
        <li><a href="roomsnvenues.html" class="menu-item">Rooms & Venues</a></li>
        <li><a href="shuttletoagra.html" class="menu-item active">Shuttle To Agra</a></li>
        <li><a href="airport-shuttle.html" class="menu-item">Airport Shuttle</a></li>
        <li><a href="partner.html" class="menu-item">Partner</a></li>
        <li><a href="#contact" class="menu-item">Contact</a></li>
      </ul>
    </nav>

    <img src="/burger.png" class="burger" id="burger" alt="menu" />

    <div class="mobile-menu" id="mobile-menu">
      <img src="/X.png" class="close" id="close" alt="close" />
      <ul class="mobile-links">
        <li><a href="index.html" class="menu-item">Home</a></li>
        <li><a href="fleet.html" class="menu-item">Fleet</a></li>
        <li><a href="roomsnvenues.html" class="menu-item">Rooms & Venues</a></li>
        <li><a href="shuttletoagra.html" class="menu-item active">Shuttle To Agra</a></li>
        <li><a href="airport-shuttle.html" class="menu-item">Airport Shuttle</a></li>
        <li><a href="partner.html" class="menu-item">Partner</a></li>
        <li><a href="#contact" class="menu-item">Contact</a></li>
      </ul>
    </div>
  </div>
</header>

<!-- CSS -->
<style>

.navbar {
  background: #fff;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 8px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 70px;
  width: auto;
}

/* Desktop Menu */
.desktop-links {
  list-style: none;
  display: flex;
  gap: 25px;
  /* margin-top: 1rem; */
}

.menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: 0.3s ease;
  padding: 6px 10px;
}

.menu-item:hover,
.menu-item.active {
  color: #0c52a2; /* heading blue shade */
  border-bottom: 2px solid #0c52a2;
}

/* Hamburger */
.burger {
  display: none;
  width: 35px;
  cursor: pointer;
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100vh;
  width: 250px;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.mobile-menu.active {
  right: 0;
}

.mobile-menu .close {
  width: 30px;
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 20px;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-links a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
}

.mobile-links a:hover {
  color: #0c52a2;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-links {
    display: none;
  }
  .burger {
    display: block;
  }
}
</style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const closeBtn = document.getElementById("close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // (Optional) close menu when clicking any link
  document.querySelectorAll(".mobile-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  });
});
</script>
    



    <div class="container mx-auto max-w-6xl p-4 md:p-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            <!-- Left Column: Image and Description -->
            <div class="lg:col-span-3">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 
                        alt="View of the Taj Mahal" 
                        class="w-full h-auto object-cover rounded-lg shadow-md">
                <div class="mt-8">
                    <h2 class="text-2xl font-bold border-b pb-2">Description</h2>
                    <p class="mt-4 text-gray-600">
<ul>
  <li> - 12 years and above: Full charge</li>
  <li> - 5–11 years child: Half charge</li>
  <li> - 4 years and under: Free</li>
</ul>

                    </p>
                </div>
            </div>
            <div class="side-contact">
        <a href="tel:+917065650650" class="icon call">
            <i class="fa-solid fa-phone"></i>
        </a>
        <a href="https://wa.me/917065650650" class="icon whatsapp" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>

            <!-- Right Column: Booking Details -->
            <div class="lg:col-span-2">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <h1 id="package-name" class="text-3xl font-bold">Package Tour Per Seat</h1>
                    <p class="text-2xl font-semibold text-[#000] mt-2" id="main-price-display">$175</p>
                    <p class="text-sm text-gray-500 mt-1">Category: <span class="text-[#f4be30] font-medium">Package</span></p>

                    <div class="mt-6">
                            <div class="bg-gray-100 border border-gray-300 rounded-md p-3 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                                <span id="traveler-summary">1 Adults</span>
                            </div>
                    </div>
                    
                    <!-- Traveler Selection -->
                    <div id="traveler-selection-container" class="mt-4 border border-gray-200 rounded-lg p-4">
                        <p class="text-sm text-gray-600 mb-4">You can select up to 15 travelers in total.</p>
                        
                        <!-- Adults -->
                        <div class="flex justify-between items-center py-3 border-b">
                            <div>
                                <p class="font-semibold">Adult (12-99)</p>
                                <p class="text-xs text-gray-500">Minimum:1, Maximum:15</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button onclick="updateCounter('adult', -1)" class="counter-btn h-8 w-8 rounded-full border border-[#f4be30] text-[#f4be30] flex items-center justify-center text-lg font-bold hover:bg-yellow-50 transition">-</button>
                                <input id="adult-count" type="text" value="1" class="w-10 text-center font-semibold border-none bg-transparent" readonly>
                                <button onclick="updateCounter('adult', 1)" class="counter-btn h-8 w-8 rounded-full bg-[#f4be30] text-[#000] flex items-center justify-center text-lg font-bold hover:bg-[#dca92b] transition">+</button>
                            </div>
                        </div>

                        <!-- Child -->
                        <div class="flex justify-between items-center py-3 border-b">
                            <div>
                                <p class="font-semibold">Child (5-11)</p>
                                <p class="text-xs text-gray-500">Minimum:0, Maximum:2</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button onclick="updateCounter('child', -1)" class="counter-btn h-8 w-8 rounded-full border border-[#f4be30] text-[#f4be30] flex items-center justify-center text-lg font-bold hover:bg-yellow-50 transition">-</button>
                                <input id="child-count" type="text" value="0" class="w-10 text-center font-semibold border-none bg-transparent" readonly>
                                <button onclick="updateCounter('child', 1)" class="counter-btn h-8 w-8 rounded-full bg-[#f4be30] text-[#000] flex items-center justify-center text-lg font-bold hover:bg-[#dca92b] transition">+</button>
                            </div>
                        </div>

                        <!-- Infant -->
                        <div class="flex justify-between items-center py-3">
                            <div>
                                <p class="font-semibold">Infant (0-4)</p>
                                <p class="text-xs text-gray-500">Minimum:0, Maximum:2</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button onclick="updateCounter('infant', -1)" class="counter-btn h-8 w-8 rounded-full border border-[#f4be30] text-[#f4be30] flex items-center justify-center text-lg font-bold hover:bg-yellow-50 transition">-</button>
                                <input id="infant-count" type="text" value="0" class="w-10 text-center font-semibold border-none bg-transparent" readonly>
                                <button onclick="updateCounter('infant', 1)" class="counter-btn h-8 w-8 rounded-full bg-[#f4be30] text-[#000] flex items-center justify-center text-lg font-bold hover:bg-[#dca92b] transition">+</button>
                            </div>
                        </div>
                    </div>

                    <button id="apply-btn" class="w-full bg-[#f4be30] text-[#000] font-bold py-3 rounded-lg mt-4 hover:bg-[#dca92b] transition-colors duration-300">
                        Apply
                    </button>
                </div>

                <!-- Options Container - Hidden by default -->
                <div id="options-container" class="hidden mt-6 space-y-4">
                    <div class="option-box border rounded-lg p-4 cursor-pointer hover:border-[#f4be30] transition selected" onclick="selectOption(this)" data-price-per-adult="165">
                        <div class="flex justify-between items-center">
                            <p class="font-semibold">Option 1 : Car + Guide + Entrance + Lunch</p>
                            <p class="text-xl font-bold text-gray-800 price-display">$ 330</p>
                        </div>
                        <div class="option-details mt-2">
                             <p class="text-sm text-gray-600">Includes: Car with Driver + Guide + Entrance fees + Lunch at 5 Star Hotel.
Pickup included</p>
                             <div class="flex justify-end items-center mt-4 space-x-4">
                                 <p class="price-calculation text-sm text-gray-500 font-medium"></p>
                                 <button class="book-now-btn bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-[#f4be30] hover:text-black transition-colors">BOOK NOW</button>
                             </div>
                         </div>
                    </div>
                     <div class="option-box border rounded-lg p-4 cursor-pointer hover:border-[#f4be30] transition" onclick="selectOption(this)" data-price-per-adult="140">
                        <div class="flex justify-between items-center">
                            <p class="font-semibold">Option 2 : Car + Guide + Entrance</p>
                            <p class="text-xl font-bold text-gray-800 price-display">$ 280</p>
                        </div>
                        <div class="option-details hidden mt-2">
                             <p class="text-sm text-gray-600">Includes: Car with Driver + Guide + Entrance fees. But Lunch is not included in this price.
Pickup included</p>
                             <div class="flex justify-end items-center mt-4 space-x-4">
                                 <p class="price-calculation text-sm text-gray-500 font-medium"></p>
                                 <button class="book-now-btn bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-[#f4be30] hover:text-black transition-colors">BOOK NOW</button>
                             </div>
                         </div>
                    </div>
                     <div class="option-box border rounded-lg p-4 cursor-pointer hover:border-[#f4be30] transition" onclick="selectOption(this)" data-price-per-adult="110">
                        <div class="flex justify-between items-center">
                            <p class="font-semibold">Option 3 : Car + Guide</p>
                            <p class="text-xl font-bold text-gray-800 price-display">$ 220</p>
                        </div>
                        <div class="option-details hidden mt-2">
                             <p class="text-sm text-gray-600">Includes: Car with Driver + Guide. But entrance fees and breakfast are not included in this price.
Pickup included</p>
                             <div class="flex justify-end items-center mt-4 space-x-4">
                                 <p class="price-calculation text-sm text-gray-500 font-medium"></p>
                                 <button class="book-now-btn bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-[#f4be30] hover:text-black transition-colors">BOOK NOW</button>
                             </div>
                         </div>
                    </div>
                    <div class="option-box border rounded-lg p-4 cursor-pointer bg-white shadow-sm hover:border-[#f4be30]" onclick="selectOption(this)" data-price-per-adult="100">
                        <div class="flex justify-between items-start">
                            <div>
                               <p class="font-semibold">Option 4 : Car</p>
                            </div>
                            <p class="text-xl font-bold text-[#000] price-display">$ 200</p>
                        </div>
                         <div class="option-details hidden mt-2">
                             <p class="text-sm text-gray-600">Includes: Car with Driver only. Guide, entrance fees and Lunch are not included in this price. Pickup included</p>
                             <div class="flex justify-end items-center mt-4 space-x-4">
                                 <p class="price-calculation text-sm text-gray-500 font-medium">2 Adult x $ 100</p>
                                 <button class="book-now-btn bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-[#f4be30] hover:text-black transition-colors">BOOK NOW</button>
                             </div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

        <!-- footer  -->
        <footer style="background-color: #000; color: #d1d5db; font-family: railway; font-size: 0.875rem;" id="contact">
  <div style="max-width: 1280px; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 1.5rem; padding-bottom: 1.5rem;">
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 1.5rem;" class="footer-css">
      
      <div style="display: flex; flex-direction: column; align-items: flex-start; text-align: left; gap: 0.25rem;" class="footer-contact-css">
        <a href="tel:+917065650650" style="color: inherit; text-decoration: none; transition: color 0.15s;">
          📞 +91 7065 650 650
        </a>
        <a href="mailto:care@gotogotravelsolutions.com" style="color: inherit; text-decoration: none; transition: color 0.15s;">
          ✉️ care@gotogotravelsolutions.com
        </a>
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h1 style="font-size: 1.875rem; font-weight: lighter; color: #f4be30; margin:0; padding:0;">
          GoToGo Travel Solutions
        </h1>
        <p style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.5rem;">
          © 2025 All Rights Reserved by GoToGo Travel Solutions LLP | Website developed by Infyplus Consulting
        </p>
      </div>

      <div style="display: flex; flex-direction: column; align-items: flex-end; text-align: right; gap: 0.5rem;" class="footer-contact-css">
        <span style="font-weight: 600; color: #fff;">Connect with us</span>
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.25rem;">
          <a href="https://www.facebook.com/GOTOGO7065650650" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: inherit; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" style="width: 1.25rem; height: 1.25rem; object-fit: contain;"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=917065650650&text=" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: inherit; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" style="width: 1.5rem; height: 1.5rem; object-fit: contain;"/>
          </a>
          <a href="https://www.instagram.com/gotogo.in" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: inherit; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style="width: 1.25rem; height: 1.25rem; object-fit: contain;"/>
          </a>
          <a href="https://www.linkedin.com/company/gotogo-in/" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: inherit; text-decoration: none;">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 1.25rem; height: 1.25rem; object-fit: contain;"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  @media (max-width: 768px) {
  .footer-css{
    flex-direction: column !important;
    text-align: center !important;
  }
  .footer-contact-css{
    align-items: center !important;
    text-align: center !important;
  }}
</style>

    <script>
        // --- Navbar Script ---
        document.addEventListener("DOMContentLoaded", function () {
            const burger = document.getElementById("burger");
            const closeBtn = document.getElementById("close");
            const mobileMenu = document.getElementById("mobile-menu");

            if (burger && mobileMenu) {
                burger.addEventListener("click", () => {
                    mobileMenu.classList.add("active");
                });
            }

            if (closeBtn && mobileMenu) {
                closeBtn.addEventListener("click", () => {
                    mobileMenu.classList.remove("active");
                });
            }
            document.querySelectorAll(".mobile-links a").forEach((link) => {
                link.addEventListener("click", () => {
                    if (mobileMenu) {
                        mobileMenu.classList.remove("active");
                    }
                });
            });
        });

        // --- Booking Logic Script ---
        const travelerConfig = {
            adult: { min: 1, max: 15 },
            child: { min: 0, max: 2 },
            infant: { min: 0, max: 2 }
        };

        function updateCounter(type, change) {
            const countInput = document.getElementById(`${type}-count`);
            let currentValue = parseInt(countInput.value, 10);
            const config = travelerConfig[type];
            let newValue = currentValue + change;
            if (newValue >= config.min && newValue <= config.max) {
                countInput.value = newValue;
            }
            updateTravelerSummary();
            updateMainPrice();
            if (!document.getElementById('options-container').classList.contains('hidden')) {
                updateAllOptionPrices();
            }
        }
        
        function updateTravelerSummary() {
            const adultCount = parseInt(document.getElementById('adult-count').value, 10);
            const childCount = parseInt(document.getElementById('child-count').value, 10);
            const infantCount = parseInt(document.getElementById('infant-count').value, 10);
            
            let summaryText = `${adultCount} Adult${adultCount !== 1 ? 's' : ''}`;
            if (childCount > 0) {
                 summaryText += `, ${childCount} Child${childCount !== 1 ? 'ren' : ''}`;
            }
             if (infantCount > 0) {
                 summaryText += `, ${infantCount} Infant${infantCount !== 1 ? 's' : ''}`;
            }
            document.getElementById('traveler-summary').textContent = summaryText;
        }
        
        const BASE_PRICE_ADULT = 175;
        const BASE_PRICE_CHILD = 50;

        function updateMainPrice() {
            const adultCount = parseInt(document.getElementById('adult-count').value, 10);
            const childCount = parseInt(document.getElementById('child-count').value, 10);
            const totalPrice = (adultCount * BASE_PRICE_ADULT) + (childCount * BASE_PRICE_CHILD);
            document.getElementById('main-price-display').textContent = `$${totalPrice}`;
        }

        document.getElementById('apply-btn').addEventListener('click', () => {
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.classList.remove('hidden');
            updateAllOptionPrices();
        });

        function selectOption(selectedElement) {
            document.querySelectorAll('.option-box').forEach(box => {
                box.classList.remove('selected');
                box.querySelector('.option-details').classList.add('hidden');
            });
            selectedElement.classList.add('selected');
            selectedElement.querySelector('.option-details').classList.remove('hidden');
        }

        function updateAllOptionPrices() {
            const adultCount = parseInt(document.getElementById('adult-count').value, 10);
            const childCount = parseInt(document.getElementById('child-count').value, 10);
            const CHILD_PRICE_OPTION = 50;
            
            document.querySelectorAll('.option-box').forEach(box => {
                const pricePerAdult = parseInt(box.dataset.pricePerAdult, 10);
                if (isNaN(pricePerAdult)) return;

                const adultTotal = adultCount * pricePerAdult;
                const childTotal = childCount * CHILD_PRICE_OPTION;
                const totalPrice = adultTotal + childTotal;

                box.querySelector('.price-display').textContent = `$ ${totalPrice}`;

                const priceCalcEl = box.querySelector('.price-calculation');
                if (priceCalcEl) {
                    let calculationText = `${adultCount} Adult${adultCount !== 1 ? 's' : ''} x $${pricePerAdult}`;
                    if (childCount > 0) {
                        calculationText += ` + ${childCount} Child${childCount !== 1 ? 'ren' : ''} x $${CHILD_PRICE_OPTION}`;
                    }
                    priceCalcEl.textContent = calculationText;
                }
            });
        }
        
        // --- Function to handle booking ---
        function bookNow(buttonElement) {
            event.stopPropagation(); 
            
            const selectedOptionBox = buttonElement.closest('.option-box');

                     // --- ADD THIS LINE ---
    const packageName = document.getElementById('package-name').textContent.trim();
            
            const adults = parseInt(document.getElementById('adult-count').value, 10);
            const children = parseInt(document.getElementById('child-count').value, 10);
            const infants = parseInt(document.getElementById('infant-count').value, 10);
            
            const pricePerAdult = parseInt(selectedOptionBox.dataset.pricePerAdult, 10);
            const CHILD_PRICE_OPTION = 50;
            const totalPrice = (adults * pricePerAdult) + (children * CHILD_PRICE_OPTION);
            
            const cartData = {
                packageName: packageName,
                adults: adults,
                children: children,
                infants: infants,
                optionTitle: selectedOptionBox.querySelector('.font-semibold').textContent.trim(),
                pricePerAdult: pricePerAdult,
                childPrice: CHILD_PRICE_OPTION,
                totalPrice: totalPrice
            };
            
            localStorage.setItem('travelCart', JSON.stringify(cartData));
            window.location.href = 'cart.html';
        }

        // --- Initial call to set the summary and add button listeners ---
        document.addEventListener('DOMContentLoaded', () => {
            updateTravelerSummary();
            updateMainPrice();

            document.querySelectorAll('.book-now-btn').forEach(button => {
                button.addEventListener('click', () => {
                    bookNow(button);
                });
            });
        });
    </script>

</body>
</html>


“If QR doesn’t load, please use UPI apps button (GPay / PhonePe / Paytm) or Netbanking/Card option.”

