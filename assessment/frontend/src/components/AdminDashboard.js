import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5999/api";

function AdminDashboard({ token }) {
  const [resignations, setResignations] = useState([]);
  const [responses, setResponses] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchResignations();
    fetchResponses();
  }, []);

  const fetchResignations = async () => {
    try {
      const res = await axios.get(`${API}/admin/resignations`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResignations(res.data.data);
    } catch (err) {
      setMessage("Failed to fetch resignations");
    }
  };

  const fetchResponses = async () => {
    try {
      const res = await axios.get(`${API}/admin/exit_responses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResponses(res.data.data);
    } catch (err) {
      setMessage("Failed to fetch responses");
    }
  };

  const handleConclude = async (id, approved, lwd) => {
    try {
      await axios.put(
        `${API}/admin/conclude_resignation`,
        { resignationId: id, approved, lwd },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Resignation updated");
      fetchResignations();
    } catch (err) {
      setMessage("Failed to update resignation");
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Resignations</h3>
      {resignations.map((r) => (
        <div key={r._id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
          <p>Employee ID: {r.employeeId}</p>
          <p>LWD: {r.lwd}</p>
          <p>Status: {r.status}</p>
          <input
            type="date"
            defaultValue={r.lwd}
            onChange={(e) => (r.lwd = e.target.value)}
          />
          <button onClick={() => handleConclude(r._id, true, r.lwd)}>Approve</button>
          <button onClick={() => handleConclude(r._id, false, r.lwd)}>Reject</button>
        </div>
      ))}
      <h3>Exit Questionnaire Responses</h3>
      {responses.map((resp, idx) => (
        <div key={idx} style={{ border: "1px solid #eee", margin: "8px", padding: "8px" }}>
          <p>Employee ID: {resp.employeeId}</p>
          {resp.responses.map((q, i) => (
            <div key={i}>
              <strong>{q.questionText}</strong>: {q.response}
            </div>
          ))}
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminDashboard;
