import booksSchema from "../models/books.js";

class BooksController {
    async getBooks(req, res) {
        try {
            const books = await booksSchema.find();
            if (!books.length) {
                return res.status(404).json({ message: "No books found" });
            }
            res.status(200).json(books);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    async createBook(req, res) {
        try {
            const { title, author, year, genre } = req.body;
            if (!title || !author) {
                return res.status(400).json({ message: "Title and author are required" });
            }
            const newBook = await booksSchema.create({ title, author, year, genre });
            res.status(201).json(newBook);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Failed to create book" });
        }
    }

    async updateBook(req, res) {
        try {
            const { id } = req.params;
            const { title, author, year, genre } = req.body;

            if (!title || !author) {
                return res.status(400).json({ message: "Title and author are required" });
            }

            const updatedBook = await booksSchema.findByIdAndUpdate(
                id,
                { title, author, year, genre },
                { new: true, runValidators: true }
            );

            if (!updatedBook) {
                return res.status(404).json({ message: "Book not found" });
            }

            res.status(200).json(updatedBook);
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Failed to update book" });
        }
    }

    async deleteBook(req, res) {
        try {
            const { id } = req.params;
            const deletedBook = await booksSchema.findByIdAndDelete(id);

            if (!deletedBook) {
                return res.status(404).json({ message: "Book not found" });
            }

            res.status(200).json({ message: "Book deleted successfully" });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Failed to delete book" });
        }
    }
}

export default new BooksController();
