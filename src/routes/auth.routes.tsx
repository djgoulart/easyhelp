import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth } from "../screens/Auth";
import { Signup } from "../screens/Signup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="auth">
      <Screen
        name="auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}