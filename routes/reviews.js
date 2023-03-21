const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>These are all the reviews</h1>')
})
//localhost:3000/reviews shows h1
//displays this information as the root folder


router.get('/:popular', (req, res) => {
    res.render('Index')
})
//localhost:3000/reviews/popular/2 displays above 1
//h1 reads: These are the most popular reviews and their score: 2

module.exports = router;