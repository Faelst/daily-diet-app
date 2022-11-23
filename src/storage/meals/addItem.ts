import { getAll } from './getAll';

import { Props as ItemProps } from '@components/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function addItem(item: ItemProps): Promise<void> {
  try {
    const meals = await getAll();

    const meal = meals.find((meal) => meal.title === item.date);

    if (meal) {
      meal.data.push(item);
    } else {
      meals.push({
        title: item.date,
        data: [item],
      });
    }

    await AsyncStorage.setItem('@daily_diet:meals', JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
