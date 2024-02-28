const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); 

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
 
  const response = `Welcome, ${name.toUpperCase()}!`;
  res.json({ message: response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
