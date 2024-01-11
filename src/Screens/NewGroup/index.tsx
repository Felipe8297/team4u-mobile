import { useState } from 'react'

import * as S from './styles'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '@/storage/group/groupCreate'
import { AppError } from '@/utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome do grupo')
      }
      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar o grupo')
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Novo grupo"
          subtitle="crie um grupo e adicione seus amigos"
        />
        <Input placeholder="Nome do grupo" onChangeText={setGroup} />
        <Button title="Criar" onPress={handleNewGroup} />
      </S.Content>
    </S.Container>
  )
}
