import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5999/api";

function Auth({ setToken, setRole }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "", role: "employee" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        const res = await axios.post(`${API}/auth/login`, {
          username: form.username,
          password: form.password,
        });
        setToken(res.data.token);
        // Decode role from token (simple, not secure)
        const payload = JSON.parse(atob(res.data.token.split(".")[1]));
        setRole(payload.role);
      } else {
        await axios.post(`${API}/auth/register`, {
          username: form.username,
          password: form.password,
          role: form.role,
        });
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Back to Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Auth;
