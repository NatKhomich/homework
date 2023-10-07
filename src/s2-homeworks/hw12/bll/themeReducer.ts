const initState = {
    themeId: 1,
}
type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdType = ReturnType<typeof changeThemeId>