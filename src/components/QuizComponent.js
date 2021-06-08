import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import ImageButton from "./ImageButton";

const QuizComponent = ({ LessonsList, RealQuiz }) => {
  const [Counter, setCounter] = useState(1);
  const setCounterHelper = (change) => {
    if (Counter + change > LessonsList.length || Counter + change < 1) {
      return;
    } else {
      setCounter(Counter + change);
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <ImageButton
          style={{
            alignSelf: "center",
            width: Dimensions.get("window").width,
            borderWidth: 1,
          }}
          title={LessonsList[Counter - 1].name}
          isSign={true}
          imageSource={LessonsList[Counter - 1].path}
        />
      </View>
      {RealQuiz ? null : (
        <View style={styles.NextPrevButton}>
          <TouchableOpacity
            onPress={() => {
              setCounterHelper(-1);
            }}
          >
            <Image source={require("../../assets/UIElements/Previous.png")} />
          </TouchableOpacity>
          <Text style={styles.TextCounter}>
            {Counter}/{LessonsList.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCounterHelper(+1);
            }}
          >
            <Image source={require("../../assets/UIElements/Next.png")} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default QuizComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  NextPrevButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  TextCounter: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "yellow",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    width: 90,
    textAlign: "center",
  },
});
