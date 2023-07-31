import * as React from 'react';
import withSession from '../lib/sesion';
import { Header } from '../components/header';
import {BooksService} from '../clientServices/getBooks'


const booksService = BooksService()
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function ResponsiveAppBar({ user }) {
  const [books, setBooks] = React.useState();

  React.useEffect(() => {
    async function getBooks(){
       const data = await booksService.getBooks();
       console.log(data);
    }
    getBooks()
  },[])
  return (
    <div className='bg-dark'>
      <Header user={user}></Header>
      <main>
        {books && books.map((book) => {
          <div>
            {book}
          </div>
        })}
      </main>
    </div>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (user === undefined) {
    return { props: { user: null } };
  }
  return {
    props: { user: req.session.get("user") },
  }
});