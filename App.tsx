import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/Screen/Login";
import SignUp from "./src/Screen/SignUp";
import Userinfo from "./src/Screen/Userinfo";
import { Button,View } from "react-native"; // Import View from react-native


import { styles } from "./src/Screen/style";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
              />
            ),
          })}
          
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Userinfo" component={Userinfo} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;