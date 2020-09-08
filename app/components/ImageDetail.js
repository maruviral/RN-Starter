import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ImageDetail(params) {
  return (
    <View>
      <Image source={params.imageSource} />
      <Text>{params.title}</Text>
    </View>
  );
}

export default ImageDetail;
