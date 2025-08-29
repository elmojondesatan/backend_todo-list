const db = require('../../config/database');
const express = require('express');
const router = express.Router();

// GET /api/tablas
router.get('/tablas', async (req, res) => {
    try {
        const [resultadoTablas] = await db.query('SHOW TABLES');
        res.json(resultadoTablas);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: "Error al obtener tablas" });
    }
});

module.exports = router;    