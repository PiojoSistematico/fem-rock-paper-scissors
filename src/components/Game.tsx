import React, { useState } from "react";
import { Button } from "react-aria-components";
import Step0 from "./Step0";
import Selection from "./Selection";

type GameProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const points = [
  [0, 1, -1, 1, -1],
  [-1, 0, 1, -1, 1],
  [1, -1, 0, 1, -1],
  [-1, 1, -1, 0, 1],
  [1, -1, 1, -1, 0],
];

const Game: React.FunctionComponent<GameProps> = ({ setScore }) => {
  const [selection, setSelection] = useState(-1);

  const houseSelection = Math.floor(Math.random() * 5);

  function handleSelection(id: number): void {
    setSelection(id);
  }

  function playAgain(number: number): void {
    setSelection(-1);
    setScore((prev) => prev + number);
  }

  const result = selection >= 0 ? points[selection][houseSelection] : 0;

  return (
    <section className=" md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/3">
      {selection < 0 ? (
        <Step0 handleSelection={handleSelection}></Step0>
      ) : (
        <div className="flex flex-col gap-20 w-full">
          <div className="flex flex-row items-center justify-between gap-20">
            <div className="flex flex-col gap-8">
              <Selection winner={result == 1} selection={selection}></Selection>
              <span className="uppercase text-lg">You Picked</span>
            </div>
            <div className="opacity-0 flex flex-col gap-8 items-center animate-[fadeIn_300ms_ease-out_900ms_forwards]">
              <Selection
                winner={result == -1}
                selection={houseSelection}
              ></Selection>
              <span className="uppercase text-lg text-center">
                The House Picked
              </span>
            </div>
          </div>

          <div className="opacity-0 flex flex-col gap-6 items-center animate-[fadeIn_300ms_ease-out_1800ms_forwards]">
            <span className="uppercase text-5xl">
              {result == 1 ? "You win" : result == 0 ? "Draw" : "You Lose"}
            </span>
            <Button
              onPress={() => playAgain(result)}
              className="bg-white text-dark-text rounded-lg px-6 py-2 text-xl"
            >
              Play Again
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Game;
