import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import QuizComponent from "../components/QuizComponent";
import { RoadSignaling } from "../helper/LessonsHelper";
const QuizScreen = () => {
  const [Qnum, setQnum] = useState(20);
  const [isSelected1, setSelected1] = useState(false);
  const [isSelected2, setSelected2] = useState(false);
  const [isSelected3, setSelected3] = useState(false);
  const [isSelected4, setSelected4] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D8D8D8" }}>
      <QuizComponent RealQuiz={true} LessonsList={RoadSignaling} />
      <View style={styles.container}>
        <View style={{ marginRight: 10, marginVertical: 10 }}>
          <View style={styles.Screen}>
            <Text
              style={{
                fontSize: 80,
                textAlign: "center",
                marginTop: 25,
                marginRight: 40,
              }}
            >
              {Qnum}
            </Text>
            <View
              style={{
                flexDirection: "column",
                alignSelf: "flex-end",
                borderLeftWidth: 2,
                position: "absolute",
                paddingRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: isSelected1 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: isSelected1 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                1
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: isSelected2 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: isSelected2 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                2
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: isSelected3 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: isSelected3 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: isSelected4 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: isSelected4 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                4
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ width: 130 }}
            onPress={() => {
              isSelected1 ? setSelected1(false) : setSelected1(true);
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130 }}
            onPress={() => {
              isSelected2 ? setSelected2(false) : setSelected2(true);
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130 }}
            onPress={() => {
              isSelected3 ? setSelected3(false) : setSelected3(true);
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130 }}
            onPress={() => {
              isSelected4 ? setSelected4(false) : setSelected4(true);
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button4.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/QuizScreenAssets/ButtonValidate.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected1(false);
              setSelected2(false);
              setSelected3(false);
              setSelected4(false);
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/ButtonCorrection.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8D8D8",
  },
  Screen: {
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 10,
    backgroundColor: "#D8D8D8",
    height: 163,
    width: 163,
    alignSelf: "flex-end",
    position: "absolute",
  },
});

export default QuizScreen;
