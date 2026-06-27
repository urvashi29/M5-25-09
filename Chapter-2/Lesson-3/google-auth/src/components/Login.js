import React from "react";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  
  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      // redirect, navigate after successful login
    } catch (err) {
      console.log("Catch error", err);
    }
  };

  return (
    <>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </>
  );
};

export default Login;
