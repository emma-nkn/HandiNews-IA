import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "emma",
  host: "localhost",
  database: "handinews_db",
  password: "securepass123",
  port: 5432,
});

export default pool;
