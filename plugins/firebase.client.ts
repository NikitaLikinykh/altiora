import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC94f6GCST-j__2DofCQ14Pk7bfzqVhNmc",
    authDomain: "altiora-6cf84.firebaseapp.com",
    projectId: "altiora-6cf84",
    storageBucket: "altiora-6cf84.appspot.com",
    messagingSenderId: "499364528833",
    appId: "1:499364528833:web:d3e72d01b1305d5ed18a40",
    measurementId: "G-L9DSFEE64T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return {
    provide: {
      firebaseApp: app,
      auth,
    },
  };
});
