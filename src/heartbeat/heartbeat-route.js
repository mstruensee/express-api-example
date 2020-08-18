import { Router } from "express"
import {
	applicationVersion, //use this until script in place to bump this first then run build
	name as applicationName
} from "../../package"

const router = Router()

router.get("/heartbeat", (req, res) => {
	res
		.send({
			applicationName,
			applicationVersion,
		})
})

export const heartbeatRouter = router