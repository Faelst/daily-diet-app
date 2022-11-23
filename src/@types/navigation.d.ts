import { Props as ItemProps } from '@components/Item';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      DetailsMeals?: ItemProps;
      Statistics: undefined;
      EditMeals: {
        isNew?: boolean;
        item?: ItemProps;
      };
    }
  }
}
