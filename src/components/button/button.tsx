import { Dispatch, SetStateAction } from 'react';
import './button.css';


type Props = {
  onStart: Dispatch<SetStateAction<PreviewState>>;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ onStart, children }) => {
  return (
    <button className="button" onClick={() => onStart(null)}>
      {children}
    </button>
  );
}