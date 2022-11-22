import * as S from './styles';

type Props = S.ContainerProps & {
  value: string;
  text: string;
  isHomeCard?: boolean;
  IconColor?: string;
  handleNavigateToStatistics?: () => void;
};

export function Card({
  width,
  value,
  text,
  color,
  IconColor,
  isHomeCard = false,
  handleNavigateToStatistics,
}: Props) {
  return (
    <S.Container
      width={width}
      color={color}
      onPress={handleNavigateToStatistics}
    >
      {isHomeCard && <S.OpenIcon color={IconColor} />}
      <S.PercentTitle isHomeCard={isHomeCard}>{value}</S.PercentTitle>
      <S.PercentSubTitle>{text}</S.PercentSubTitle>
    </S.Container>
  );
}
