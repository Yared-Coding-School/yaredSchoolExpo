import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import avatar from "../../assets/images/placeholder.png";
interface Feedback {
    id: string;
    name: string;
    userPhoto?: string;
    rating: number;
    feedback: string;
    timestamp?: string;
}


interface HomeTestimonialGridProps {
    feedbacks: Feedback[];
    loading: boolean;
}

const HomeTestimonialGrid: React.FC<HomeTestimonialGridProps> = ({
    feedbacks,
    loading,
}) => {
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading testimonials...</Text>
            </View>
        );
    }

    return (
        <View style={styles.section}>
            <Text style={styles.title}>What People Say</Text>
            <FlatList
                data={feedbacks}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.grid}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image
                            source={
                                item.userPhoto
                                    ? { uri: item.userPhoto }
                                    : avatar
                            }
                            style={styles.avatar}
                        />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.rating}>
                            Rating: {item.rating}/5
                        </Text>
                        <Text style={styles.feedback}>
                            &ldquo;{item.feedback}&rdquo;
                        </Text>
                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    section: { paddingVertical: 24, backgroundColor: "#18181b", flex: 1 },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 16,
    },
    grid: { paddingHorizontal: 8 },
    row: { justifyContent: "space-between", marginBottom: 16 },
    card: {
        backgroundColor: "#27272a",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 8,
    },
    avatar: { width: 64, height: 64, borderRadius: 32, marginBottom: 8 },
    name: { fontWeight: "bold", color: "white", fontSize: 16, marginBottom: 4 },
    rating: { color: "#facc15", marginBottom: 4 },
    feedback: {
        color: "white",
        fontStyle: "italic",
        marginBottom: 8,
        textAlign: "center",
    },
    timestamp: { color: "#a1a1aa", fontSize: 12 },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
    },
    loadingText: { color: "white", fontSize: 16 },
});

export default HomeTestimonialGrid;
