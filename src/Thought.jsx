import React from 'react';
import { useGlobalContext } from './context';

const Thought = () => {
  const { thoughts, removeThought, editThought } = useGlobalContext();

  return (
    <ul className="thoughts">
      {thoughts.map((thought, index) => {
        return (
          <li key={index} className="Thought">
            <button
              aria-label="Remove thought"
              className="remove-button"
              onClick={() => removeThought(thought.id)}
            >
              &times;
            </button>
            <button
              aria-label="Remove thought"
              className="remove-button"
              onClick={() => editThought(thought.id)}
            >
              &#x0003C;
            </button>
            <div className="text">{thought.title}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Thought;
