
const { User } = require('./app/models');
const { Event } = require('./app/models');
const { Devices } = require('./app/models');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.put('/devices/:id', (req, res) => {
	Devices.update(req.body, {
		where: req.params
	}).then( rec => {
		res.send({updated: rec});
	})
	
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
  	Event.findAll({where: req.params}).then(events => {
		res.send(events);
	});
});


app.listen(3000);