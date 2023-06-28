const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello world <br />");
    res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
