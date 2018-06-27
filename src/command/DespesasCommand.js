import {
    Db,
    Collection,
    ObjectId
} from 'mongodb';

import { collections } from '../data/MongoDB'

class DespesasCommand {
    constructor(db) {
        this.db = db;
        this.despFixDb = db.collection(collections.despFixas);
        this.despVarDb = db.collection(collections.despVariavel);
        this.fatuDb = db.collection(collections.faturamentos);

    }


    async  getAllDespesa() {
        try {

            const despesas = await this.despFixDb.find({}).toArray()

            return despesas



        } catch (ex) {
            console.log(ex)
        }
    }


    async   getOrderByFaturamento() {
        try {
            const faturamento = await this.fatuDb.find({}).sort({ ano: -1, mes: -1 }).limit(12).toArray();

            return faturamento;

        } catch (ex) {
            console.log(ex)
        }
    }





}

export default DespesasCommand