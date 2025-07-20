import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Loader from "./Loader";

const GuestsOnly = ({ children }: any) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace("/(dashboard)/Dashboard");
        }
    }, [user, authChecked, router]);

    if (!authChecked) {
        return <Loader />;
    }

    return children;
};

export default GuestsOnly;
