import { useStore } from '@nanostores/react'
import { useEffect, useState } from 'react'
import { RadnetzArticleWrapperDesktop } from './RadnetzArticleWrapperDesktop'
import { RadnetzArticleWrapperMobile } from './RadnetzArticleWrapperMobile'
import { $router } from './utils/store'

type Props = {
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
export const RadnetzArticleWrapper = ({ articleSlug, title, children, links, sources }: Props) => {
  // SSR: We need to tell the router which page is pre-rendered so there is no hydration mismatch
  if (import.meta.env.SSR) {
    $router.open(`/radnetz/${articleSlug}/`)
  }
  // SSR: We have to use this weird useEffect roundtrip in order to work around hydration mismatches
  const router = useStore($router)
  const section = router?.params.section
  const [visible, setVisible] = useState(false)
  useEffect(() => setVisible(section === articleSlug), [section])

  return (
    <>
      <RadnetzArticleWrapperDesktop
        visible={visible}
        articleSlug={articleSlug}
        title={title}
        links={links}
        sources={sources}
      >
        {children}
      </RadnetzArticleWrapperDesktop>
      <RadnetzArticleWrapperMobile
        visible={visible}
        articleSlug={articleSlug}
        title={title}
        links={links}
      >
        {children}
      </RadnetzArticleWrapperMobile>
    </>
  )
}
