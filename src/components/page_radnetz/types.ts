export type RadnetzPage = {
  slug: string
  menu: string
  order: number
  title: string
  Content: any
  links:
    | {
        display: string
        url: string
      }[]
    | undefined
}
