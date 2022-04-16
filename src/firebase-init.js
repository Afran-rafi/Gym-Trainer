import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBztQDl74Zn39ipjvjUGSMmE_A1N9ATVJY",
    authDomain: "assignment-10-b0017.firebaseapp.com",
    projectId: "assignment-10-b0017",
    storageBucket: "assignment-10-b0017.appspot.com",
    messagingSenderId: "429062648042",
    appId: "1:429062648042:web:dd1698335b83c966cfe793"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth