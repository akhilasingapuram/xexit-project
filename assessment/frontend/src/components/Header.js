import React from "react";

function Header({ onLogout, role }) {
  return (
    <header
      style={{
        background: "#1976d2",
        color: "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem", whiteSpace: "nowrap" }}>
        Exitease
        {role ? ` - ${role.charAt(0).toUpperCase() + role.slice(1)}` : ""}
      </h1>

      {/* This is the only thing that should be next to title */}
      <button
        onClick={onLogout}
        style={{
          background: "#fff",
          color: "#1976d2",
          border: "none",
          borderRadius: "4px",
          padding: "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
