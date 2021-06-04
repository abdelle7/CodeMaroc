import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { VisionAndLights } from "../../helper/LessonsHelper";
const VisionAndLightsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={VisionAndLights} />
    </SafeAreaView>
  );
};

export default VisionAndLightsScreen;

const styles = StyleSheet.create({});
