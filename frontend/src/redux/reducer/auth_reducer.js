const initialState = {
    authinfo : (localStorage.getItem('userinfo')==null)? null : JSON.parse(localStorage.getItem('userinfo'))
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'SAVE_USER_INFO' :
            console.log("hi");
            return {
                ...state,
                // authinfo: action.authinfo
                authinfo: action.authinfo
            }
        default:
            return state
    }
} 
