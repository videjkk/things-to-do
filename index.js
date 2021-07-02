import express from 'express';


const app = express();
const PORT = 4000;



app.get('/', function(_req, res) {
    res.send(json);
  });

app.listen(PORT, () => console.log('server is running on port' + PORT))