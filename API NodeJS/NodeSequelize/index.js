
const { User } = require('./app/models');
const { Cars } = require('./app/models')
const { Location } = require('./app/models');
const express = require('express');
const bodyParser = require('body-parser');
//User.create({ name: 'Bruno', email: 'brunojesus@gmail.com.br', password: '123456' });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/find/:id', (req, res) => {
  res.json('Im in register');
});

app.get('/users', async (req, res) => {
	const users = await User.findAll();
  	res.json(users);
});

app.put('/update/:id', (req, res) => {
  res.json('Im in update');
});

app.delete('/delete/:id', (req, res) => {
  res.json('Im in delete');
});

app.listen(3000);