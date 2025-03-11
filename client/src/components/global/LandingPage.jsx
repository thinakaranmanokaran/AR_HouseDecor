import { View, Text, Image, Pressable } from "react-native";
import images from "./../../assets/images";

export default function LandingPage() {
    return (
        <View className="flex h-full items-center bg-[#f7faf9]">
            {/* Image Section */}
            <View className="h-4/6 w-full flex justify-center items-center">
                <Image source={images.LandingGirl} className="w-5/6 h-5/6" />
            </View>

            {/* Text & Button Section */}
            <View className="h-2/6 w-full px-4 flex items-center justify-center">
                <Text style={{ fontFamily: "Cabin" }} className="text-lg  "  >Hello, Dear  </Text>
                <Text style={{ fontFamily: "Switzer" }} className="text-3xl font-cabin mt-1 px-6 text-center"  >
                    Happy to have you with us!
                </Text>

                <Text className="text-white text-center text-lg bg-red-400 w-full my-3 py-3 rounded-2xl font-bold    ">
                    Get Started
                </Text>
            </View>
        </View>
    );
}
