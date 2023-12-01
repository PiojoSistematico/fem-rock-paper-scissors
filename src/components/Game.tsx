import React, { useState } from "react";
import { Button } from "react-aria-components";
import {
  IconLizard,
  IconPaper,
  IconRock,
  IconScissors,
  IconSpock,
} from "./Icons";
import Step1 from "./Step1";

type GameProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Game: React.FunctionComponent<GameProps> = ({ setScore }) => {
  const [step, setStep] = useState(0);

  function handleSelection(selection: number): void {
    console.log(selection);
    setStep((prev) => prev + 1);
  }

  return (
    <section>
      {step == 0 ? (
        <Step1 handleSelection={handleSelection}></Step1>
      ) : step == 1 ? (
        <div>
          <div>
            <IconScissors></IconScissors>
          </div>
          <div>
            <IconPaper></IconPaper>
          </div>
          <span>You Picked</span>
          <span>The House Picked</span>
        </div>
      ) : (
        <div>
          <div>
            <IconScissors></IconScissors>
          </div>
          <div>
            <IconPaper></IconPaper>
          </div>
          <span>You Picked</span>
          <span>The House Picked</span>
          <span>Result</span>
          <Button>Play Again</Button>
        </div>
      )}
    </section>
  );
};

export default Game;
