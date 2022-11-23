import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type Props = TouchableOpacityProps & {
  name: string;
  description: string;
  time: string;
  date: string;
  intoDiet: boolean;

  onPress?: () => void;
};

export function Item({ intoDiet = false, name, time, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Time>{time}</S.Time>
      <S.Divider />
      <S.Description>{name}</S.Description>
      <S.Status status={intoDiet} />
    </S.Container>
  );
}
