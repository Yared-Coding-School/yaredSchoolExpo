// context/CourseContext.tsx
import { db } from "@/firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";


export const CourseContext = createContext(null);;

export const CourseProvider = ({ children }: any) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const q = query(
                    collection(db, "courses"),
                    orderBy("createdAt", "desc")
                );
                const snap = await getDocs(q);
                const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
                console.log(
                    "%c[CoursesProvider] loaded courses:",
                    "color: green;",
                    list.length
                );
                setCourses(list);
            } catch (e: any) {
                console.error(
                    "%c[CoursesProvider] load error:",
                    "color: red;",
                    e
                );
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <CourseContext.Provider value={{ courses, loading, error }}>
            {children}
        </CourseContext.Provider>
    );
};
