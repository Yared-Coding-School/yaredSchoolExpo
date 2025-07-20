import { getFriendlyAuthErrorMessage } from "@/constants/firebaseError";
import { auth, db } from "@/firebase/firebase";
import { useCourses } from "@/hooks/useCourse";
import { router, useLocalSearchParams } from "expo-router";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import {
    Linking,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { courseId } = useLocalSearchParams();
    const { courses } = useCourses();
    const selectedCourse = (courses as any[]).find((c) => c.id === courseId);

    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        setErrorMsg("");
        setSubmitting(true);

        // 1) Validate
        if (!name || !phone || !email || !password || !selectedCourse) {
            setErrorMsg("Please fill in all fields.");
            setSubmitting(false);
            return;
        }

        const cleanEmail = email.trim().toLowerCase();
        const cleanName = name.trim();
        const cleanPhone = phone.trim();

        let user;
        try {
            // 2) Try creating a new auth user
            const cred = await createUserWithEmailAndPassword(
                auth,
                cleanEmail,
                password
            );
            user = cred.user;
            // send verification
            if (user.sendEmailVerification) {
                user.sendEmailVerification().catch(console.warn);
            }
        } catch (createError: any) {
            if (createError.code === "auth/email-already-in-use") {
                // 2a) Already in auth: try signing in
                try {
                    const cred = await signInWithEmailAndPassword(
                        auth,
                        cleanEmail,
                        password
                    );
                    user = cred.user;
                } catch (signInError: any) {
                    if (signInError.code === "auth/wrong-password") {
                        setErrorMsg(
                            "That email is already registered—if you forgot your password, please reset it."
                        );
                    } else {
                        setErrorMsg(getFriendlyAuthErrorMessage(signInError));
                    }
                    setSubmitting(false);
                    return;
                }
            } else {
                // 2b) Other creation error
                setErrorMsg(getFriendlyAuthErrorMessage(createError));
                setSubmitting(false);
                return;
            }
        }

        // 3) Now we have user.uid—check if this user is already registered for this course
        const registrationId = `${user.uid}_${selectedCourse.id}`;
        const regRef = doc(db, "reg_student", registrationId);

        const regSnap = await getDoc(regRef);
        if (regSnap.exists()) {
            setErrorMsg("You are already registered for this course!");
            setSubmitting(false);
            return;
        }

        // 4) Write the registration record
        await setDoc(regRef, {
            name: cleanName,
            phone: cleanPhone,
            email: cleanEmail,
            subject: selectedCourse.id,
            registrationDate: new Date().toISOString(),
        });

        // 5) Success! clear, alert, redirect...
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");

        alert(
            "Registration Successful! A verification email has been sent to your email address. Please verify your email to complete the registration."
        );

        setTimeout(() => {
            router.replace("/(dashboard)/Dashboard");
        }, 2000);

        setSubmitting(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Registration</Text>
                {/* Registration Form */}
                <View style={styles.formSection}>
                    <View style={styles.row2col}>
                        <View style={styles.inputCol}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                                placeholder="Enter your full name"
                                placeholderTextColor="#94a3b8"
                            />
                        </View>
                        <View style={styles.inputCol}>
                            <Text style={styles.label}>Selected Course</Text>
                            <View style={styles.selectedCourseBox}>
                                <Text style={styles.selectedCourseText}>
                                    {selectedCourse
                                        ? selectedCourse.title
                                        : "No course selected"}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputColFull}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            placeholderTextColor="#94a3b8"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputColFull}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Create a password"
                            placeholderTextColor="#94a3b8"
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.inputColFull}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            value={phone}
                            onChangeText={setPhone}
                            placeholder="Enter your phone number"
                            placeholderTextColor="#94a3b8"
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={styles.checkboxRow}>
                        <Switch
                            style={styles.checkbox}
                            trackColor={{ false: "#e5e7eb", true: "#f59e42" }}
                            thumbColor={"#f59e42"}
                        />
                        <Text style={styles.checkboxLabel}>
                            Please Call at +251 922 76 15 94
                        </Text>
                    </View>
                    <Text style={styles.termsText}>
                        By creating an account, you agree to our{" "}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL("#")}
                        >
                            terms and conditions
                        </Text>{" "}
                        and{" "}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL("#")}
                        >
                            privacy policy
                        </Text>
                        .
                    </Text>
                    {errorMsg ? (
                        <Text style={styles.errorBox}>{errorMsg}</Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.submitBtn}
                        onPress={handleSubmit}
                        disabled={submitting}
                    >
                        <Text style={styles.submitBtnText}>
                            Register For Class
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.infoSection}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}>📍</Text>
                            <Text style={styles.infoText}>
                                Go to head office in Megenagna Metebaber
                                Building for class Schedule
                            </Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoIcon}>👨‍🏫</Text>
                            <Text style={styles.infoText}>
                                Classes will be arranged with your specific
                                Instructor
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#f3f4f6",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 24,
    },
    formContainer: {
        width: "96%",
        maxWidth: 480,
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2563eb",
        textAlign: "center",
        marginBottom: 12,
    },
    formSection: {
        width: "100%",
    },
    row2col: {
        flexDirection: "column",
        gap: 16,
        marginBottom: 12,
    },
    inputCol: {
        flex: 1,
    },
    inputColFull: {
        marginBottom: 12,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#64748b",
        marginBottom: 4,
    },
    input: {
        width: "100%",
        backgroundColor: "#f1f5f9",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        color: "#222",
    },
    pickerWrapper: {
        backgroundColor: "#f1f5f9",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        marginBottom: 0,
    },
    picker: {
        width: "100%",
        color: "#222",
    },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    checkbox: {
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 14,
        color: "#64748b",
    },
    termsText: {
        fontSize: 13,
        color: "#64748b",
        marginBottom: 10,
    },
    link: {
        color: "#0ea5e9",
        textDecorationLine: "underline",
    },
    submitBtn: {
        width: "100%",
        backgroundColor: "#6366f1",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
        marginBottom: 8,
    },
    submitBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    infoSection: {
        marginTop: 16,
        gap: 8,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    infoIcon: {
        fontSize: 18,
        marginRight: 8,
    },
    infoText: {
        fontSize: 14,
        color: "#64748b",
        flex: 1,
    },
    selectedCourseBox: {
        backgroundColor: "#f3f4f6",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    selectedCourseText: {
        fontSize: 16,
        color: "#222",
        fontWeight: "bold",
    },
    errorBox: {
        color: "red",
        backgroundColor: "#fee2e2",
        padding: 8,
        marginBottom: 12,
        borderRadius: 4,
    },
});

export default RegisterScreen;
