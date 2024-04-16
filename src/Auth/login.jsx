import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const nav = useNavigate();
  const login = async (userData) => {
    try {
      // Make API call to AddUser endpoint using Axios
      const response = await axios.post(
        "http://localhost:7000/api/v1/users/signin",
        userData
      );
      
      const uid =  response.data.user.id;
      console.log(uid)
      localStorage.setItem("key" ,uid)
      localStorage.setItem("token" ,response.data.user.accessToken)
      nav('/')
    } catch (error) {
      // Error handling
      console.error("Error adding user:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const token = user.accessToken;
      console.log(user)

      const inputs = {
        id: user.uid,
        fullname: user.displayName,
        email: user.email,
        accessToken : token,
        profilePicture: user.photoURL,
      };

      await login(inputs);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://kaspiunique.com/Temp/espenses.png")',
        }}
      ></div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Login
          </h2>
          {/* <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-6">
              <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:bg-blue-600">Login</button>
            </div>
          </form>
          <hr className="mb-6 border-t" /> */}
          <div className="text-center">
            <p className="text-gray-700 my-2">
              Track Your Expenses and Saving's Now
            </p>
            <Button
              onClick={handleSignIn}
              className="mt-2 w-full bg-red-500 text-white p-3 rounded-md focus:outline-none focus:bg-red-600"
            >
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
