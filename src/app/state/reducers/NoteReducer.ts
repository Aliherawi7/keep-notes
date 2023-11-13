import { createReducer, createSelector, on } from '@ngrx/store';
import * as actions from "../actions/NoteActions";
import { Action } from '@ngrx/store/src/models';
import { initialState, State } from '../state';
import { NoteForUI } from 'src/app/types/Note';



export const appReducer = createReducer(
    initialState,
    on(actions.addNote, (state, note: NoteForUI) => {
        return { ...state, notes: [...state.notes, note] }
    }),
    on(actions.addAllNotes, (state, { notes }) => ({ ...state, notes: notes })),
    on(actions.addAllTrash, (state, { trash }) => ({ ...state, trash: trash })),
    on(actions.moveFromTrash, (state, { noteId }) => {
        const index = state.trash.findIndex(t => t.id == noteId)
        if (index >= 0) {
            const note = { ...state.trash[index], enable: true };
            const newTrash = [...state.trash.slice(0, index), ...state.trash.slice(index + 1)];
            const newNotes = [...state.notes, note]
            return { ...state, notes: newNotes, trash: newTrash }
        }
        return state;

    }),
    on(actions.moveToTrash, (state, { noteId }) => {
        const index = state.notes.findIndex(t => t.id == noteId)
        if (index >= 0) {
            const note = { ...state.notes[index], enable: false };
            const newNotes = [...state.notes.slice(0, index), ...state.notes.slice(index + 1)];
            const newTrash = [...state.trash, note]
            return { ...state, notes: newNotes, trash: newTrash }
        }
        return state;

    }),
    on(actions.deleteNote, (state, { noteId }) => {
        const index = state.trash.findIndex(t => t.id == noteId)
        if (index >= 0) {
            const newTrash = [...state.trash.slice(0, index), ...state.trash.slice(index + 1)];
            return { ...state, trash: newTrash }
        }
        return state;

    }),
);

export function _appReducer(state: State, action: Action) {
    return appReducer(state, action);
}

export const selectAllNotes = (state: State) => {
    return (Object.values(state)[0].notes);
}
export const selectAllTrash = (state: State) => {
    return (Object.values(state)[0].trash);
}






