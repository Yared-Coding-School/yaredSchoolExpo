import { useCourses } from "@/hooks/useCourse";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const CourseDetail = () => {
    const { courseId } = useLocalSearchParams();
    const { courses, loading, error } = useCourses();
    const course = (courses as any[]).find((c: any) => c.id === courseId);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {(error as any).message}</Text>;
    if (!course) return <Text>Course not found.</Text>;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: course.image }} style={styles.headerImage} />

            <View style={styles.content}>
                <Text style={styles.title}>{course.title}</Text>

                <Text style={styles.sectionTitle}>About this course</Text>
                <Text style={styles.description}>{course.description}</Text>

                <Text style={styles.sectionTitle}>What you&apos;ll learn</Text>
                {course.learningPoints?.map((point: any, index: number) => (
                    <Text key={index} style={styles.learningPoint}>
                        • {point}
                    </Text>
                ))}
                <Link
                    style={styles.registerButton}
                    href={{
                        pathname: "/Register",
                        params: { courseId },
                    }}
                >
                    <Text style={styles.registerButtonText}>Register Now</Text>
                </Link>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    headerImage: {
        width: "100%",
        height: 250,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFD700",
        marginTop: 15,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#CCCCCC",
        lineHeight: 24,
    },
    learningPoint: {
        fontSize: 16,
        color: "#CCCCCC",
        marginVertical: 5,
        marginLeft: 10,
    },
    registerButton: {
        backgroundColor: "#FFD700",
        borderRadius: 8,
        padding: 16,
        marginVertical: 30,
        alignItems: "center",
        textAlign: "center",
    },
    registerButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#121212",
    },
});

export default CourseDetail;
