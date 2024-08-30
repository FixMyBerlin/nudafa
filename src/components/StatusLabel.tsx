import clsx from 'clsx'
import buildingImg from 'src/assets/icons/building.png'
import bulbImg from 'src/assets/icons/bulb.png'
import checkmarkImg from 'src/assets/icons/checkmark.png'
import pauseImg from 'src/assets/icons/pause.png'
import planningImg from 'src/assets/icons/planning.png'
import preparationImg from 'src/assets/icons/preparation.png'

type Props = {
  state: string
}

type TStatusTableData = {
  [key: string]: {
    color: string
    title: string
    icon?: any
    imgClassName?: 'p-1'
  }
}

export const statusTableData: TStatusTableData = {
  idee: {
    color: 'bg-[#FEF3C7]',
    title: 'Idee',
    icon: bulbImg,
  },
  'in-vorbereitung': {
    color: 'bg-[#FEF3C7]',
    title: 'in Vorbereitung',
    icon: preparationImg,
    imgClassName: 'p-1',
  },
  'in-planung': {
    color: 'bg-[#FDE68A]',
    title: 'in Planung',
    icon: planningImg,
  },
  'in-umsetzung': {
    color: 'bg-[#FBBF24]',
    title: 'in Umsetzung',
    icon: buildingImg,
  },
  abgeschlossen: {
    color: 'bg-[#84D470]',
    title: 'abgeschlossen',
    icon: checkmarkImg,
  },
  zurueckgestellt: {
    color: 'bg-[#BFBEB5]',
    title: 'zurueckgestellt',
    icon: pauseImg,
    imgClassName: 'p-1',
  },
  // todo
  archiviert: {
    color: 'bg-[#84D470]',
    title: 'archiviert',
    icon: pauseImg,
  },
}

export const StatusLabel = ({ state }: Props) => {
  return (
    <span
      className={clsx(
        'flex list-none items-center gap-1 rounded-full py-1.5 pl-3 pr-4 text-xs font-normal text-black',
        statusTableData[state].color,
      )}
    >
      <div className="h-6 w-6">
        <img
          className={clsx('w-ful h-full', statusTableData[state].imgClassName)}
          src={statusTableData[state].icon.src}
          alt=""
        />
      </div>
      <p>{statusTableData[state].title}</p>
    </span>
  )
}
