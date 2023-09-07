const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof state=> { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({type: 'CHANGE_LOADING', isLoading}as const)
