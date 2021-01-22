import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

const ThoughtForm = () => {
  const { handleSubmit, thought, setThought } = useGlobalContext();
  const searchVal = useRef(null);

  useEffect(() => {
    searchVal.current.focus();
    searchVal.current.selectionStart = searchVal.current.value.length;
  }, [thought]);

  return (
    <form className="AddThoughtForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        ref={searchVal}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ThoughtForm;
