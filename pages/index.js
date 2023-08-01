import * as React from 'react';
import withSession from '../lib/sesion';
import { Header } from '../components/header';
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
            <div key={book.idLibro} className='col-4 mb-5 d-flex justify-content-center'>
              <div className="card text-bg-secondary">
                <img src={book.portada} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{book.nombre}</h5>
                  <p className="card-text">{book.resumen}</p>
                  <a href="#" className="btn btn-primary">Reseñas</a>
                </div>
              </div>
            </div>
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