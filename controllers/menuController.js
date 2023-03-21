// const menu = require('../models/menu')

// // The callback functions originally the second argument from -> app.get('/', () => {})
// function index(req, res) {
//     // Looks in the views folder for "menu/Index" and passes { menu } data to the view (kind of like a server props object)
//     res.render('menu/Index', { menu })
// }

// // Those anonymous callback functions now have names: "index" and "show"
// function show(req, res) {
//     res.render('menu/Show', { fruit: menu[req.params.index] })
// }

// module.exports = { index, show }

// // 14:38 13032023