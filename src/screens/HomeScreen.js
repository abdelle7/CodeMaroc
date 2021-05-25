import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import ImageButton from "../components/ImageButton";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const image = require("../../assets/HomeScreen/HomeScreenBG.png");
  return (
    <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons
            style={styles.iconStyle}
            name={"menu"}
            size={40}
            color={"black"}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.ViewButton}>
            <ImageButton
              title="sign"
              navigation={navigation}
              imageSource={require("../../assets/HomeScreen/SignsButton.png")}
            />
            <ImageButton
              title="lessons"
              navigation={navigation}
              imageSource={require("../../assets/HomeScreen/LessonsButton.png")}
            />
          </View>
          <ImageButton
            title="quiz"
            navigation={navigation}
            imageSource={require("../../assets/HomeScreen/QuizButton.png")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    flex: 1,
  },
  ViewButton: {
    flexDirection: "row",
    marginBottom: 80,
  },
  iconStyle: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
});
export default HomeScreen;
