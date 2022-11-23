import { Header } from '@components/Header';
import { useNavigation } from '@react-navigation/native';
import theme from '@theme/index';
import * as S from './styles';

export function DetailsMeals() {
  const navigation = useNavigation();

  const handleEdit = () => {
    navigation.navigate('EditMeals', { isNew: false });
  };

  return (
    <S.Container>
      <Header title="Refeição" />

      <S.Content>
        <S.Form>
          <S.Title>Sanduíche</S.Title>
          <S.Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </S.Description>

          <S.DateTItle>Data e hora</S.DateTItle>
          <S.Date>12/12/2020 12:00</S.Date>

          <S.Tag>
            <S.Status />
            <S.TagTitle>dentro da dieta</S.TagTitle>
          </S.Tag>
        </S.Form>

        <S.Button onPress={() => handleEdit()}>
          <S.EditIcon />
          <S.Label>Editar refeição</S.Label>
        </S.Button>

        <S.Button isRemove>
          <S.RemoveIcon />
          <S.Label isRemove>Remover</S.Label>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
