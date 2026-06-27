import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [info, setInfo] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = info;
    setLoading(true);

    if (!name.trim()) {
      setError("Please enter your full name.");
      alert("Name is required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      alert("Invalid email format.");
      setLoading(false);
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      alert("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/auth/register`, {
        username: name,
        email,
        password,
      });

      console.log(response);

      if (response.status === 201) {
        alert("Registration successful!");
        setInfo({ name: "", email: "", password: "" }); // Clear input
        navigate("/login");
      }
    } catch (err) {
      alert("Error registering: " + err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <input
        type="text"
        name="name"
        value={info.name}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        type="email"
        name="email"
        value={info.email}
        onChange={handleChange}
        placeholder="Email address"
      />

      <input
        type="password"
        name="password"
        value={info.password}
        onChange={handleChange}
        placeholder="Password"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Sign up"}
      </button>

      <Link to="/">Cancel</Link>
    </form>
  );
};

export default Signup;
