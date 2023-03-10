import React from 'react';
import { 
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./views/Home";

const Stack = createNativeStackNavigator();

export const AppContext = React.createContext();

const Routes = () => {

  return (
    <AppContext.Provider value={{}}>
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </AppContext.Provider>
  )
}

export default Routes;