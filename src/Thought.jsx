import React from 'react';

const Thought = (props) => {
  const { thought, removeThought, nearTime } = props;

  const handleRemoveClick = (e) => {
    e.preventDefault();
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
};

export default Thought;
