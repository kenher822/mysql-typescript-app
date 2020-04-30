export const ROOT_URL = `http://localhost:3000`;
export const isDev: boolean = true;
export const SECRET_KEY = `CRI$KEN2020`;

// Database settings
export const DB_HOST = "localhost";
export const DB_USER = "root";
export const DB_PASS = "";
export const DB_NAME = "node_mysql_ts";
export const CNN_LIMIT = 10;
export const CNN_TIMEOUT = 50000;
export const connParameters = {
  connectionLimit: CNN_LIMIT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  connectTimeout: CNN_TIMEOUT,
};
