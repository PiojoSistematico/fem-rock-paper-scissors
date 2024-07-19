import { Button } from "react-aria-components";
import Selection from "./Selection";

type Step1Props = {
  handleSelection: (selection: number) => void;
};

const Step1: React.FunctionComponent<Step1Props> = ({ handleSelection }) => {
  return (
    <div className="relative bg-[url(/bg-pentagon.svg)] bg-center bg-cover bg-no-repeat h-60 w-60 md:w-96 md:h-96">
      <Button
        onPress={() => handleSelection(0)}
        className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 "
      >
        <Selection winner={false} selection={0}></Selection>
      </Button>
      <Button
        onPress={() => handleSelection(1)}
        className="absolute top-0 translate-y-1/2 right-0 translate-x-1/2 "
      >
        <Selection winner={false} selection={1}></Selection>
      </Button>
      <Button
        onPress={() => handleSelection(2)}
        className="absolute bottom-0 right-0 translate-y-1/2 "
      >
        <Selection winner={false} selection={2}></Selection>
      </Button>
      <Button
        onPress={() => handleSelection(3)}
        className="absolute bottom-0 left-0 translate-y-1/2 "
      >
        <Selection winner={false} selection={3}></Selection>
      </Button>
      <Button
        onPress={() => handleSelection(4)}
        className="absolute top-0 translate-y-1/2 left-0 -translate-x-1/2 "
      >
        <Selection winner={false} selection={4}></Selection>
      </Button>
    </div>
  );
};

export default Step1;
