
---

# 🧠 Smart Task Planner

A simple AI-powered web app that helps users break down a single goal into clear, actionable steps using the **OpenRouter LLM API** (`qwen/qwen3-vl-8b-thinking`).
Built entirely with **React.js** — no backend or database required.

---

## 🚀 Features

* ✨ **Goal-to-Plan Generation:** Enter a goal, and the app automatically generates structured steps or milestones.
* ⚡ **Real-time AI Integration:** Uses OpenRouter’s hosted LLM to fetch responses dynamically.
* 💡 **Lightweight & Fast:** Entirely frontend-based; no local server or database setup.
* 🖥️ **Clean UI:** Simple and minimal interface designed for clarity and speed.

---

## 🛠️ Tech Stack

| Layer                     | Technology                                 |
| ------------------------- | ------------------------------------------ |
| **Frontend**              | React.js (Create React App)                |
| **API Client**            | Axios                                      |
| **AI Model**              | Qwen Qwen3-VL-8B-Thinking (via OpenRouter) |
| **Environment Variables** | `.env` for API key handling                |

---

## 📸 Preview

*(You can add screenshots later if needed)*
Example output:

```
Goal: Build a Portfolio Website

1. Define site sections and content
2. Design layout and color theme
3. Implement navigation and responsiveness
4. Add project showcases and contact form
5. Test and deploy
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/smart-task-planner.git
   cd smart-task-planner
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file in the project root**

   ```
   REACT_APP_OPENROUTER_KEY=sk-or-your-api-key-here
   ```

4. **Start the app**

   ```bash
   npm start
   ```

   The app will launch at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment

You can easily deploy this React app on any static hosting platform:

* **Netlify:** Just drag the `build/` folder into Netlify Drop or connect your GitHub repo.
* **Vercel:** Import your repo and hit *Deploy*.
* **GitHub Pages:** Use `npm run build` → upload the `build/` folder.

> ** Demo:** (https://drive.google.com/file/d/1MzBu-1lXS_DZBWN_YJp-uRfSjhsBxsPg/view?usp=drive_link)

---

## 🔐 API Key Configuration

The app requires an **OpenRouter API key**:

1. Go to [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Generate your API key (starts with `sk-or-`)
3. Add it to your `.env` file:

   ```
   REACT_APP_OPENROUTER_KEY=sk-or-your-api-key
   ```
4. Restart your development server after saving the file.

> ⚠️ **Security note:** Never share or commit your `.env` file to GitHub.
> It should be listed in `.gitignore` automatically.

---

## 🧩 Project Structure

```
smart-task-planner/
├─ public/
│  └─ index.html
├─ src/
│  ├─ api/
│  │  └─ openrouter.js
│  ├─ components/
│  │  ├─ GoalForm.jsx
│  │  └─ PlanView.jsx
│  ├─ App.js
│  └─ index.js
├─ .env
├─ package.json
└─ README.md
```

---

## 👨‍💻 Author

**Deeraj Chinni**
---

## 🙏 Acknowledgments

* [OpenRouter](https://openrouter.ai) for providing free access to cutting-edge language models
* [React](https://react.dev) for the lightweight and flexible frontend framework
* Axios for simplified API handling

---

## 📜 License

This project is for **educational and assessment purposes** only.
© 2025 Deeraj Chinni. All rights reserved.

---

Would you like me to also make a **shorter version (1-page summary)** for uploading to a company portal or assessment form (with project description + key features only)?
