import clsx from "clsx";
import type { LinkProps } from "./Link.astro";

// LINK
export const linkStyles =
  "underline hover:decoration-beige-500 hover:text-beige-500 active:decoration-beige-500 underline-offset-2 active:decoration-2";

export const menuLinkStylesDefault =
  "no-underline hover:underline hover:decoration-beige-500 text-black";
export const menuLinkActiveStyles =
  "decoration-beige-500 decoration-2 text-black";

export const buttonStylesForDeactivatedLinkElement =
  "bg-gray-300 text-white hover:translate-0 transition-none hover:shadow-none ";

const buttonBase = "inline-flex py-1.5";

const hoverTranslateClassNames =
  "hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg";

export const cardStylesForLinkElements = clsx(
  hoverTranslateClassNames,
  "active:ring-2 active:ring-beige-500" // activeStyleForLinkElement
);

// WHITE BUTTON  (white/purple text)
const whiteButtonBase = "ring-black text-black bg-transparent ring-1 px-6";
const whiteButtonStylesForLinkElement = clsx(
  buttonBase,
  whiteButtonBase,
  "active:ring-2 active:ring-beige-500", // activeStyleForLinkElement
  hoverTranslateClassNames // hoverStyleForLinkElement
);
export const whiteButtonStyles = clsx(
  buttonBase,
  whiteButtonBase,
  "enabled:active:border-0 enabled:active:ring-2 enabled:active:ring-beige-500", // activeStyleForButtonElement
  "enabled:hover:-translate-y-0.5 transition-all duration-200 enabled:hover:shadow-lg" // hoverStyleForButtonElement
);

// BUTTON BLACK  (black/white text)
const blackButtonBase = "text-white bg-black px-2";
const blackButtonStylesForLinkElement = clsx(
  buttonBase,
  blackButtonBase,
  "active:hover:ring-2 active:ring-beige-500", // hoverStyleForLinkElement
  hoverTranslateClassNames // activeStyleForLinkElement
);
export const blackButtonStyles = clsx(
  buttonBase,
  blackButtonBase,
  "enabled:active:border-0 enabled:active:ring-2 enabled:active:ring-beige-500", // hoverStyleForButtonElement
  "enabled:hover:-translate-y-0.5 transition-all duration-200 enabled:hover:shadow-lg" // activeStyleForButtonElement
);

export const selectLinkStyle = (
  button: LinkProps["button"],
  className?: string
) => {
  switch (button) {
    case true:
      return clsx(whiteButtonStylesForLinkElement, className);
    case "white":
      return clsx(whiteButtonStylesForLinkElement, className);
    case "black":
      return clsx(blackButtonStylesForLinkElement, className);
    case "card":
      return clsx(cardStylesForLinkElements, className);
    default:
      return clsx(linkStyles, className);
  }
};
