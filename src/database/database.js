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
			connection.release()
			cb()
		})
		.catch(error => {
			console.log("Unable to establish connection, retrying ...", error.message)
			const maxRetries = process.env.MYSQL_MAX_RETRIES
			if (retryAttempts >= maxRetries) {
				console.error(`Max attempts reached (${ retryAttempts }), done retrying ...`)
			} else {
				retryAttempts++
				setTimeout(() => establishConnection(cb), 2000)
			}
		})
}
