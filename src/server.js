import { app } from "./app"
import { pool } from "./database/connection-pool"
import { establishConnection } from "./database/database"

let server
console.log("Application starting ...")
establishConnection(() => {
	const port = process.env.PORT
	server = app.listen(port, () => console.log(`Application started! -> http://localhost:${ port } ... ༼つಠ益ಠ༽つ ─=≡ΣO)) `))
})

process.on("SIGTERM", () => {
	server.close(() => {
		console.log("Application terminated.")
		pool.end(() => console.log("Connection pool terminated."))
	})
})

