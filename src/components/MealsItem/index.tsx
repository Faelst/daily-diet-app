import * as S from './styles';

export function MealsItem() {
  return (
    <S.Container>
      <S.DateText>12.08.22</S.DateText>
      <S.Content>
        <S.TextTimeMealsItem>12:00</S.TextTimeMealsItem>
        <S.Divider />
        <S.TextDescriptionMealsItem>X-tudo</S.TextDescriptionMealsItem>
        <S.CircleStatus />
      </S.Content>

      <S.Content>
        <S.TextTimeMealsItem>12:00</S.TextTimeMealsItem>
        <S.Divider />
        <S.TextDescriptionMealsItem>X-tudo</S.TextDescriptionMealsItem>
        <S.CircleStatus />
      </S.Content>

      <S.Content>
        <S.TextTimeMealsItem>12:00</S.TextTimeMealsItem>
        <S.Divider />
        <S.TextDescriptionMealsItem>X-tudo</S.TextDescriptionMealsItem>
        <S.CircleStatus />
      </S.Content>
    </S.Container>
  );
}
