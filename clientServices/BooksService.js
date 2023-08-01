import axios from "axios";

const URIBooks = 'https://www.etnassoft.com/api/v1/get/?num_items=10'

export function BooksService(){
    function getBooks(){
        return axios.get('/api/books')
    }
    return{getBooks}
}