import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
  const userIsAuthenticated = true;

  return (
    <NavigationContainer>
      {
        userIsAuthenticated ? <AppRoutes /> : <AuthRoutes />
      }
    </NavigationContainer>
  );
}