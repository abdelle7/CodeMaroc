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

const QuizListButton = ({ QuizTitle, navigation, SerieNumber }) => {
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
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("quiz", SerieNumber);
      }}
      style={styles.button}
    >
      <LinearGradient
        style={styles.serie}
        start={[0, 1]}
        end={[1, 0]}
        colors={["#D3E7FF", "#9ECAFF", "#71B1FF"]}
      >
        <View>
          <Text style={styles.text}>{QuizTitle}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default QuizListButton;

const styles = StyleSheet.create({
  serie: {
    width: 250,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Hayah",
    fontSize: 30,
  },
  button: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
