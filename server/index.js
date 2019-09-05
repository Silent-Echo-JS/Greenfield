const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());

const server = app.listen(3030);
server.on('listening', () => console.log('Feathers app started'));