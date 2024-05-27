import clsx from 'clsx'
import { markdownProseClasses } from 'src/proseClasses'

type Props = {
  links?: { display: string; url: string }[]
  children: React.ReactNode
}

export const RadnetzInfo = ({ children, links }: Props) => {
  return (
    <div className="p-4">
      <div className={clsx(markdownProseClasses)}>{children}</div>
      {links && (
        <div>
          <p> Weiterführende Links:</p>
          <div className="grid grid-cols-2 gap-2 py-4">
            {links.map((link: any) => (
              <div key={link.url}>
                <a
                  className="inline-block rounded-full border border-beige-700 bg-white px-5 py-3 font-semibold hover:bg-beige-600 hover:text-white"
                  target="_blank"
                  href={link.url}
                >
                  {link.display}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}{' '}
    </div>
  )
}
