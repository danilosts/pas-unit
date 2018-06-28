import {
    Db,
    Collection,
    ObjectId
} from 'mongodb';

import { collections } from '../data/MongoDB'
import { WSAEINVALIDPROCTABLE } from 'constants';

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

    async createFaturamento(ano, mes, valor) {
        try {
            const anoAndMes = await this.fatuDb.findOne({ mes: mes, ano: ano })

            if (anoAndMes) return "Já existe mês e ano cadastrado"

            const obj = {
                ano: ano,
                mes: mes,
                valor: valor
            }

            const insert = await this.fatuDb.insertOne(obj)

            if (insert.result.ok) {
                return obj
            } else {
                return "Erro ao inserir registro";
            }

        } catch (ex) {
            console.log(ex)
        }

    }

    async createDespesaFixa(mes, ano, salarios, multas, aguaLuz, honorarios, manutVeicular,
        matConsumo, seguros, marketing, outros) {
        try {
            const anoAndMes = await this.despFixDb.findOne({ mes: mes, ano: ano })

            if (anoAndMes) return { r: false, description: "Já existe mês e ano cadastrado" }

            const obj = {
                mes: mes, ano: ano, salarios: salarios, multas: multas, aguaLuz: aguaLuz, honorarios: honorarios, manutVeicular: manutVeicular,
                matConsumo: matConsumo, seguros: seguros, marketing: marketing, outros: outros
            }

            const insert = await this.despFixDb.insertOne(obj)

            if (insert.result.ok) {
                return obj
            } else {
                return "Erro ao inserir registro";
            }

        } catch (ex) {
            console.log(ex)
        }

    }

    async deleteDespesaFixa(id) {
        try {

            const despesa = await this.despFixDb.findOne({ _id: new ObjectId(id) })

            if (despesa === null) return { r: false, description: "Não existe despesas com esse id" }

            const deleteDespFixa = await this.despFixDb.remove({ _id: new ObjectId(id) })

            if (deleteDespFixa.result.ok) {
                return { r: true, description: "Excluido com sucesso" }
            }

        } catch (ex) {
            console.log(ex)
        }
    }

    async deleteFaturamentoById(id) {
        try {
            const despesa = await this.fatuDb.findOne({ _id: new ObjectId(id) })

            if (despesa === null) return { r: false, description: "Não existe despesas com esse id" }

            const deleteDespFixa = await this.fatuDb.remove({ _id: new ObjectId(id) })

            if (deleteDespFixa.result.ok) {
                return { r: true, description: "Excluido com sucesso" }
            }

        } catch (ex) {
            console.log(ex)
        }
    }



}

export default DespesasCommand