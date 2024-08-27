import clsx from 'clsx'

type Props = {
  state: string
}

type TStatusTableData = {
  [key: string]: {
    color: string
    title: string
    icon?: any
  }
}

export const statusTableData: TStatusTableData = {
  idee: {
    color: 'bg-[#FEF3C7]',
    title: 'Idee',
    icon: 'src/assets/icons/bulb.png',
  },
  'in-vorbereitung': {
    color: 'bg-[#FEF3C7]',
    title: 'in Vorbereitung',
    icon: 'src/assets/icons/preparation.png',
  },
  realization: {
    color: 'bg-[#FBBF24]',
    title: 'Umsetzung',
    icon: 'src/assets/icons/planning.png',
  },
  'in-planung': {
    color: 'bg-[#FDE68A]',
    title: 'in Planung',
    icon: 'src/assets/icons/planning.png',
  },
  'in-umsetzung': {
    color: 'bg-[#FBBF24]',
    title: 'in Umsetzung',
    icon: 'src/assets/icons/building.png',
  },
  abgeschlossen: {
    color: 'bg-[#84D470]',
    title: 'abgeschlossen',
    icon: 'src/assets/icons/checkmark.png',
  },
  zurueckgestellt: {
    color: 'bg-[#BFBEB5]',
    title: 'zurueckgestellt',
    icon: 'src/assets/icons/pause.png',
  },
  // todo
  archiviert: {
    color: 'bg-[#84D470]',
    title: 'archiviert',
    icon: 'src/assets/icons/checkmark.png',
  },
}

export const StatusLabel = ({ state }: Props) => {
  return (
    <span
      className={clsx(
        'flex list-none items-center gap-1 rounded-full py-[2px] pl-2 pr-3 text-xs text-black',
        statusTableData[state].color,
      )}
    >
      <img className="h-6 w-6" src={statusTableData[state].icon} alt="" loading="lazy" />
      <p>{statusTableData[state].title}</p>
    </span>
  )
}
