import * as S from './styles';

import { HeaderHome } from '@components/HeaderHome';
import { Card } from '@components/Card';
import { Meals } from '@components/Meals';
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  const handleNavigateToNewDetailsMeals = () => {
    navigation.navigate('EditMeals', { isNew: true });
  };

  const handleNavigateToStatistics = () => {
    navigation.navigate('Statistics');
  };

  return (
    <S.ScrollContainer>
      <HeaderHome />

      <Card
        color={theme.COLORS.GREEN_LIGHT}
        IconColor={theme.COLORS.GREEN_DARK}
        value="90,86%"
        text="das refeições dentro da dieta"
        isHomeCard
        handleNavigateToStatistics={handleNavigateToStatistics}
      />

      <S.ContainerMeals>
        <S.Title>Refeições</S.Title>
        <S.Button onPress={handleNavigateToNewDetailsMeals}>
          <S.PlusIcon name="plus" />
          <S.ButtonText>Nova refeição</S.ButtonText>
        </S.Button>
      </S.ContainerMeals>

      <Meals />
    </S.ScrollContainer>
  );
}
