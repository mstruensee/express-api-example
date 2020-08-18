import { Router } from "express"
import {
	withDatabaseConnection,
	withDatabaseRelease,
} from "../database/connection-middleware"

const router = Router()

router.get("/health-check",
	withDatabaseConnection,
	(req, res, next) => {
		res.send({
			database: {
				status: res.locals.error ? 503 : 200,
				message: res.locals.error ? res.locals.error : "OK!",
			}
		})
		next()
	},
	withDatabaseRelease,
)
//https://stackoverflow.com/questions/8389149/how-do-you-mock-mysql-without-an-orm-in-node-js
export const healthCheckRouter = router