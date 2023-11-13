import { NoteForUI } from "../types/Note";

export interface State {
    isDark: boolean,
    theme: string
    notes: NoteForUI[],
    trash: NoteForUI[],
    notesEmptyMessage: string,
    trashEmptyMessage: string,
}

export const initialState: State = {
    isDark: false,
    theme: "theme-purple-light",
    notes: new Array<NoteForUI>(),
    trash: new Array<NoteForUI>(),
    notesEmptyMessage: '',
    trashEmptyMessage: '',
};