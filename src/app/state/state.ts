import { NoteForUI } from "../types/Note";

export interface State {
    isDark: boolean,
    theme: string
    notes: NoteForUI[],
    trash: NoteForUI[],
}

export const initialState: State = {
    isDark: false,
    theme: "theme-purple-light",
    notes: new Array<NoteForUI>(),
    trash: new Array<NoteForUI>()
};