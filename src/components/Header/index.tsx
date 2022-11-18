import * as S from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      <S.Avatar source={avatarImg} />
    </S.Container>
  );
}
