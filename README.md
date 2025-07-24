<img width="1920" height="1020" alt="Screenshot 2025-07-24 160915" src="https://github.com/user-attachments/assets/29faa760-c4fc-4b2c-9e3a-862649cf8e59" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161004" src="https://github.com/user-attachments/assets/2c6beb4b-877a-4d0d-ae22-17980d927cc0" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161041" src="https://github.com/user-attachments/assets/55cb9029-bf73-46ce-99cb-79bc439f47cd" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161224" src="https://github.com/user-attachments/assets/67265828-e25d-4681-9f95-13cfb5e8f2bd" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161240" src="https://github.com/user-attachments/assets/eda73c1f-3dbc-4b98-a922-f891790985d1" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161351" src="https://github.com/user-attachments/assets/d0fc70c3-1150-4c2b-a401-1618f75df8cf" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161422" src="https://github.com/user-attachments/assets/4a6acc38-be54-49f9-b238-6ab8a8a092bb" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161536" src="https://github.com/user-attachments/assets/f440f43e-8a32-4d4f-847b-cc1993fb368e" />

<img width="1920" height="1020" alt="Screenshot 2025-07-24 161554" src="https://github.com/user-attachments/assets/8b0c92dc-b92c-4156-9ac4-880be164bc33" />

<img width="1641" height="696" alt="Screenshot 2025-07-24 161624" src="https://github.com/user-attachments/assets/7bfe59a1-a64d-4d47-8d53-f42ad2682471" />

![invoice](https://github.com/user-attachments/assets/610c9329-5a4a-4ee7-97db-45648bf47f87)


# 🚌 Bus reservation System

Welcome to the **Bus reservation System** — a complete web-based solution to make your travel experience smoother. From booking your seat to tracking the bus, ordering food, and checking payments — this app covers it all in one place.

## 📌 What This Project Does

This system allows users to:
- Book bus tickets online with seat selection.
- ask your query with ai chatbox
- Track bus location in real time.
- Retrieve their booked tickets.
- Order food while on the journey.
- Check payment status and trip history.

Built using Node.js and MongoDB with a clean frontend powered by HTML, CSS, and JavaScript.

## ✨ Features

- 🎟️ **Book Tickets** — fill in your trip details and select seats (`testing1.html`)
- 🔄 **View Bookings** — retrieve your ticket info anytime (`retrive.html`)
- 💳 **Payment Status** — view payment confirmation (`payment.html`)
- 📍 **Live Bus Location** — see where your bus is right now (`location.html`)
- 🍱 **Food Ordering** — order meals to your seat (`food.html`)
- 🧭 **Easy Navigation** — all-in-one control center (`navigation.html`)
- 🧾 **MongoDB Support** — all data saved securely in the database
- 📱 **Responsive Design** — works well on both desktop and mobile

## 🛠️ Tech Stack

**Frontend**  
- HTML5, CSS3, JavaScript  
- Bootstrap for responsiveness

**Backend**  
- Node.js with Express.js  
- MongoDB using Mongoose

**Utilities**  
- dotenv for managing secrets  
- CORS for API access from other origins


 🤯 What I Learned

- Building REST APIs with Node.js and Express
- Connecting MongoDB with Mongoose
- Handling frontend-to-backend communication
- Structuring a scalable project with routing and models
- Managing real-time UI updates and seat tracking

 📁 Project Structure

bus-reservation-system/
├── models/
│   └── Ticket.js             # Mongoose schema for tickets
├── routes/
│   ├── busRoutes.mjs         # APIs for bus tracking & info
│   └── ticketRoutes.mjs      # APIs for ticket handling
├── public/
│   ├── p1.html               # Landing page
│   ├── testing1.html         # Booking form
│   ├── retrive.html          # View booking
│   ├── payment.html          # Payment page
│   ├── location.html         # Live tracking
│   ├── navigation.html       # Navigation hub
│   └── food.html             # Food menu
├── server.mjs                # Main server file
├── .env                      # Secret config (like Mongo URI)
├── package.json              # Project metadata & dependencies
└── README.md                 # You're reading it :)

## ⚙️ How to Set It Up

### ✅ Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud like MongoDB Atlas)
- Git

### 🔧 Installation Steps

1. **Clone the repo**
   ```bash
   git clone https://github.com/kavin-codes/bus-reservation-system.git
   cd bus-reservation-system
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**
   Add this in the root folder:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bus-booking
   ```

4. **Start MongoDB**
   Make sure MongoDB is running.

5. **Launch the server**

   ```bash
   npm start
   ```

6. **Open the app**
   Visit `http://localhost:3000` in your browser.

---

## 🧪 How to Use It

* Go to the booking page (`testing1.html`) → fill in details → book a seat
* Check booked tickets on the retrieval page (`retrive.html`)
* Track your bus on the map (`location.html`)
* Order food using the menu page (`food.html`)
* See your payment info on the payment page (`payment.html`)

All pages are linked from the main `navigation.html` hub.

---

## 📡 API Endpoints

### GET `/api/booked-seats`

* Returns a list of seat numbers that are already booked.

**Response:**

```json
["1A", "2B", "4C"]
```

**Status Codes:**

* `200` → Success
* `500` → Server error


