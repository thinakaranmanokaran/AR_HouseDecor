import React from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

const GradientText = ({ text }) => {
    return (
        <MaskedView maskElement={<Text style={styles.text}>{text}</Text>}>
            <LinearGradient
                colors={["#FFFFFF", "#EC4899", "#F97316"]} // White → Pink → Orange
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
            />
        </MaskedView>
    );
};

export default GradientText

const styles = {
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "PlusJakartaSans-Bold", // Ensure this font is properly loaded
    },
};
