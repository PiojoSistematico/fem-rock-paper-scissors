import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose } from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button className="uppercase text-white border-2 border-solid border-white rounded-md px-4 py-2 md:absolute md:bottom-8 md:right-8">
        Rules
      </Button>
      <ModalOverlay className="bg-black/50 fixed inset-0 p-8">
        <Modal className="fixed inset-0 bg-white md:w-1/2 md:top-1/2 md:h-[600px] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Dialog className="py-16 h-screen flex flex-col items-center justify-between bg-white md:h-[600px] md:py-10">
            {({ close }) => (
              <>
                <h2 className="text-dark-text text-3xl uppercase font-bold">
                  Rules
                </h2>
                <picture className="w-4/5 max-w-96">
                  <img
                    src="src/assets/images/image-rules-bonus.svg"
                    className="object-contain w-full"
                    alt=""
                  />
                </picture>
                <Button onPress={close} className="z-10">
                  <IconClose></IconClose>
                </Button>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
