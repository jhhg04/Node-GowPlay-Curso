import routerx from 'express-promise-router';
import Articulo from './articulo';
import Categoria from './categoria';

const router = routerx();

router.use('/articulo', Articulo);
router.use('/categoria', Categoria);

export default router;
