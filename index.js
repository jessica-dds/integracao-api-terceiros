const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    //res.json(`Olá da api 1. Porta 3000.`);

    const resultadoAxios = await axios.get('http://localhost:3001/carros');

    console.log(resultadoAxios);

    res.json(resultadoAxios.data);
});

app.listen(3000);
