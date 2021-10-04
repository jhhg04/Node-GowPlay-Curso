import routerx from 'express-promise-router';

const app = routerx();

// POST
app.get('/add');

// GET
app.get('/query');
app.get('/queryCodigo');
app.get('/list');

// PUT
app.put('/update');
app.put('/activate');
app.put('/deactivate');

// DELETE
app.delete('/remove');

export default app;
