import { Props as ItemProps } from '@components/Item';
import { Header } from '@components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';

export function DetailsMeals() {
  const navigation = useNavigation();

  const route = useRoute();
  const { name, description, date, time, intoDiet } = route.params as ItemProps;

  const handleEdit = () => {
    navigation.navigate('EditMeals', { isNew: false });
  };

  return (
    <S.Container>
      <Header title="Refeição" />

      <S.Content>
        <S.Form>
          <S.Title>{name}</S.Title>
          <S.Description>{description}</S.Description>

          <S.DateTItle>Data e hora</S.DateTItle>
          <S.Date>{`${date} ${time}`}</S.Date>

          <S.Tag>
            <S.Status intoDiet={intoDiet} />
            <S.TagTitle>
              {intoDiet ? 'Dentro da dieta' : 'Fora da dieta'}
            </S.TagTitle>
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
