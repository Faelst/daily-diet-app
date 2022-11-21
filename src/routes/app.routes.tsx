import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsMeals } from '@screens/DetailsMeals';
import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics/indes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="DetailsMeals" component={DetailsMeals} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
