import { useState } from "react";
import { userRegisterService } from '../clientServices/userRegisterService';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router'
import { HeaderLoginandregister } from '../components/HeaderLoginandregister'

const userRegister = userRegisterService();
export default function Register() {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userRegister.Register(username, password, email)
            router.push('/')
        } catch (error) {
            alert(error.response.data.error);
        }
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="bg-dark">
            <HeaderLoginandregister></HeaderLoginandregister>
            <div className="container bg-secondary bg-gradient mt-5 p-5">
                <div className="row g-3">
                    <div className="col">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="userNameControl" className="from-label"> Usuario</label>
                                        <input type="text" name="userNameControl" id="userNameControl" className="form-control" onChange={usernameHandler} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="passwordControl" className="form-label">Contraseña</label>
                                        <input type="password" name="passwordControl" className="form-control" id="passwordControl" onChange={passwordHandler} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="EmailControl" className="form-label">email</label>
                                        <input type="email" name="EmailControl" className="form-control" id="EmailControl" onChange={emailHandler} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sing up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

