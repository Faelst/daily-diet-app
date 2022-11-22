import { Item } from '@components/Item';
import * as S from './styles';

export function MealsItem() {
  return (
    <S.Container>
      <S.DateText>12.08.22</S.DateText>
      <Item />
      <Item />
      <Item />
    </S.Container>
  );
}
