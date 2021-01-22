import React from 'react';
import Thought from './Thought';
import ThoughtForm from './ThoughtForm';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <main>
        <ThoughtForm />
        <Thought />
      </main>
    </div>
  );
}

export default App;
