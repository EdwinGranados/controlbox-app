import * as React from 'react'


export function Header({user}) {

    return (
        <div className='row bg-secondary container-fluid' style={{height:80}}>
            {!user && <>user non exist</>}
        </div>
    );
}

