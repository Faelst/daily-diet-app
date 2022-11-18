import * as S from './styles';

import { Header } from '@components/Header';
import { CardPercent } from '@components/CardPercent';

export function Home() {
  return (
    <S.Container>
      <Header />

      <CardPercent />
    </S.Container>
  );
}
