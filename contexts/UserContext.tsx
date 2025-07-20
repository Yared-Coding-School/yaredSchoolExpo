import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

type User = FirebaseUser | null;

interface UserContextType {
    user: User;
    authChecked: boolean;
    SignIn: (email: string, password: string) => Promise<void>;
    Register: (email: string, password: string) => Promise<void>;
    Logout: () => Promise<void>;
}


export const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User>(null);
    const [authChecked, setAuthChecked] = useState<boolean>(false);

    // Sign in existing users
    async function SignIn(email: string, password: string) {
        await signInWithEmailAndPassword(auth, email, password);
    }

    // Register new users
    async function Register(email: string, password: string) {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign out current user
    async function Logout() {
        await signOut(auth);
    }

    // Check for existing authenticated user on mount
    async function getInitialUserValue() {
        onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setAuthChecked(true);
        });
    }

    useEffect(() => {
        getInitialUserValue();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, authChecked, SignIn, Register, Logout }}
        >
            {children}
        </UserContext.Provider>
    );
}
