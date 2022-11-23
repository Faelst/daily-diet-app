import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '../config';

import { MealsProps } from '@components/Meals';

export async function getAll(): Promise<MealsProps[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    // sort meals by title date
    const meals =
      storage &&
      (JSON.parse(storage) as MealsProps[]).sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }

        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });

    return meals || [];
  } catch (error) {
    throw error;
  }
}
