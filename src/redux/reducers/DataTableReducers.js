const defaultState = {
    dataHistory: [],
    dataHistoryLoader:true,
    phoneListLoader:false,
    phoneList: []
}
export const DataTableReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'DATA_HISTORY':
            if (state.dataHistory.length !== 0) {
                return state;
            }
            state.dataHistoryLoader = false;
            state.dataHistory = state.dataHistory.concat(action.data);
            state.dataHistory = [...state.dataHistory]
            console.log(state.dataHistory);
            return { ...state }
        case 'PHONE_LIST':
            state.phoneList = [...action.data]
            return { ...state }
        case 'ADD_PHONE_LIST':

        default:
            return state
    }
}