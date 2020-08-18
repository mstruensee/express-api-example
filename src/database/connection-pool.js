import mysql from "mysql"

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
	console.log(`${ connection.config.host } - connection ${ connection.threadId } acquired!`)
})
pool.on("connection", connection => {
	connection.query("SET SESSION auto_increment_increment=1")
})
pool.on("enqueue", () => {
	console.log("Waiting for available connection slot")
})
pool.on("release", connection => {
	console.log(`${ connection.config.host } - connection ${ connection.threadId } released.`)
})

// TODO do this on app.exit event
// pool.end(function (err) {
// 	// all connections in the pool have ended
// });

export {
	pool
}