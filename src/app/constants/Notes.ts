export interface Note {
    id: number,
    date: string,
    title: string,
    text: Array<string>,
    color: string
}


export const notes: Note[] = [
    {
        id: 1,
        date: 'Friday, May 19, 2023',
        title: "shopping list",
        text: ["Bike", "Egg", "Banana", "Apple", "mobile chrger", "note book"],
        color: 'orange'
    },
    {
        id: 2,
        date: 'Friday, May 19, 2023',
        title: "To Do list",
        text: ["implement the note application", "test the portal api", "add new feature to the portal api", "implement a text editor for note app"],
        color: 'green'
    },
    {
        id: 3,
        date: 'Friday, May 19, 2023',
        title: "Must read books",
        text: ["Clean Architecture", "Clean coder", "DSA", "JavaScript the good parts", "Clean code"],
        color: 'bule'
    },
    {
        id: 4,
        date: 'Friday, May 19, 2023',
        title: "Daily tasks",
        text: ["this is for test"],
        color: '#ddd'
    },
    {
        id: 5,
        date: 'Friday, May 19, 2023',
        title: "Note title",
        text: ["this is for test"],
        color: 'red'
    },
]