# Wordle Game (React)

A clean Wordle-style game built with **React** and **SCSS**.  
Guess the hidden **5-letter word** in **6 tries** before the timer runs out.

## Features

- **Classic Wordle rules**
  - Green: correct letter in the correct position
  - Yellow: correct letter in the wrong position
  - Grey: letter is not in the word
- **6 attempts** to guess a **5-letter** word
- **Timer** (default: 120 seconds)
- **Restart** button after win/lose/time over
- **On-screen keyboard** (clickable) + **physical keyboard** support
- Keyboard coloring based on used letters
- Word list and keyboard layout loaded from **static JSON files** in `public/`
- UI styling using SCSS + shared variables/mixins

## Tech Stack

- React
- SCSS (Sass)
- react-icons

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run the dev server
```bash
npm run dev
```

Open the URL shown in the terminal (usually: `http://localhost:5173`).

## Project Data (No Backend Required)

This project does **not** require a backend server.

Static JSON files are located in:

- `public/solutions.json`
- `public/letters.json`

They are loaded in the app using:
- `fetch("/solutions.json")`
- `fetch("/letters.json")`

### Example `public/solutions.json`

```json
{
  "solutions": [
    { "id": 1, "word": "sharp" },
    { "id": 2, "word": "spade" }
  ]
}
```

## How to Play

1. Type a 5-letter word (using your keyboard or clicking the on-screen keypad).
2. Press **Enter** to submit.
3. Colors will reveal how close your guess is.
4. You win if you guess the word before:
   - You run out of attempts (6 turns), or
   - The timer reaches 0.
     

## Customization

- Change timer default in `App.jsx`:
  - `const [timerSeconds, setTimerSeconds] = useState(120);`
- Add more words in `public/solutions.json`
- Customize keypad layout in `public/letters.json`
- Update design tokens in `src/styles/variables.scss`

## License

This project is for learning and demo purposes.
