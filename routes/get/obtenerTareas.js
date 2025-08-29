const db = require('../../config/database');
const express = require('express');
const router = express.Router();

// GET /api/tareas
router.get('/tareas', async (req, res) => {
    try {
        const [todaslasTareas] = await db.query('SELECT * FROM tareas');
        res.json(todaslasTareas);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: "Error al obtener tareas" });
    }
});



module.exports = router;