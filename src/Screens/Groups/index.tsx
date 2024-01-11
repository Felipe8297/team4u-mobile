import * as S from './styles'

import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { GroupCard } from '@/components/GroupCard'

import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { ListEmpty } from '@/components/ListEmpty'
import { Button } from '@/components/Button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupsGetAll } from '@/storage/group/groupsGetAll'
import { Loading } from '@/components/Loading'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      if (data) {
        setGroups(data)
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Grupos', 'Não possível carregar os grupos.	')
    } finally {
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <S.Container>
      <Header />
      <Highlight
        title="Team4U"
        subtitle="Crie grupos para jogar com a galera."
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar o primeiro grupo?" />
          )}
        />
      )}
      <Button title="Criar novo grupo" onPress={handleNewGroup} />
    </S.Container>
  )
}
