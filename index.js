// importar las bibliotecas
const express = require('express');
const path = require('path');


const app = express(); // create an express application
const PORT = 8080

//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/about-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
});

//Lanzar la app
app.listen(PORT,()=>{
    console.log("servidor en línea");
});