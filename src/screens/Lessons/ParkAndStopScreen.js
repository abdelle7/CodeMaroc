import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { ParkAndStop } from "../../helper/LessonsHelper";

const ParkAndStopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={ParkAndStop} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ParkAndStopScreen;
