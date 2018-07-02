import express from 'express'

import DespesasCommand from '../command/DespesasCommand'

class DispesasController {

    constructor(db) {
        this.db = db
    }


    get getNotaFiscal() {
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

                    const result = await despesaCommand.getNotaFiscal();
                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }


    get novaNotaFiscal() {
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

                    const {  IcmsDestino, IcmsOrigem, Ipi, descRecebidos, frete, numeroNF, outrasDespesas, seguroMercadoria, totalNotaFiscal } =req.body

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.novaNotaFiscal(IcmsDestino, IcmsOrigem, Ipi, descRecebidos, frete, numeroNF, outrasDespesas, seguroMercadoria, totalNotaFiscal );

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }


  
    get deleteDespesaVariavel() {
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

                    const { id } = req.params

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.deleteDespesaVariavel(id);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get novaDespesaVariavel() {
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

                    const { ano, mes, comissao, cartao, descConceder, outrosCustos } = req.body

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.novaDespesaVariavel( ano, mes, comissao, cartao, descConceder, outrosCustos);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get getAllDespesaVariaveis() {
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

                    const result = await despesaCommand.getAllDespesaVariaveis();
                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
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

    get novoFaturamento() {
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

                    const { ano, mes, valor } = req.body

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.createFaturamento(ano, mes, valor);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get novaDespesaFixa() {
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

                    const {
                        mes,
                        ano,
                        salarios,
                        multas,
                        aguaLuz,
                        honorarios,
                        manutVeicular,
                        matConsumo,
                        seguros,
                        marketing,
                        outros } = req.body

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.createDespesaFixa(mes, ano, salarios, multas, aguaLuz, honorarios, manutVeicular,
                        matConsumo, seguros, marketing, outros);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get deleteDespesaFixa() {
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

                    const { id } = req.params

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.deleteDespesaFixa(id);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }

    get deleteFaturamentoById() {
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

                    const { id } = req.params

                    const despesaCommand = new DespesasCommand(this.db);

                    const result = await despesaCommand.deleteFaturamentoById(id);

                    resp.send(result)

                } catch (ex) {
                    console.log(ex)
                }
            }
        }
    }




}

export default DispesasController