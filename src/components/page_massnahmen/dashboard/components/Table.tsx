import { clsx } from 'clsx'

export type TableRow = [string, number, number]

type Props = {
  heads: string[]
  rows: TableRow[]
  className?: string
}

export const Table = ({ heads, rows, className }: Props) => {
  return (
    <div className={clsx('flow-root', className)}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-1.5 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {heads.map((head, index) => {
                    return (
                      <th
                        key={head}
                        scope="col"
                        className={clsx(
                          'py-1.5 text-left text-xs font-semibold text-gray-900',
                          index > 0 ? 'text-right' : '',
                          index === 0 ? 'pl-2 pr-0.5' : 'px-0.5',
                          index === heads.length - 1 ? 'pl-0.5 pr-2' : 'px-0.5',
                        )}
                      >
                        {head}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((columns) => {
                  return (
                    <tr key={columns.join('')}>
                      {columns.map((column, index) => {
                        return (
                          <td
                            key={columns.join('') + column}
                            className={clsx(
                              'py-1.5 text-xs text-gray-500',
                              index > 0 ? 'text-right' : 'font-bold',
                              index === 0 ? 'pl-2 pr-0.5' : 'px-0.5',
                              'py-1.5 text-xs text-gray-500',
                              index === columns.length - 1 ? 'pl-0.5 pr-2' : 'px-0.5',
                            )}
                          >
                            {typeof column === 'number'
                              ? column.toLocaleString('de-DE', {
                                  style: 'currency',
                                  currency: 'EUR',
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                })
                              : column}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
