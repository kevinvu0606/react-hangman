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
const playable = true;
const correctLetters = [];
const wrongLetters = [];


function App() {
  const [playable, setPlayable] = useState(true);

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
