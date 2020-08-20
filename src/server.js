import { establishConnection } from "./database/database"
import { Logger } from "./logger/logger"

Logger.info("Application starting ...")
establishConnection(() => {
	const { app } = require("./app")
	const port = process.env.PORT
	const server = app.listen(port, () => Logger.info(`Application started! -> http://localhost:${ port } ... ༼つಠ益ಠ༽つ ─=≡ΣO)) `))

	process.on("SIGTERM", () => {
		const pool = require("./database/connection-pool")
		server.close(() => {
			Logger.info("Application terminated.")
			pool.end(() => Logger.info("Connection pool terminated."))
		})
	})
})
