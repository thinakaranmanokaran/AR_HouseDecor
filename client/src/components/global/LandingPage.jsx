import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "./../../assets/images";
import { styled } from "nativewind";
import { Fonts } from "../../utils/Fonts";
import { GradientButton } from './../index.js';

export default function LandingPage() {
    const navigation = useNavigation(); // Get navigation object

    return (
        <View className="flex h-full items-center bg-[#201c25] relative "> 
            {/* Image Section */}
            <View className=" w-full px-4 py-10 pt-16 flex items-center justify-center absolute z-50 ">
                <Text style={{fontFamily: Fonts.plusJakarta }} className="text-[40px]   mt-1 px-6 text-center  text-white">
                    Happy to have you with us!
                </Text>
                <Pressable onPress={() => navigation.navigate('Home')} className="my-10">
                    <Text style={{fontFamily: Fonts.poppins }} className={`text-white text-center text-2xl  bg-${images.Gradient} py-4 w-fit px-12  rounded-3xl mx-6 bg-[#f29b03] `}>
                        Get Started
                    </Text>
                </Pressable>
            </View>
            <View className=" w-full flex justify-end absolute -bottom-8  ">
                <Image source={images.LandingPage} className="w-full h-[80vh]  " />
            </View>

            {/* Text & Button Section */}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    plus: {
        fontFamily: "PlusJakartaSans-Bold", // Use the font name
        fontSize: 16,
    },
    cabinText: {
        fontFamily: "Cabin-Regular", // Use the font name
        fontSize: 26,
    },
    cumin: {
        fontFamily: "Acumin-BdPro", // Use the font name
        fontSize: 26,
    },
    poppins: {
        fontFamily: "Poppins-Bold", // Use the font name
        fontSize: 26,
    },
    urbanText: {
        fontFamily: "Urbanist-Regular",
        fontSize: 20,
    },
});