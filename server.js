const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded())
app.use('/guess_the_flag', express.static('public'))
app.listen(8004)

app.get('/guess_the_flag', (req, res) => {
    res.render('index')
})