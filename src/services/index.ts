import { Props as ItemProps } from '@components/Item';
import Storage from '@storage/meals';

export type MealsAnalytics = {
  percentageHealthy: string;
  totalOfMeals: number;
  totalOfMealsIntoDiet: number;
  totalOfMealsOutOfDiet: number;
  isHealthy: boolean;
};

export async function mealsAnalytics(): Promise<MealsAnalytics> {
  try {
    let data: ItemProps[] = [];
    const meals = await Storage.getAll();

    meals.forEach((meal) => {
      meal.data.forEach((item) => {
        data.push(item);
      });
    });

    const totalOfMeals = data.length;
    const percentageHealthy = calculatePercentageOfHealthyMeals(data);
    const totalOfMealsIntoDiet = data.filter((item) => item.intoDiet).length;
    const totalOfMealsOutOfDiet = data.filter((item) => !item.intoDiet).length;
    const isHealthy = Number(percentageHealthy) > 60;

    return {
      percentageHealthy,
      totalOfMeals,
      totalOfMealsIntoDiet,
      totalOfMealsOutOfDiet,
      isHealthy,
    };
  } catch (error) {
    throw error;
  }
}

const calculatePercentageOfHealthyMeals = (data: ItemProps[]) => {
  const total = data.length;
  const healthy = data.filter((item) => item.intoDiet).length;
  const percentage = (healthy / total) * 100;

  return isNaN(percentage) ? '0' : percentage.toFixed(2);
};
