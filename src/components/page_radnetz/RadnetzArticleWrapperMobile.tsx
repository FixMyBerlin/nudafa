import { useStore } from '@nanostores/react'
import { useEffect, useState } from 'react'
import { RadnetzInfo } from './RadnetzInfo'
import { RadnetzLegend } from './RadnetzLegend'
import { $router } from './utils/store'

type Props = {
  articleSlug: string

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
export const RadnetzArticleWrapperMobile = ({ articleSlug, title, children, links }: Props) => {
  // SSR: We need to tell the router which page is pre-rendered so there is no hydration mismatch
  if (import.meta.env.SSR) {
    $router.open(`/radnetz/${articleSlug}`)
  }
  // SSR: We have to use this weird useEffect roundtrip in order to work around hydration mismatches
  const router = useStore($router)
  const section = router?.params.section
  const [visible, setVisible] = useState(false)
  useEffect(() => setVisible(section === articleSlug), [section])

  return (
    <article className={visible ? 'bg-green-50 md:hidden' : 'hidden'} aria-hidden={visible}>
      <h3 className="px-4 pt-4 text-lg font-bold">{title}</h3>
      <RadnetzInfo links={links}>{children}</RadnetzInfo>
      <RadnetzLegend articleSlug={articleSlug} />
    </article>
  )
}
