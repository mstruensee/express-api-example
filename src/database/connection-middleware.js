import { pool } from "./connection-pool"

export const withDatabaseConnection = (req, res, next) => {
	pool.getConnection((error, connection) => {
		if (error) {
			res.locals.error = error.message
		} else {
			res.locals.connection = connection
		}
		next()
	})
}

export const withDatabaseRelease = (req, res, next) => {
	res.locals.connection.release()
	delete res.locals.connection
	next()
}