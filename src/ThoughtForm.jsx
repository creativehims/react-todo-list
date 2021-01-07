import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

const ThoughtForm = (props) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let thought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime(),
    };
    text && props.addThought(thought);
    setText('');
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ThoughtForm;
