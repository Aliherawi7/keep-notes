export interface User {
    authGeneratedId: string,
    name: string | null,
    lastName: string | null,
    email: string | null,
    password: string | null,
    joinedDate: Date,
    imageUrl: string | null,
}