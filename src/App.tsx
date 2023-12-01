import { useState } from "react";

import { Button } from "react-aria-components";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <main className="h-screen font-BarlowSemiCondensed font-semibold text-base text-white bg-gradient-to-b from-radial-1 to-radial-2 p-8 flex flex-col items-center justify-between">
        <header className="flex flex-row items-center justify-between border-4 border-solid border-header rounded-lg p-4 w-full">
          <ul className="p-2 flex flex-col uppercase text-sm">
            <li>
              <span>Rock</span>
            </li>
            <li>
              <span>Paper</span>
            </li>
            <li>
              <span>Scissors</span>
            </li>
            <li>
              <span>Lizard</span>
            </li>
            <li>
              <span>Spock</span>
            </li>
          </ul>
          <div className="flex flex-col items-center bg-white w-32 h-32 rounded-md">
            <span className="text-score-text uppercase text-sm p-2">score</span>
            <span className="text-dark-text text-5xl">{score}</span>
          </div>
        </header>
        <Game setScore={setScore}></Game>
        <Button className="uppercase text-white border-2 border-solid border-white rounded-md px-4 py-2">
          Rules
        </Button>
      </main>
    </>
  );
}

export default App;
