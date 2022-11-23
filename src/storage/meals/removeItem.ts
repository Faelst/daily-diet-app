import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '../config';

import { Props as ItemProps } from '@components/Item';

export async function removeItem(item: ItemProps) {
  try {
    const meals = await AsyncStorage.getItem(MEALS_COLLECTION);

    if (!meals) {
      return;
    }

    const parsedMeals = JSON.parse(meals);

    const meal = parsedMeals.find((meal: any) => meal.title === item.date);

    if (!meal) {
      return;
    }

    const newMeal = meal.data.filter(
      (mealItem: ItemProps) => mealItem !== item
    );

    const newMeals = parsedMeals.map((meal: any) => {
      if (meal.title === item.date) {
        return {
          ...meal,
          data: newMeal,
        };
      }

      return meal;
    });

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMeals));
  } catch (error) {
    throw error;
  }
}
