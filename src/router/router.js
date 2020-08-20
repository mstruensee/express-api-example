import { healthCheckRouter } from "../health-check/health-check-route"
import { heartbeatRouter } from "../heartbeat/heartbeat-route"
import { Logger } from "../logger/logger"
import { userRouter } from "../user/user-router"

export const registerRoutes = ({ app }) => {
	app.use(heartbeatRouter)
	app.use(healthCheckRouter)
	app.use(userRouter)
}

export const logRegisteredRoutes = ({ app }) => {
	app._router.stack.forEach(middleware => {
		if (middleware.route) {
			Logger.info(`Registered route: [${ Object.keys(route.methods).map(key => key.toUpperCase()).join() }] - "${ middleware.route.path }"`)
		} else if (middleware.name === "router") {
			middleware.handle.stack.forEach(handler => {
				const route = handler.route
				route && Logger.info(`Registered route: [${ Object.keys(route.methods).map(key => key.toUpperCase()).join() }] - "${ route.path }"`)
			})
		}
	})
}