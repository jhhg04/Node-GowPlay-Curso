import routerx from 'express-promise-router';
import CatController from '../controllers/Categoria';

const app = routerx();

// POST
app.post('/add', CatController.add);

// GET
app.get('/query', CatController.query);
app.get('/list', CatController.list);

// PUT
app.put('/update', CatController.update);
app.put('/activate', CatController.activate);
app.put('/deactivate', CatController.deactivate);

// DELETE
app.delete('/remove', CatController.remove);

export default app;
