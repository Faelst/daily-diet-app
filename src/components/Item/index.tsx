import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type Props = TouchableOpacityProps & {
  status?: boolean;
  name: string;
  description: string;
  time: string;
  date: string;
  intoDiet: boolean;

  onPress?: () => void;
};

export function Item({ status = false, name, time, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Time>{time}</S.Time>
      <S.Divider />
      <S.Description>{name}</S.Description>
      <S.Status status={status} />
    </S.Container>
  );
}
