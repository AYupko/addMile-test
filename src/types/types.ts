type Answer = {
  id: string;
  text: string;
  correct: boolean;
}

type Question = {
  question: string;
  answers: Answer[];
  reward: string;
}

type PreviewState = 'initial' | 'try-again' | null;