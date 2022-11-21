import { Card } from '@components/Card';
import * as S from './styles';

import theme from '@theme/index';
import { BackButton } from '@components/BackButton';

export function Statistics() {
  return (
    <S.Container>
      <S.Header>
        <BackButton color={theme.COLORS.GREEN_DARK} />

        <S.Title>90,86%</S.Title>
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
          value="99"
          text="refeições dentro da dieta"
        />

        <S.FooterCards>
          <Card
            width="48%"
            color={theme.COLORS.GREEN_LIGHT}
            value="99"
            text="refeições dentro da dieta"
          />
          <Card
            width="48%"
            color={theme.COLORS.RED_LIGHT}
            value="10"
            text="refeições fora da dieta"
          />
        </S.FooterCards>
      </S.Content>
    </S.Container>
  );
}
