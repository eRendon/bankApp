export interface Register {
    title?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms?: boolean;
}
