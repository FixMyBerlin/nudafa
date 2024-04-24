import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavbarMenuItem } from "./NavbarMenuItem";
import { NavigationMobile } from "./NavigationMobile";

export type TMainNavigation = {
  first: Record<string, Record<string, string>>;
  second: Record<string, Record<string, string>>;
};

type Props = {
  mainNavigation: TMainNavigation;
  path: string;
};

export const Navbar = (props: Props) => {
  const { mainNavigation, path } = props;
  return (
    <Disclosure as="nav" className="bg-beige-100 text-gray-900 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex-shrink-0">
                <img className="w-[171px]" src="/Logo_NUDAFA.png" />
              </a>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex gap-2 divide-x divide-solid divide-gray-900">
                  <div className="flex">
                    {Object.entries(mainNavigation.first).map(
                      ([title, menuChildrenItems]) => (
                        <NavbarMenuItem
                          key={title}
                          path={path}
                          title={title}
                          menuChildrenItems={menuChildrenItems}
                        />
                      )
                    )}
                  </div>

                  {/* Current: "bg-yellow-500 text-white", Default: "text-gray-300
                    hover:bg-gray-700 hover:text-white" */}
                  {/* <a
                      href="#"
                      className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-medium text-white"
                    >
                      Dashboard
                    </a> */}
                  <div className="flex">
                    {Object.entries(mainNavigation.second).map(
                      ([title, menuChildrenItems]) => (
                        <NavbarMenuItem
                          key={title}
                          path={path}
                          title={title}
                          menuChildrenItems={menuChildrenItems}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-900 h hover:text-beige-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <NavigationMobile mainNavigation={mainNavigation} path={path} />
        </>
      )}
    </Disclosure>
  );
};
