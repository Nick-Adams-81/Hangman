import "./App.css";
import { useState } from "react";
import wordList from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./Hangmanword";
import { Keyboard } from "./Keyboard";


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>lose win</div>
    <HangmanDrawing />
    <HangmanWord />
    <Keyboard />
  </div>

}
export default App;
