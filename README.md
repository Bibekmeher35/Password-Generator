# 🔒 Cyberpunk Password Generator

A secure, highly customizable random password generator built with raw HTML, CSS, and vanilla JavaScript. Designed with a striking "blue-green hacker terminal" aesthetic for an immersive tech-focused vibe.

## ✨ Features

- **Dynamic Generation**: Generates complex passwords instantly directly in your browser.
- **Adjustable Length**: Use the custom slider to choose a password length ranging from 4 to 50 characters.
- **Customizable Criteria**: Select which character sets to include:
  - Uppercase Letters (A-Z)
  - Lowercase Letters (a-z)
  - Numbers (0-9)
  - Special Symbols (!@#$%^&*...)
- **Advanced Shuffling**: Utilizes the Fisher-Yates shuffle algorithm on the generated characters so predictable patterns are eliminated.
- **Copy to Clipboard**: A single-click button to securely copy your new password, complete with a floating "toast" notification.
- **Hacker Aesthetic UI**: Features a retro-futuristic dark mode, monospace terminal typography, glowing neon accents, and custom hover animations.

## 🛠️ Technologies Used

- **HTML5**: Semantic layout and accessibility features.
- **CSS3**: Custom CSS variables, flexbox, CSS Grid background patterns, native `accent-color`, and complex drop-shadows for a neon glow effect. No external CSS frameworks were used.
- **JavaScript (ES6+)**: DOM manipulation, event listeners, random character generation, and Clipboard API integration.

## 🚀 How to Run

Because this project is built entirely with client-side vanilla web technologies, no server or build step is required!

1. Clone or download this repository to your local machine.
2. Navigate to the project folder.
3. Double-click on `index.html` to open it in your default web browser.

## 📁 Project Structure

```
Password generator/
├── index.html   # Main HTML structure
├── style.css    # Cyberpunk / terminal styling
├── script.js    # Password generation and DOM logic
└── README.md    # Project documentation
```
