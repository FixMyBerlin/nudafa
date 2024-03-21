import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

type Props = {
  button: any;
  panel: any;
};

export const MeasureCard: React.FC<Props> = ({ button, panel }) => {
  return (
    <li
      className={clsx([
        "rounded-sm flex bg-white shadow-lg flex-col gap-3 mb-8",
      ])}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button>{button}</Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>{panel}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
};
