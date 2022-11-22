import * as S from './styles';

export type Props = { status?: boolean; description: string; time: string };

export function Item({ status = false, description, time }: Props) {
  return (
    <S.Container>
      <S.Time>{time}</S.Time>
      <S.Divider />
      <S.Description>{description}</S.Description>
      <S.Status status={status} />
    </S.Container>
  );
}
