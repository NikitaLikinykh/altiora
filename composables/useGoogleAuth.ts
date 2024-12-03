import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNuxtApp } from "#app";
import {useRouter} from 'vue-router'
export const useGoogleAuth = () => {
  const { $auth } = useNuxtApp();
    const router = useRouter()
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup($auth, provider);


      const user = result.user;
      console.log("User authorithation", user);


      const token = await user.getIdToken();
      localStorage.setItem("accessToken", token);
      router.push('/user/profile')
 
    } catch (error) {
      console.error("Ошибка при входе через Google:", error);
      alert("Ошибка авторизации: " + error.message);
    }
  };

  return {
    loginWithGoogle,
  };
};
