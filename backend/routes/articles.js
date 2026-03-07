import express from "express";
import pool from "../base_donnee/connection.js";

const router = express.Router();

// Récupérer tous les articles
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM articles ORDER BY created_at DESC",
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
