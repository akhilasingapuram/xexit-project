import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:5999/api";

function EmployeeDashboard({ token }) {
  const [lwd, setLwd] = useState("");
  const [resignationId, setResignationId] = useState("");
  const [responses, setResponses] = useState([
    { questionText: "Why are you leaving the company?", response: "" },
    { questionText: "Any suggestions for improvement?", response: "" },
  ]);
  const [message, setMessage] = useState("");

  const submitResignation = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(
        `${API}/user/resign`,
        { lwd },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResignationId(res.data.data.resignation._id);
      setMessage("Resignation submitted!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  const handleResponseChange = (idx, value) => {
    const updated = [...responses];
    updated[idx].response = value;
    setResponses(updated);
  };

  const submitResponses = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post(
        `${API}/user/responses`,
        { responses },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Responses submitted!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="employee-dashboard">
      <h2>Employee Dashboard</h2>
      <form onSubmit={submitResignation}>
        <label>Last Working Day (YYYY-MM-DD):</label>
        <input
          type="date"
          value={lwd}
          onChange={(e) => setLwd(e.target.value)}
          required
        />
        <button type="submit">Submit Resignation</button>
      </form>
      {resignationId && <p>Resignation ID: {resignationId}</p>}
      <hr />
      <form onSubmit={submitResponses}>
        <h3>Exit Questionnaire</h3>
        {responses.map((q, idx) => (
          <div key={idx}>
            <label>{q.questionText}</label>
            <input
              type="text"
              value={q.response}
              onChange={(e) => handleResponseChange(idx, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Submit Responses</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default EmployeeDashboard;
