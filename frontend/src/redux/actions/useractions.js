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

/*
 * Api to save user
 * /users/save 
 * @param { data : {..userinfo} }
 */
export function saveUser(user){
    return async() => {
        let res
        try{
            res = await axioApi.post('users/save', {data : user});
        }catch(e){
            res = e;
        }
        return res;
    }
}