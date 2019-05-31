
const { User } = require('./app/models');
const { Event } = require('./app/models');
const { Devices } = require('./app/models');
const distance = require('./app/distance');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
	User.findOne({where: 
		{email: req.body.email}}).then(user => {
			if (!user) {
		      res.json({
		        success: false,
		        message: 'A autenticação falhou, o usuário não foi encontrado'
		      });
		    }
		    if (user.password !== req.body.password) {
		      	res.json({
		        success: false,
		        message: 'A autenticação falhou, a senha está incorreta'
		      });
		    }  

		   res.json({
		       message: 'Login: Ok',
		    });
	});
});

app.get('/devices', async (req, res) => {
	const devices = await Devices.findAll();
	res.send(devices);
});

app.get('/devices/:id',(req, res) => {
	Devices.findOne({where: {device: req.params.id}}).then(device => {
		res.send(device);
	});
});
    
app.put('/devices/:id', (req, res) => {
	Devices.update(req.body, {
		where: req.params
	}).then( rec => {
		res.send({updated: rec});
	});
});

app.get('/events', async (req, res) => {
	var lat = req.query.lat;
	var long = req.query.long;

	let events = await Event.findAll();

	let filtered = events.filter(event => {
    let latEvento = event.lat;
		let longEvento = event.long;

		let eventDistance = distance(lat, long, latEvento, longEvento);
			
		return eventDistance <= 20000;
	});

	res.send(filtered);
});
app.post('/devices/:id/events', async (req, res) => {
	const event = await Event.create({
		device: req.body.device,
		data: req.body.data,
		lat: req.body.lat,
		long: req.body.long,
		descri: req.body.descri
	});
	res.send(event);
});
app.get('/devices/:id/events', (req, res) => {
	Event.findAll({where: {device: req.params.id}}).then(events => {
		res.send(events);
	});
});
app.listen(3000);