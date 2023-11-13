import { createAction, props } from '@ngrx/store';


export const setDarkMode = createAction(
    '[Theme] dark mode',
    props<{ isDark: boolean }>()
);

export const updateTheme = createAction(
    '[Theme] update Theme',
    props<{ theme: String }>()
);


