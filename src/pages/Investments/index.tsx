import React from "react";
import { View } from "react-native";

import Background from "../../components/Background";
import TinderCard from "../../components/TinderCards";

import styles from "./styles";

export default function Investments() {
  return (
    <Background>
      <View style={styles.container}>
        <TinderCard />
      </View>
    </Background>
  );
}
