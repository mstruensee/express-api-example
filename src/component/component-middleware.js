import { ComponentService } from "./component-service"

export const validateComponentCreateRequest = (req, res, next) => {
	if (!ComponentService.isValidComponentCreateRequest(req)) {
		res
			.status(400)
			.send({ message: "Content can not be empty!" })
	} else {
		next()
	}
}

export const validateComponentUpdateRequest = (req, res, next) => {
	if (!ComponentService.isValidComponentUpdateRequest(req)) {
		res
			.status(400)
			.send({ message: "Content can not be empty!" })
	} else {
		next()
	}
}
