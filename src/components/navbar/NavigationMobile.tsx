import { Disclosure } from "@headlessui/react";
import { NavigationDisclosureItemMobile } from "./NavigationDisclosureItemMobile";

export type TMainNavigation = {
  first: Record<string, Record<string, string>>;
  second: Record<string, Record<string, string>>;
};

type Props = {
  mainNavigation: TMainNavigation;
  path: string;
};

export const NavigationMobile = (props: Props) => {
  const { mainNavigation, path } = props;
  return (
    <Disclosure.Panel
      as="div"
      className="sm:hidden space-y-[1px] pb-1 absolute w-screen bg-beige-100 shadow-lg"
    >
      {Object.entries(mainNavigation.first).map(
        ([title, menuChildrenItems]) => (
          <NavigationDisclosureItemMobile
            key={title}
            path={path}
            title={title}
            menuChildrenItems={menuChildrenItems}
          />
        )
      )}
      {Object.entries(mainNavigation.second).map(
        ([title, menuChildrenItems]) => (
          <NavigationDisclosureItemMobile
            key={title}
            path={path}
            title={title}
            menuChildrenItems={menuChildrenItems}
          />
        )
      )}
    </Disclosure.Panel>
  );
};
