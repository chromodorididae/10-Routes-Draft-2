const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>This is the menu</h1>')
})
//localhost3000/
//displays this information as the root folder
router.get('/:items', (req, res) => {
    // res.send("<h1>These are the most popular items</h1>")
    res.render('Show')
})

// app.get('/breakfast', (req, res) => {
//     res.send(breakfast)
// })
// app.get('/breakfast/:index', (req, res) => {
//     res.send(breakfast[req.params.breakfast])
// })




module.exports = router;