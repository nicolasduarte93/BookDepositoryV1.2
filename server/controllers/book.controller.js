const Book = require("../models/book");

const bookCtrl = {};

bookCtrl.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
}

bookCtrl.createBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    console.log(book);
    res.json({
        'status': 'Book saved!'
    });
}

bookCtrl.deleteBook = async (req, res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Book removed!'
    });
}

bookCtrl.getBook = async (req, res) => {
    console.log(req.params);
    const book = await Book.findById(req.params.id);
    res.json(book);
}

bookCtrl.updateBook = async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };
    await Book.findByIdAndUpdate(req.params.id, {$set: book}, {new: true});
    res.json({
        "status": "Book updated!"
    });
}

module.exports = bookCtrl;