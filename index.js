require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración más específica de CORS
app.use(cors({
    origin: ['https://elmojondesatan.github.io', 'http://localhost:5500', 'http://127.0.0.1:5500'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para preflight requests
app.options('*', cors());

// Middlewares adicionales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const getTablas = require('./routes/get/obtenerTablas');
const getTareas = require('./routes/get/obtenerTareas');

app.use('/api', getTablas);
app.use('/api', getTareas);

// Ruta de prueba para verificar CORS
app.get('/api/test-cors', (req, res) => {
    res.json({ message: 'CORS está funcionando!', timestamp: new Date() });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});