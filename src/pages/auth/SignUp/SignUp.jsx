import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const error = await response.json();
        console.error("Signup failed:", error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
