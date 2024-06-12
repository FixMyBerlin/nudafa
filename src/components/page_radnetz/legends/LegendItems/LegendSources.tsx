type Props = { children: React.ReactNode; className?: string }

export const LegendSources = ({ children }: Props) => (
  <div className="mt-4 text-gray-800 md:col-span-2">{children}</div>
)
