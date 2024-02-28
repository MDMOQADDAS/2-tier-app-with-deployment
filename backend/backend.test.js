const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
 
  const response = `Welcome, ${name.toUpperCase()}!`;
  res.json({ message: response });
});

describe('POST /', () => {
  it('responds with JSON and welcome message', async () => {
    const response = await request(app)
      .post('/')
      .send({ name: 'John' });
      
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Welcome, JOHN!' });
  });

  it('responds with 400 and error message if name is missing', async () => {
    const response = await request(app)
      .post('/')
      .send({});
      
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Name is required' });
  });
});
