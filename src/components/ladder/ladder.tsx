import { Step } from "../step";
import "./ladder.css";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";

type Props = {
  allRewards: string[];
  currReward: string;
  menuActive: boolean;
  toggleMenu: () => void;
};

export const Ladder: React.FC<Props> = ({
  allRewards,
  currReward,
  menuActive,
  toggleMenu,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 799px)" });

  return (
    <aside
      className={cn("ladder", {
        ladder__small: isMobile,
        "ladder__small--open": menuActive,
      })}
    >
      <a
        href="#"
        className={cn("icon", {
          "icon--close": menuActive,
        })}
        onClick={toggleMenu}
      ></a>
      {allRewards.map((reward) => (
        <Step step={reward} currentReward={currReward} key={reward} />
      ))}
    </aside>
  );
};
