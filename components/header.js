import * as React from 'react'
import { useRouter } from 'next/navigation';

export function Header({ user }) {

    const router = useRouter();
    const LogInHandler = ((e) => {
        router.push('/login')
    })

    const SingUpHandler = ((e) => {
        router.push('/register')
    })
    const LogOut = ((e) => {
        router.push('/api/logout')
    })

    return (<>
        <nav className="navbar bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
            {!user && <div className="container-fluid justify-content-end">
                <button className="btn btn-outline-success me-2" type="button" onClick={LogInHandler}>LogIn</button>
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={SingUpHandler}>SingUp</button>
            </div>}
            {user !== null && <div className="container-fluid justify-content-end">
                <button className="btn btn-outline-warn me-2" type="button" onClick={LogOut}>LogOut</button>
            </div>}
        </nav>
    </>
    );
}

