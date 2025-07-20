// utils/firebaseError.ts
export function getFriendlyAuthErrorMessage(error: any) {
    if (!error?.code) return "An unknown error occurred. Please try again.";

    switch (error.code) {
        case "auth/invalid-email":
            return "The email address is not valid.";
        case "auth/user-disabled":
            return "This user account has been disabled.";
        case "auth/user-not-found":
            return "No account found with this email.";
        case "auth/wrong-password":
            return "Incorrect password. Please try again.";
        case "auth/email-already-in-use":
            // In our flow we catch this and try sign-in instead of surfacing immediately
            return "This email is already registered. Please sign in or reset your password.";
        case "auth/weak-password":
            return "Password should be at least 6 characters.";
        case "auth/invalid-credential":
            return "Invalid email or password. or Registered for the same subject twice.";
        default:
            return error.message || "An error occurred. Please try again.";
    }
}
