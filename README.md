# My Portfolio & Web Projects Hub 🚀

Welcome to my personal web portfolio repository! This project serves as a central showcase of my skills, education, certificates, and mini web applications built during my Diploma in Information Technology.

---

## 📁 Folder Structure & Files

Here is how the project files are organized inside the `intro/` directory:

```text
portfolio1/
│
├── README.md                  # This documentation guide (How to run/work)
│
└── intro/                     # Core project folder containing all pages and assets
    ├── index.html             # Main Portfolio homepage (Intro, Skills, Internships)
    ├── projects.html          # Projects Showcase directory page
    ├── resume.html            # My digital Resume page
    ├── contact.html           # Contact details and social links page
    │
    # Mini-Application Pages
    ├── weather.html           # Live Weather App using OpenWeatherMap API
    ├── project1.html          # Dynamic Calculator App with Keyboard support
    ├── hhh.html               # Voice-controlled To-Do List App (Speech-to-Text)
    │
    # CSS & JS
    ├── style.css              # Main stylesheets for page layouts
    ├── script.js              # Script behaviors (optional helper functions)
    │
    # Internship Certificates & Profile Assets
    ├── photo1.jpg.png         # Profile picture asset
    ├── nit.jpg                # Web Development Internship Certificate
    ├── gict.jpg               # Python Programming Certificate
    ├── tamizhan.jpg           # Data Science & Analytics Certificate
    └── dsa.jpg                # Data Structures & Algorithms Course Certificate
```

---

## 🛠️ How Do the Projects Work? (Technical Guide)

### 1. Central Portfolio (`index.html` & `projects.html`)
*   **How it works:** Built using semantic HTML5 and customized CSS. It forms a responsive grid showing education tables, interactive certificate view buttons (via JavaScript Modals), and project previews.
*   **Navigation:** Uses a sticky header navigation bar to swap between Home, Projects, Resume, and Contact sheets instantly.

### 2. Live Weather App (`weather.html`)
*   **How it works:** 
    *   Uses JavaScript's **Fetch API** to call OpenWeatherMap's REST API endpoint.
    *   When you search a city, it sends an asynchronous HTTP request with the city name.
    *   On a successful response, JavaScript parses the returned JSON file, dynamically updates the DOM elements (displays Temperature, Humidity, Wind speed, and Pressure), and plays a smooth CSS fade-in animation.

### 3. Voice To-Do List (`hhh.html`)
*   **How it works:**
    *   Utilizes the browser's built-in **Web Speech API** (`webkitSpeechRecognition`).
    *   When the microphone button `🎤` is pressed, the browser requests microphone permission and starts listening.
    *   As you speak, it converts your voice input into plain text in real-time, displays it in the task box, and automatically lets you add it to the list.
    *   Tasks are stored dynamically in a JavaScript array and updated on the interface.

### 4. Calculator App (`project1.html`)
*   **How it works:**
    *   Combines mouse clicks and keyboard key events (`keydown`).
    *   Inputs are evaluated safely using JavaScript's parser to display the correct result.
    *   Features a custom animation pop-up showing greetings before launching the calculator module.

---

## 🚀 How to Run the Project Locally

There are two easy methods to run these projects on your local computer:

### Method A: Direct File Execution (Simplest)
1. Navigate to the `intro` folder inside your computer's file explorer.
2. Double-click on [index.html](file:///c:/Users/hp/OneDrive/Desktop/pro%20ALL%20WORK/portfolio1/intro/index.html).
3. It will open directly inside your web browser. You can navigate to all other pages (Projects, Weather, Calculator, To-Do List) using the top navigation bar.

### Method B: VS Code Live Server (Recommended)
1. Open the folder `portfolio1` inside **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` inside the `intro` folder and click **Open with Live Server**.
4. This runs a local development server at `http://127.0.0.1:5500/intro/index.html` which auto-reloads every time you modify the files.

---

## 🌐 Deploying & Updating Live on GitHub Pages

This project is already pushed to GitHub. To ensure it is live for the world to see:

1. Log in to [GitHub](https://github.com) and go to your repository: `mohitbhattuk01/portfolio`.
2. Go to **Settings** ➡️ **Pages** (in the left sidebar).
3. Set the source branch to **`main`** and folder directory to **`/ (root)`**.
4. Click **Save**.
5. Once deployed, your website will be live at:
   `https://mohitbhattuk01.github.io/portfolio/intro/index.html`
