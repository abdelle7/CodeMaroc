import React from "react";
import { FlatList, Text, View, Animated, StyleSheet } from "react-native";
import { disableExpoTranslucentStatusBar } from "react-navigation-collapsible";
disableExpoTranslucentStatusBar();
import { useCollapsibleHeader } from "react-navigation-collapsible";
import ImageButton from "../../components/ImageButton";
import { signs } from "../../helper/allSings";

const BanExpiresScreen = () => {
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
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingTop: containerPaddingTop }}
        scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
        keyExtractor={(index) => index.name}
        data={signs.EndBan}
        renderItem={({ item }) => {
          return <ImageButton isSign={true} imageSource={item.path} />;
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
export default BanExpiresScreen;
