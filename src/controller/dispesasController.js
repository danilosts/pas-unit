import express from 'express'

import DespesasCommand from '../command/DespesasCommand'

class DispesasController {

    constructor(db) {
        this.db = db
    }

    get allDispesas() {
        return {
            auth: {
                roles: [],
                config: {}
            },
            schema: {
                // body: {
                //     value: Joi.string().required(),
                // }
            },
            fn: async (req, resp) => {
                try {

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.getAllDespesa();
                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get getOrderByFatutamento() {
        return {
            auth: {
                roles: [],
                config: {}
            },
            schema: {
                // body: {
                //     value: Joi.string().required(),
                // }
            },
            fn: async (req, resp) => {
                try {

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.getOrderByFaturamento();
                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }



}

export default DispesasController