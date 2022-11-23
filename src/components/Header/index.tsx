import * as S from './styles';

import { BackButton } from '@components/BackButton';

import theme from '@theme/index';

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <S.Container>
      <BackButton color={theme.COLORS.GRAY_200} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
