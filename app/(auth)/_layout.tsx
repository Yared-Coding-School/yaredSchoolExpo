import GuestsOnly from "@/components/GuestsOnly";
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <GuestsOnly>
            <Stack>
                <Stack.Screen
                    name="SignIn"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </GuestsOnly>
    );
};

export default _layout;
