import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Loading } from "../components/Loading";


export function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const authSubscriber = auth()
      .onAuthStateChanged(response => {
        setUser(response);
        setIsLoading(false);
      });

    return authSubscriber;
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {
        user ? <AppRoutes /> : <AuthRoutes />
      }
    </NavigationContainer>
  );
}