import * as React from 'react';
import withSession from '../lib/sesion';
import { Header } from '../components/header';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Resenas({user,idLibro}) {
    console.log(idLibro)
    return (
        <div className='bg-dark'>
            <Header user={user} />
            <div className='container d-flex mt-5'>
                hola mundo {idLibro}
            </div>
        </div>
    )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get("user");
    const idLibro = req.url.split('?idLibro=')[1]
    
    if (user === undefined) {
        return {
            props: {
                user: null,
                idLibro
            }
        };
    }
    return {
        props: {
            user: req.session.get("user"),
            idLibro
        }
    }
});