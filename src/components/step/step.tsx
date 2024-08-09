import './step.css';
import cn from 'classnames';

type Props = {
  step: string;
  currentReward: string;
}

export const Step: React.FC<Props> = ({ step, currentReward }) => {
  const normalizeNumber = (value: string) => Number(value.replace(/,/g, ''));

  return (
    <div className="step-container">
      <div className={cn("step", {
        "step--current": normalizeNumber(step) === normalizeNumber(currentReward),
        "step--prev": normalizeNumber(step) < normalizeNumber(currentReward),
      })}>
        {`$${step}`}
      </div>
    </div>
  );
};