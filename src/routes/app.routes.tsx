import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Details } from "../screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="register"
        component={Register}
      />
      <Screen
        name="details"
        component={Details}
      />
    </Navigator>
  )
}