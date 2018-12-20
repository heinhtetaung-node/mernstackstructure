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
    return (dispatch) => {
        axioApi.post('users/login', data).then((response) => {
            if(response.data.result === true){
                const authinfo = {token : response.data.token, user_id : response.data.user_id, username : response.data.username};
                dispatch({type:'SAVE_USER_INFO', authinfo});
                localStorage.setItem('userinfo', JSON.stringify(authinfo));
            }
            callback(response.data);                        
        }).catch((error) => {
            alert("something wrong in api calling 1s");
            console.log(error);  
        });
    }
}

/*
 * Logout user
 * maybe api calling stuff in future like updating logout time 
 * function type : callback
 */
export function logoutUser(callback){
    return (dispatch) => {
        localStorage.removeItem('userinfo');
        const authinfo = null;
        dispatch({type:'SAVE_USER_INFO', authinfo});
        callback('Logout success'); // maybe api response need in future
    }
}


/*
 * Api for login
 * /users/login
 * @param { email : ..., password : ... }
 * functiontype : promise
 */
export function loginUserPromise(data, callback){
    return axioApi.post('users/login', data);
}

/*
* testing custom promise function
*/
export function testCustomPromiseCheckEven(number){
    return new Promise((resolve, reject) => {
        if(number%2==0){
            resolve({result:true, message:'Yes, it is even number'});
        } 
        reject({result:false, message:'No, it is not even number'});
    });
}