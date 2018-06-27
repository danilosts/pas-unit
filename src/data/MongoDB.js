// @flow

import { Db, MongoClient } from 'mongodb';

let dbInstance;

dbInstance = undefined;

class MongoDb {
    async connect() {
        console.log('conectando ao MongoDb...');
        const mongodbUrl = 'mongodb://qdroot:celestino10@ds261450.mlab.com:61450/dbpas';
        console.log('MONGODB_URL: ' + mongodbUrl);

        const mongoClient = await MongoClient.connect(mongodbUrl, {
            reconnectInterval: 2000,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE
        });


        const Db = mongoClient.db('dbpas')




        Db.on('error', (error) => {
            log.error(error);
        });

        return Db;
    }

    static async getDb() {
        if (dbInstance) {
            return dbInstance;
        } else {
            const db = await new MongoDb().connect();
            dbInstance = db;
            return db;
        }
    }
}


export const collections = {
    despFixas: 'despfixas',
    despVariavel: 'despVariavel',
    faturamentos: 'faturamentos',
    notasFiscals: 'notasFiscals'
};

export default MongoDb;