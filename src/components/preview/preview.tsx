import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button } from '../button';
import './preview.css';
type Props = {
  onStart: Dispatch<SetStateAction<PreviewState>>;
  preview: PreviewState;
  reward: string;
}

export const Preview:React.FC<Props> = ({ onStart, preview, reward }) => {
  return (
    <section className="preview">
      <div className="preview__left">
        <Image src="/hand.png" alt='preview-hand' width={500} height={300} className='preview__image'/>
      </div>
      <div className="preview__right">
        {preview === 'initial' ? (
          <>
          <h1 className='preview__title'>Who wants to be a millionaire?</h1>
          <Button onStart={onStart}>
            Start
          </Button>
          </>
        ) : (
          <>
          <p className='preview__score'>Total score:</p>
          <span className='preview__reward'>{`$${reward}`}</span>
          <Button onStart={onStart}>
            Try again
          </Button>
          </>
        )}
      </div>

    </section>
  )
}