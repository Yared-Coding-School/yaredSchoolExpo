import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
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

const allCourses = [
    { title: "Full Stack Web Development" },
    { title: "Mobile App Development" },
    { title: "Data Science" },
    { title: "UI/UX Design" },
];

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [marketing, setMarketing] = useState(true);
    const handleSubmit = () => {
        // TODO: Implement registration logic
        alert(`Registered: ${name}, ${selectedCourse}, ${email}, ${phone}`);
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
                            <Text style={styles.label}>Select Course</Text>
                            <View style={styles.pickerWrapper}>
                                <Picker
                                    selectedValue={selectedCourse}
                                    onValueChange={setSelectedCourse}
                                    style={styles.picker}
                                >
                                    <Picker.Item
                                        label="Select a course"
                                        value=""
                                    />
                                    {allCourses.map((course, idx) => (
                                        <Picker.Item
                                            key={idx}
                                            label={course.title}
                                            value={course.title}
                                        />
                                    ))}
                                </Picker>
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
                            value={marketing}
                            onValueChange={setMarketing}
                            style={styles.checkbox}
                            trackColor={{ false: "#e5e7eb", true: "#f59e42" }}
                            thumbColor={marketing ? "#f59e42" : "#fff"}
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
                    <TouchableOpacity
                        style={styles.submitBtn}
                        onPress={handleSubmit}
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
});

export default RegisterScreen;
