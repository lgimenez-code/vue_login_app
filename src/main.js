import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYYyr-HSqreJLqRsIBWFdCqgTDT7npuWA",
  authDomain: "vue-login-app-a56b8.firebaseapp.com",
  projectId: "vue-login-app-a56b8",
  storageBucket: "vue-login-app-a56b8.appspot.com",
  messagingSenderId: "663012138128",
  appId: "1:663012138128:web:95d418652ac489848d0c15",
  measurementId: "G-LEVKJD6K55"
};


initializeApp(firebaseConfig);
const app = createApp(App);
app.use(router);
app.mount('#app')