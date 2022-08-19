import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import firebase from "firebase/compat";
import "./assets/sass/tailwind.scss";
import "./assets/sass/styles.scss";

const firebaseConfig = {
  apiKey: "AIzaSyDeS8sBhsDQN20fWy57X_0pggOu_OQcIzI",
  authDomain: "carefinder-cfc2b.firebaseapp.com",
  projectId: "carefinder-cfc2b",
  storageBucket: "carefinder-cfc2b.appspot.com",
  messagingSenderId: "677368370714",
  appId: "1:677368370714:web:8d5121acf017ebda87a3a3",
  measurementId: "G-D6TD12RXQC",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
