import mysql from "mysql"
import { Logger } from "../logger/logger"

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
	waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS === "true",
	queueLimit: process.env.MYSQL_QUEUE_LIMIT,
	acquireTimeout: process.env.MYSQL_ACQUIRE_TIMEOUT,
	timeout: process.env.MYSQL_TIMEOUT,
	debug: process.env.MYSQL_DEBUG === "true",
})

pool.on("acquire", connection => {
	Logger.info(`${ connection.config.host } - connection ${ connection.threadId } acquired from connection pool`)
})
pool.on("connection", connection => {
	Logger.info(`${ connection.config.host } - new connection initialized to the connection pool`)
})
pool.on("enqueue", () => {
	Logger.info("Waiting for available connection from connection pool")
})
pool.on("release", connection => {
	Logger.info(`${ connection.config.host } - connection ${ connection.threadId } released from connection pool`)
})

export { pool }
