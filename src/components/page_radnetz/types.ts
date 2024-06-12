export type RadnetzPage = {
  slug: string
  menu: string
  order: number
  title: string
  sources?: string
  Content: any
  links:
    | {
        display: string
        url: string
      }[]
    | undefined
}
