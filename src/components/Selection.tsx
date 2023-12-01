import React from "react";
import {
  IconLizard,
  IconPaper,
  IconRock,
  IconScissors,
  IconSpock,
} from "./Icons";

type SelectionProps = {
  selection: number;
};

const options = {
  0: (
    <div className="rounded-full bg-scissors-2 w-22 h-22 border-b-4 border-solid border-scissors-1 p-3 flex flex-row items-center justify-center">
      <div className="bg-white rounded-full flex flex-row items-center justify-center p-4">
        <picture className="h-8 w-8">
          <IconScissors></IconScissors>
        </picture>
      </div>
    </div>
  ),
  1: (
    <div className="rounded-full bg-paper-2 w-22 h-22 border-b-4 border-solid border-paper-1 p-3 flex flex-row items-center justify-center">
      <div className="bg-white rounded-full flex flex-row items-center justify-center p-5">
        <picture className="h-8 w-8">
          <IconPaper></IconPaper>
        </picture>
      </div>
    </div>
  ),
  2: (
    <div className="rounded-full bg-rock-2 w-22 h-22 border-b-4 border-solid border-rock-1 p-3 flex flex-row items-center justify-center">
      <div className="bg-white rounded-full flex flex-row items-center justify-center p-5">
        <picture className="h-8 w-8">
          <IconRock></IconRock>
        </picture>
      </div>
    </div>
  ),
  3: (
    <div className="rounded-full bg-lizard-2 w-22 h-22 border-b-4 border-solid border-lizard-1 p-3 flex flex-row items-center justify-center">
      <div className="bg-white rounded-full flex flex-row items-center justify-center p-5">
        <picture className="h-8 w-8">
          <IconLizard></IconLizard>
        </picture>
      </div>
    </div>
  ),
  4: (
    <div className="rounded-full bg-spock-2 w-22 h-22 border-b-4 border-solid border-spock-1 p-3 flex flex-row items-center justify-center">
      <div className="bg-white rounded-full flex flex-row items-center justify-center p-5">
        <picture className="h-8 w-8">
          <IconSpock></IconSpock>
        </picture>
      </div>
    </div>
  ),
};

const Selection: React.FunctionComponent<SelectionProps> = ({ selection }) => {
  return <>{options[selection]}</>;
};

export default Selection;
