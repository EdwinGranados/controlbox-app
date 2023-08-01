import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export default function databaseBooksService() {
    const getBook = async () => {
        const book = await Prisma.libro.findFirst()

        if (!book) {
            return null
        }
        return book
    };

    const setBooks = async (data) => {
        const LibrosCreados = await Prisma.libro.createMany({
            data
        })

        if (!LibrosCreados) {
            console.log(LibrosCreados)
            throw new Error('fallo la insercion de libros')
            return null;
        }
        return LibrosCreados;
    }

    const getBooks = async () => {
        const books = await Prisma.libro.findMany()
        if (!books){
            throw new Error("no hay libros");
        }
        return books;
    }

    return { getBook, setBooks, getBooks };
}