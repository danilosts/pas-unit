import express from 'express'



class DispesasRouter {

    static configure(dispesasController) {
        const router = express.Router();

        router.get('/despesaFixa', dispesasController.allDispesas.fn);

        router.get('/faturamento', dispesasController.getOrderByFatutamento.fn);

        router.post('/faturamento', dispesasController.novoFaturamento.fn)

        router.post('/despesaFixa', dispesasController.novaDespesaFixa.fn)
        router.delete('/despesaFixa/:id', dispesasController.deleteDespesaFixa.fn)

        return router
    }
}

export default DispesasRouter