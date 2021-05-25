import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import ImageButton from "../components/ImageButton";

const SignsScreen = ({ navigation }) => {
  const image = require("../../assets/SignsScreen/SignsScreenBG.png");

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.ViewButton}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <ImageButton
            title="compulsion"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/Compulsion.png")}
          />
          <ImageButton
            title="danger"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/Danger.png")}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <ImageButton
            title="banExpires"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/Ban_Expires.png")}
          />
          <ImageButton
            title="ban"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/Ban.png")}
          />
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
          }}
        >
          <ImageButton
            title="instructions"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/Instructions.png")}
          />
          <ImageButton
            title="intersection"
            navigation={navigation}
            imageSource={require("../../assets/SignsScreen/intersection.png")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ViewButton: {
    flexDirection: "column",
    flex: 6,
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});

export default SignsScreen;
