import { healthCheckRouter } from "../health-check/health-check-route"
import { heartbeatRouter } from "../heartbeat/heartbeat-route"
import { userRouter } from "../user/user-router"

export const registerRoutes = ({ app }) => {
	app.use(heartbeatRouter)
	app.use(healthCheckRouter)
	app.use(userRouter)
}