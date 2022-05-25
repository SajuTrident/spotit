const express = require('express');
const app = express();
const port = process.env || 3000;
function keepAlive(){
app.losten(port, () => {
    console.log(`Server is running on port:${port}`);
})
}
app.get('/', (req, res) => {
    res.send('Server is ready');
})

module.export = keepAlive;
