import { db } from "@/firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "./useUser";

export interface UserRegistration {
    name?: string;
    phone?: string;
    email: string;
    subject: string;
    registrationDate?: string;
}

export interface UserData {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName?: string;
    registrations?: UserRegistration[];
}

export const useUserData = () => {
    const { user } = useUser();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.uid || !user.email) {
                setUserData(null);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Fetch all registrations for this user by email
                const regQuery = query(
                    collection(db, "reg_student"),
                    where("email", "==", user.email)
                );
                const regSnap = await getDocs(regQuery);
                const registrations: UserRegistration[] = regSnap.docs.map(
                    (doc) => doc.data() as UserRegistration
                );

                setUserData({
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified || false,
                    displayName: user.displayName || "",
                    registrations,
                });
            } catch (err: any) {
                console.error("Error fetching user registration data:", err);
                setError(
                    err.message || "Failed to fetch user registration data"
                );
                setUserData({
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified || false,
                    displayName: user.displayName || "",
                    registrations: [],
                });
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user]);

    return { userData, loading, error };
};
