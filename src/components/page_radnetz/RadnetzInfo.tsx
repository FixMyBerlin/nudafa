import { markdownProseClasses } from 'src/proseClasses'

type Props = {
  links?: { display: string; url: string }[]
  children: React.ReactNode
}

export const RadnetzInfo = ({ children, links }: Props) => {
  return (
    <section className="px-4">
      <div className={markdownProseClasses}>{children}</div>

      {links && (
        <nav>
          <h3>Weiterführende Links:</h3>
          <div className="grid gap-2 py-4 md:grid-cols-2">
            {links.map((link) => (
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
        </nav>
      )}
    </section>
  )
}
