import { buttonStylesForLinkElement } from '@components/links/styles'
import { markdownProseClasses } from '@components/proseClasses'
import clsx from 'clsx'

type Props = {
  links?: { display: string; url: string }[]
  children: React.ReactNode
}

export const RadnetzInfo = ({ children, links }: Props) => {
  return (
    <section className="px-4">
      <div className={clsx(markdownProseClasses, 'leading-snug md:leading-snug')}>{children}</div>

      {Boolean(links?.length) && (
        <nav>
          <h3>Weiterführende Links:</h3>
          <div className="grid gap-2 py-4 md:grid-cols-2">
            {links?.map((link) => (
              <div key={link.url}>
                <a className={buttonStylesForLinkElement} target="_blank" href={link.url}>
                  {link.display}
                </a>
              </div>
            ))}
          </div>
        </nav>
      )}
    </section>
  )
}
