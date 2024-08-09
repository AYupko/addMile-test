import { getGameConfig } from "@/utils/getGameConfig";
import { useState } from "react";

export function useGameConfig() {
  const gameConfig = getGameConfig();
  const [preview, setPreview] = useState<PreviewState>('initial');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(gameConfig[currentIndex]);
  const allRewards = gameConfig.map(param => param.reward).reverse();

  const onStart = () => {
    setPreview(null);
    setCurrentIndex(0);
    setCurrentQuestion(gameConfig[0]);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < gameConfig.length) {
        setCurrentIndex(nextIndex);
        setCurrentQuestion(gameConfig[nextIndex]);
      } else {
        setPreview('try-again');
      }
    } else {
      setPreview('try-again');
    }
  };

  return {
    preview,
    currentQuestion,
    allRewards,
    onStart,
    handleAnswer,
  };
}