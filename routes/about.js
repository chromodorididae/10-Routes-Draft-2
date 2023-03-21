//job postings go hereconst express = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send('<h1>Currently available positions</h1>')
    res.send('<h1>About</h1>')
})
//localhost:3000/reviews shows h1
//displays this information as the root folder


router.get('/:categories', (req, res) => {
    res.send(`<p> You are in the ${req.params.categories} page.</p>`)
})




//localhost:3000/reviews/popular/2 displays above 1
//h1 reads: These are the most popular reviews and their score: 2

module.exports = router;