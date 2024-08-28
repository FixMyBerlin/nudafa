import { complexityLevelOptions } from './page_massnahmen/measureComplexityLevels.const'

type Props = {
  level: string
}

export const ComplexityLabel = ({ level }: Props) => {
  const getFullComplexityLevelTitle = (level: string) => {
    const complexityLevel = complexityLevelOptions.find(
      (complexityLevel) => complexityLevel.value === level,
    )
    return complexityLevel ? complexityLevel.label : level
  }
  return <span>{getFullComplexityLevelTitle(level)}</span>
}
