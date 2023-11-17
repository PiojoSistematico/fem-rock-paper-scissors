import React from "react";
import { Button } from "react-aria-components";
import {
  IconLizard,
  IconPaper,
  IconRock,
  IconScissors,
  IconSpock,
} from "./Icons";

type GameProps = {
  step: number;
};

const Game: React.FunctionComponent<GameProps> = ({ step }) => {
  return (
    <section>
      {step == 0 ? (
        <div className="bg-[url(src/assets/images/bg-pentagon.svg)] bg-center bg-cover bg-no-repeat h-64">
          <Button className="rounded-full bg-scissors-2 h-24 w-24 border-b-4 border-solid border-scissors-1 p-2 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full flex flex-row items-center justify-center p-2">
              <picture className="w-8 h-10">
                <IconScissors></IconScissors>
              </picture>
            </div>
          </Button>
          <Button className="rounded-full bg-paper-2 h-24 w-24 border-b-4 border-solid border-paper-1 p-2 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full flex flex-row items-center justify-center p-2">
              <IconPaper></IconPaper>
            </div>
          </Button>
          <Button className="rounded-full bg-rock-2 h-24 w-24 border-b-4 border-solid border-rock-1 p-2 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full flex flex-row items-center justify-center p-2">
              <IconRock></IconRock>
            </div>
          </Button>
          <Button className="rounded-full bg-lizard-2 h-24 w-24 border-b-4 border-solid border-lizard-1 p-2 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full flex flex-row items-center justify-center p-2">
              <IconLizard></IconLizard>
            </div>
          </Button>
          <Button className="rounded-full bg-spock-2 h-24 w-24 border-b-4 border-solid border-spock-1 p-2 flex flex-row items-center justify-center">
            <div className="bg-white rounded-full flex flex-row items-center justify-center p-2">
              <IconSpock></IconSpock>
            </div>
          </Button>
        </div>
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
