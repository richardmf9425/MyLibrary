/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');


// All Book route
router.get('/', async (req, res) => {
    res.send('All books');
});


// New Book route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({});
        const book = new Book();
        res.render('books/new', {
            authors,
            book
        })
    } catch {
        res.redirect('/books');

    }
});


// Create Book route
router.post('/', async (req, res) => {
    res.send('Create book');
});

module.exports = router;