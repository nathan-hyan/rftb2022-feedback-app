import { useContext } from 'react';
import feedbackContext from '../context/feedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(feedbackContext);

  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
export default FeedbackStats;
