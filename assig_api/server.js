const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./controllers/routes.js')

const {
    PORT = 3002,
} = process.env

// cors
const approved = [
    'http://localhost:3000',
];
const corsOptions = {
    origin: function (origin, callback) {
        if (approved.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => console.log('listening on', PORT));