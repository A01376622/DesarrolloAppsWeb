// importar las bibliotecas
const { Console } = require('console');
const express = require('express');
const path = require('path');
const consoleRoutes = require('./routes/console')


const app = express(); // create an express application
const PORT = 8080

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/console',consoleRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

//Lanzar la app
app.listen(PORT,()=>{
    console.log("servidor en línea");
});