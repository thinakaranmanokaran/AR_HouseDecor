import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
import images from "../../assets/images";

const GradientButton = ({ title }) => {
  return (
    <ImageBackground className=""
      source={images.Gradient} // Update this path
      resizeMode="cover"
      style={styles.buttonBackground}
      imageStyle={{ borderRadius: 25 }} // Optional: Apply rounded corners to image
    >
      <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    paddingTop: 18,
    borderRadius: 25,
    alignSelf: "center",
    overflow: "hidden", // Ensures borderRadius applies correctly
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

export default GradientButton;
