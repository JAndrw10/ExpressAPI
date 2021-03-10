const express = require ('express');
const cors = request('cors');

let app = express();

// same as body parser but not just built in express
app.use(cors());
app.use(express.json());



app.listen(3000);