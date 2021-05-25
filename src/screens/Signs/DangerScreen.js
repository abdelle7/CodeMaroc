import React from "react";
import { FlatList, Text, View, Animated, StyleSheet } from "react-native";
import { disableExpoTranslucentStatusBar } from "react-navigation-collapsible";
disableExpoTranslucentStatusBar();
import { useCollapsibleHeader } from "react-navigation-collapsible";
import ImageButton from "../../components/ImageButton";

const DangerScreen = ({ navigation }) => {
  const data = [];
  for (let i = 0; i < 29; i++) {
    data.push(i);
  }
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
    <View style={styles.ViewButton}>
      <Animated.FlatList
        onScroll={onScroll}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        keyExtractor={(index) => index.toString()}
        data={data}
        renderItem={({ item }) => {
          return (
            <ImageButton
              title="BendLeft"
              isSign={true}
              imageSource={require("../../../assets/Signs/WarningSigns/DoubleBendFirstLeft.png")}
            />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ViewButton: {
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});
export default DangerScreen;
