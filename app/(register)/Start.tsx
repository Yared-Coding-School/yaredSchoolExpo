import { useCourses } from "@/hooks/useCourse";

import { Link } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Start = () => {
    const { courses, loading, error } = useCourses();

    const programmingCourses: any[] = (courses as any[]).filter(
        (course: any) => course.category === "programming"
    );
    const aiCourses: any[] = (courses as any[]).filter(
        (course: any) => course.category === "ai-ml"
    );
    const dataCourses: any[] = (courses as any[]).filter(
        (course: any) => course.category === "data-science"
    );

    const renderCategory = (title: string, courses: any[]) => (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {courses.map((course: any) => (
                    <Link
                        key={course.title}
                        href={{
                            pathname: "/course/[courseId]",
                            params: { courseId: course.id },
                        }}
                        asChild
                    >
                        <TouchableOpacity style={styles.courseCard}>
                            <Image
                                source={{ uri: course.image }}
                                style={styles.courseImage}
                            />
                            <Text style={styles.courseTitle}>
                                {course.title}
                            </Text>
                            <Text style={styles.courseShort} numberOfLines={2}>
                                {course.short}
                            </Text>
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </View>
    );

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {(error as any).message}</Text>;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainTitle}>Learning Paths</Text>
                <Text style={styles.subTitle}>
                    Discover your optimal learning path to reach your full
                    potential.
                </Text>
            </View>

            {renderCategory("Web Development", programmingCourses)}
            {renderCategory("AI and Programming Languages", aiCourses)}
            {renderCategory("Data Analysis and Digital Marketing", dataCourses)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    header: {
        padding: 20,
        alignItems: "center",
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 16,
        color: "#CCCCCC",
        textAlign: "center",
        maxWidth: "80%",
    },
    categoryContainer: {
        marginVertical: 20,
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFFFFF",
        marginLeft: 20,
        marginBottom: 15,
    },
    courseCard: {
        width: 280,
        marginRight: 15,
        marginLeft: 20,
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#333333",
    },
    courseImage: {
        width: "100%",
        height: 160,
    },
    courseTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFD700", // Gold color
        padding: 12,
        paddingBottom: 5,
    },
    courseShort: {
        fontSize: 14,
        color: "#CCCCCC",
        padding: 12,
        paddingTop: 0,
    },
});

export default Start;
