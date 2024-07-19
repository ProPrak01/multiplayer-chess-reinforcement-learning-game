import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload

    try {
      console.log("Logging in...");
      // const response = await fetch('https://chess-backend0.vercel.app/api/login', {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        // Handle non-successful response (like 400 or 500 errors)
        console.error("Login failed:", response.statusText);
        return;
      }

      console.log("Login successful");
      const data = await response.json();
      console.log(data);

      const { email, token } = data;
      const user = { email: email };
      dispatch({ type: "LOGIN", payload: { user, token } });
      navigate("/");

      console.log("Login successful");
    } catch (error) {
      // Handle network errors or exceptions
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
