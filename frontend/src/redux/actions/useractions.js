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
 * functiontype : async
 */
export function saveUser(user){
    return async() => {
        let res
        try{
            res = await axioApi.post('users/save', {data : user});
        }catch(e){
            alert("Someting wrong in api calling");
            console.log(e);
            res = e;
        }
        return res;
    }
}

/*
 * Api for login
 * /users/login
 * @param { email : ..., password : ... }
 * functiontype : callback
 */
export function loginUser(data, callback){
    return axioApi.post('users/login', data).then((response) => {
        callback(response.data);
    }).catch((error) => {
        alert("something wrong in api calling");
        console.log(error);  
    });
}