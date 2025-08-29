require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS
app.use(cors({
    origin: ['https://elmojondesatan.github.io', 'http://localhost:5500', 'http://127.0.0.1:5500'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para preflight requests
app.options('*', cors());

// Importar rutas CORRECTAMENTE
const obtenerTablas = require('./routes/get/obtenerTablas');
const obtenerTareas = require('./routes/get/obtenerTareas');

// Usar rutas con prefijo /api
app.use('/api', obtenerTablas);
app.use('/api', obtenerTareas);

// Ruta de prueba para verificar CORS
app.get('/api/test-cors', (req, res) => {
    res.json({ message: 'CORS está funcionando!', timestamp: new Date() });
});

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.json({ message: 'API Todo List funcionando', version: '1.0.0' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
});