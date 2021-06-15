import React, { useContext, useReducer, useEffect, useState } from "react";
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
import * as Font from "expo-font";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import ImageButton from "../components/ImageButton";
import { Quiz1 } from "../helper/QuizHelper";
import QuizContext from "../contexts/QuizContext";
import * as RootNavigation from "../helper/RootNavigation";
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
      if (state.CurrentQuestion < Quiz1.length - 1) {
        const userAnswer = [];
        if (state.A1 === true) userAnswer.push(1);
        if (state.A2 === true) userAnswer.push(2);
        if (state.A3 === true) userAnswer.push(3);
        if (state.A4 === true) userAnswer.push(4);

        return {
          ...state,
          Answers: [
            ...state.Answers,
            { Qnumber: state.CurrentQuestion, userAnswer },
          ],
          A1: false,
          A2: false,
          A3: false,
          A4: false,
          CurrentQuestion: state.CurrentQuestion + 1,
        };
      } else {
        const userAnswer = [];
        if (state.A1 === true) userAnswer.push(1);
        if (state.A2 === true) userAnswer.push(2);
        if (state.A3 === true) userAnswer.push(3);
        if (state.A4 === true) userAnswer.push(4);
        state = {
          ...state,
          Answers: [
            ...state.Answers,
            { Qnumber: state.CurrentQuestion, userAnswer },
          ],
          A1: false,
          A2: false,
          A3: false,
          A4: false,
          isCounting: false,
          ButtonDisabled: true,
        };
        RootNavigation.navigate("Result", state.Answers);

        return {
          ...state,
          A1: false,
          A2: false,
          A3: false,
          A4: false,
          isCounting: false,
          ButtonDisabled: true,
        };
      }

    default:
      return state;
  }
};

const QuizScreen = ({ navigation }) => {
  const value = useContext(QuizContext);
  const [state, dispatch] = useReducer(reducer, {
    CurrentQuestion: 0,
    A1: false,
    A2: false,
    A3: false,
    A4: false,
    isCounting: true,
    Answers: [],
    ButtonDisabled: false,
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fonts = {
    Hayah: require("../../assets/fonts/Hayah.ttf"),
  };
  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(fonts);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }),
    [fonts];

  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  if (!loaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#71B1FF" }}>
      <View>
        <ImageButton
          style={{
            alignSelf: "center",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 2.1,
            borderWidth: 1,
          }}
          title={Quiz1[state.CurrentQuestion].name}
          isSign={true}
          imageSource={Quiz1[state.CurrentQuestion].path}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            marginRight: 10,
            marginVertical: moderateScale(10, 10),
            marginLeft: scale(10),
          }}
        >
          <View style={styles.Screen}>
            <View
              style={{
                marginLeft: scale(2),
                marginTop: moderateVerticalScale(15, 5),
              }}
            >
              <CountdownCircleTimer
                isPlaying={state.isCounting}
                key={state.CurrentQuestion}
                size={moderateScale(100, 1.4)}
                duration={30}
                colors={[
                  ["#0A7530", 0.4],
                  ["#F7B801", 0.4],
                  ["#A30000", 0.2],
                ]}
                onComplete={() => {
                  dispatch({ type: "Validate" });
                }}
              >
                {({ remainingTime, animatedColor }) => (
                  <Animated.Text
                    style={{
                      color: animatedColor,
                      fontSize: scale(50),
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
                paddingRight: moderateVerticalScale(9),
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(28),
                  color: state.A1 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A1 ? "#002CB6" : null,
                  paddingLeft: moderateVerticalScale(10),
                  paddingTop: moderateVerticalScale(1, 15),
                  height: verticalScale(36),
                }}
              >
                1
              </Text>

              <Text
                style={{
                  fontSize: moderateScale(28),
                  color: state.A2 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A2 ? "#002CB6" : null,
                  paddingLeft: moderateVerticalScale(10),
                  paddingTop: moderateVerticalScale(1, 15),
                  height: verticalScale(36),
                }}
              >
                2
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(28),
                  color: state.A3 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A3 ? "#002CB6" : null,
                  paddingLeft: moderateVerticalScale(10),
                  paddingTop: moderateVerticalScale(1, 15),
                  height: verticalScale(36),
                }}
              >
                3
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(28),
                  color: state.A4 ? "white" : "#929292",
                  fontWeight: "bold",
                  backgroundColor: state.A4 ? "#002CB6" : null,
                  paddingLeft: moderateVerticalScale(10),
                  paddingRight: 8,
                  paddingTop: moderateVerticalScale(1, 15),
                  height: verticalScale(36),
                }}
              >
                4
              </Text>
              <Text
                style={{
                  color: state.A4 ? "white" : "#929292",
                  backgroundColor: state.A4 ? "#002CB6" : null,
                  height: moderateVerticalScale(1, 14),
                }}
              ></Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ width: 130, marginBottom: verticalScale(10) }}
            onPress={() => {
              dispatch({ type: "A1Selected", payload: true });
            }}
          >
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#E8E8E8",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  color: "black",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                  textAlign: "center",
                }}
              >
                1
              </Text>
            </View>
            {/* <Image
              source={require("../../assets/QuizScreenAssets/Button1.png")}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130, marginBottom: verticalScale(10) }}
            onPress={() => {
              dispatch({ type: "A2Selected", payload: true });
            }}
          >
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#E8E8E8",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  color: "black",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                  textAlign: "center",
                }}
              >
                2
              </Text>
            </View>
            {/* <Image
              source={require("../../assets/QuizScreenAssets/Button2.png")}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130, marginBottom: verticalScale(10) }}
            onPress={() => {
              dispatch({ type: "A3Selected", payload: true });
            }}
          >
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#E8E8E8",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  color: "black",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                  textAlign: "center",
                }}
              >
                3
              </Text>
            </View>
            {/* <Image
              source={require("../../assets/QuizScreenAssets/Button3.png")}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 130, marginBottom: verticalScale(10) }}
            onPress={() => {
              dispatch({ type: "A4Selected", payload: true });
            }}
          >
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#E8E8E8",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  color: "black",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                  textAlign: "center",
                }}
              >
                4
              </Text>
            </View>
            {/* <Image
              source={require("../../assets/QuizScreenAssets/Button4.png")}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch({ type: "Correction" });
            }}
          >
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#FF0000",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  color: "white",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                  textAlign: "center",
                }}
              >
                تصحيح
              </Text>
            </View>
            {/* <Image
              source={require("../../assets/QuizScreenAssets/ButtonCorrection.png")}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            disabled={state.ButtonDisabled}
            onPress={() => {
              dispatch({ type: "Validate" });
            }}
          >
            {/* <Image
              style={{ height: verticalScale(43), width: scale(125) }}
              source={require("../../assets/QuizScreenAssets/ButtonValidate.png")}
            /> */}
            <View
              style={{
                height: verticalScale(34),
                width: scale(113),
                backgroundColor: "#27D004",
                borderRadius: 5,
                marginRight: scale(10),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 1,
                shadowRadius: 5,
              }}
            >
              <Text
                adjustsFontSizeToFit={true}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: scale(28),
                  fontFamily: "Hayah",
                }}
              >
                تأكيد
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#71B1FF",
  },
  Screen: {
    borderColor: "black",
    borderRadius: 3,
    borderWidth: 10,
    backgroundColor: "white",
    height: verticalScale(163),
    width: scale(163),
    alignSelf: "flex-end",
    position: "absolute",
  },
});

export default QuizScreen;
