import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AdjustMeditationDuration = () => {
    const { setDuration } = useContext(TimerContext);
    
    const handlePress = (duration: number) => {
        console.log('Setting duration: ' + duration)
        setDuration(duration);
        
        router.back();
    };

    return (
        <SafeAreaProvider className="flex-1 relative ">
            <AppGradient
                // Background Linear Gradient
                colors={["#161b2e", "#0a4d4a", "#766e67"]}
            >
                <Pressable
                    onPress={() => router.back()}
                    className="absolute top-8 left-6 z-10 mt-4"
                >
                    <AntDesign name="leftcircleo" size={50} color="white" />
                </Pressable>
                <View className="justify-center h-4/5">
                    <View style={{}}>
                        <Text className="text-center font-bold text-3xl text-white mb-8 mt-40">
                            Adjust your meditation durationhhh
                        </Text>
                    </View>

                    <View style={{}}>
                        <CustomButton
                            title="10 seconds"
                            onPress={() => handlePress(10)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="5 minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="10 minutes"
                            onPress={() => handlePress(10 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="15 minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles="mb-5"
                        />
                         <CustomButton
                            title="20 minutes"
                            onPress={() => handlePress(20 * 60)}
                            containerStyles="mb-5"
                        />
                          <CustomButton
                            title="30 minutes"
                            onPress={() => handlePress(30 * 60)}
                            containerStyles="mb-5"
                        />
                        <CustomButton
                            title="60 minutes"
                            onPress={() => handlePress(60 * 60)}
                            containerStyles="mb-5"
                        /> 
                    </View>
                </View>
            </AppGradient>
        </SafeAreaProvider>
    );
};

export default AdjustMeditationDuration;
