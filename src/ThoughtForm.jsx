import React from 'react';
import { useGlobalContext } from './context';

const ThoughtForm = () => {
  const { handleSubmit, thought, setThought } = useGlobalContext();

  return (
    <form className="AddThoughtForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ThoughtForm;
