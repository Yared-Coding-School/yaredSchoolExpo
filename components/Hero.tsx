import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { socialLinks } from "../constants/socials";
const Hero: React.FC = () => {
    const route = useRouter();
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    return (
        <View
            style={[
                styles.flex1,
                styles.centered,
                styles.p6,
                isDark ? styles.bgSecondaryDark : styles.bgSecondaryLight,
            ]}
        >
            <Image
                source={require("../assets/images/logo.png")}
                style={[styles.logoImg, styles.mb4]}
            />
            <View style={[styles.wFull, styles.p6, styles.itemsCenter]}>
                <Text
                    style={[
                        styles.heroTitle,
                        styles.textWhite,
                        isDark && styles.textDark,
                        styles.fontExtrabold,
                        styles.textCenter,
                    ]}
                >
                    Yared
                </Text>
                <Text
                    style={[
                        styles.heroTitle,
                        styles.textWhite,
                        styles.textCenter,
                    ]}
                >
                    Software Engineering Bootcamp
                </Text>
                <Text
                    style={[
                        styles.textXl,
                        styles.fontSemibold,
                        styles.textWhite,
                        styles.mt2,
                        styles.textCenter,
                    ]}
                >
                    Online and In‑Person.
                </Text>
                <Text
                    style={[
                        styles.textBase,
                        styles.fontBold,
                        isDark ? styles.textAccentLight : null,
                        styles.mt4,
                        styles.textCenter,
                    ]}
                >
                    በዚህ የተጠናከረ የሶፍትዌር ምህንድስና ቡት ካምፕ ተፈላጊ ችሎታዎችን ይማሩ እና እንደ ሶፍትዌር
                    መሐንዲስ አዲስ ስራ ይጀምሩ።
                </Text>
                <View
                    style={[
                        styles.flexRow,
                        styles.mt6,
                        styles.justifyCenter,
                        styles.itemsCenter,
                        styles.gap4,
                    ]}
                >
                    <TouchableOpacity
                        style={[
                            styles.bgTeal700,
                            isDark && styles.bgSurfaceDark,
                            styles.px6,
                            styles.py3,
                            styles.roundedLg,
                        ]}
                        onPress={() => route.replace("/Register")}
                    >
                        <Text
                            style={[
                                styles.textWhite,
                                styles.fontBold,
                                styles.textBase,
                            ]}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                    <Text
                        style={[
                            isDark
                                ? styles.colorTextDark
                                : styles.colorTextLight,
                        ]}
                    >
                        OR
                    </Text>
                    <TouchableOpacity
                        style={[
                            isDark ? styles.bgWhite : styles.bg,
                            styles.px6,
                            styles.py3,
                            styles.roundedLg,
                        ]}
                        onPress={() => Linking.openURL("tel:+251922761594")}
                    >
                        <Text
                            style={[
                                styles.textTeal700,
                                styles.fontBold,
                                styles.textBase,
                            ]}
                        >
                            Call Me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={[
                    styles.flexRow,
                    styles.justifyCenter,
                    styles.p4,
                    styles.mt6,
                    styles.bgWhite10,
                    isDark && styles.bgWhite,
                    styles.rounded2xl,
                    styles.px6,
                    styles.py4,
                ]}
            >
                {socialLinks.map((item, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => Linking.openURL(item.url)}
                        style={styles.mx3}
                    >
                        <item.Icon
                            name={item.name as any}
                            size={32}
                            color={item.color}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    flex1: { flex: 1 },
    centered: { justifyContent: "center", alignItems: "center" },
    p6: { padding: 24 },
    bgSecondaryDark: { backgroundColor: "#18181b" },
    bgSecondaryLight: { backgroundColor: "#f1f5f9" },
    logoImg: { width: 128, height: 128 },
    mb4: { marginBottom: 16 },
    wFull: { width: "100%" },
    p6: { padding: 24 },
    itemsCenter: { alignItems: "center" },
    heroTitle: { fontSize: 24 },
    textWhite: { color: "#fff" },
    textDark: { color: "#fff" },
    fontExtrabold: { fontWeight: "800" },
    textCenter: { textAlign: "center" },
    textXl: { fontSize: 20 },
    fontSemibold: { fontWeight: "600" },
    mt2: { marginTop: 8 },
    textBase: { fontSize: 16 },
    fontBold: { fontWeight: "bold" },
    textAccentLight: { color: "#67e8f9" },
    mt4: { marginTop: 16 },
    flexRow: { flexDirection: "row" },
    mt6: { marginTop: 24 },
    justifyCenter: { justifyContent: "center" },
    gap4: { columnGap: 16 },
    bgTeal700: { backgroundColor: "#0d9488" },
    bgSurfaceDark: { backgroundColor: "#18181b" },
    px6: { paddingHorizontal: 24 },
    py3: { paddingVertical: 12 },
    roundedLg: { borderRadius: 8 },
    colorTextDark: { color: "#fff" },
    colorTextLight: { color: "#000" },
    bgWhite: { backgroundColor: "#fff" },
    bg: {},
    textTeal700: { color: "#0d9488" },
    bgWhite10: { backgroundColor: "rgba(255,255,255,0.1)" },
    rounded2xl: { borderRadius: 16 },
    p4: { padding: 16 },
    px6: { paddingHorizontal: 24 },
    py4: { paddingVertical: 16 },
    mx3: { marginHorizontal: 12 },
});

export default Hero;
