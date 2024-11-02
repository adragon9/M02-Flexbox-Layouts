import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles.jsx";
import Row from "./Row.jsx";
import Column from "./Column.jsx";
import Box from "./box.jsx";

// const boxes = new Array(50).fill(null).map((v, i) => i + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false}/>
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#5</Box>
          <Box>#6</Box>
        </Column>
        <Column>
          <Box>#7</Box>
          <Box>#8</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#9</Box>
          <Box>#10</Box>
        </Column>
        <Column>
          <Box>#11</Box>
          <Box>#12</Box>
        </Column>
      </Row>
    </View>
  );
}
