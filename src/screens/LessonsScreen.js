import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import { disableExpoTranslucentStatusBar } from "react-navigation-collapsible";
disableExpoTranslucentStatusBar();
import { useCollapsibleHeader } from "react-navigation-collapsible";
import ImageButton from "../components/ImageButton";
import { LessonsCategories } from "../helper/allSings";

const LessonsScreen = ({ navigation }) => {
  const {
    onScroll,
    // onScrollWithListener,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleHeader({
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF",
        // height: 150,
      },
    },
    config: {
      collapsedColor: "#FFF",
    },
  });
  return (
    <View style={styles.container}>
      <Animated.FlatList
        onScroll={onScroll}
        horizontal={false}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        ItemSeparatorComponent={() => <View style={{ marginBottom: -20 }} />}
        keyExtractor={(index) => index.name}
        data={LessonsCategories}
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
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});

export default LessonsScreen;
