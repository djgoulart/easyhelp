import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth } from "../screens/Auth";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Auth">
      <Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}