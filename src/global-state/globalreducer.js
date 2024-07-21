export const globalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                data: [
                    action.value,
                    ...state.data
                ]
            }

        case 'DELETE_TRANSACTION':
            return {
                data: state.data.filter(data => data.id !== action.id)
            }
        default:
            return action.state;
    }
}