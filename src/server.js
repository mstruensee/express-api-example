import { app } from "./app"
// import { establishConnection } from "./database/database"

// establishConnection(() => {
	const port = process.env.PORT || 1337
	app.listen(port, () => console.log(`Hadouken is listening on port ${ port } -> http://localhost:${ port } ... ༼つಠ益ಠ༽つ ─=≡ΣO)) `))
// })


