import React, { useState, useReducer } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
  Animated,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import ImageButton from "../components/ImageButton";
import QuizComponent from "../components/QuizComponent";
import { ParkAndStop } from "../helper/LessonsHelper";
const reducer = (state, action) => {
  switch (action.type) {
    case "A1Selected":
      return { ...state, A1: action.payload };
    case "A2Selected":
      return { ...state, A2: action.payload };
    case "A3Selected":
      return { ...state, A3: action.payload };
    case "A4Selected":
      return { ...state, A4: action.payload };
    case "Correction":
      return { ...state, A1: false, A2: false, A3: false, A4: false };
    case "Validate":
      console.log(state.QNumber, state.isCounting, ParkAndStop.length);
      if (state.QNumber < ParkAndStop.length - 1) {
        return {
          ...state,
          A1: false,
          A2: false,
          A3: false,
          A4: false,
          QNumber: state.QNumber + 1,
        };
      }
      return {
        ...state,
        A1: false,
        A2: false,
        A3: false,
        A4: false,
        isCounting: false,
      };
    default:
      return state;
  }
};

const QuizScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    QNumber: 0,
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    isCounting: true,
  });
  // const [isSelected1, setSelected1] = useState(false);
  // const [isSelected2, setSelected2] = useState(false);
  // const [isSelected3, setSelected3] = useState(false);
  // const [isSelected4, setSelected4] = useState(false);
  // const [Counter, setCounter] = useState(1);
  // const setCounterHelper = (change) => {
  //   if (Counter + change > ParkAndStop.length || Counter + change < 1) {
  //     return;
  //   } else {
  //     setCounter(Counter + change);
  //   }
  // };
  // const resetSelected = () => {
  //   setSelected1(false);
  //   setSelected2(false);
  //   setSelected3(false);
  //   setSelected4(false);
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D8D8D8" }}>
      <View>
        <ImageButton
          style={{
            alignSelf: "center",
            width: Dimensions.get("window").width,
            borderWidth: 1,
          }}
          title={ParkAndStop[state.QNumber].name}
          isSign={true}
          imageSource={ParkAndStop[state.QNumber].path}
        />
      </View>
      <View style={styles.container}>
        <View style={{ marginRight: 10, marginVertical: 10 }}>
          <View style={styles.Screen}>
            <View style={{ marginLeft: 2, marginTop: 20 }}>
              <CountdownCircleTimer
                isPlaying={state.isCounting}
                key={state.QNumber}
                size={100}
                duration={4}
                colors={[
                  ["#0A7530", 0.4],
                  ["#F7B801", 0.4],
                  ["#A30000", 0.2],
                ]}
                onComplete={() => {
                  dispatch({ type: "Validate" });
                  return [state.isCounting];
                }}
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text
                    style={{
                      color: animatedColor,
                      fontSize: 40,
                      // textAlign: "center",
                      // marginTop: 25,
                      // marginRight: 40,
                    }}
                  >
                    {remainingTime}
                  </Animated.Text>
                )}
              </CountdownCircleTimer>
            </View>

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
                  color: state.A1 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A1 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                1
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: state.A2 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A2 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                2
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: state.A3 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A3 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: state.A4 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A4 ? "#002CB6" : null,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                4
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ width: 130, marginBottom: 5 }}
            onPress={() => {
              dispatch({ type: "A1Selected", payload: true });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130, marginBottom: 5 }}
            onPress={() => {
              dispatch({ type: "A2Selected", payload: true });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130, marginBottom: 5 }}
            onPress={() => {
              dispatch({ type: "A3Selected", payload: true });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130 }}
            onPress={() => {
              dispatch({ type: "A4Selected", payload: true });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/Button4.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <TouchableOpacity
            onPress={() => {
              dispatch({ type: "Correction" });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/ButtonCorrection.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch({ type: "Validate" });
            }}
          >
            <Image
              source={require("../../assets/QuizScreenAssets/ButtonValidate.png")}
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
