const initialState = {
    users : []
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'VIEW_USERS' :
          return {
              ...state,
              users: action.users
          }
        default:
          return state
    }
} 
