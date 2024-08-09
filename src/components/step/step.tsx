import './step.css';
import cn from 'classnames';

type Props = {
  step: string;
  currentReward: string;
}

export const Step: React.FC<Props> = ({ step, currentReward }) => {
  const normalizeNumber = (value: string) => Number(value.replace(/,/g, ''));
  const isActive = normalizeNumber(step) === normalizeNumber(currentReward);
  const isPrev = normalizeNumber(step) < normalizeNumber(currentReward);

  return (
    <div className="step-container">
      <div className={cn("step-line", { "step-line--active": isActive})}></div>
      <div className={cn("step", {
        "step--current": isActive,
        "step--prev": isPrev,
      })}>
        {`$${step}`}
      </div>
    </div>
  );
};