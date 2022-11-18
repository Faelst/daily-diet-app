import * as S from './styles';

import openImg from '@assets/open.png';

export function CardPercent() {
  return (
    <S.Container>
      <S.OpenImg source={openImg} />
      <S.PercentTitle>90,86%</S.PercentTitle>
      <S.PercentSubTitle>das refeições dentro da dieta</S.PercentSubTitle>
    </S.Container>
  );
}
