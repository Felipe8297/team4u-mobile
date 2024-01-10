import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type FilterProps = TouchableOpacityProps &
  S.FilterStyleProps & {
    title: string
  }

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
