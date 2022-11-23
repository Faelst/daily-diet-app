import { MEALS_COLLECTION } from '../config';

import { Props as ItemProps } from '@components/Item';

import Storage from './index';

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function removeItem(item: ItemProps) {
  try {
    const meals = await Storage.getAll();

    if (!meals) {
      return;
    }

    const newMeals = meals.map((meal) => {
      if (meal.title === item.date) {
        meal.data = meal.data.filter(
          (data) => !(data.date === item.date && data.time === item.time)
        );
      }

      if (meal.data.length) {
        return meal;
      }
    });

    const mealsStringify = JSON.stringify(newMeals.filter((item) => !!item));

    await AsyncStorage.setItem(MEALS_COLLECTION, mealsStringify);
  } catch (error) {
    throw error;
  }
}
