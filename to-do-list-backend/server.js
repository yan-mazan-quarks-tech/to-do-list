// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/message', (req, res) => {
    const message = 'Hello Geek. This Message is From Server';
    res.json({ message });
});
 
// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
