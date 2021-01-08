import React, { useState } from 'react';
import Thought from './Thought';
import ThoughtForm from './ThoughtForm';
import './styles.css';

function App() {
  const [thoughts, setThoughts] = useState([]);

  const addThought = (text) => {
    setThoughts((prev) => [text, ...prev]);
  };

  const removeThought = (thought) => {
    setThoughts((prev) => {
      return prev.filter((item) => item !== thought);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <main>
        <ThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought, index) => (
            <Thought
              key={index}
              thought={thought}
              id={index}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
