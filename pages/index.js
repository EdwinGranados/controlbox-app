import * as React from 'react';
import withSession from '../lib/sesion';
import { Header } from '../components/header';
import { Card } from '../components/Cards';
import { BooksService } from '../clientServices/BooksService'


const booksService = BooksService();

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Home({ user }) {

  const [books, setBooks] = React.useState([])
  React.useEffect(() => {
    async function getBooks() {
      const data = await booksService.getBooks();
      setBooks(data.data.books);
    }
    getBooks()
  }, [])

  React.useEffect(() => {
    console.log(books);
  })


  return (
    <div className='bg-dark'>
      <Header user={user}></Header>
      <div className='container'>
        <div className='row mt-5'>
          {books.map((book) =>
          (
            <Card book={book} key={book.idLibro}/>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (user === undefined) {
    return { props: { user: null } };
  }
  return { props: { user: req.session.get("user") } }
});