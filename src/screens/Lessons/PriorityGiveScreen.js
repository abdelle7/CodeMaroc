import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { PriorityGive } from "../../helper/LessonsHelper";
const PriorityGiveScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={PriorityGive} />
    </SafeAreaView>
  );
};

export default PriorityGiveScreen;

const styles = StyleSheet.create({});
