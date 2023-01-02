import { useState, useContext, useEffect } from 'react';
import feedbackContext from '../context/feedbackContext';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const radio = [...Array(10)];
  const {
    feedbackEdit: { item },
  } = useContext(feedbackContext);

  useEffect(() => {
    setSelected(item.rating);
  }, [item]);

  const handleChange = (event) => {
    const rating = Number(event.currentTarget.value);

    setSelected(rating);
    select(rating);
  };

  return (
    <ul className="rating">
      {radio.map((item, index) => (
        <li>
          <input
            type="radio"
            id={`num${index + 1}`}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={selected === index + 1}
          />
          <label htmlFor={`num${index + 1}`}>{index + 1}</label>
        </li>
      ))}
    </ul>
  );
}
export default RatingSelect;
