import Express from 'express'

import _ from 'lodash'
import DispesasRouter from './router/routerDispesas'
import DispesasController from './controller/dispesasController'
import cors from 'cors';
import bodyParser from 'body-parser';

import MongoDb from './data/MongoDB'


const port = normalizePort(process.env.PORT || '7000');

const setupApp = async () => {
    const db = await MongoDb.getDb();

    const dispesas = new DispesasController(db);

    const rootRouter = Express.Router();




    rootRouter.use('/despesa', DispesasRouter.configure(dispesas))

    const app = Express();

    app.use(cors());


    app.use([
        bodyParser.json({
            limit: '10mb'
        }),
        bodyParser.urlencoded({
            extended: false
        })
    ]);






    app.use('/', rootRouter);

    var server = app.listen(port);
    console.log('Servidor Express iniciado na porta %s', server.address().port);
}


function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            log.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            log.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


setupApp()