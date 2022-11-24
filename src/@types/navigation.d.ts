import { Props as ItemProps } from '@components/Item';
import { MealsAnalytics } from '@services/index';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      DetailsMeals?: ItemProps;
      Statistics: MealsAnalytics;
      EditMeals: {
        isNew?: boolean;
        item?: ItemProps;
      };
    }
  }
}
