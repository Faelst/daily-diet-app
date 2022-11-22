import * as S from './styles';

export function Item() {
  return (
    <S.Container>
      <S.Time>12:00</S.Time>
      <S.Divider />
      <S.Description>X-tudo</S.Description>
      <S.Status />
    </S.Container>
  );
}
