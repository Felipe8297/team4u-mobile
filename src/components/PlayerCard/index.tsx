import { ButtonIcon } from '@/components/ButtonIcon'
import * as S from './styles'

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.PlayerName>{name}</S.PlayerName>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </S.Container>
  )
}
