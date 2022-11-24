import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import * as S from './styles';
import theme from '@theme/index';

import { HeaderHome } from '@components/HeaderHome';
import { Card } from '@components/Card';
import { Meals } from '@components/Meals';
import { MealsAnalytics, mealsAnalytics } from '@services/index';

export function Home() {
  const [statistics, setStatistics] = useState({} as MealsAnalytics);

  const navigation = useNavigation();

  const handleNavigateToNewDetailsMeals = () => {
    navigation.navigate('EditMeals', { isNew: true });
  };

  const handleNavigateToStatistics = () => {
    navigation.navigate('Statistics', statistics);
  };

  useFocusEffect(
    useCallback(() => {
      mealsAnalytics().then((analytic) => {
        setStatistics(analytic);
      });
    }, [])
  );

  return (
    <S.ScrollContainer>
      <HeaderHome />

      <Card
        color={
          statistics.isHealthy
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
        }
        IconColor={
          statistics.isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        }
        value={`${statistics.percentageHealthy}%`}
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
