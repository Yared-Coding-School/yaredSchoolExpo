import { Link } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import {
    Image,
    Linking,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { socialLinks } from "../constants/socials";
const videoSource = require("../assets/videos/new.mp4");

export default function EducationalAppHome() {
    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
        player.play();
    });
    return (
        <View style={styles.background}>
            <View style={styles.centeredContainer}>
                {/* Card */}
                <View
                    style={[
                        styles.card,
                        Platform.OS === "android" && styles.androidShadow,
                    ]}
                >
                    {/* Slogan */}
                    <Text style={styles.slogan}>Unlock Your Potential</Text>
                    <Text style={styles.subSlogan}>with Smart Learning at</Text>
                    <Text style={styles.schoolName}>Yared Coding School</Text>
                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../assets/images/logo.png")}
                            style={styles.logoImg}
                        />
                    </View>
                    {/* Video */}
                    <View style={styles.videoCard}>
                        <VideoView
                            style={styles.video}
                            player={player}
                            contentFit="cover"
                            nativeControls={false}
                        />
                    </View>
                    {/* CTA Buttons */}
                    <View style={styles.ctaRow}>
                        <Link href="/Register" asChild>
                            <TouchableOpacity style={styles.primaryBtn}>
                                <Text style={styles.primaryBtnText}>Start</Text>
                            </TouchableOpacity>
                        </Link>
                        <TouchableOpacity
                            style={styles.fab}
                            onPress={() => Linking.openURL("tel:+251922761594")}
                            accessibilityLabel="Call Us"
                        >
                            <Text style={styles.fabText}>📞</Text>
                        </TouchableOpacity>
                        <Link href="/SignIn" asChild>
                            <TouchableOpacity style={styles.secondaryBtn}>
                                <Text style={styles.secondaryBtnText}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    {/* Social Links */}
                    <View style={styles.socialSection}>
                        <Text style={styles.socialTitle}>Connect with us</Text>
                        <View style={styles.socialIconsRow}>
                            {socialLinks.map((item, idx) => (
                                <TouchableOpacity
                                    key={idx}
                                    style={styles.socialIconBtn}
                                    accessibilityLabel={item.name}
                                    onPress={() => Linking.openURL(item.url)}
                                >
                                    <item.Icon
                                        name={item.name as any}
                                        size={28}
                                        color={item.color}
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    {/* Testimonial/Tagline */}
                    <View style={styles.testimonialSection}>
                        <Text style={styles.testimonialText}>
                            &quot;Yared Coding School helped me land my first
                            tech job. The community and mentors are
                            amazing!&quot;
                        </Text>
                        <Text style={styles.testimonialAuthor}>
                            &mdash; Student Success Story
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        backgroundColor: "#f3f4f6", // soft light gray "#f3f4f6"
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    centeredContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 0,
    },
    card: {
        width: "92%",
        height: "98%",
        maxWidth: 420,
        backgroundColor: "#E1D5C9",
        borderRadius: 32,
        padding: 28,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 8,
        alignItems: "center",
    },
    androidShadow: {
        elevation: 16,
    },
    logoContainer: {
        alignItems: "center",
    },
    logoImg: {
        width: 86,
        height: 86,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        marginBottom: 0,
    },
    slogan: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2563eb", // blue-600
        textAlign: "center",
        marginTop: 8,
    },
    subSlogan: {
        fontSize: 16,
        color: "#64748b", // slate-500
        textAlign: "center",
        marginBottom: 2,
    },
    schoolName: {
        fontSize: 26,
        fontWeight: "900",
        color: "black", // sky-500 0ea5e9
        textAlign: "center",
        marginBottom: 6,
        marginTop: 2,
        letterSpacing: 1,
    },
    videoCard: {
        width: "100%",
        borderRadius: 28,
        overflow: "hidden",
        marginVertical: 16,
        backgroundColor: "#e0e7ff", // indigo-100
        borderWidth: 3,
        borderColor: "black", // indigo-200
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },
    video: {
        width: "100%",
        height: 180,
        borderRadius: 20,
    },
    ctaRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 12,
        width: "100%",
        gap: 10,
    },
    primaryBtn: {
        flex: 1,
        backgroundColor: "#6366f1", // indigo-500
        paddingVertical: 14,
        paddingHorizontal: 14,
        borderRadius: 12,
        alignItems: "center",
        marginRight: 6,
        shadowColor: "#6366f1",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
    },
    primaryBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    secondaryBtn: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#6366f1",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginLeft: 6,
        backgroundColor: "transparent",
    },
    secondaryBtnText: {
        color: "#6366f1",
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 0.5,
    },
    fab: {
        marginLeft: 10,
        backgroundColor: "#0ea5e9",
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#0ea5e9",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
    },
    fabText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    socialSection: {
        marginTop: 10,
        alignItems: "center",
        width: "100%",
    },
    socialTitle: {
        fontSize: 14,
        color: "#64748b",
        marginBottom: 6,
        textAlign: "center",
        fontWeight: "600",
    },
    socialIconsRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    socialIconBtn: {
        backgroundColor: "#f1f5f9",
        borderRadius: 999,
        padding: 10,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    testimonialSection: {
        marginTop: 18,
        alignItems: "center",
        width: "100%",
    },
    testimonialText: {
        fontStyle: "italic",
        color: "#334155",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 2,
    },
    testimonialAuthor: {
        color: "#6366f1",
        fontWeight: "bold",
        fontSize: 13,
        textAlign: "center",
    },
});
