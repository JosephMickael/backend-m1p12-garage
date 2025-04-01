const express = require('express')
const mongoose = require('mongoose')
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
const routes = require('./routes/route')

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5001

// Middleware 
app.use(cors(corsOptions));
app.use(express.json())

// Connexion à mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connecté'))
    .catch(err => console.log(err))

app.use('/garage_api', routes)

app.listen(PORT, () => console.log(`Server démarré sur le PORT ${PORT}`))
