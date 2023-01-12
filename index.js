const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./db/database');
const PORT = 3001;

// api routes
const userRoute = require('./routes/user.route');
const thoughtRoute = require('./routes/thought.route');


// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log(`Database connection failed :  ${error}`)
    }
)

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', userRoute);
app.use('/api', thoughtRoute);

app.use((req, res, next) => {
    next(res.json({error: `Route not found`}));
});

// handle error
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


app.listen(PORT,  () => {
    console.log(`Server is started and running on PORT ${PORT}`);
})