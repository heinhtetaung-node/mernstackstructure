import axioApi from './../../config/axioconfig';
export function getUsers () {
    return (dispatch) => {
        axioApi.get('users').then((res) => {
            let users = res.data
            dispatch({type:'VIEW_USERS', users})
        })
        .catch((err) => {
            dispatch({type:'VIEW_POSTS_ERR', err})
        })
    }
} 