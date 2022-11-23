import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type Props = TouchableOpacityProps & {
  status?: boolean;
  description: string;
  time: string;

  onPress?: () => void;
};

export function Item({ status = false, description, time, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Time>{time}</S.Time>
      <S.Divider />
      <S.Description>{description}</S.Description>
      <S.Status status={status} />
    </S.Container>
  );
}
