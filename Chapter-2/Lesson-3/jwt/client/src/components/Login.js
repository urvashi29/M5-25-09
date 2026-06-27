import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [information, setInformation] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!information.email || !emailRegex.test(information.email)) {
      setError("Please enter a valid email address.");
      alert("Invalid email format.");
      return;
    }

    if (!information.password || information.password.length < 6) {
      setError("Password must be at least 6 characters.");
      alert("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`http://localhost:3000/auth/login`, {
        email: information.email,
        password: information.password,
      });

      console.log(response);

      const user = response.data.user; // Assuming the response contains the user data
      const token = response.data.token; // Assuming the response contains the JWT token

      if (user && token) {
        // Store the token and user info in localStorage
        localStorage.setItem("token", token); // Store the token
        // cookieStore.set("", "");
        // document.cookie = `token=${token}`;
        
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id, // Use the correct field here based on backend
            username: user.username || "User", // Assuming the response contains username
            email: user.email,
          })
        );

        navigate("/"); // Redirect after successful login
        alert("Login successful!");
      } else {
        setError("Login failed. Please try again.");
        alert("Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        "Error logging in: " + err.response?.data?.message || err.message
      );
      alert("Error logging in: " + err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        value={information.email}
        onChange={handleChange}
        placeholder="Email address"
      />

      <input
        type="password"
        name="password"
        value={information.password}
        onChange={handleChange}
        placeholder="Password"
      />

      {error && <p>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>

      <Link to="/signup">Register</Link>
    </form>
  );
};

export default Login;
