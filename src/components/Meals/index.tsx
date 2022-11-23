import { Item, Props as ItemProps } from '@components/Item';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import * as S from './styles';

import Storage from '@storage/meals/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

export type MealsProps = {
  title: string;
  data: ItemProps[];
};

export function Meals({}: Props) {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<MealsProps[]>([]);

  const handleNavigateToDetailsMeals = (item: ItemProps) => {
    navigation.navigate('DetailsMeals', item);
  };

  useFocusEffect(
    useCallback(() => {
      Storage.getAll().then((meals: MealsProps[]) => {
        setMeals(meals);
      });
    }, [])
  );

  return (
    <S.Container
      sections={meals}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }: any) => (
        <Item {...item} onPress={() => handleNavigateToDetailsMeals(item)} />
      )}
      renderSectionHeader={({ section: { title } }: any) => (
        <S.SectionTitle>{title}</S.SectionTitle>
      )}
    />
  );
}
