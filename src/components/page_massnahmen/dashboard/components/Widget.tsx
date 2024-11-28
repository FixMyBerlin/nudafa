import { clsx } from 'clsx'

type Props = {
  headline?: string
  className?: string
  children: React.ReactNode
}

export const Widget = ({ headline, className, children }: Props) => {
  return (
    <section className={clsx('rounded bg-white p-3 shadow', className)}>
      {headline && <h3 className="mb-3 font-serif font-bold">{headline}</h3>}
      {children}
    </section>
  )
}
