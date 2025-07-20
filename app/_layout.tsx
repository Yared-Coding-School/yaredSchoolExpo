import { CourseProvider } from "@/contexts/CourseContext";
import { UserProvider } from "@/contexts/UserContext";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync("#E1D5C9");
    }, []);
    return (
        <UserProvider>
            <CourseProvider>
                <SafeAreaView
                    style={{ flex: 1, backgroundColor: "#E1D5C9" }}
                    edges={["top", "bottom", "left", "right"]}
                >
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#E1D5C9"
                        translucent={false}
                    />
                    <Stack
                        screenOptions={{
                            headerStyle: { backgroundColor: "#E1D5C9" },
                            headerTintColor: "#000", // Optional: set header text/icons color
                            contentStyle: { backgroundColor: "#E1D5C9" },
                        }}
                    >
                        <Stack.Screen
                            name="index"
                            options={{
                                headerShown: false,
                                headerStyle: { backgroundColor: "#E1D5C9" },
                                headerTintColor: "#000",
                                contentStyle: { backgroundColor: "#E1D5C9" },
                            }}
                        />
                        <Stack.Screen
                            name="(dashboard)"
                            options={{
                                headerShown: false,
                                headerStyle: { backgroundColor: "#E1D5C9" },
                                headerTintColor: "#000",
                                contentStyle: { backgroundColor: "#E1D5C9" },
                            }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="course"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="(register)"
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack>
                </SafeAreaView>
            </CourseProvider>
        </UserProvider>
    );
}
