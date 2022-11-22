import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export type BackButtonProps = {
  color?: string;
};

export function BackButton({ color }: BackButtonProps) {
  // const navigation = useNavigation();

  // function handleGoBack() {
  //   navigation.goBack();
  // }

  return (
    <S.Container>
      <S.BackIcon color={color} />
    </S.Container>
  );
}
