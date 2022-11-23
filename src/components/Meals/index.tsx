import { Item, Props as ItemProps } from '@components/Item';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import * as S from './styles';

type Props = {
  data: MealsProps[];
};

export type MealsProps = {
  title: string;
  data: ItemProps[];
};

export function Meals({ data }: Props) {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<MealsProps[]>(data);

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
