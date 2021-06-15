import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import ImageButton from "../components/ImageButton";
import { LinearGradient } from "expo-linear-gradient";
import * as RootNavigation from "../helper/RootNavigation";

const CorrectionScren = ({ route }) => {
  const { Answers, userAnswer, path } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageButton
          style={{
            alignSelf: "center",
            width: Dimensions.get("window").width,
            borderWidth: 1,
          }}
          //title={Quiz1[state.CurrentQuestion].name}
          isSign={true}
          imageSource={path}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderRightWidth: 3,
            borderColor: "black",
            borderTopWidth: 3,
          }}
        >
          <Text style={{ fontSize: 25 }}>أجوبتك</Text>
          <FlatList
            keyExtractor={(item, index) => "key" + index}
            data={userAnswer}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <LinearGradient
                  colors={
                    Answers.includes(item)
                      ? ["#32FF00", "#32FF00", "#12A600"]
                      : ["#FF2D00", "#FF2D00", "#EE2500"]
                  }
                  style={styles.userAnswer}
                >
                  <Text style={styles.TextBox}>{item}</Text>
                </LinearGradient>
              </View>
            )}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            borderColor: "black",
            borderTopWidth: 3,
          }}
        >
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            الإجابات الصحيحة
          </Text>
          <FlatList
            keyExtractor={(item, index) => "key" + index}
            data={Answers}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <LinearGradient
                  colors={["#32FF00", "#32FF00", "#12A600"]}
                  style={styles.userAnswer}
                >
                  <Text style={styles.TextBox}>{item}</Text>
                </LinearGradient>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CorrectionScren;

const styles = StyleSheet.create({
  userAnswer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: 60,
    height: 30,
    marginTop: 20,
    alignItems: "center",
  },
  TextBox: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
