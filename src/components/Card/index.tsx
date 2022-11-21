import * as S from './styles';

import openImg from '@assets/open.png';

type Props = S.ContainerProps & {
  value: string;
  text: string;
  isHomeCard?: boolean;
  handleNavigateToStatistics?: () => void;
};

export function Card({
  width,
  value,
  text,
  color,
  isHomeCard = false,
  handleNavigateToStatistics,
}: Props) {
  return (
    <S.Container
      width={width}
      color={color}
      onPress={handleNavigateToStatistics}
    >
      {isHomeCard && <S.OpenImg source={openImg} />}
      <S.PercentTitle isHomeCard={isHomeCard}>{value}</S.PercentTitle>
      <S.PercentSubTitle>{text}</S.PercentSubTitle>
    </S.Container>
  );
}
