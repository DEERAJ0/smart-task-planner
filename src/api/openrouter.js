import axios from "axios";

// Example model: "openai/gpt-4o-mini" or "mistralai/mixtral-8x7b"
const MODEL = "qwen/qwen3-vl-8b-thinking";

export async function generatePlan(goal) {
  const prompt = `
You are a task planning assistant.
Break down the user's goal into actionable steps as bullet points.
Goal: ${goal}
Return short and structured steps.
  `;

  // 🧩 ADD THIS LINE ↓
 // console.log("🔑 OpenRouter Key Loaded:", process.env.REACT_APP_OPENROUTER_KEY);

  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: MODEL,
      messages: [
        { role: "system", content: "You are a helpful planner assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 500
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "Smart Task Planner"
      }
    }
  );

  return response.data.choices[0].message.content;
}
