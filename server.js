const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded())
app.use('/guess_the_flag', express.static('public'))
app.use('/guess_the_flag/global', express.static('public'))
app.use('/guess_the_flag/europe', express.static('public'))
app.use('/guess_the_flag/asia', express.static('public'))
app.use('/guess_the_flag/africa', express.static('public'))
app.listen(8004)

app.get('/guess_the_flag', (req, res) => {
    res.render('index',)
})

app.get('/guess_the_flag/global', (req, res) => {
    res.render('boards/global.ejs')
})

app.get('/guess_the_flag/europe', (req, res) => {
    res.render('boards/europe.ejs')
})

app.get('/guess_the_flag/asia', (req, res) => {
    res.render('boards/asia.ejs')
})

app.get('/guess_the_flag/africa', (req, res) => {
    res.render('boards/africa.ejs')
})