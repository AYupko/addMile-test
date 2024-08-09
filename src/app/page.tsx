"use client";
import { Option } from "@/components/option";
import { Preview } from "@/components/preview";
import { Step } from "@/components/step";
import { useGameConfig } from "@/hooks/useGameConfig";

export default function Home() {
  const {
    preview,
    currentQuestion,
    allRewards,
    onStart,
    handleAnswer,
  } = useGameConfig();

  const { question, answers, reward: currReward } = currentQuestion;


  return (
    <main>
      {preview ? (
        <Preview onStart={onStart} preview={preview} reward={currReward} />
      ) : (
        <section className="game">
          <div className="game__main">
            <p className="question">{question}</p>
            <div className="answers-container">
              {answers.map((answer) => (
                  <Option answer={answer} checkAnswer={handleAnswer} key={answer.id}/>
              ))}
            </div>
          </div>
          <aside className="game__ladder">
            {allRewards.map(reward => (
              <Step step={reward} currentReward={currReward} key={reward}/>
            ))}
          </aside>
        </section>
      )}
    </main>
  );
}
