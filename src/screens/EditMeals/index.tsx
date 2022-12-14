import { Props as ItemProps } from '@components/Item';
import { Header } from '@components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';
import { useState } from 'react';

import Storage from '@storage/meals/index';

type Params = {
  item: ItemProps;
  isNew?: boolean;
};

export function EditMeals() {
  const navigation = useNavigation();

  const route = useRoute();
  const { isNew = false, item = {} } = route.params as Params;

  const [data, setData] = useState<ItemProps>(item as ItemProps);

  const handleChange = (key: string, value: string | boolean) => {
    setData({ ...data, [key]: value });
  };

  const handleSave = async () => {
    try {
      if (isNew) {
        await Storage.addItem(data);
      } else {
        await Storage.updateItem(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setData({} as ItemProps);
      navigation.navigate('Home');
    }
  };

  return (
    <S.Container>
      <Header title={isNew ? 'Nova refeição' : 'Refeição'} />

      <S.Form>
        <S.Label>Nome</S.Label>
        <S.Input
          value={data.name}
          onChangeText={(value) => handleChange('name', value)}
        />

        <S.Label>Descrição</S.Label>
        <S.Input
          isTextArea
          value={data.description}
          onChangeText={(value) => handleChange('description', value)}
        />

        <S.Footer>
          <S.InputGroup>
            <S.Label>Data</S.Label>
            <S.Input
              value={data.date}
              onChangeText={(value) => handleChange('date', value)}
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Hora</S.Label>
            <S.Input
              value={data.time}
              onChangeText={(value) => handleChange('time', value)}
            />
          </S.InputGroup>
        </S.Footer>

        <S.Label>Está dentro da dieta?</S.Label>
        <S.ButtonGroup>
          <S.Button
            isIntoDiet={data.intoDiet}
            onPress={() => handleChange('intoDiet', true)}
          >
            <S.StatusCircleIcon isBtnTruth></S.StatusCircleIcon>
            <S.Label>Sim</S.Label>
          </S.Button>
          <S.Button
            isNotIntoDiet={data.intoDiet}
            onPress={() => handleChange('intoDiet', false)}
          >
            <S.StatusCircleIcon></S.StatusCircleIcon>
            <S.Label>Não</S.Label>
          </S.Button>
        </S.ButtonGroup>

        <S.Button isSaveBtn onPress={handleSave}>
          <S.Label isSaveBtn>Salvar</S.Label>
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
