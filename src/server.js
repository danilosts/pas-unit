import Express from 'express'

import _ from 'lodash'
import DispesasRouter from './router/routerDispesas'
import DispesasController from './controller/dispesasController'
import cors from 'cors';
import bodyParser from 'body-parser';

import MongoDb from './data/MongoDB'



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

    var server = app.listen(3003);
    console.log('Servidor Express iniciado na porta %s', server.address().port);
}



setupApp()