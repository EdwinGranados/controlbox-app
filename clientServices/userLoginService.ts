import axios from 'axios'

export function userloginService (){
    function login(username,password){
        return axios.post(`/api/auth`,{username,password});
    }
    
    return {login}
}