import clsx from "clsx";

export const markdownProseClasses = clsx(
  "prose prose-sm md:prose-base", // responsive sizes
  "max-w-full", // We always wrap Prose in Section containers, which bring their own max-width
  "text-black",
  "prose-h1:text-lg md:prose-h1:text-2xl prose-h1:font-bold", // h1 size --> entspricht H3 (nicht markdown)
  "prose-h2:text-base md:prose-h2:text-lg prose-h2:font-bold", // h2 size
  "prose-h3:text-sm md:prose-h3:text-base prose-h3:font-bold", // h3 size
  "prose-h3:mt-1 prose-h1:mb-2 prose-h2:mb-2 prose-h2:mt-1 prose-h3:mb-2 prose-p:mb-2 prose-p:mt-1",
  "prose-a:underline hover:prose-a:decoration-yellow-500 hover:prose-a:text-yellow-500 active:prose-a:decoration-yellow-500 prose-a:underline-offset-2 active:prose-a:decoration-2",
  "prose-li:m-0 prose-li:p-0",
  "prose-headings:max-w-3xl prose-p:max-w-3xl prose-a:max-w-3xl prose-blockquote:max-w-3xl prose-code:max-w-3xl prose-ol:max-w-3xl prose-ul:max-w-3xl prose-table:max-w-3xl prose-hr:max-w-3xl "
);
