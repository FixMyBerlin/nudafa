import { linkStyles } from '@components/links/styles'
import { clsx } from 'clsx'
import { Widget } from '../components/Widget'
import type { GeneralDashboardData } from '../DasboardTabs'

export const WidgetBilder = ({ data: { widgetBilder } }: GeneralDashboardData) => {
  if (!widgetBilder?.length) return null

  return (
    <Widget>
      <div className="flex flex-col gap-2">
        {widgetBilder.map((bild) => (
          <figure className="w-full">
            <div className="aspect-[4/3]">
              <img
                className="h-full w-full overflow-hidden object-cover"
                src={bild.image.src}
                alt={bild.alt || ''}
                loading="lazy"
                width={300}
              />
            </div>
            {(bild.description || bild.imageCopyright) && (
              <figcaption className="mt-2 text-xs text-gray-500 md:text-sm">
                {bild.description}
                {bild.imageCopyright && (
                  <details className="ml-5 inline-block open:ml-0">
                    <summary className={clsx(linkStyles, 'cursor-pointer list-none')}>
                      &copy;
                    </summary>
                    {bild.imageCopyright}
                  </details>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Widget>
  )
}
