import { useState } from "react";

import { Button } from "react-aria-components";

import iconScissors from "./assets/images/icon-scissors.svg";
import iconPaper from "./assets/images/icon-paper.svg";
import iconRock from "./assets/images/icon-rock.svg";
import iconLizard from "./assets/images/icon-lizard.svg";
import iconSpock from "./assets/images/icon-spock.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section title="score">
          <ul>
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
          <div>
            <span>score</span>
            <span>points</span>
          </div>
        </section>
        <section title="game">
          <Button>
            <img src={iconScissors} alt="icon Scissors" />
          </Button>
          <Button>
            <img src={iconPaper} alt="icon Paper" />
          </Button>
          <Button>
            <img src={iconRock} alt="icon Rock" />
          </Button>
          <Button>
            <img src={iconLizard} alt="icon Lizard" />
          </Button>
          <Button>
            <img src={iconSpock} alt="icon Spock" />
          </Button>
        </section>
        <section title="game">
          <div>
            <img src={iconScissors} alt="icon Scissors" />
          </div>
          <div>
            <img src={iconPaper} alt="icon Paper" />
          </div>
          <span>You Picked</span>
          <span>The House Picked</span>
        </section>
        <section title="game">
          <div>
            <img src={iconScissors} alt="icon Scissors" />
          </div>
          <div>
            <img src={iconPaper} alt="icon Paper" />
          </div>
          <span>You Picked</span>
          <span>The House Picked</span>
          <span>Result</span>
          <Button>Play Again</Button>
        </section>
        <Button>Rules</Button>
      </main>
    </>
  );
}

export default App;
