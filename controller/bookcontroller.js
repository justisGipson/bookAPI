const router = require('express').Router();
const sequelize = require('../bookdb');
const Books = sequelize.import('../model/books');

router.post('/newBook', (req, res) => {
    if(!req.error){
        const newBook = {
            nameOfBook: req.body.nameOfBook,
            author: req.body.author,
            genre: req.body.genre,
            pubYear: req.body.pubYear,
            rating: req.body.rating
        }
        Books.create(newBook)
            .then(book = res.status(200).json(books))
            .catch(err => res.status(500).json({error: err}))
    }
});

router.get('/', (req, res) => {
    Books.findAll()
        .then(success = (books) => {
            res.status(200).json(books)
        }, failed = () => {
            res.status(500).json({
                message: 'No books'
            })
        })
        .catch(err => res.status(501).json({error: err}))
})

router.put('/update/:id', (req, res) => {
    Books.update({
        nameOfBook: req.body.nameOfBook,
        author: req.body.nameOfBook,
        genre: req.body.genre,
        pubYear: req.body.pubYear,
        rating: req.body.rating
    }, {where: {id: req.params.id}})
    .then(goodUpdate = (book) => {
        res.status(200).json({
            book: book,
            message: 'good update'
        })
    }, badUpdate = (err) => {
        res.status(500).json({
            message: 'bad update'
        })
    })
    .catch(err => res.status(502).json({error: err}))
})

router.delete('/removeBook/:id', (req, res) => {
    Books.destroy({where: {id: req.params.id}})
    .then(goodDelete = (book) => {
        res.status(200).json({
            book: book,
            message: 'book deleted'
        })
    }, badDelete = (err) => {
        res.status(500).json({
            message: 'failed to delete'
        })
    })
    .catch(err => res.status(503).json({error: err}))
})

module.exports = router;