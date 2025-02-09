import express from "express";
import booksController from "../controllers/booksController.js";

const routerBook = express.Router();

routerBook.get("/", booksController.getBooks);
routerBook.post("/", booksController.createBook);
routerBook.put("/:id", booksController.updateBook);
routerBook.delete("/:id", booksController.deleteBook);

export default routerBook;
