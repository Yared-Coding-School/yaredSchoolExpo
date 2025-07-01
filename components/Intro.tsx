import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { WebView } from "react-native-webview";

const trendingCourses = [
    {
        title: "Digital Marketing",
        description:
            "Learn how to create impactful marketing strategies using digital tools",
        videoUrl: "https://youtu.be/FeOMRdmcVXc",
        courseTitle: "Digital Marketing",
    },
    {
        title: "Web Development",
        description:
            "Web development is the process of creating websites and web applications.",
        videoUrl: "https://youtu.be/FeOMRdmcVXc",
        courseTitle: "Web development using AI",
    },
    {
        title: "Data Analysis",
        description:
            "Master data analysis using Python, MySQL, and Microsoft Power BI",
        videoUrl: "https://youtu.be/FeOMRdmcVXc",
        courseTitle: "Data Analysis",
    },
];

const Intro: React.FC = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>I&apos;m Yared Kebede.</Text>
                <Text style={styles.introText}>
                    Are you feeling stuck or overwhelmed in your coding journey?
                    Don&apos;t worry, I&apos;ve got your back! Together, we&apos;ll work to
                    level up your skills, increase your earning potential, and
                    build a brighter future.
                </Text>
                <View style={styles.videoContainer}>
                    <WebView
                        style={{ flex: 1 }}
                        source={{
                            uri: "https://www.youtube.com/embed/VoRz7xfF9m0",
                        }}
                        allowsFullscreenVideo
                        javaScriptEnabled
                        domStorageEnabled
                    />
                </View>
            </View>
            <View style={styles.trendingSection}>
                <Text style={styles.trendingTitle}>New and Hot</Text>
                <Text style={styles.trendingDesc}>
                    Check out the top 3 trending subjects that are making waves
                    right now!
                </Text>
                {trendingCourses.map((course, idx) => (
                    <View key={idx} style={styles.courseCard}>
                        <Text style={styles.courseTitle}>{course.title}</Text>
                        <Text style={styles.courseDesc}>
                            {course.description}
                        </Text>
                        <View style={styles.courseButtons}>
                            <TouchableOpacity
                                style={styles.courseButton}
                                onPress={() =>
                                    navigation.navigate("WebViewScreen", {
                                        screen: "WebViewScreen",
                                        params: { url: course.videoUrl },
                                    })
                                }
                            >
                                <Text style={styles.buttonText}>
                                    Watch Preview
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.courseButton}
                                onPress={() =>
                                    navigation.navigate("Register", {
                                        title: course.courseTitle,
                                    })
                                }
                            >
                                <Text style={styles.buttonText}>
                                    Register Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16, backgroundColor: "#18181b" },
    headerSection: { alignItems: "center", marginBottom: 24 },
    hello: {
        color: "#8b5cf6",
        fontWeight: "500",
        fontSize: 14,
        letterSpacing: 2,
        marginBottom: 4,
    },
    name: { fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 8 },
    introText: {
        color: "white",
        textAlign: "center",
        marginBottom: 12,
        fontSize: 16,
    },
    videoContainer: {
        width: "100%",
        height: 220,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 12,
    },
    trendingSection: {
        backgroundColor: "#2563eb",
        borderRadius: 16,
        padding: 16,
    },
    trendingTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 4,
        textAlign: "center",
    },
    trendingDesc: { color: "white", textAlign: "center", marginBottom: 12 },
    courseCard: {
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    courseTitle: {
        color: "#facc15",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 4,
    },
    courseDesc: { color: "white", marginBottom: 8 },
    courseButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
    },
    courseButton: {
        backgroundColor: "#14b8a6",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: { color: "white", fontWeight: "bold" },
});

export default Intro;
