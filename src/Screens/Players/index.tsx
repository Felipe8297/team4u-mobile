import * as S from './styles'
import { Highlight } from '@/components/Highlight'
import { Header } from '@/components/Header'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome do grupo"
        subtitle="adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <Filter title="Time A" />
    </S.Container>
  )
}
