import pool from "./connection.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
  try {
    const sql = fs.readFileSync(
      path.join(__dirname, "queries/createTable.sql"),
      "utf8",
    );

    await pool.query(sql);
    console.log("Tables créées !");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

init();
