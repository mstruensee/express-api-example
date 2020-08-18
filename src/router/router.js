import { healthCheckRouter } from "../health-check/health-check-route"
import { heartbeatRouter } from "../heartbeat/heartbeat-route"

export const registerRoutes = ({ app }) => {
	app.use(heartbeatRouter)
	app.use(healthCheckRouter)
}