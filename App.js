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
import OvertakingScreen from "./src/screens/Lessons/OvertakingScreen";
import ParkAndStopScreen from "./src/screens/Lessons/ParkAndStopScreen";
import AccidentsScreen from "./src/screens/Lessons/AccidentsScreen";
import RulesRoadScreen from "./src/screens/Lessons/RulesRoadScreen";
import VisionAndLightsScreen from "./src/screens/Lessons/VisionAndLightsScreen";
import PriorityGiveScreen from "./src/screens/Lessons/PriorityGiveScreen";
import VehicleScreen from "./src/screens/Lessons/VehicleScreen";
import DriverScreen from "./src/screens/Lessons/DriverScreen";
import RoadSignalingScreen from "./src/screens/Lessons/RoadSignalingScreen";
import AppliedConceptsScreen from "./src/screens/Lessons/AppliedConceptsScreen";
import { QuizProvider } from "./src/contexts/QuizContext";
import ResultScreen from "./src/screens/ResultScreen";
import { navigationRef } from "./src/helper/RootNavigation";
import * as RootNavigation from "./src/helper/RootNavigation";
import { HeaderBackButton } from "@react-navigation/stack";
import { Root, Popup } from "react-native-popup-confirm-toast";
import CorrectionScren from "./src/screens/CorrectionScren";
import QuizzesList from "./src/screens/QuizzesList";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Root>
      <QuizProvider>
        <NavigationContainer ref={navigationRef}>
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
            <Stack.Screen
              options={{ title: "الدروس" }}
              name={"lessons"}
              component={LessonsScreen}
            />
            <Stack.Screen
              options={{ title: "سلسلة الإمتحانات" }}
              name={"QuizzesList"}
              component={QuizzesList}
            />
            <Stack.Screen
              options={{ title: "الإمتحان" }}
              name={"quiz"}
              component={QuizScreen}
              detachPreviousScreen={true}
            />
            <Stack.Screen
              options={{ title: "التصحيح" }}
              name={"Result"}
              component={ResultScreen}
              options={{
                gestureEnabled: false,
                //headerTitle:'الإمتحان',
                headerLeft: (props) => (
                  <HeaderBackButton
                    {...props}
                    onPress={() => {
                      Popup.show({
                        type: "confirm",
                        title: "انتباه!",
                        textBody: "هل أنت متأكد أنك تريد الخروج من التصحيح.",
                        buttonText: "نعم",
                        confirmText: "لا",
                        callback: () => RootNavigation.navigate("home"),
                      });
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              options={{ title: "التصحيح" }}
              name={"Correction"}
              component={CorrectionScren}
            />
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
            <Stack.Screen
              options={{ title: "علامات نهاية المنع" }}
              name={"banExpires"}
              component={BanExpiresScreen}
            />
            <Stack.Screen
              options={{ title: "علامات المنع" }}
              name={"ban"}
              component={BanScreen}
            />
            <Stack.Screen
              options={{ title: "علامات الإرشاد" }}
              name={"instructions"}
              component={InstructionsScreen}
            />
            <Stack.Screen
              options={{ title: "علامات التقاطع" }}
              name={"intersection"}
              component={IntersectionScreen}
            />
            <Stack.Screen
              options={{ title: "علامات نهاية الإجبار" }}
              name={"endObligation"}
              component={EndObligationScreen}
            />
            <Stack.Screen
              options={{ title: "التجاوز و التقابل" }}
              name={"Overtaking"}
              component={OvertakingScreen}
            />
            <Stack.Screen
              options={{ title: "الوقوف و التوقف" }}
              name={"ParkAndStop"}
              component={ParkAndStopScreen}
            />
            <Stack.Screen
              options={{ title: "الحوادث و الإسعافات" }}
              name={"Accidents"}
              component={AccidentsScreen}
            />
            <Stack.Screen
              options={{ title: "قواعد السير" }}
              name={"RulesRoad"}
              component={RulesRoadScreen}
            />
            <Stack.Screen
              options={{ title: "الرؤية و الإضاءة" }}
              name={"VisionAndLights"}
              component={VisionAndLightsScreen}
            />
            <Stack.Screen
              options={{ title: "إعطاء حق الأسبقية" }}
              name={"PriorityGive"}
              component={PriorityGiveScreen}
            />
            <Stack.Screen
              options={{ title: "العربة" }}
              name={"Vehicle"}
              component={VehicleScreen}
            />
            <Stack.Screen
              options={{ title: "السائق" }}
              name={"Driver"}
              component={DriverScreen}
            />
            <Stack.Screen
              options={{ title: "التشوير الطرقي" }}
              name={"RoadSignaling"}
              component={RoadSignalingScreen}
            />
            <Stack.Screen
              options={{ title: "مفاهيم تطبيقية" }}
              name={"AppliedConcepts"}
              component={AppliedConceptsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QuizProvider>
    </Root>
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
