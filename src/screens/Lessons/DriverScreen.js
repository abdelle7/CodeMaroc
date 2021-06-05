import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { Driver } from "../../helper/LessonsHelper";
const DriverScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={Driver} />
    </SafeAreaView>
  );
};

export default DriverScreen;

const styles = StyleSheet.create({});
