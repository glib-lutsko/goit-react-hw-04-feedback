export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button id={option} onClick={e => onLeaveFeedback(e)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
