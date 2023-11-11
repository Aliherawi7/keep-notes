export interface Note {
    createdAt: Date,
    title: string,
    data: string,
    color: string,
    lastUpdate: Date,
    userId: string
}

export interface NoteForUI {
    id: string,
    createdAt: Date,
    title: string,
    data: string,
    color: string,
    lastUpdate: Date,
    userId: string
}