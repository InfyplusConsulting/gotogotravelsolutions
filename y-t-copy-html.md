<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your GoToGo Ticket</title>
    <link
      rel="shortcut icon"
      href="assets/GoToGo Final Logos/GoToGo Final Logos/G2G Fleet - Inverse Black.png"
      type="image/x-icon"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

    <style>
      body {
        font-family: "Montserrat", sans-serif;
        margin: 0;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden;
      }

      .ticket-scale-wrapper {
        width: 375px;
        transform-origin: top left;
      }

      .ticket-wrapper {
        width: 375px;
        background: white;
        padding: 20px;
        padding-bottom: 40px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      }

      .download-btn {
        margin: 20px;
        background: #f1c40f;
        border: none;
        padding: 12px 30px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .download-btn:hover {
        background: #d4ac0d;
      }

      .ticket-scale-wrapper {
        width: 375px;
        margin: 0 auto;
        transform-origin: top center;
      }

      /* Responsive Scaling */
      @media (max-width: 400px) {
        .ticket-scale-wrapper {
          transform: scale(0.9);
          margin: 0 auto;
        }
      }

      @media (max-width: 360px) {
        .ticket-scale-wrapper {
          transform: scale(0.8);
          margin: 0 auto;
        }
      }

      @media (max-width: 320px) {
        .ticket-scale-wrapper {
          transform: scale(0.75);
          margin: 0 auto;
        }
      }

      .highlight {
        background-color: #eebd36;
        color: #000;
      }

      /* ✅ NEW STYLES FOR THE POPUP MODAL */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8); /* Dark background */
        display: none; /* Hidden by default */
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
      }

      .modal-box {
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        max-width: 90%;
        width: 350px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 2px solid #eebd36;
      }

      .modal-icon {
        font-size: 40px;
        margin-bottom: 15px;
      }

      .modal-btn {
        background: #0c52a2;
        color: white;
        padding: 10px 25px;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        margin-top: 20px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
      }
    </style>
  </head>
  <body>
    
    <div id="noBookingModal" class="modal-overlay">
      <div class="modal-box">
        <div class="modal-icon">⚠️</div>
        <h3 style="margin-top: 0; color: #333;">No Booking Found</h3>
        <p style="font-size: 13px; color: #555; line-height: 1.6; text-align: justify;">
            Please make a booking to see the ticket & details. 
            <br><br>
            <strong>Already booked a ticket?</strong><br>
            Please check if you made the booking from this specific device. If not, please open this link on the <strong>same device</strong> used for booking to download your ticket.
        </p>
        <a href="/" class="modal-btn">Go to Home</a> 
      </div>
    </div>

    <div
      id="globalNotification"
      style="
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #0c52a2;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        display: none;
        font-weight: 500;
        transition: opacity 0.3s ease;
      "
    ></div>

    <script>
      function showToast(message) {
        const toast = document.createElement("div");
        toast.style.cssText = `
      position: fixed; top: 20px; right: 20px;
      background: #0c52a2; color: white;
      padding: 12px 20px; border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 9999;
    `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 4000);
      }
    </script>

    <div id="mainContentWrapper" style="display: flex; flex-direction: column; align-items: center;">
        <button onclick="generatePDF()" class="download-btn">
          Download Ticket
        </button>

        <div class="ticket-scale-wrapper" id="ticket">
          <div class="ticket-wrapper">
            <div
              style="
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: #eebd36;
                padding: 0px;
                gap: 20px;
              "
            >
              <img
                src="./assets/logo.jpg"
                alt="GoToGo Logo"
                style="height: 40px; padding: 4px"
              />
              <div style="font-weight: bold; font-size: 12px">
                SHUTTLE TO AIRPORT
              </div>
            </div>

            <div
              style="
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
              "
            >
              <div>
                <div style="color: #737373; font-size: 12px; font-weight: bold">
                  NAMES OF PASSENGERS
                </div>
                <ul
                  id="passengerList"
                  style="
                    color: #004aad;
                    font-size: 12px;
                    font-weight: bold;
                    margin-left: -40px;
                    list-style: none;
                  "
                ></ul>
              </div>

              <div style="display: flex; align-items: center">
                <div style="color: #737373; font-size: 12px; font-weight: bold">
                  TICKET #
                </div>
                <div
                  class="ticket-number"
                  id="ticket-number"
                  style="
                    border: 2px solid #000;
                    border-radius: 18px;
                    padding: 5px 8px;
                    font-weight: bold;
                    color: #004aad;
                    font-size: 10px;
                  "
                  class="ticket-number"
                >
                  Loading...
                </div>
              </div>
            </div>

            <div
              style="
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
              "
            >
              <div>
                <div style="color: #737373; font-size: 12px; font-weight: bold">
                  SHUTTLE BOARDING TIME
                </div>
                <div
                  style="display: flex; gap: 10px; margin-top: 5px; color: #004aad"
                >
                  <div
                    data-time="06:00 AM"
                    id="boardingTime"
                    class="boarding-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    6<br /><span style="font-size: 10px; font-weight: bold"
                      >Am</span
                    >
                  </div>
                  <div
                    data-time="07:00 AM"
                    id="boardingTime"
                    class="boarding-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    7<br /><span style="font-size: 10px; font-weight: bold"
                      >Am</span
                    >
                  </div>
                  <div
                    data-time="08:00 AM"
                    id="boardingTime"
                    class="boarding-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    8<br /><span style="font-size: 10px; font-weight: bold"
                      >Am</span
                    >
                  </div>
                </div>
              </div>
              <div>
                <div style="color: #737373; font-size: 12px; font-weight: bold">
                  DROP TERMINAL
                </div>
                <div
                  style="display: flex; gap: 5px; margin-top: 5px; color: #004aad"
                >
                  <div
                    data-terminal="(IGI) T1"
                    class="terminal-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    T1
                  </div>
                  <div
                    data-terminal="(IGI) T2"
                    class="terminal-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    T2
                  </div>
                  <div
                    data-terminal="(IGI) T3"
                    class="terminal-box"
                    style="
                      font-weight: bold;
                      text-align: center;
                      border-radius: 50%;
                      border: 2px solid #000;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2px;
                      font-size: 12px;
                    "
                  >
                    T3
                  </div>
                </div>
              </div>
            </div>

            <div
              style="
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
              "
            >
              <div>
                <div style="color: #737373; font-weight: bold">PICKUP DATE</div>
                <div id="pickupDate" style="font-weight: bold; color: #004aad">
                  Loading...
                </div>
              </div>
              <div>
                <div style="color: #737373; font-weight: bold">PAYMENT STATUS</div>
                <div id="paymentStatus" style="font-weight: bold; color: #004aad">No Payment MSG!</div>
              </div>
            </div>

            <div
              style="
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
              "
            >
              <div>
                <div style="color: #737373; font-weight: bold">PICKUP LOCATION</div>
                <div id="pickupLocation" style="font-weight: bold; color: #004aad">
                  Loading...
                </div>
              </div>
            </div>

            <div
              style="
                border: 3px solid #eebd36;
                padding: 10px;
                margin-top: 10px;
                border-radius: 19px;
              "
            >
              <div
                style="
                  font-weight: bold;
                  font-size: 12px;
                  background: #eebd36;
                  width: 230px;
                  border-radius: 8px;
                  padding: 2px;
                  position: relative;
                  top: -20px;
                  left: 50px;
                "
              >
                Travel Assistance: (+91) 7065 650 650
              </div>
              <div style="font-size: 8px; text-align: justify; margin-top: -10px">
                For
                <span style="font-weight: bold; color: #737373"
                  >International Travel,</span
                >
                please arrive 4 hours before the flight. For
                <span style="font-weight: bold; color: #737373"
                  >Domestic Travel,</span
                >
                please arrive 3 hours before the flight. Please take care of your
                belongings while on board.
              </div>
            </div>

            <div style="margin-top: 10px">
              <h4 style="margin-bottom: 5px; font-size: 12px">
                TERMS & CONDITIONS
              </h4>
              <ul style="font-size: 8px; padding-left: 20px; text-align: justify">
                <li>
                  <strong>Seating Policy:</strong> Seats are not pre-assigned.
                  Seating is strictly on a first-come, first-served basis.
                </li>
                <li>
                  <strong>Departure Timings:</strong> The shuttle will depart
                  strictly as per the scheduled time. There will be no additional
                  waiting. Passengers are requested to arrive at the pickup point
                  well in advance to avoid missing the shuttle.
                </li>
                <li>
                  <strong>No-Show Policy:</strong> In case of a no-show, the booking
                  will be considered fully charged and non-refundable.
                </li>
                <li>
                  <strong>Cancellation & Transfer:</strong> This ticket is
                  non-cancellable, non-transferable, and non-refundable under normal
                  circumstances.
                </li>
                <li>
                  <strong>Exceptions (Force Majeure):</strong> In the event of
                  unforeseen conditions (e.g., natural disasters, strikes, etc.)
                  affecting service operations, alternate arrangements or refunds
                  will be offered based on the situation and feasibility.
                </li>
                <li>
                  <strong>Refund Processing:</strong> If a refund is applicable, it
                  will be processed within 14 working days.
                </li>
                <li>
                  <strong>Service Disclaimer:</strong> GoToGo shall not be held
                  responsible for flight delays, traffic disruptions, or external
                  factors impacting pickup/drop timing.
                </li>
                <li>
                  <strong>Customer Support:</strong> For assistance, please contact
                  our helpline: +91 7065 650 650.
                </li>
              </ul>
            </div>
            <div class="footer-image-container" style="text-align: center">
              <img src="./assets/footer-ticket.png" alt="footer" width="100%" />
            </div>
          </div>
        </div>
    </div> <script>
      async function generatePDF() {
        const element = document.getElementById("ticket");
        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
          scrollY: 0,
        });

        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "JPEG", 0, 0, canvas.width, canvas.height);
        pdf.save("GoToGo-Ticket.pdf");
      }
    </script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const data = JSON.parse(localStorage.getItem("bookingDetails"));
        
        // ✅ START NEW LOGIC: CHECK IF DATA EXISTS
        if (!data) {
            // 1. Hide the main content
            document.getElementById('mainContentWrapper').style.display = 'none';
            // 2. Show the pop-up modal
            document.getElementById('noBookingModal').style.display = 'flex';
            // 3. Stop script execution here
            return; 
        }
        // ✅ END NEW LOGIC

        // Show payment status
        const paymentStatus = data.paymentStatus || "unknown";
        const paymentStatusDiv = document.getElementById("paymentStatus");
        if (paymentStatusDiv) {
          let statusText = "";
          if (paymentStatus === "success") statusText = "Paid";
          else if (paymentStatus === "failed") statusText = "Payment Failed";
          paymentStatusDiv.textContent = statusText;
        }

        // Highlight Boarding Time
        document.querySelectorAll(".boarding-box").forEach((box) => {
          if (box.getAttribute("data-time") === data.boardingTime) {
            box.classList.add("highlight");
          }
        });

        // Highlight Drop Terminal
        document.querySelectorAll(".terminal-box").forEach((box) => {
          if (box.getAttribute("data-terminal") === data.terminal) {
            box.classList.add("highlight");
          }
        });

        // Format date: Month Day, Year
        const formattedDate = new Date(data.pickupDate).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );
        document.getElementById("pickupDate").innerText = formattedDate;

        // Pickup location
        document.getElementById("pickupLocation").innerText = data.pickupLocation;

        // ✅ Use saved ticket number
        const ticketNo = data.ticketNumber || "G2G-UNKNOWN";
        document.getElementById("ticket-number").innerText = ticketNo;

        // ✅ Show all passenger names
        const passengerList = document.getElementById("passengerList");
        if (passengerList && Array.isArray(data.names)) {
          passengerList.innerHTML = ""; // clear any old content
          data.names.forEach((name) => {
            if (name.trim()) {
              const li = document.createElement("li");
              li.textContent = name.trim();
              passengerList.appendChild(li);
            }
          });
        }
      });
    </script>
  </body>
</html>