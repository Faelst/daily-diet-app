import * as S from './styles';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { MealsItem } from '@components/MealsItem';
import theme from '@theme/index';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  const handleNavigateToDetailsMeals = () => {
    navigation.navigate('DetailsMeals');
  };

  const handleNavigateToStatistics = () => {
    navigation.navigate('Statistics');
  };

  return (
    <>
      <S.Container>
        <Header />

        <Card
          color={theme.COLORS.GREEN_LIGHT}
          value="90,86%"
          text="das refeições dentro da dieta"
          isHomeCard
          handleNavigateToStatistics={handleNavigateToStatistics}
        />

        <S.ContainerMeals>
          <S.Title>Refeições</S.Title>
          <S.Button onPress={handleNavigateToDetailsMeals}>
            <S.PlusIcon name="plus" />
            <S.ButtonText>Nova refeição</S.ButtonText>
          </S.Button>
        </S.ContainerMeals>

        <MealsItem />

        <MealsItem />

        <MealsItem />
      </S.Container>
    </>
  );
}
