const db = require('../../config/database')
const express = require('express')
const router = express.Router();

// Ruta para obtener tablas
router.get('/tablas', async(req,res)=>{
    try {
        let [resultadoTablas] = await db.query('SHOW TABLES');
        res.json(resultadoTablas);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: 'Error al obtener tablas' });
    }
});

// Ruta para agregar tarea
router.post('/agregarTarea', async(req,res)=>{
    try {
        // Aquí deberías implementar la lógica para agregar tareas
        const { titulo, descripcion } = req.body;
        // Ejemplo: await db.query('INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)', [titulo, descripcion]);
        res.json({ message: 'Tarea agregada correctamente' });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: 'Error al agregar tarea' });
    }
});

module.exports = router;