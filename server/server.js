import express from 'express';
import path from 'path';

const app = express();

//if production mode is running for deployment, serve build folder
if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.resolve(__dirname, '../build')));
}

//global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({error: err})
})

//start server on port 3000
app.listen(3000, () => console.log('Server Listening on Port 3000'))