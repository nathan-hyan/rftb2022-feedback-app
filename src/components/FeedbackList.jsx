import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import feedbackContext from '../context/feedbackContext';

function FeedbackList() {
  const { feedback } = useContext(feedbackContext);

  if (feedback.length < 1 || !feedback) {
    return <p>No feedbacks yet!</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
}
export default FeedbackList;
