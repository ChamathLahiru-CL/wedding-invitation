import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// 🔥 paste your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBzJhCktdLuyvF5nhzE0bjCXXfaZFq4anw",
  authDomain: "wedding-invitation-7d82c.firebaseapp.com",
  projectId: "wedding-invitation-7d82c",
  storageBucket: "wedding-invitation-7d82c.firebasestorage.app",
  messagingSenderId: "955782795165",
  appId: "1:955782795165:web:d088400194f4780ac86974",
  measurementId: "G-9Z7V1957DN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 👉 Paste your JSON here
const guests = [
  // Add your guests here
  // For TWO people: use "-and-" in URL Name (e.g., "tharindu-and-nethmi" → "Tharindu & Nethmi")
  // For ONE person/family: use "-" in URL Name (e.g., "tharindu-family" → "Tharindu Family")

  {
   "Guest Name": "Sanduni & Family",
   "URL Name": "sanduni-and-family",
   "Phone": {
      "WhatsApp": 94712345678
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
},
 {
   "Guest Name": "Chathura ",
   "URL Name": "chathura",
   "Phone": {
      "WhatsApp": 94723456789
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
},
 {
   "Guest Name": "Dilshan",
   "URL Name": "dilshan",
   "Phone": {
      "WhatsApp": 94774567890
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
},
 {
   "Guest Name": "Amaya",
   "URL Name": "amaya",
   "Phone": {
      "WhatsApp": 94712345678
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
},
 {
   "Guest Name": "Tharindu & Nethmi",
   "URL Name": "tharindu-and-nethmi",
   "Phone": {
      "WhatsApp": 94723456789
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
},
 {
   "Guest Name": "Ishara Family",
   "URL Name": "ishara-and-family",
   "Phone": {
      "WhatsApp": 94774567890
   },
   "Status": "Pending",
   "Attending": "",
   "Submitted At": ""
}
];

// Example formats:
// Single person: { "Guest Name": "Chathura", "URL Name": "chathura", "Phone": { "WhatsApp": 94723456789 } }
// Family: { "Guest Name": "Sanduni Family", "URL Name": "sanduni-family", "Phone": { "WhatsApp": 94712345678 } }
// Two people: { "Guest Name": "Tharindu & Nethmi", "URL Name": "tharindu-and-nethmi", "Phone": { "WhatsApp": 94723456789 } }

async function importData() {
  for (const guest of guests) {
await setDoc(doc(db, "guests", guest["URL Name"]), {
  name: guest["Guest Name"] || "",
  phone: guest.Phone?.WhatsApp
      ? `+${guest.Phone.WhatsApp.toString()}`
      : "",
  status: "Pending",
  attending: null,
  submittedAt: null,
}, 
{ merge: true } // keep existing data

);

    console.log("Added:", guest["Guest Name"]);
  }

  console.log("Import completed ✅");
}

importData();