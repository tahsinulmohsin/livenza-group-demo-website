import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmGmoYwacokx38PcH82XgZaW90bj2GZzU",
  authDomain: "livenza-web.firebaseapp.com",
  projectId: "livenza-web",
  storageBucket: "livenza-web.firebasestorage.app",
  messagingSenderId: "557093567261",
  appId: "1:557093567261:web:56b80d92b875dd00747ff4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const subsidiaries = [
  {
    id: "gesl",
    name: "Greenery Energy Solution Ltd.",
    sector: "Renewable Energy & Technology",
    tagline: "Complete turnkey solutions for clean energy.",
    summary:
      "Specializing in renewable energy, we provide complete turnkey solutions for solar systems, energy storage, energy-efficient HVAC, and EV chargers, backed by strict vendor management.",
    url: "https://livenzagroup.com/company/clean-energy-industrial-solutions-bd",
    color: "#059669",
    gradient: "from-emerald-600 to-teal-700",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-500",
    icon: "Sun",
  }
];

async function test() {
  try {
    await signInWithEmailAndPassword(auth, 'admin@livenzagroup.com', 'admin@#$');
    console.log("Logged in!");
    
    for (const sub of subsidiaries) {
      console.log(`Writing ${sub.id}...`);
      await getDocs(collection(db, "subsidiaries"));
    }
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.error("Firebase Error details:", error.code, error.message);
    process.exit(1);
  }
}

test();
