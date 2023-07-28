import { useState } from "react";
import { userloginService } from '../clientServices/userLoginService';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router'

const userSer = userloginService();

export default function Login() {
    const { user, mutateUser } = useUser({
        redirectTo: '/',
        redirectIfFound: true,
    });

    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            mutateUser(
                await userSer.login(username, password)
            );
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleRedirect = () => {
        router.push('/register')
    }

    return (
        <div>
            {!user ? (<h1>Carganado...</h1>) :
                <>
                    {!user.isLogged &&
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
                                        <div class="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label for="passwordControl" class="form-label">Contraseña</label>
                                                    <input type="password" name="passwordControl" class="form-control" id="passwordControl" onChange={passwordHandler} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div className="row">
                                                <div className="col-6"> <button type="submit" class="btn btn-primary">Sign in</button></div>
                                                <div className="col-6"> <button type="button" class="btn btn-success" onClick={handleRedirect}>Sing up</button></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}
