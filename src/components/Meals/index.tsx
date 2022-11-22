import { Item } from '@components/Item';
import * as S from './styles';

type Props = {
  last?: boolean;
};

export function Meals({ last }: Props) {
  return (
    <S.Container last={last}>
      <S.DateText>12.08.22</S.DateText>
      <Item status />
      <Item />
      <Item status />
    </S.Container>
  );
}
