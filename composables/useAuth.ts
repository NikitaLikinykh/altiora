// composables/useAuth.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/firebase";

export const useAuth = () => {
  const user = ref(null);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      user.value = result.user;
      console.log("User info:", result.user);
    } catch (error) {
      console.error("Error during Google Auth:", error);
    }
  };

  return {
    user,
    signInWithGoogle,
  };
};
