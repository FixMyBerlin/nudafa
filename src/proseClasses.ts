import clsx from 'clsx'

export const markdownProseClasses = clsx(
  'prose prose-sm md:prose-base', // responsive sizes
  'max-w-full', // We always wrap Prose in Section containers, which bring their own max-width
  'text-black',
  'prose-h1:text-lg prose-h1:font-bold md:prose-h1:text-2xl', // h1 size --> entspricht H3 (nicht markdown)
  'prose-h2:text-base prose-h2:font-bold md:prose-h2:text-lg', // h2 size
  'prose-h3:text-sm prose-h3:font-bold md:prose-h3:text-base', // h3 size
  'prose-h1:mb-2 prose-h2:mb-2 prose-h2:mt-1 prose-h3:mb-2 prose-h3:mt-1 prose-p:mb-2 prose-p:mt-1',
  'prose-li:m-0 prose-li:p-0',
  'prose-a:underline prose-a:decoration-beige-500 prose-a:decoration-[1.5px] prose-a:underline-offset-2 hover:prose-a:text-beige-500 prose-a:active:decoration-2',
  'prose-headings:max-w-[690px] prose-p:max-w-[690px] prose-a:max-w-[690px] prose-blockquote:max-w-[690px] prose-code:max-w-[690px] prose-ol:max-w-[690px] prose-ul:max-w-[690px] prose-table:max-w-[690px] prose-hr:max-w-[690px] ',
)
