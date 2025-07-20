import { useUser } from "@/hooks/useUser";
import { useUserData } from "@/hooks/useUserData";
import { reload, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Dashboard = () => {
    const { user, Logout } = useUser();
    const [sending, setSending] = useState(false);
    const { userData, loading, error } = useUserData();

    // Periodically reload user to update emailVerified status
    useEffect(() => {
        if (user && !user.emailVerified) {
            const interval = setInterval(async () => {
                await reload(user);
            }, 5000); // every 5 seconds
            return () => clearInterval(interval);
        }
    }, [user]);

    if (loading) return <Text>Loading user data...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    
    
    const data = userData?.registrations?.[0];
    
    const handleSendVerification = async () => {
        if (user) {
            setSending(true);
            try {
                await sendEmailVerification(user);
                Alert.alert(
                    "Verification Email Sent",
                    "Please check your inbox."
                );
            } catch (e: any) {
                Alert.alert("Error", "Failed to send verification email.");
                console.log(e);
            }
            setSending(false);
        }
    };
    console.log(userData);
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {user?.displayName}</Text>
            {!user?.emailVerified && (
                <View style={styles.verifyBox}>
                    <Text style={styles.verifyText}>
                        Your email is not verified. Please verify your email to
                        access all features.
                    </Text>
                    <TouchableOpacity
                        style={styles.verifyBtn}
                        onPress={handleSendVerification}
                        disabled={sending}
                    >
                        <Text style={styles.verifyBtnText}>
                            {sending ? "Sending..." : "Send Verification Email"}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={styles.logoutBtn} onPress={Logout}>
                <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
            <View>
                
                {userData?.registrations?.map((reg, idx) => (
                    <View key={idx}>
                        <Text>Subject: {reg.subject}</Text>
                        <Text>Name: {reg.name}</Text>
                        <Text>Phone: {reg.phone}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E1D5C9",
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 16,
    },
    verifyBox: {
        backgroundColor: "#fee2e2",
        borderColor: "#f87171",
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        alignItems: "center",
        maxWidth: 320,
    },
    verifyText: {
        color: "#b91c1c",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    verifyBtn: {
        backgroundColor: "#f87171",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    verifyBtnText: {
        color: "#fff",
        fontWeight: "bold",
    },
    logoutBtn: {
        marginTop: 24,
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: "#6366f1",
        borderRadius: 8,
    },
    logoutBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
});
