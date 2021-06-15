import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import ImageButton from "./ImageButton";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import * as Font from "expo-font";

const QuizComponent = ({ LessonsList, RealQuiz }) => {
  const [Counter, setCounter] = useState(1);
  const setCounterHelper = (change) => {
    if (Counter + change > LessonsList.length || Counter + change < 1) {
      return;
    } else {
      setCounter(Counter + change);
    }
  };

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fonts = {
    Hayah: require("../../assets/fonts/Hayah.ttf"),
  };
  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(fonts);
        setLoaded(true);
      } catch (err) {
        setError(err);
      }
    })();
  }),
    [fonts];

  if (error)
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  if (!loaded) return null;

  return (
    <View>
      <View style={styles.container}>
        <ImageButton
          style={{
            alignSelf: "center",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height / 2.1,
            borderWidth: 1,
          }}
          title={LessonsList[Counter - 1].name}
          isSign={true}
          imageSource={LessonsList[Counter - 1].path}
        />
      </View>
      {RealQuiz ? null : (
        <View style={styles.NextPrevButton}>
          <TouchableOpacity
            onPress={() => {
              setCounterHelper(-1);
            }}
          >
            <Image source={require("../../assets/UIElements/Previous.png")} />
          </TouchableOpacity>
          <Text style={styles.TextCounter}>
            {Counter}/{LessonsList.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCounterHelper(+1);
            }}
          >
            <Image source={require("../../assets/UIElements/Next.png")} />
          </TouchableOpacity>
        </View>
      )}
      {/* <View style={styles.TextView}>
        <Text
          style={{
            textAlign: "right",
            fontFamily: "Hayah",
            fontSize: scale(20),
          }}
        >
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا.
        </Text>
      </View> */}
    </View>
  );
};

export default QuizComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  NextPrevButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  TextCounter: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "yellow",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    width: 90,
    textAlign: "center",
  },
  TextView: {
    marginHorizontal: scale(20),
    marginVertical: verticalScale(20),
  },
});
