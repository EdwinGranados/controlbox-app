import * as Recat from 'react';
import { useRouter } from 'next/navigation';

export function HeaderLoginandregister() {

    const Router = useRouter()

    const Redirect = ((e)=>{
        Router.push('/')
    })
    return (
        <>
            <nav className="navbar bg-body-tertiary border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{cursor:'pointer'}} onClick={Redirect}>ControlBox</span>
                </div>
            </nav>
        </>
    );
}
