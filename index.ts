import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
const app = express () ;

AppDataSource.initialize()
    .then(() => { 

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});