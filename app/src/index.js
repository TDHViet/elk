const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (_, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

app.get('/error', (_, res) => {
    res.status(400).json({
        error: 'Bad Request'
    })
})

app.get('/error/server', (_, res) => {
    res.status(500).json({
        error: 'Internal Server Error'
    })
})

app.listen(port, () => {
    console.log('App is running at 3000')
})