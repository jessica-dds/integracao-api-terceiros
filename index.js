const express = require('express');
const axios = require('axios');

const app = express();

// organizar depois em um arquivo de config. do axios
const instaciaAxios = axios.create({
    baseURL: 'http://localhost:3001',
});

app.use(express.json());

// app.get('/', async (req, res) => {
//     res.json(`Olá da api 1. Porta 3000.`);

//     const resultadoAxios = await instaciaAxios.get('http://localhost:3001/carros'); //listar carros cadastrados na API 2

//     console.log(resultadoAxios);

//     res.json(resultadoAxios.data);
// });


app.get('/', async (req, res) => {


    const novoCarro = {
        modelo: 'Celta',
        marca: 'Chevrolet'
    }

    const resultadoAxios = await instaciaAxios.post('/carros', novoCarro); //cadastrar novo carro

    res.json(resultadoAxios.data);
});

app.listen(3000);
