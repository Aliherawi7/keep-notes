import { createAction, props } from '@ngrx/store';
import { Note, NoteForUI } from 'src/app/types/Note';


export const addNote = createAction(
    '[notes] add note',
    props<NoteForUI>()
);
export const updateNote = createAction(
    '[notes] update note',
    props<NoteForUI>()
);

export const moveToTrash = createAction(
    '[notes] move to trash',
    props<{ noteId: string }>()
);
export const moveFromTrash = createAction(
    '[notes] move from trash',
    props<{ noteId: string }>()
);
export const deleteNote = createAction(
    '[notes] delete note',
    props<{ noteId: string }>()
);
export const addAllNotes = createAction(
    '[notes] add all notes ',
    props<{ notes: NoteForUI[] }>()
);

export const addAllTrash = createAction(
    '[notes] add all trash ',
    props<{ trash: NoteForUI[] }>()
);