import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="Register"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Start"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
};

export default _layout;
