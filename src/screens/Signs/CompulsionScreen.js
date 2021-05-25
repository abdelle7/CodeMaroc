import React from "react";
import { FlatList, Text, View, Animated } from "react-native";
import { disableExpoTranslucentStatusBar } from "react-navigation-collapsible";
disableExpoTranslucentStatusBar();
import { useCollapsibleHeader } from "react-navigation-collapsible";

const CompulsionScreen = ({ navigation }) => {
  const Numbers = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
    { num: 10 },
    { num: 11 },
    { num: 12 },
    { num: 13 },
  ];
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
    <View>
      <Animated.FlatList
        onScroll={onScroll}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        data={Numbers}
        keyExtractor={(Numbers) => Numbers.num}
        renderItem={({ item }) => {
          return <Text style={{ paddingTop: 100 }}>{item.num}</Text>;
        }}
      />
    </View>
  );
};

export default CompulsionScreen;
