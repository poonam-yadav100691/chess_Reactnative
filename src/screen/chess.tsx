import React from "react";
import { View, StyleSheet } from "react-native";
import Board from "../components/Board";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(36, 35, 32)",
  },
});

const Chess = () => {
  const ClickMe = () => {
    console.log("Button Clicked");
};
  return (
    <View style={styles.container}>
      <Board />
      
      
         {/*  <Button onClick={ClickMe}>Hello MY Button</Button> */}
    </View>
  );
};

export default Chess;