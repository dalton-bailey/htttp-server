const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 5000

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})