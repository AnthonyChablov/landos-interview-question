import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

interface Log {
  id?: number;
  question: string;
  fullResponse: string;
  secondSentence: string;
  ipAddress: string;
  location: string;
  createdAt?: Date;
}

export const LogModel = {
  async create(log: Log): Promise<void> {
    const query = `
      INSERT INTO logs (question, full_response, second_sentence, ip_address, location)
      VALUES ($1, $2, $3, $4, $5)
    `;
    const values = [
      log.question,
      log.fullResponse,
      log.secondSentence,
      log.ipAddress,
      log.location,
    ];
    await pool.query(query, values);
  },

  async getAll(): Promise<Log[]> {
    const query = `SELECT * FROM logs ORDER BY created_at DESC`;
    const result = await pool.query(query);
    return result.rows;
  },
};
