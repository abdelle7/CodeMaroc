import React from "react";
import { Image, TouchableOpacity } from "react-native";

const ImageButton = ({ imageSource, navigation, title, isSign }) => {
  return (
    <TouchableOpacity
      disabled={isSign ? true : false}
      onPress={() => {
        navigation.navigate(title);
      }}
    >
      <Image source={imageSource} />
    </TouchableOpacity>
  );
};

export default ImageButton;
