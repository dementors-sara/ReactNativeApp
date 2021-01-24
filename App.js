import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
//import { useDimensions } from "@react-native-community/hooks";

export default function App() {
  console.log("hej");
  // console.log("Size:", useDimensions());
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress}>
        Hello React Native - A reallllly reallly looong tecxt because there is
        notgninh yo fo
      </Text>
      <TouchableHighlight
        onPress={() => {
          console.log("Image tapped");
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 100,
            height: 70,
          }}
        ></View>
      </TouchableHighlight>
      <Button
        color="white"
        title="click me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      ></Button>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "blue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "ios" ? 20 : 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
