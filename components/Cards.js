import * as React from 'react'
import { useRouter } from 'next/navigation'

export function Card({ book }) {
    const Router = useRouter();

    return (
        <>
            <div className='col-4 mb-5 d-flex justify-content-center'>
                <div className="card text-bg-secondary">
                    <img src={book.portada} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{book.nombre}</h5>
                        <p className="card-text">{book.resumen}</p>
                        <button className="btn btn-primary" onClick={()=>{Router.push(`/resenas/?idLibro=${book.idLibro}`)}}>ver mas...</button>
                    </div>
                </div>
            </div>
        </>

    )
}