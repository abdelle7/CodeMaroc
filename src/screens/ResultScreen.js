import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Root } from "react-native-popup-confirm-toast";
import * as RootNavigation from "../helper/RootNavigation";
import {
  Quiz1,
  Quiz2,
  Quiz3,
  Quiz4,
  Quiz5,
  Quiz6,
  Quiz7,
  Quiz8,
  Quiz9,
  Quiz10,
} from "../helper/QuizHelper";

const ResultScreen = ({ route }) => {
  const Quizzes = [
    Quiz1,
    Quiz2,
    Quiz3,
    Quiz4,
    Quiz5,
    Quiz6,
    Quiz7,
    Quiz8,
    Quiz9,
    Quiz10,
  ];
  const [screenHeight, setScreenHeight] = useState(0);
  const scrollEnabled = screenHeight > Dimensions.get("window").height - 100;

  const { Answers } = route.params;
  const { SerieNumber } = route.params;
  let RightAnswersCounter = 0;
  for (let index = 0; index < Quiz1.length; index++) {
    console.log();
    if (
      JSON.stringify(Quizzes[SerieNumber][index].Anwsers) ==
      JSON.stringify(Answers[index].userAnswer)
    ) {
      RightAnswersCounter++;
    }
  }

  return (
    <Root>
      <View style={{ flex: 1, marginBottom: 10, alignItems: "center" }}>
        <Text style={{ alignSelf: "center", fontSize: 50, fontWeight: "bold" }}>
          {RightAnswersCounter}/{Quiz1.length}
        </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            scrollEnabled={scrollEnabled}
            onContentSizeChange={(width, height) => {
              setScreenHeight(height);
            }}
            keyExtractor={(item, index) => "key" + index}
            data={Answers}
            showsVerticalScrollIndicator={false}
            numColumns={5}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ width: "19.5%" }}
                onPress={() => {
                  RootNavigation.navigate("Correction", {
                    Answers: Quizzes[SerieNumber][item.Qnumber].Anwsers,
                    userAnswer: item.userAnswer,
                    path: Quizzes[SerieNumber][item.Qnumber].path,
                  });
                }}
              >
                <LinearGradient
                  colors={
                    JSON.stringify(
                      Quizzes[SerieNumber][item.Qnumber].Anwsers
                    ) == JSON.stringify(item.userAnswer)
                      ? ["#32FF00", "#32FF00", "#12A600"]
                      : ["#FF2D00", "#FF2D00", "#EE2500"]
                  }
                  style={styles.container}
                >
                  {/* <Text>Q:{item.Qnumber}</Text>
            <Text>{item.userAnswer}</Text> */}
                  <Text style={styles.Qtext}>سؤال {item.Qnumber + 1}</Text>
                  <Text>_______</Text>
                  <Text style={styles.Atext}>{item.userAnswer.join("-")}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Root>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: 57,
    height: 57,
    marginLeft: 15,
    marginTop: 15,
    alignItems: "center",
  },
  Qtext: {
    fontSize: 14,
    marginBottom: -3,
  },
  Atext: {
    fontSize: 14,
  },
  correct: {
    color: "black",
  },
  wrong: {
    color: "white",
  },
});
