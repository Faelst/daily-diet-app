import * as S from './styles';

import ImgSuccess from '@assets/illustration.png';

export function Feedback() {
  return (
    <S.Container>
      <S.Title>Continue assim!</S.Title>
      <S.Subtitle>Você continua dentro da dieta. Muito bem!</S.Subtitle>

      <S.Img source={ImgSuccess} />

      <S.Button>
        <S.ButtonText>Ir para a página inicial</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
