// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {addDoc, getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAzlc1_lzQ5GqwpF5gubE4rMGRfhlSbQTo",
authDomain: "fir-javascript-crud-e0a63.firebaseapp.com",
projectId: "fir-javascript-crud-e0a63",
storageBucket: "fir-javascript-crud-e0a63.appspot.com",
messagingSenderId: "421333796075",
appId: "1:421333796075:web:a7915f760c03c71bfbaaae"
};

// Initialize Firebase
const app = await initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => {
    addDoc(collection(db, 'tasks'), {
        title,
        description
    })
}