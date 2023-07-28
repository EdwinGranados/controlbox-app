import axios from 'axios'

export function userRegisterService (){
    function Register(username,password,email){
        return axios.post(`/api/Register`,{username,password,email});
    }
    
    return {Register}
}