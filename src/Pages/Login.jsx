import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem(
        "auth",
        JSON.stringify({ email: user.email, username: user.displayName })
      );
      navigate("/dashboard");
    } catch (err) {
      setError("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-blue-300">
      {/* Header */}
      

      {/* Google Sign-In */}
      <div className="w-full mx-auto mt-8 max-w-sm p-6 bg-white rounded shadow-md">
      <div className=" text-center">
     
        <h1 className="text-3xl text-blue-600">
          Make discipline in life and Map Your Mind
        </h1>
      </div>
        <h2 className="text-3xl font-bold text-center mt-3 mb-6">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 text-white bg-blue-300 rounded hover:bg-green-600"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
