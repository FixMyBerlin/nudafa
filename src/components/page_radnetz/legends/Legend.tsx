import clsx from 'clsx'

type Props = { children: React.ReactNode; className?: string }

export const Legend = ({ children }: Props) => (
  <div className="bg-gray-50 text-xs">
    <div className="text-sm md:gap-4">{children}</div>
  </div>
)

export const LegendCol = ({ children }: Props) => <div>{children}</div>

export const LegendItems = ({ children }: Props) => (
  <div className="flex flex-col justify-start gap-1">{children}</div>
)

export const LegendHeader = ({ children }: Props) => (
  <h3 className={`my-2 font-bold md:my-4`}>{children}</h3>
)

export const LegendItem = ({ children, className }: Props) => (
  <div className={clsx(`flex flex-row items-center text-gray-800`, className)}>{children}</div>
)

export const LegendSources = ({ children }: Props) => (
  <div className="mt-4 text-gray-800 md:col-span-2">{children}</div>
)

export const IconWrapper = ({ children, className }: Props) => (
  <div
    className={clsx(
      'mr-2.5 flex h-6 w-6 flex-shrink-0 items-center justify-center md:mr-4',
      className,
    )}
  >
    {children}
  </div>
)
