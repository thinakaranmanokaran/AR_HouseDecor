import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "./../../assets/images";
import { styled } from "nativewind";

export default function LandingPage() {
    const navigation = useNavigation(); // Get navigation object

    return (
        <View className="flex h-full items-center bg-[#f7faf9]">
            {/* Image Section */}
            <View className="h-4/6 w-full flex justify-center items-center">
                <Image source={images.LandingGirl} className="w-5/6 h-5/6" />
            </View>

            {/* Text & Button Section */}
            <View className="h-2/6 w-full px-4 flex items-center justify-center">
                <Text style={styles.poppins} className="text-lg">Hello, Dear</Text>
                <Text style={styles.plus} className="text-lg">Hello, Dear</Text>
                <Text style={styles.cumin} className="text-lg">Hello, Dear</Text>
                <Text style={styles.cabinText} className="text-3xl font-cabin mt-1 px-6 text-center">
                    Happy to have you with us!
                </Text>

                {/* Navigate to HomeScreen on Press */}
                <Pressable onPress={() => navigation.navigate('Home')} className="w-full my-3">
                    <Text style={styles.urbanText} className="text-white text-center text-lg bg-red-400 py-3 rounded-2xl ">
                        Get Started
                    </Text>
                </Pressable>
            </View>
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