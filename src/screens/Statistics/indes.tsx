import { Card } from '@components/Card';
import * as S from './styles';

import theme from '@theme/index';
import { BackButton } from '@components/BackButton';
import { useRoute } from '@react-navigation/native';
import { MealsAnalytics } from '@services/index';

export function Statistics() {
  const route = useRoute();
  const {
    isHealthy,
    percentageHealthy,
    totalOfMeals,
    totalOfMealsIntoDiet,
    totalOfMealsOutOfDiet,
  } = route.params as MealsAnalytics;

  return (
    <S.Container isHealthy={isHealthy}>
      <S.Header>
        <BackButton
          color={isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
        />

        <S.Title>{percentageHealthy}%</S.Title>
        <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      </S.Header>

      <S.Content>
        <S.ContentTitle>Estatísticas gerais</S.ContentTitle>

        <Card
          color={theme.COLORS.GRAY_600}
          value="99"
          text="refeições dentro da dieta"
        />

        <Card
          color={theme.COLORS.GRAY_600}
          value={totalOfMeals.toString()}
          text="refeições registradas"
        />

        <S.FooterCards>
          <Card
            width="48%"
            color={theme.COLORS.GREEN_LIGHT}
            value={totalOfMealsIntoDiet.toString()}
            text="refeições dentro da dieta"
          />
          <Card
            width="48%"
            color={theme.COLORS.RED_LIGHT}
            value={totalOfMealsOutOfDiet.toString()}
            text="refeições fora da dieta"
          />
        </S.FooterCards>
      </S.Content>
    </S.Container>
  );
}
