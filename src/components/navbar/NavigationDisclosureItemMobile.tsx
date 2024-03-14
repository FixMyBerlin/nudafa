import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "../links/Link.astro";

type Props = {
  title: string;
  menuChildrenItems: Record<string, string>;
  path: string;
};

export const NavigationDisclosureItemMobile = (props: Props) => {
  const { title, menuChildrenItems, path } = props;
  return (
    <Disclosure
      key={title}
      as="div"
      className="relative bg-white divide-y-2 w-full divide-beige-100"
    >
      {({ open }) => (
        <>
          <div className="w-full">
            <Disclosure.Button
              className={clsx(
                "flex items-center justify-between w-full px-3 py-4 font-medium",
                Object.values(menuChildrenItems).includes(path) && "font-bold"
              )}
            >
              {title}
              {open ? (
                <ChevronUpIcon className="h-3 w-3" />
              ) : (
                <ChevronDownIcon className="h-3 w-3" />
              )}
            </Disclosure.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="py-1 text-gray-500 w-[94%] mx-[3%]">
              {Object.entries(menuChildrenItems).map(([caption, href]) => (
                <a
                  key={caption}
                  href={href}
                  className={clsx(
                    path === href && "font-bold",
                    "block px-6 py-2 text-sm"
                  )}
                >
                  {caption}
                </a>
              ))}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
