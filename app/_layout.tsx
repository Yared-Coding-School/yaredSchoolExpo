import { CourseProvider } from "@/contexts/CourseContext";
import { UserProvider } from "@/contexts/UserContext";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";

export default function RootLayout() {
    return (
        <UserProvider>
            <CourseProvider>
                <View style={{ flex: 1, backgroundColor: "#E1D5C9" }}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#f3f4f6"
                        translucent={false}
                    />
                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="(auth)"
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack>
                </View>
            </CourseProvider>
        </UserProvider>
    );
}
