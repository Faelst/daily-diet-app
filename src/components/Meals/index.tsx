import { Item } from '@components/Item';
import * as S from './styles';

export function Meals() {
  return (
    <S.Container>
      <S.DateText>12.08.22</S.DateText>
      <Item status />
      <Item />
      <Item />
    </S.Container>
  );
}
