import React from 'react';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'
import PopUp from './components/PopUp'
import './App.css';

function App() {
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
