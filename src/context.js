import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();

const getStoredList = () => {
  let myList = localStorage.getItem('todolist');

  if (myList) {
    return (myList = JSON.parse(localStorage.getItem('todolist')));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [thoughts, setThoughts] = useState(getStoredList());
  const [thought, setThought] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);

  const removeThought = (idToRemove) => {
    const newList = thoughts.filter((item) => item.id !== idToRemove);
    setThoughts(newList);
  };

  const editThought = (idToEdit) => {
    const listItem = thoughts.find((item) => item.id === idToEdit);
    setThought(listItem.title);
    setIsEditing(true);
    setEditId(idToEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!thought) {
      return null;
    } else if (thought && isEditing) {
      setThoughts(
        thoughts.map((item) => {
          if (item.id === editID) {
            return { ...item, title: thought };
          }
          return item;
        })
      );
      setIsEditing(false);
      setThought('');
      setEditId(null);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: thought };
      setThoughts([newItem, ...thoughts]);
      setThought('');
    }
  };

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(thoughts));
  }, [thoughts]);

  return (
    <AppContext.Provider
      value={{
        thoughts,
        thought,
        setThought,
        removeThought,
        editThought,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
