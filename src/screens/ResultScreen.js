import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Root, Popup } from "react-native-popup-confirm-toast";
import * as RootNavigation from "../helper/RootNavigation";
import { Quiz1 } from "../helper/QuizHelper";

const ResultScreen = ({ route }) => {
  const Answers = route.params;

  return (
    <Root>
      <View>
        <FlatList
          keyExtractor={(item, index) => "key" + index}
          data={Answers}
          scrollEnabled={false}
          numColumns={5}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <LinearGradient
                // Button Linear Gradient
                colors={
                  JSON.stringify(Quiz1[item.Qnumber].Anwsers) ==
                  JSON.stringify(item.userAnswer)
                    ? ["#32FF00", "#32FF00", "#12A600"]
                    : ["#FF2D00", "#FF2D00", "#EE2500"]
                }
                style={[
                  styles.container,
                  // JSON.stringify(Quiz1[item.Qnumber].Anwsers) ==
                  // JSON.stringify(item.userAnswer)
                  //   ? styles.correct
                  //   : styles.wrong,
                ]}
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
