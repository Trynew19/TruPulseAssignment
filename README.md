# AI Chat Interface with Plugin-Style Tools

This project is an interactive AI-powered chatbot that supports a **plugin-style architecture** for handling custom slash commands like `/weather`, `/calc`, and `/define`. It's built using **React**, and each plugin encapsulates its logic for clean modular design.

## 🚀 Features
- Chat UI with scrollable history and clean design
- Slash command support: `/weather`, `/calc`, `/define`
- Plugin architecture for easy extensibility
- Local storage for persistent chat history

## 🧠 Plugins Implemented
| Plugin | Command | Description | API Used |
|--------|---------|-------------|-----------|
| Weather | `/weather [city]` | Fetches current weather for a city | [wttr.in](https://wttr.in) |
| Calculator | `/calc [expression]` | Safely evaluates math expressions | Local execution |
| Dictionary | `/define [word]` | Retrieves English word definitions | [dictionaryapi.dev](https://dictionaryapi.dev/) |

## ⚙️ Plugin Architecture
Each plugin follows this simple contract:
```js
{
  async execute(args): Promise<object>
}
```
Plugins are registered inside `src/plugins/index.js`, and selected based on slash command parsing. The result from the plugin is rendered inside the chat as a rich object (JSON view for now).

## 🧾 Parsing Logic
We use a simple RegEx-based parser:
```js
/^\/(\w+)\s*(.*)$/
```
- Extracts the plugin name (like `weather`) and arguments (like `Paris`).
- If a matching plugin is found, its `execute()` method is called with the args.

## 🛠 Setup Instructions
```bash
git clone https://github.com/Trynew19/TruPulseAssignment.git
cd TruPulseAssignment
npm install
npm run dev # or npm start
```
Open your browser at `http://localhost:5173`

## 🔧 Stack
- React (with Hooks)
- Tailwind CSS for styling
- LocalStorage for persistence
- `uuid` for message IDs

## 🌐 Optional: Live Demo
Check out the live version here: [Demo Link](https://your-demo-site.com) *(replace with your Netlify/Vercel link)*

---

---

Made with ❤️ by Krishna Chauhan