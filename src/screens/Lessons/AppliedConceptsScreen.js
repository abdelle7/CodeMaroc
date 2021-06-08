import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { AppliedConcepts } from "../../helper/LessonsHelper";
const AppliedConceptsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={AppliedConcepts} />
    </SafeAreaView>
  );
};

export default AppliedConceptsScreen;

const styles = StyleSheet.create({});
