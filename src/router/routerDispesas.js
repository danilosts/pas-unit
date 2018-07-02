import express from 'express'



class DispesasRouter {

    static configure(dispesasController) {
        const router = express.Router();

        router.get('/despesaFixa', dispesasController.allDispesas.fn);

        router.get('/faturamento', dispesasController.getOrderByFatutamento.fn);

        router.post('/faturamento', dispesasController.novoFaturamento.fn)

        router.post('/despesaFixa', dispesasController.novaDespesaFixa.fn)

        router.delete('/despesaFixa/:id', dispesasController.deleteDespesaFixa.fn)

        router.delete('/despesaVariavel/:id', dispesasController.deleteDespesaVariavel.fn)

        router.delete('/faturamento/:id', dispesasController.deleteFaturamentoById.fn)

        router.get('/despesaVariavel/', dispesasController.getAllDespesaVariaveis.fn)

        router.post('/despesaVariavel/', dispesasController.novaDespesaVariavel.fn)

        router.post('/novaNotaFiscal/', dispesasController.novaNotaFiscal.fn)
       
        router.get('/novaNotaFiscal/', dispesasController.getNotaFiscal.fn)



        return router
    }
}

export default DispesasRouter