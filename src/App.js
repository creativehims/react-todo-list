import React, { useEffect, useState } from 'react';
import Thought from './Thought';
import ThoughtForm from './ThoughtForm';
import './styles.css';

const getStoredList = () => {
  let myList = localStorage.getItem('todolist');

  if (myList) {
    return (myList = JSON.parse(localStorage.getItem('todolist')));
  } else {
    return [];
  }
};

function App() {
  const [thoughts, setThoughts] = useState(getStoredList());

  const addThought = (text) => {
    setThoughts((prev) => [text, ...prev]);
  };

  const removeThought = (id) => {
    setThoughts((prev) => {
      return prev.filter((item, index) => index !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(thoughts));
  }, [thoughts]);

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <main>
        <ThoughtForm addThought={addThought} />
        <Thought thoughts={thoughts} removeThought={removeThought} />
      </main>
    </div>
  );
}

export default App;
