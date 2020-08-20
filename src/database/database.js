import { Logger } from "../logger/logger"
import { pool } from "./connection-pool"

let retryAttempts = 0

export const establishConnection = cb => {
	Logger.info("Attempting to establish database connection ...")
	new Promise((resolve, reject) => {
		pool
			.getConnection((error, connection) => {
				if (error) reject(error)
				else resolve(connection)
			})
	})
		.then((connection) => {
			connection.release()
			cb()
		})
		.catch(error => {
			Logger.warn("Unable to establish connection, retrying ...", error.message)
			const maxRetries = process.env.MYSQL_MAX_RETRIES
			if (retryAttempts >= maxRetries) {
				Logger.error(`Max attempts reached (${ retryAttempts }), done retrying ...`)
			} else {
				retryAttempts++
				setTimeout(() => establishConnection(cb), 2000)
			}
		})
}
