import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { OvertakingQ } from "../../helper/LessonsHelper";
const RulesRoadScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={OvertakingQ} />
    </SafeAreaView>
  );
};

export default RulesRoadScreen;

const styles = StyleSheet.create({});
