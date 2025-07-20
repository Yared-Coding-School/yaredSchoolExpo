import UsersOnly from "@/components/UsersOnly";
import { Tabs } from "expo-router";

const _layout = () => {
    return (
        <UsersOnly>
            <Tabs>
                <Tabs.Screen
                    name="Profile"
                    options={{
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="Dashboard"
                    options={{
                        headerShown: false,
                    }}
                />
                <Tabs.Screen
                    name="Resource"
                    options={{
                        headerShown: false,
                    }}
                />
            </Tabs>
        </UsersOnly>
    );
};

export default _layout;
