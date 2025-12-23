<script>
      // --- 1. HOTEL DATA LIST ---
    const hotels = [
        { name: "Courtyard By Marriott Gurugram Downtown", address: "Sector Road Plot No - 27 B, B Block, Sushant Lok - 1, Sector 27, Gurugram (Gurgaon) 122002 India" },
        { name: "The Bristol Hotel", address: "Sector 28, DLF Phase 1 Near Sikanderpur Metro Station, Gurugram (Gurgaon) 122002 India" },
        { name: "Regenta Suites Gurugram", address: "Element One Mall, Sector 49 Sohna Road, Gurugram (Gurgaon) 122018 India" },
        { name: "Sunday Hotels And Residences", address: "M3M Broadway, Golf Course Ext Rd, Sector 71, Gurgaon, 122004 India" },
        { name: "Radisson Hotel Gurugram Udyog Vihar", address: "Adjacent To Plot No. 406, Nh-8 Phase 3, Udyog Vihar, Gurugram (Gurgaon) 122016 India" },
        { name: "Taj City Centre Gurugram", address: "Plot No.1, Sector 44, Gurugram (Gurgaon) 122004 India" },
        { name: "DoubleTree by Hilton Gurugram Baani Square", address: "Baani Square Sector 50, Gurugram (Gurgaon) 122002 India" },
        { name: "DoubleTree by Hilton Gurgaon-New Delhi NCR", address: "Golf Course Road Sector 56, Gurugram (Gurgaon) 122011 India" },
        { name: "Radisson Blu Hotel, New Delhi Dwarka", address: "Plot 4, Dwarka City Centre, Sector 13 Sector 13, Dwarka, New Delhi 110075 India" },
        { name: "Radisson Hotel Gurugram Sohna Road City Center", address: "Main Sohna Road Sector 49, Gurugram (Gurgaon) 122018 India" },
        { name: "Radisson Hotel Sector 29 Gurugram", address: "Plot No. 360-362 Sector 29, Gurugram (Gurgaon) 122001 India" },
        { name: "Crowne Plaza Gurgaon, an IHG hotel", address: "Site No.2 Sector 29 Opposite Signature Tower, Gurugram (Gurgaon) 122001 India" },
        { name: "The Pllazio Hotel", address: "292 - 296, Sector 29, Gurugram (Gurgaon) 122001 India" },
        { name: "Pride Plaza Hotel Aerocity New Delhi", address: "5 - A Hospitality District Aerocity, New Delhi 110037 India" },
        { name: "Ibis Gurgaon Golf Course Road", address: "Golf Course Rd Block 1 Sector 53, Gurugram (Gurgaon) 122002 India" },
        { name: "Anya Hotel, Gurgaon", address: "42 Golf Course Road DLF Phase V, Gurugram (Gurgaon) 122002 India" },
        { name: "Nemesia City Center - Gurugram", address: "Plot No. 358 & 359 City Center, Gurugram (Gurgaon) 122001 India" },
        // { name: "Other", address: "" } 
    ];

    // --- 2. SEARCHABLE DROPDOWN LOGIC ---
    const searchInput = document.getElementById('hotel-name');
    const dropdownList = document.getElementById('hotel-list-dropdown');
    const addressInput = document.getElementById('hotel-address');

    if (searchInput && dropdownList && addressInput) {

        // Function to render list based on filter
        function renderOptions(filterText = '') {
            dropdownList.innerHTML = ''; // Clear list
            const lowerFilter = filterText.toLowerCase();

            // Filter hotels
            const filtered = hotels.filter(h => h.name.toLowerCase().includes(lowerFilter));

            if (filtered.length === 0) {
                dropdownList.innerHTML = `<li class="p-2 text-sm text-gray-500 cursor-default">No hotel found. Select "Other" to type manually.</li>`;
                // Always add 'Other' at the end if not found
                addOptionToDom({ name: "Other", address: "" });
            } else {
                filtered.forEach(hotel => addOptionToDom(hotel));
            }
            
            dropdownList.classList.remove('hidden');
        }

        // Helper to create list item
        function addOptionToDom(hotel) {
            const li = document.createElement('li');
            li.textContent = hotel.name;
            li.className = "p-2 hover:bg-yellow-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-0";
            
            li.addEventListener('click', () => {
                selectHotel(hotel);
            });
            dropdownList.appendChild(li);
        }

        // Function to handle selection
        function selectHotel(hotel) {
            searchInput.value = hotel.name;
            dropdownList.classList.add('hidden'); // Hide list

            if (hotel.name === "Other") {
                // Manual Entry Mode
                addressInput.value = "";
                addressInput.removeAttribute('readonly');
                addressInput.classList.remove('bg-gray-100');
                addressInput.classList.add('bg-white');
                addressInput.placeholder = "Please enter hotel address manually...";
                addressInput.focus();
            } else {
                // Auto-fill Mode
                addressInput.value = hotel.address;
                addressInput.setAttribute('readonly', true);
                addressInput.classList.add('bg-gray-100');
                addressInput.classList.remove('bg-white');
            }
            
            // Remove error styling if exists
            searchInput.classList.remove('form-error');
            addressInput.classList.remove('form-error');
        }

        // Event: User Types
        searchInput.addEventListener('input', (e) => {
            renderOptions(e.target.value);
        });

        // Event: User Clicks Input (Show full list)
        searchInput.addEventListener('click', () => {
            renderOptions(searchInput.value);
        });

        // Event: Click Outside to Close
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdownList.contains(e.target)) {
                dropdownList.classList.add('hidden');
            }
        });
    }
      // --- DATE LOGIC: NO FRIDAYS & MAX 9 MONTHS ---
      const tourDateInput = document.getElementById("tour-date");
      if (tourDateInput) {
        const today = new Date();

        // 1. Set MIN Date (Existing Rule: Today + 2 days)
        const minDateObj = new Date(today);
        minDateObj.setDate(today.getDate() + 2);
        const minYYYY = minDateObj.getFullYear();
        const minMM = String(minDateObj.getMonth() + 1).padStart(2, "0");
        const minDD = String(minDateObj.getDate()).padStart(2, "0");
        tourDateInput.setAttribute("min", `${minYYYY}-${minMM}-${minDD}`);

        // 2. Set MAX Date (New Rule: Today + 9 Months)
        const maxDateObj = new Date(today);
        maxDateObj.setMonth(today.getMonth() + 9);
        const maxYYYY = maxDateObj.getFullYear();
        const maxMM = String(maxDateObj.getMonth() + 1).padStart(2, "0");
        const maxDD = String(maxDateObj.getDate()).padStart(2, "0");
        tourDateInput.setAttribute("max", `${maxYYYY}-${maxMM}-${maxDD}`);

        // 3. Block Fridays (Taj Mahal Closed Rule)
        tourDateInput.addEventListener("input", function () {
          const selectedDate = new Date(this.value);

          // Fix for timezone offsets affecting the day check
          const dayOfWeek = selectedDate.getUTCDay(); // 0=Sun, ..., 5=Fri

          // Note: Sometimes local input comes as YYYY-MM-DD which parses to UTC midnight.
          // Let's use a more robust check for the specific input string to avoid timezone bugs
          const datePart = new Date(this.value + "T00:00:00");
          const day = datePart.getDay(); // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat

          if (day === 5) {
            // 5 represents Friday
            alert(
              "⚠️ The Taj Mahal is closed on Fridays. Please select another date."
            );
            this.value = ""; // Clear the invalid selection
          }
        });
      }
      // --- 1. TICKET & PDF LOGIC START ---

      function generateTicketNumber() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, "0");
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const year = String(now.getFullYear()).slice(-2);
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const random = Math.floor(1000 + Math.random() * 9000);
        return `GTG${day}${month}${year}${hours}${minutes}${random}`;
      }

      function saveBookingSession(bookingData) {
        const sessionData = {
          data: bookingData,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem("activeTicket", JSON.stringify(sessionData));
        renderTicketData(bookingData);
      }

      function checkActiveTicket() {
        const stored = localStorage.getItem("activeTicket");
        if (!stored) return;

        const session = JSON.parse(stored);
        const now = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (now - session.timestamp > twentyFourHours) {
          localStorage.removeItem("activeTicket");
        } else {
          renderTicketData(session.data);
          document
            .getElementById("active-ticket-banner")
            .classList.remove("hidden");
        }
      }

      function renderTicketData(data) {
        // Data safety check
        if (!data || !data.billing || !data.cart) return;

        document.getElementById("pdf-ticket-id").innerText = data.ticketNumber;
        document.getElementById("pdf-booking-date").innerText =
          "Booking Date: " + new Date().toLocaleDateString();

        document.getElementById("pdf-package").innerText =
          data.cart.packageName || "Shuttle Service";
        document.getElementById("pdf-tour-date").innerText =
          data.billing.tourDate;
        document.getElementById("pdf-pickup").innerText =
          data.billing.pickupAddress || data.billing.hotelAddress;
        document.getElementById("pdf-hotel").innerText = data.billing.hotelName;

        document.getElementById("pdf-name").innerText =
          data.billing.firstName + " " + data.billing.lastName;
        document.getElementById("pdf-mobile").innerText = data.billing.mobile;
        document.getElementById("pdf-email").innerText = data.billing.email;

        const totalPax =
          (parseInt(data.cart.adults) || 0) +
          (parseInt(data.cart.children) || 0);
        document.getElementById("pdf-total-pax").innerText = totalPax;
        document.getElementById("pdf-amount").innerText =
          "Rs. " + (data.amountPaid || data.cart.totalPrice);
        document.getElementById("pdf-payment-status").innerText =
          data.paymentMethod === "cash" ? "PAY ON ARRIVAL" : "PAID ONLINE";

        const listBody = document.getElementById("pdf-traveler-list");
        listBody.innerHTML = "";
        if (data.travelers) {
          data.travelers.forEach((pax) => {
            const row = `
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${pax.name}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${pax.type}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${pax.age}</td>
                    </tr>
                `;
            listBody.innerHTML += row;
          });
        }
      }

      async function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const ticketElement = document.getElementById("ticket-template");

        ticketElement.classList.remove("hidden");

        try {
          const canvas = await html2canvas(ticketElement, { scale: 2 });
          const imgData = canvas.toDataURL("image/png");

          const pdf = new jsPDF("p", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

          const ticketID = document.getElementById("pdf-ticket-id").innerText;
          pdf.save(`GoToGo_Ticket_${ticketID}.pdf`);
        } catch (err) {
          console.error("PDF Gen Error", err);
          alert("Error generating ticket. Please try again.");
        } finally {
          ticketElement.classList.add("hidden");
        }
      }

      function toggleOverlay() {
        const overlay = document.getElementById("celebrationOverlay");
        const isHidden = overlay.style.display === "none";

        if (isHidden) {
          // --- OPEN OVERLAY ---
          overlay.style.display = "flex";

          const contentDiv = overlay.querySelector(".celebrate-content");

          // Agar button pehle se nahi hai, to naya banao
          if (!document.getElementById("overlay-download-btn")) {
            const btn = document.createElement("button");
            btn.id = "overlay-download-btn";
            btn.innerText = "Download Ticket Now 📄";
            btn.style.cssText =
              "margin-top: 20px; background-color: #f4be30; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;";

            // --- UPDATE 1: DOWNLOAD & REFRESH ---
            btn.onclick = async function () {
              // Pehle PDF download hone ka wait karega
              await downloadPDF();

              // Uske baad page refresh kar dega
              location.reload();
            };
            contentDiv.appendChild(btn);
          }
        } else {
          // --- UPDATE 2: CLOSE & REFRESH ---
          overlay.style.display = "none";

          // Jaise hi close hoga, page refresh ho jayega
          location.reload();
        }
      }
      // Confetti
      const confetti = document.querySelector(".confetti");
      if (confetti) {
        const colors = [
          "#f4be30",
          "#ff7aa2",
          "#6ad6ff",
          "#a6ffcb",
          "#ffd27a",
          "#b28cff",
        ];
        for (let i = 0; i < 40; i++) {
          const span = document.createElement("span");
          span.style.left = Math.random() * 100 + "%";
          span.style.animationDuration = 2 + Math.random() * 3 + "s";
          span.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          confetti.appendChild(span);
        }
      }

      function validateAdultAge(inputElement) {
        if (inputElement.value.length > 2) {
          inputElement.value = inputElement.value.slice(0, 2);
        }
        const age = parseInt(inputElement.value, 10);
        if (inputElement.value.length === 2 && age < 12) {
          alert("An adult's age cannot be less than 12!");
          inputElement.value = "";
        }
      }

      function validateChildAge(inputElement) {
        if (!inputElement.value) return;
        setTimeout(() => {
          const age = parseInt(inputElement.value, 10);
          if (age < 5 || age > 11) {
            alert("Child age must be between 5 and 11!");
            inputElement.value = "";
          }
        }, 1000);
      }

      document.addEventListener("DOMContentLoaded", () => {
        checkActiveTicket();

        const tourDateInput = document.getElementById("tour-date");
        if (tourDateInput) {
          const today = new Date();
          today.setDate(today.getDate() + 2);
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, "0");
          const dd = String(today.getDate()).padStart(2, "0");
          const minDate = `${yyyy}-${mm}-${dd}`;
          tourDateInput.setAttribute("min", minDate);
        }

        const pingServer = async () => {
          try {
            await fetch(
              "https://paymentgatewayforshuttletoagra.onrender.com/ping"
            );
          } catch (error) {
            console.error("Failed to ping server:", error);
          }
        };
        pingServer();

        const cartDataString = localStorage.getItem("travelCart");
        const cartSummaryContainer = document.getElementById(
          "cart-summary-container"
        );
        const bookNowBtn = document.getElementById("book-now-btn");
        const billingForm = document.getElementById("billing-form");
        const loadingOverlay = document.getElementById("loadingOverlay");

        if (!cartDataString) {
          bookNowBtn.disabled = true;
          bookNowBtn.textContent = "Your cart is empty";
          return;
        }

        bookNowBtn.disabled = false;

        const cartData = JSON.parse(cartDataString);
        const INR_RATE = 1;

        let summaryHTML = ``;
        if (cartData.totalSavings && cartData.totalSavings > 0) {
          summaryHTML += `
               <div class="mb-4 bg-yellow-50 border border-[#f4be30] rounded-lg p-3 flex items-start gap-3">
                   <div class="text-[#f4be30] text-xl mt-0.5"><i class="fa-solid fa-gift"></i></div>
                   <div>
                       <h4 class="font-bold text-gray-800 text-sm">Great Choice! 🎉</h4>
                       <p class="text-sm text-gray-600">You saved <span class="font-bold text-green-600">$${Number(
                         cartData.totalSavings
                       ).toFixed(
                         2
                       )}</span> on this booking with our group discount!</p>
                   </div>
               </div>`;
        }

        summaryHTML += `
           <div class="flex justify-between items-center font-semibold">
               <p class="text-gray-800">${cartData.packageName}</p>
               <p class="text-gray-800">$${cartData.totalPrice}</p>
           </div>
           <div class="border-t my-4">
           <p class="text-gray-800">${cartData.optionTitle.replace(
             /^Option\s*\d+\s*:/i,
             "Facilities :"
           )}</p>
           <div class="text-sm text-gray-500 space-y-1 pl-2">
       `;

        if (cartData.adults > 0)
          summaryHTML += `<p>${
            cartData.adults
          } Adult x $${cartData.pricePerAdult.toFixed(2)}</p>`;
        if (cartData.children > 0)
          summaryHTML += `<p>${
            cartData.children
          } Child x $${cartData.childPrice.toFixed(2)}</p>`;
        if (cartData.infants > 0)
          summaryHTML += `<p>${cartData.infants} Infant x $0.00</p>`;

        summaryHTML += `
           </div>
           <div class="border-t my-4"></div>
           <div class="flex justify-between items-center font-bold text-lg">
               <p>Total (USD)</p>
               <p>$${cartData.totalPrice}/-</p>
           </div>
           <div class="flex justify-between items-center font-semibold text-md bg-gray-100 p-2 rounded-md mt-2">
               <p>Amount In (INR)</p>
               <p>Rs. ${(cartData.totalPrice * INR_RATE).toLocaleString(
                 "en-IN"
               )}/-</p>
           </div>
       `;

        cartSummaryContainer.innerHTML = summaryHTML;

        const adultContainer = document.getElementById("adult-info-container");
        const childSection = document.getElementById("child-info-section");
        const childContainer = document.getElementById("child-info-container");

        if (cartData.adults > 0) {
           let adultInfoHTML = `<h3 class="text-lg font-semibold text-gray-700 mb-4">Adult (12-99):</h3>`;
           for (let i = 1; i <= cartData.adults; i++) {
               adultInfoHTML += `
                   <div class="border p-4 rounded-md mb-4 bg-gray-50 relative">
                       <label class="absolute -top-3 left-3 bg-gray-50 px-2 text-xs font-bold text-brand">Adult #${i}</label>
                       
                       <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                               <label class="block text-xs text-gray-500 mb-1">Full Name</label>
                               <input type="text" id="adult-name-${i}" placeholder="Name as on Passport" class="w-full border-gray-300 rounded-md shadow-sm text-sm p-2" required>
                           </div>
                           <div>
                               <label class="block text-xs text-gray-500 mb-1">Age</label>
                               <input type="number" id="adult-age-${i}" placeholder="Age" class="w-full border-gray-300 rounded-md shadow-sm text-sm p-2" min="12" max="99" oninput="validateAdultAge(this)" required>
                           </div>

                           <div>
                               <label class="block text-xs text-gray-500 mb-1">Passport Number</label>
                               <input type="text" id="adult-passport-${i}" placeholder="Passport No." class="w-full border-gray-300 rounded-md shadow-sm text-sm p-2 uppercase" required>
                           </div>
                           <div>
                               <label class="block text-xs text-gray-500 mb-1">Passport Copy (PDF/IMG)</label>
                               <input type="file" id="adult-file-${i}" accept="image/*,application/pdf" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100" required>
                           </div>
                       </div>
                   </div>`;
           }
           adultContainer.innerHTML = adultInfoHTML;
       }

        if (cartData.children > 0) {
          childSection.classList.remove("hidden");
          let childInfoHTML = "";
          for (let i = 1; i <= cartData.children; i++) {
            childInfoHTML += `
                   <div class="grid grid-cols-5 gap-4 items-center">
                       <label class="col-span-1 text-sm text-gray-600">#${i}</label>
                       <input type="text" id="child-name-${i}" placeholder="Child #${i} Name" class="col-span-2 w-full border-gray-300 rounded-md shadow-sm text-sm">
                       <input type="number" id="child-age-${i}" placeholder="Age in years" class="col-span-2 w-full border-gray-300 rounded-md shadow-sm text-sm" min="5" max="11" oninput="validateChildAge(this)" required>
                   </div>`;
          }
          childContainer.innerHTML = childInfoHTML;
        }

        // --- RAZORPAY PAYMENT ---
        function initiateRazorpayPayment(order) {
          // *** FIXED: TICKET GENERATION HERE (Once) ***
          const uniqueTicketID = generateTicketNumber();

          const firstName = document.getElementById("first-name").value;
          const lastName = document.getElementById("last-name").value;
          const email = document.getElementById("email").value;
          const mobile = document.getElementById("mobile").value;

          const options = {
            key: "rzp_live_GguLSrEps04lrr",
            amount: order.amount,
            currency: order.currency,
            name: "GoToGo Travel Solutions",
            description: cartData.packageName || cartData.optionTitle,
            image: "./assets/gotogo final logos/g2g shuttle.png",
            order_id: order.id,
            handler: function (response) {
              // Pass the generated ID to verification
              verifyPayment(response, uniqueTicketID);
            },
            prefill: {
              name: `${firstName} ${lastName}`,
              email: email,
              contact: mobile,
            },
            notes: {
              address: document.getElementById("hotel-address").value,
            },
            theme: {
              color: "#f4be30",
            },
          };
          const rzp1 = new Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            alert("Payment failed: " + response.error.description);
            bookNowBtn.disabled = false;
            bookNowBtn.textContent = "Book Now";
          });
          rzp1.open();
        }

        async function verifyPayment(paymentResponse, ticketID) {
           loadingOverlay.style.display = "flex";
           loadingOverlay.querySelector('p').textContent = "Confirming your booking...";
           
           try {
               const billingDetails = {
                   firstName: document.getElementById("first-name").value,
                   lastName: document.getElementById("last-name").value,
                   email: document.getElementById("email").value,
                   mobile: document.getElementById("mobile").value,
                   hotelName: document.getElementById("hotel-name").value,
                   hotelAddress: document.getElementById("hotel-address").value,
                   tourDate: document.getElementById("tour-date").value,
                   additionalInfo: document.getElementById("additional-info").value,
               };

               // *** CHANGED: Use the Global Data we saved during upload ***
               const travelersDetails = window.tempTravelerData; 

               const postData = {
                   ...paymentResponse,
                   cart: cartData,
                   billing: billingDetails,
                   travelers: travelersDetails,
                   ticketNumber: ticketID,
               };

               const response = await fetch(
                   "https://paymentgatewayforshuttletoagra.onrender.com/verify-payment",
                   {
                       method: "POST",
                       headers: { "Content-Type": "application/json" },
                       body: JSON.stringify(postData),
                   }
               );
               // ... rest of the function remains exactly the same ...

            const result = await response.json();

            if (result.success) {
              // *** USE THE SAME ID FOR PDF SAVING ***
              const finalBookingData = {
                ticketNumber: ticketID, // <--- Using the same variable
                cart: cartData,
                billing: billingDetails,
                travelers: travelersDetails,
                paymentMethod: "razorpay",
                amountPaid: result.amount || cartData.totalPrice,
              };

              saveBookingSession(finalBookingData);
              localStorage.removeItem("travelCart");
              toggleOverlay();
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error("Verification Error:", error);
            alert("Could not verify payment.");
          } finally {
            loadingOverlay.style.display = "none";
          }
        }

        // --- FILE UPLOAD LOGIC ---

    // 1. Convert File to Base64 (Required for GitHub API)
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Remove the "data:*/*;base64," prefix
            const base64Content = reader.result.split(',')[1];
            resolve(base64Content);
        };
        reader.onerror = error => reject(error);
    });

    // 2. Upload Single File to GitHub
    async function uploadFileToGitHub(file, travelerName) {
        if (!file) return null;

        const timestamp = Date.now();
        // Clean filename: remove spaces, keep extension
        const cleanName = travelerName.replace(/[^a-zA-Z0-9]/g, "_");
        const extension = file.name.split('.').pop();
        const filename = `${GITHUB_FOLDER}/${timestamp}_${cleanName}.${extension}`;

        try {
            const content = await toBase64(file);
            
            const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${filename}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Upload passport for ${travelerName}`,
                    content: content,
                    encoding: 'base64'
                })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();
            // Return the Download URL (CDN Link)
            return data.content.download_url; 

        } catch (error) {
            console.error("GitHub Upload Error:", error);
            throw new Error(`Failed to upload document for ${travelerName}`);
        }
    }

// --- UPDATED BOOK NOW LISTENER ---
       bookNowBtn.addEventListener("click", async () => {
           
           // 1. Validation Logic
           const requiredBilling = [...billingForm.querySelectorAll("input[required], textarea[required], select[required]")];
           
           // Dynamic fields including Passport & File
           const requiredTravelerFields = [
             ...document.querySelectorAll('[id^="adult-name-"]'),
             ...document.querySelectorAll('[id^="adult-age-"]'),
             ...document.querySelectorAll('[id^="adult-passport-"]'), // New
             ...document.querySelectorAll('[id^="adult-file-"]'),     // New
             ...document.querySelectorAll('[id^="child-name-"]'),
             ...document.querySelectorAll('[id^="child-age-"]'),
           ].filter(Boolean);

           const termsCheckbox = document.getElementById("terms");
           const allRequiredFields = [...requiredBilling, ...requiredTravelerFields, termsCheckbox];

           allRequiredFields.forEach((field) => field.classList.remove("form-error"));
           
           let firstErrorField = null;
           for (const field of allRequiredFields) {
               if (!field) continue;
               const isCheckbox = field.type === "checkbox";
               const isHidden = field.offsetParent === null;
               if (isHidden) continue;
               
               // Check value (files use .files.length)
               const isEmpty = field.type === 'file' ? field.files.length === 0 : !String(field.value || "").trim();

               if ((isCheckbox && !field.checked) || (!isCheckbox && isEmpty)) {
                   firstErrorField = field;
                   break;
               }
           }

           if (firstErrorField) {
               firstErrorField.classList.add("form-error");
               firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
               // alert("Please fill all required fields including Passport details.");
               return;
           }

           // 2. Start Processing
           bookNowBtn.disabled = true;
           bookNowBtn.textContent = "Uploading Documents..."; // Update Text
           
           // Show Overlay with custom text
           loadingOverlay.style.display = "flex";
           loadingOverlay.querySelector('p').textContent = "Securely uploading documents...";

           try {
                // --- UPLOAD FILES TO GITHUB ---
                const adultTravelersData = [];
                
                // Loop through adults to gather data and upload files
                for (let i = 1; i <= cartData.adults; i++) {
                    const name = document.getElementById(`adult-name-${i}`).value;
                    const age = document.getElementById(`adult-age-${i}`).value;
                    const passportNo = document.getElementById(`adult-passport-${i}`).value;
                    const fileInput = document.getElementById(`adult-file-${i}`);
                    
                    // Upload File
                    const fileUrl = await uploadFileToGitHub(fileInput.files[0], name);
                    
                    adultTravelersData.push({
                        type: "Adult",
                        name: name,
                        age: age,
                        passport: passportNo,
                        documentUrl: fileUrl
                    });
                }

                // Gather Children (Assuming no passport required for children based on UI, 
                // if required, repeat logic above for children)
                const childTravelersData = [];
                for (let i = 1; i <= cartData.children; i++) {
                     childTravelersData.push({
                        type: "Child",
                        name: document.getElementById(`child-name-${i}`).value || "N/A",
                        age: document.getElementById(`child-age-${i}`).value || "N/A",
                        passport: "N/A",
                        documentUrl: "N/A"
                    });
                }

                // Combine Travelers
                const finalTravelersList = [...adultTravelersData, ...childTravelersData];
                
                // Store this temporarily in a global variable or closure to use in verifyPayment
                window.tempTravelerData = finalTravelersList;

                // --- PROCEED TO PAYMENT ---
                loadingOverlay.querySelector('p').textContent = "Initiating Payment...";
                
                const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

                if (paymentMethod === "razorpay") {
                   const totalInr = Math.round(cartData.totalPrice * INR_RATE);
                   const totalInPaisa = totalInr * 100;
                   
                   const response = await fetch("https://paymentgatewayforshuttletoagra.onrender.com/create-order", {
                       method: "POST",
                       headers: { "Content-Type": "application/json" },
                       body: JSON.stringify({
                           amount: totalInPaisa,
                           currency: "INR",
                           receipt: `receipt_#${Date.now()}`,
                       }),
                   });
                   if (!response.ok) throw new Error("Failed to create order");
                   const order = await response.json();
                   initiateRazorpayPayment(order); // This function needs a small update to use window.tempTravelerData
                   
                } else if (paymentMethod === "cash") {
                   const ticketID = generateTicketNumber();
                   
                   const billingDetails = {
                       firstName: document.getElementById("first-name").value,
                       lastName: document.getElementById("last-name").value,
                       email: document.getElementById("email").value,
                       mobile: document.getElementById("mobile").value,
                       hotelName: document.getElementById("hotel-name").value,
                       hotelAddress: document.getElementById("hotel-address").value,
                       tourDate: document.getElementById("tour-date").value,
                       additionalInfo: document.getElementById("additional-info").value,
                   };

                   const postData = {
                       cart: cartData,
                       billing: billingDetails,
                       travelers: window.tempTravelerData, // Use the data with Passport/URLs
                       ticketNumber: ticketID,
                   };

                   const response = await fetch("https://paymentgatewayforshuttletoagra.onrender.com/book-cash", {
                       method: "POST",
                       headers: { "Content-Type": "application/json" },
                       body: JSON.stringify(postData),
                   });
                   const result = await response.json();

                   if (result.success) {
                       const finalBookingData = {
                           ticketNumber: ticketID,
                           cart: cartData,
                           billing: billingDetails,
                           travelers: window.tempTravelerData,
                           paymentMethod: "cash",
                           amountPaid: cartData.totalPrice,
                       };
                       saveBookingSession(finalBookingData);
                       localStorage.removeItem("travelCart");
                       toggleOverlay();
                   } else {
                       alert(`Cash booking failed: ${result.message}`);
                   }
                }

           } catch (error) {
               console.error("Booking/Upload Error:", error);
               alert("Error: " + error.message);
               bookNowBtn.disabled = false;
               bookNowBtn.textContent = "Book Now";
           } finally {
               // Only hide overlay if not Redirecting/Showing Razorpay
               if(document.querySelector('input[name="payment-method"]:checked').value === 'cash' || bookNowBtn.disabled === false) {
                   loadingOverlay.style.display = "none";
               }
           }
       });


        const mobileInput = document.getElementById("mobile");
        mobileInput.addEventListener("input", function (event) {
          this.value = this.value.replace(/[^0-9]/g, "");
        });
      });
    </script>