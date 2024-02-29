import Game from "./components/Game";
import CustomModal from "./components/CustomModal";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [score, setScore] = useLocalStorage("score", 0);

  return (
    <>
      <main className="relative h-screen font-BarlowSemiCondensed font-semibold text-base text-white bg-gradient-to-b from-radial-1 to-radial-2 p-8 flex flex-col items-center justify-between">
        <header className="flex flex-row items-center justify-between border-4 border-solid border-header rounded-lg p-4 w-full md:w-3/4 lg:w-[800px]">
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

        <CustomModal></CustomModal>
      </main>
    </>
  );
}

export default App;
