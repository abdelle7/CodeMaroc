import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Dimensions,
  StyleSheet,
  Animated,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import ImageButton from "../components/ImageButton";

import { categoriesSigns } from "../helper/allSings";

const SignsScreen = ({ navigation }) => {
  const image = require("../../assets/SignsScreen/SignsScreenBG.png");
  const [screenHeight, setScreenHeight] = useState(0);
  const scrollEnabled = screenHeight > Dimensions.get("window").height - 80;
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Animated.FlatList
          horizontal={false}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={(width, height) => {
            setScreenHeight(height);
          }}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ marginBottom: -30 }} />}
          columnWrapperStyle={{
            justifyContent: "center",
          }}
          keyExtractor={(index) => index.name}
          data={categoriesSigns}
          renderItem={({ item }) => {
            return (
              <ImageButton
                navigation={navigation}
                title={item.name}
                imageSource={item.path}
              />
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default SignsScreen;
