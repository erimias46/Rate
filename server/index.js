const express = require('express')
const app = express()

app.listen(3001, (req, res) => {
    console.log("connected at 3001")
})