import * as S from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

export function HeaderHome() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      <S.Avatar source={avatarImg} />
    </S.Container>
  );
}
