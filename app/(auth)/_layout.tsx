import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="Register"
                options={{
                    headerShown: true,
                }}
            />
        </Stack>
    );
};

export default _layout;
