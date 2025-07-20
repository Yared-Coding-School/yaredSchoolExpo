import { useUser } from "@/hooks/useUser";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";


const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { SignIn } = useUser();
    const router = useRouter()
    
    // Placeholder handlers
    const handleGoogleSignIn = () => {
        // TODO: Implement Google Sign-In with Firebase
        alert("Google Sign-In coming soon!");
    };
    const handleSignIn = async () => {
        try {
            await SignIn(email.trim(), password)
            router.replace("/(dashboard)/Profile")
        } catch (error:any) {
            Alert.alert("Sign-In Error", error.message)
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to your account</Text>
            {/* Google Sign-In */}
            <TouchableOpacity
                style={styles.googleBtn}
                onPress={handleGoogleSignIn}
            >
                <Image
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
                    }}
                    style={styles.googleIcon}
                />
                <Text style={styles.googleBtnText}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            {/* Email/Password */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
                <Text style={styles.signInBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotBtnText}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.registerRow}>
                <Text style={styles.registerText}>
                    Don&apos;t have an account?
                </Text>
                <Link href="/(auth)/Register" asChild>
                    <TouchableOpacity>
                        <Text style={styles.registerLink}>Register</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f4f6",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2563eb",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: "#64748b",
        marginBottom: 24,
    },
    googleBtn: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        marginBottom: 16,
    },
    googleIcon: {
        width: 72,
        height: 24,
        marginRight: 10,
    },
    googleBtnText: {
        color: "#222",
        fontWeight: "bold",
        fontSize: 16,
    },
    orText: {
        color: "#64748b",
        marginVertical: 8,
        fontSize: 14,
    },
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    signInBtn: {
        width: "100%",
        backgroundColor: "#6366f1",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
    },
    signInBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    forgotBtn: {
        marginTop: 10,
    },
    forgotBtnText: {
        color: "#0ea5e9",
        fontSize: 14,
        fontWeight: "500",
    },
    registerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 24,
    },
    registerText: {
        color: "#64748b",
        fontSize: 15,
    },
    registerLink: {
        color: "#2563eb",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 6,
    },
});

export default SignInScreen;
