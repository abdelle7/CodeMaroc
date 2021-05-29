import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import drawerNav from "./src/screens/drawerNav";
import SignsScreen from "./src/screens/SignsScreen";
import LessonsScreen from "./src/screens/LessonsScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ObligationScreen from "./src/screens/Signs/ObligationScreen";
import DangerScreen from "./src/screens/Signs/DangerScreen";
import BanExpiresScreen from "./src/screens/Signs/BanExpiresScreen";
import BanScreen from "./src/screens/Signs/BanScreen";
import InstructionsScreen from "./src/screens/Signs/InstructionsScreen";
import IntersectionScreen from "./src/screens/Signs/IntersectionScreen";
import EndObligationScreen from "./src/screens/Signs/EndObligationScreen";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, title: "الرئيسية" }}
          name={"home"}
          component={drawerNav}
        />
        <Stack.Screen
          options={{ title: "العلامات" }}
          name={"sign"}
          component={SignsScreen}
        />
        <Stack.Screen name={"lessons"} component={LessonsScreen} />
        <Stack.Screen name={"quiz"} component={QuizScreen} />
        <Stack.Screen
          options={{ title: "علامات الإجبار" }}
          name={"obligation"}
          component={ObligationScreen}
        />
        <Stack.Screen
          options={{ title: "علامات الخطر" }}
          name={"danger"}
          component={DangerScreen}
        />
        <Stack.Screen name={"banExpires"} component={BanExpiresScreen} />
        <Stack.Screen name={"ban"} component={BanScreen} />
        <Stack.Screen name={"instructions"} component={InstructionsScreen} />
        <Stack.Screen name={"intersection"} component={IntersectionScreen} />
        <Stack.Screen name={"endObligation"} component={EndObligationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: 300,
    position: "absolute",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    left: "50%",
    marginLeft: -150,
  },
});
