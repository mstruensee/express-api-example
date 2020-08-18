import { pool } from "./connection-pool"

let retryAttempts = 0

export const establishConnection = cb => {
	console.log("Attempting to establish database connection ...")
	new Promise((resolve, reject) => {
		pool
			.getConnection((error, connection) => {
				if (error) reject(error)
				else resolve(connection)
			})
	})
		.then((connection) => {
			cb()
			connection.release()
		})
		.catch(error => {
			console.log("Unable to establish connection, retrying ...")
			const maxRetries = process.env.MYSQL_MAX_RETRIES || 1
			if (retryAttempts >= maxRetries) {
				console.error(`Max attempts reached (${ retryAttempts }), done retrying ... `, error.message)
			} else {
				retryAttempts++
				setTimeout(establishConnection, 2000)
			}
		})
}
