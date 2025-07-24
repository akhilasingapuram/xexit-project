import React, { useState } from "react";
import Auth from "./components/Auth";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header";
import "./components/App.css";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const handleLogout = () => {
    setToken("");
    setRole("");
  };

  if (!token) {
    return <Auth setToken={setToken} setRole={setRole} />;
  }

  return (
    <>
      <Header onLogout={handleLogout} role={role} />
      {role === "admin" ? (
        <AdminDashboard token={token} />
      ) : (
        <EmployeeDashboard token={token} />
      )}
    </>
  );
}

export default App;
