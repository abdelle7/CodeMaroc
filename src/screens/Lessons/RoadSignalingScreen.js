import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuizComponent from "../../components/QuizComponent";
import { RoadSignaling } from "../../helper/LessonsHelper";
const RoadSignalingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizComponent LessonsList={RoadSignaling} />
    </SafeAreaView>
  );
};

export default RoadSignalingScreen;

const styles = StyleSheet.create({});
