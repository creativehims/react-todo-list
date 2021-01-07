import React, { useState } from 'react';
import Thought from './Thought';
import ThoughtForm from './ThoughtForm';
import { generateId, getNewExpirationTime } from './utilities';
import './styles.css';

function App() {
  const [thoughts, setThoughts] = useState([]);
  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((prev) => {
      return prev.filter((item) => item.id !== thoughtIdToRemove);
    });
  };

  const [warning, setWarning] = useState('');

  const nearTime = (time) => {
    setWarning(time + ' sec');
  };

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <span>{warning}</span>
      <main>
        <ThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
              nearTime={nearTime}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
