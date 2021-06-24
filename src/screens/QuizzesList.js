import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import QuizListButton from "../components/QuizListButton";

const QuizzesList = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={styles.container}
    >
      <QuizListButton
        SerieNumber={0}
        navigation={navigation}
        QuizTitle="سلسلة رقم 1"
      />
      <QuizListButton
        SerieNumber={1}
        navigation={navigation}
        QuizTitle="سلسلة رقم 2"
      />
      <QuizListButton
        SerieNumber={2}
        navigation={navigation}
        QuizTitle="سلسلة رقم 3"
      />
      <QuizListButton
        SerieNumber={3}
        navigation={navigation}
        QuizTitle="سلسلة رقم 4"
      />
      <QuizListButton
        SerieNumber={4}
        navigation={navigation}
        QuizTitle="سلسلة رقم 5"
      />
      <QuizListButton
        SerieNumber={5}
        navigation={navigation}
        QuizTitle="سلسلة رقم 6"
      />
      <QuizListButton
        SerieNumber={6}
        navigation={navigation}
        QuizTitle="سلسلة رقم 7"
      />
      <QuizListButton
        SerieNumber={7}
        navigation={navigation}
        QuizTitle="سلسلة رقم 8"
      />
      <QuizListButton
        SerieNumber={8}
        navigation={navigation}
        QuizTitle="سلسلة رقم 9"
      />
      <QuizListButton
        SerieNumber={9}
        navigation={navigation}
        QuizTitle="سلسلة رقم 10"
      />
    </ScrollView>
  );
};

export default QuizzesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
