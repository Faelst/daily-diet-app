import { Item, Props as ItemProps } from '@components/Item';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

const DATA = [
  {
    title: '12.08.22',
    data: [
      { description: 'Café da manhã', time: '08:00' },
      { description: 'Café da manhã', time: '08:00' },
    ],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
  {
    title: '12.08.22',
    data: [{ description: 'Café da manhã', time: '08:00' }],
  },
];

export type MealsProps = {
  title: string;
  data: ItemProps[];
};

export function Meals() {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<MealsProps[]>(DATA as MealsProps[]);

  const handleNavigateToDetailsMeals = (item: ItemProps) => {
    navigation.navigate('DetailsMeals', item);
  };

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
