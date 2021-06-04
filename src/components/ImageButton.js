import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ImageButton = ({ imageSource, navigation, title, isSign, style }) => {
  return (
    <TouchableOpacity
      disabled={isSign ? true : false}
      onPress={() => {
        navigation.navigate(title);
      }}
    >
      <Image style={style} resizeMode="stretch" source={imageSource} />
    </TouchableOpacity>
  );
};

export default ImageButton;
