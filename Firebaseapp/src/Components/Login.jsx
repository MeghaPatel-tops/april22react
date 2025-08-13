import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider,db } from './Firebase';
import {collection, addDoc,doc,getDoc, query, where,getDocs} from 'firebase/firestore';

import { useNavigate } from "react-router-dom";

function Login() {
  const nevigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      alert(`Welcome, ${result.user.displayName}!`);
      const User={
        'username':result.user.displayName,
        'email':result.user.email,
        'image':result.user.photoURL,
        'token':result.user.accessToken,
        'uid':result.user.uid
      }

        const q = query(
      collection(db, "Users"),
      where("uid", "==", result.user.uid)
    );
     //console.log(docRef) 
      const querySnapshot = await getDocs(q);
          
        console.log(querySnapshot);
        

      if (!querySnapshot.empty) {
         console.log("here")
      } else {
          localStorage.setItem('user',JSON.stringify(User));
      const result1 = await addDoc(collection(db, "Users"),User);
        if(result1){
            nevigate('/profile')
        }
      }

      
    
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
