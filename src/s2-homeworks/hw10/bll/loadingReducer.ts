const initState = {
    isLoading: false,
}

type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

/*type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}*/

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
}as const)
