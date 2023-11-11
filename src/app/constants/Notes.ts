import { NoteForUI } from "../types/Note";

export const notes: NoteForUI[] = [
    {
        id: '1',
        title: "shopping list",
        data: "<h1>Heading 1 test for note ;lj;l kj;ljkgrf tuyt ytr yutruyryutr</h1>",
        color: 'orange',
        createdAt: new Date(),
        lastUpdate: new Date(),
        userId: 'user-id'
    },
    {
        id: '2',
        title: "To Do list",
        data: "<b>bold test</b>",
        color: 'green',
        createdAt: new Date(),
        lastUpdate: new Date(),
        userId: 'user-id'
    },
    {
        id: '3',
        title: "Must read books",
        data: "Clean Architecture",
        color: 'bule',
        createdAt: new Date(),
        lastUpdate: new Date(),
        userId: 'user-id'
    },
    {
        id: '4',
        title: "Daily tasks",
        data: "this is for test",
        color: '#ddd',
        createdAt: new Date(),
        lastUpdate: new Date(),
        userId: 'user-id'
    },
    {
        id: '5',
        title: "Note title",
        data: "<h4>this is for test</h4>",
        color: 'red',
        createdAt: new Date(),
        lastUpdate: new Date(),
        userId: 'user-id'
    },
]