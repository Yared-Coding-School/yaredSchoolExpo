// Create the hook here

import { CourseContext } from "@/contexts/CourseContext";
import { useContext } from "react";

export function useCourses() {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error("useUser must be used with in UserProvider!");
    }
    return context;
}
