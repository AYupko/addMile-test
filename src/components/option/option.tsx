import { useState } from "react";
import "./option.css";
type Props = {
  answer: Answer;
  checkAnswer: (isCorrect: boolean) => void;
};

export const Option: React.FC<Props> = ({ answer, checkAnswer }) => {
  const [className, setClassName] = useState('');
  const setDelay = () => {
    setClassName(answer.correct ? 'option--correct' : 'option--wrong');
    setTimeout(() => {
      checkAnswer(answer.correct);
      setClassName('');
    }, 2000);
  };
  return (
    <div className={`option ${className}`} onClick={() => setDelay()}>
      <span className="option__letter">{answer.id}</span>
      <span className="option__text">{answer.text}</span>
    </div>
  );
};
