const express = require('express')
const app = express()
const port = process.env.PORT || 3000



   //this line tells express to serve js or css files from frontend folder

   
app.get('/', (req, res) => res.sendFile(__dirname+'/src/app/nav/nav.component.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))