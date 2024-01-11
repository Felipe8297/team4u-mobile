import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import Logo from '@/assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleBack() {
    navigation.navigate('groups')
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleBack}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={Logo} />
    </S.Container>
  )
}
