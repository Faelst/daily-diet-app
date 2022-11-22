import * as S from './styles';

type Props = { status?: boolean };

export function Item({ status = false }: Props) {
  return (
    <S.Container>
      <S.Time>12:00</S.Time>
      <S.Divider />
      <S.Description>X-tudo</S.Description>
      <S.Status status={status} />
    </S.Container>
  );
}
