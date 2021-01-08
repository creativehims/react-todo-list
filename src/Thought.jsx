import React from 'react';

const Thought = (props) => {
  const { thought, removeThought } = props;

  const handleRemoveClick = (e) => {
    removeThought(thought);
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
      <div className="text">{thought}</div>
    </li>
  );
};

export default Thought;
