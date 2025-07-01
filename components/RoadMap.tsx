import React from "react";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Swiper from "react-native-swiper";

interface Course {
    title: string;
    short?: string;
    description?: string;
    image: any;
}

interface RoadMapProps {
    programmingCourses: Course[];
    aiCourses: Course[];
    dataCourses: Course[];
}

const { width } = Dimensions.get("window");

const RoadMap: React.FC<RoadMapProps> = ({
    programmingCourses,
    aiCourses,
    dataCourses,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Learning Paths</Text>
            <Text style={styles.subHeader}>
                Discover your optimal learning path to reach your full
                potential.
            </Text>
            <Swiper
                style={styles.swiper}
                showsPagination
                loop
                autoplay
                autoplayTimeout={5}
                activeDotColor="#facc15"
            >
                <ScrollView contentContainerStyle={styles.slide}>
                    <Text style={styles.slideTitle}>Web Development</Text>
                    <View style={styles.grid}>
                        {programmingCourses.map((subject, idx) => (
                            <View key={idx} style={styles.card}>
                                <Image
                                    source={subject.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.cardTitle}>
                                    {subject.title}
                                </Text>
                                <Text style={styles.cardDesc}>
                                    {subject.short}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <ScrollView contentContainerStyle={styles.slide}>
                    <Text style={styles.slideTitle}>
                        AI and Programming Languages
                    </Text>
                    <View style={styles.grid}>
                        {aiCourses.map((subject, idx) => (
                            <View key={idx} style={styles.card}>
                                <Image
                                    source={subject.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.cardTitle}>
                                    {subject.title}
                                </Text>
                                <Text style={styles.cardDesc}>
                                    {subject.short}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <ScrollView contentContainerStyle={styles.slide}>
                    <Text style={styles.slideTitle}>
                        Data Analysis and Digital Marketing
                    </Text>
                    <View style={styles.grid}>
                        {dataCourses.map((subject, idx) => (
                            <View key={idx} style={styles.card}>
                                <Image
                                    source={subject.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.cardTitle}>
                                    {subject.title}
                                </Text>
                                <Text style={styles.cardDesc}>
                                    {subject.description}
                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#18181b", paddingTop: 32 },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        marginBottom: 16,
    },
    swiper: { height: 600 },
    slide: { padding: 16 },
    slideTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#facc15",
        marginBottom: 12,
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: width / 2 - 32,
        backgroundColor: "#27272a",
        borderRadius: 12,
        marginBottom: 16,
        padding: 8,
        alignItems: "center",
    },
    cardImage: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8 },
    cardTitle: {
        color: "#facc15",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4,
        textAlign: "center",
    },
    cardDesc: { color: "white", fontSize: 13, textAlign: "center" },
});

export default RoadMap;
