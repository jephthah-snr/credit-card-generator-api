const express = require('express');
const app = express();
const route = require('./routes/routes')
const connectDb = require('./mongodb/mongo')


port = process.env.PORT || 8000


app.use('/api/v1', route)

app.use(express.json());

app.listen(port, ()=>{
    setTimeout(() => {
        console.log(`you server is running on http://localhost:${port}`)
    }, 2000)
    console.log('connecting to server...')
})