import databaseBooksService from "../../services/databaseBooksService";
import withSession from "../../lib/sesion";
import DataJson from '../../services/books.json'



const DBBooksService = databaseBooksService();
export default withSession(async (req, res) => {
    const method = req.method.toLowerCase();

    const DataBooksToInsert = []
    if (method !== 'get') {
        return res.status(405).end(`Method ${req.method} no autorizado`)
    }
    try {
        const book = await DBBooksService.getBook()
        if (book === null) {
            console.log("generando insert ")
            DataJson.Data.map((book) => {
                const { title, thumbnail, content_short } = book;
                DataBooksToInsert.push({
                    nombre: title,
                    resumen: content_short,
                    portada: thumbnail,
                })

            });
            const libros = await DBBooksService.setBooks(DataBooksToInsert);
            if(libros.count > 0){
                const books = await DBBooksService.getBooks();
                res.status(200).json({books});
            }
        }else{
            const books = await DBBooksService.getBooks();
            res.status(200).json({books});
        }
    } catch (error) {
        console.log(error)
    }
})