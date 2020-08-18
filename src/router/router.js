import { heartbeatRouter } from "../heartbeat/heartbeat-controller"

export const registerRoutes = ({ app }) => {
	app.use(heartbeatRouter)
}