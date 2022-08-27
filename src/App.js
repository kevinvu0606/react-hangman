import React, {useState} from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

const selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className= "game container">
        <Figure />
        <WrongLetters />
        <Word />
      </div>
    </>
  );
}

export default App;
