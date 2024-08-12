"use client";
import cn from "classnames";
import '../styles/home.css';
import '../styles/icons.css';
import { useState } from "react";
import { useGameConfig } from "@/hooks/useGameConfig";
import { Option } from "@/components/option";
import { Preview } from "@/components/preview";
import { Ladder } from "@/components/ladder";

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  const { preview, currentQuestion, allRewards, onStart, handleAnswer } =
    useGameConfig();

  const { question, answers, reward: currReward } = currentQuestion;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <main>
      {preview ? (
        <Preview onStart={onStart} preview={preview} reward={currReward} />
      ) : (
        <section className="game">
          <div className="game__main">
            <a
              href="#"
              className={cn("icon", {
                "icon--menu": !menuActive,
              })}
              onClick={toggleMenu}
            ></a>
            <p className="game__question">{question}</p>
            <div className="answers-container">
              {answers.map((answer) => (
                <Option
                  answer={answer}
                  checkAnswer={handleAnswer}
                  key={answer.id}
                />
              ))}
            </div>
          </div>
          <Ladder
            allRewards={allRewards}
            currReward={currReward}
            menuActive={menuActive}
            toggleMenu={toggleMenu}
          />
        </section>
      )}
    </main>
  );
}
