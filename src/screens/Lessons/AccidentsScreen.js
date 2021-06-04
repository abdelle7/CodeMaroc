import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { Accidents } from "../../helper/LessonsHelper";
const AccidentsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={Accidents} />
    </SafeAreaView>
  );
};

export default AccidentsScreen;

const styles = StyleSheet.create({});
