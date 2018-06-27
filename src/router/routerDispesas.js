import express from 'express'



class DispesasRouter {

    static configure(dispesasController) {
        const router = express.Router();

        router.get('/', dispesasController.allDispesas.fn);

        router.get('/faturamento', dispesasController.getOrderByFatutamento.fn);

        return router
    }
}

export default DispesasRouter