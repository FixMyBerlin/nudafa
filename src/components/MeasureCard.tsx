import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { linkStyles } from "./links/styles";

type Props = {
  button: any;
  panel: any;
};

export const MeasureCard: React.FC<Props> = ({ button, panel }) => {
  return (
    <li className={clsx(["rounded-sm flex bg-white shadow-lg flex-col mb-8"])}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex flex-col p-4 w-full">
              {button}
              {!open && (
                <p
                  className={clsx(
                    linkStyles,
                    "text-sm flex-shrink-0 md:text-right text-left flex-grow w-full md:-mt-5"
                  )}
                >
                  Mehr Details
                </p>
              )}
            </Disclosure.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-4 gap-2 flex flex-col">
                {panel}
                <Disclosure.Button>
                  <p
                    className={clsx(
                      linkStyles,
                      "flex-shrink-0 md:text-right text-left flex-grow text-sm"
                    )}
                  >
                    Weniger Details
                  </p>
                </Disclosure.Button>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
};
