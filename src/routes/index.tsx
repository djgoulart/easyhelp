import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
  const userIsAuthenticated = false;

  if (userIsAuthenticated) {
    return <AppRoutes />
  }

  return <AuthRoutes />
}