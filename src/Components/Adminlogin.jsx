import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleValidation = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      isValid = false;
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      errors.email = "Invalid email format.";
    }

    if (!password) {
      isValid = false;
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters long.";
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("Form submitted successfully.", { email, password });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-700">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${error.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"}`}
              placeholder="Enter your email"
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${error.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-400"}`}
              placeholder="Enter your password"
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
