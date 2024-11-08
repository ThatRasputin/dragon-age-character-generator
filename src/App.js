import React from 'react';
import CharacterForm from './components/CharacterForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dragon AGE Character Builder</h1>
      </header>
      <main>
        <CharacterForm />
      </main>
    </div>
  );
}

export default App;