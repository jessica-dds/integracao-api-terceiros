const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// app.get('/', async (req, res) => {
//     res.json(`Olá da api 1. Porta 3000.`);

//     const resultadoAxios = await axios.get('http://localhost:3001/carros'); //listar carros cadastrados na API 2

//     console.log(resultadoAxios);

//     res.json(resultadoAxios.data);
// });


app.get('/', async (req, res) => {


    const novoCarro = {
        modelo: 'Camaro',
        marca: 'Chevrolet'
    }

    const resultadoAxios = await axios.post('http://localhost:3001/carros', novoCarro); //cadastrar novo carro

    res.json(resultadoAxios.data);
});

app.listen(3000);
