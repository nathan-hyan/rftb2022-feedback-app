import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item 1 is from context',
      rating: 10,
    },
    {
      id: 2,
      text: 'this item 2 is from context',
      rating: 5,
    },
    {
      id: 3,
      text: 'this item 3 is from context',
      rating: 2,
    },
  ]);

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback((prevState) => prevState.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((prevState) => [newFeedback, ...prevState]);
  };

  const updateFeedback = (id, updItem) => {
    setFeedback((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <feedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </feedbackContext.Provider>
  );
};

export default feedbackContext;
