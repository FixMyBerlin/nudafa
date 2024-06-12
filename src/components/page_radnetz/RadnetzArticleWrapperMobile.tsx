import { RadnetzInfo } from './RadnetzInfo'
import { RadnetzLegend } from './RadnetzLegend'

type Props = {
  visible: boolean
  articleSlug: string
  sources?: string
  title: string
  children: React.ReactNode
  links:
    | {
        display: string
        url: string
      }[]
    | undefined
}

/**
 * @desc In SSR we render all articles of the collection on every page but hide all but the current.
 * In React we update the hidden state for the current article.
 */
export const RadnetzArticleWrapperMobile = ({
  visible,
  articleSlug,
  title,
  children,
  links,
  sources,
}: Props) => {
  return (
    <article className={visible ? 'bg-green-50 md:hidden' : 'hidden'} aria-hidden={visible}>
      <h3 className="px-4 pt-4 text-lg font-bold">{title}</h3>
      <RadnetzInfo links={links}>{children}</RadnetzInfo>
      <RadnetzLegend articleSlug={articleSlug} />
    </article>
  )
}
