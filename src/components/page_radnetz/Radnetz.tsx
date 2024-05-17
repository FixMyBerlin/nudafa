import { useStore } from '@nanostores/react'
import { createRouter, getPagePath } from '@nanostores/router'

const $router = createRouter(
  {
    radnetz: '/radnetz/:section',
  },
  {
    search: true,
  },
)

export const Radnetz = () => {
  const profile = useStore($router)
  return (
    <>
      Hello: {profile?.params?.section}
      {profile?.search?.map}
      <hr />
      <a
        href={getPagePath(
          $router,
          'radnetz',
          { section: 'page2' },
          {
            map: '14/52.352/13.619',
          },
        )}
      >
        Foo
      </a>
    </>
  )
}
