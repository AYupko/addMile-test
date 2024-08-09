import './option.css';
import cn from 'classnames';
type Props = {
  answer: Answer;
  checkAnswer: (isCorrect: boolean) => void;
}

export const Option: React.FC<Props> = ({ answer, checkAnswer }) => {
  return (
    <div className="option" onClick={() => checkAnswer(answer.correct)}>
      <span className="option__letter">{answer.id}</span>
      <span className="option__text">{answer.text}</span>
    </div>
  );
}