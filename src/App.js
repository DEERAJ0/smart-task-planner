import React, { useState } from "react";
import GoalForm from "./components/GoalForm";
import PlanView from "./components/PlanView";

function App() {
  const [plan, setPlan] = useState("");

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>🧠 Smart Task Planner</h1>
      <GoalForm onResponse={(resp) => setPlan(resp)} />
      {plan && <PlanView text={plan} />}
    </div>
  );
}

export default App;
