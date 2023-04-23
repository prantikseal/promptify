"use client"
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/NavBar";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);    
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleForgotPasswordClick() {
    setShowForgotPassword(true);
  }

  function handleCancelForgotPasswordClick() {
    setShowForgotPassword(false);
  }

  function handleGoogleSignInClick() {
    // Implement Google sign-in logic here
  }

  function handleTwitterSignInClick() {
    // Implement Twitter sign-in logic here
  }

  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-5 md:p-10">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                Signup
            </h2>
            <form className="space-y-4">
                <div>
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="username"
                >
                    Username/Email:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full border rounded-lg px-3 py-2 h-12 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                </div>
                <div>
                <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="password"
                >
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full border rounded-lg px-3 py-2 h-12 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                </div>
                <div className="flex justify-end">
                <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none"
                    onClick={handleForgotPasswordClick}
                >
                    Forgot password?
                </button>
                </div>
                {showForgotPassword && (
                <div className="space-y-4">
                    <div>
                    <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border rounded-lg px-3 py-2 h-12 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    </div>
                    <div className="flex justify-between">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-3 py-2 transition-colors duration-300"
                    >
                        Reset Password
                    </button>
                    <button
                        type="button"
                        className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none"
                        onClick={handleCancelForgotPasswordClick}
                    >
                        Cancel
                    </button>
                    </div>
                </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-3 py-2 transition-colors duration-300"
                >
                    Login
                </button>
                <button
                    type="button"
                    onClick={handleGoogleSignInClick}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-3 py-2 transition-colors duration-300"
                >
                    Sign in with Google
                </button>
                <button
                    type="button"
                    onClick={handleTwitterSignInClick}
                    className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg px-3 py-2 transition-colors duration-300"
                >
                    Sign in with Twitter
                </button>
                </div>
            </form>
            {/* signup */}
            <div className="mt-4">
                <span className="text-gray-700">Already Have an Account?</span>
                <Link href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
                    <span>Sign In</span>
                </Link>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Signup;