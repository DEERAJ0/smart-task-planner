import React, { useState } from "react";
import { generatePlan } from "../api/openrouter";

export default function GoalForm({ onResponse }) {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const text = await generatePlan(goal);
      onResponse(text);
    } catch (err) {
      console.error(err);
      alert("Error generating plan. Check API key or console logs.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <label>Enter your goal:</label><br />
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="e.g. Learn Web Development"
        required
        style={{ width: "60%", padding: "8px", marginTop: "6px" }}
      />
      <br />
      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Plan"}
      </button>
    </form>
  );
}
