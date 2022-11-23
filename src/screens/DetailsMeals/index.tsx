import { Props as ItemProps } from '@components/Item';
import { Header } from '@components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';
import { useState } from 'react';

import Storage from '@storage/meals/index';

export function DetailsMeals() {
  const navigation = useNavigation();
  const route = useRoute();

  const [item] = useState<ItemProps>(route.params as ItemProps);

  const handleEdit = () => {
    navigation.navigate('EditMeals', { isNew: false, item });
  };

  const handleRemoveItem = async () => {
    try {
      await Storage.removeItem(item);
    } catch (error) {
      console.log(error);
    } finally {
      navigation.navigate('Home');
    }
  };

  return (
    <S.Container>
      <Header title="Refeição" />

      <S.Content>
        <S.Form>
          <S.Title>{item.name}</S.Title>
          <S.Description>{item.description}</S.Description>

          <S.DateTItle>Data e hora</S.DateTItle>
          <S.Date>{`${item.date} ${item.time}`}</S.Date>

          <S.Tag>
            <S.Status intoDiet={item.intoDiet} />
            <S.TagTitle>
              {item.intoDiet ? 'Dentro da dieta' : 'Fora da dieta'}
            </S.TagTitle>
          </S.Tag>
        </S.Form>

        <S.Button onPress={handleEdit}>
          <S.EditIcon />
          <S.Label>Editar refeição</S.Label>
        </S.Button>

        <S.Button isRemove onPress={handleRemoveItem}>
          <S.RemoveIcon />
          <S.Label isRemove>Remover</S.Label>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
