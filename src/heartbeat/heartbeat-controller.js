import { Router } from "express"
import {
	applicationVersion,
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