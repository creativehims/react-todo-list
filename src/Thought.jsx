import React from 'react';

const Thought = (props) => {
  const { thoughts, removeThought } = props;

  const handleRemoveClick = (index) => {
    removeThought(index);
  };

  return (
    <ul className="thoughts">
      {thoughts.map((thought, index) => {
        return (
          <li key={index} className="Thought">
            <button
              value={thought}
              aria-label="Remove thought"
              className="remove-button"
              onClick={() => handleRemoveClick(index)}
            >
              &times;
            </button>
            <div className="text">{thought}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Thought;
