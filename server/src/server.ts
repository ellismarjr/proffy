import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  response.json({message: 'Acessou a rota'})
})

app.listen(3333);