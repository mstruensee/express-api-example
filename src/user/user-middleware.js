import { UserService } from "./user-service"

export const validateUserCreateRequest = (req, res, next) => {
	if (!UserService.isValidUserCreateRequest(req)) {
		res
			.status(400)
			.send({ message: "Content can not be empty!" })
	} else {
		next()
	}
}

export const validateUserUpdateRequest = (req, res, next) => {
	if (!UserService.isValidUserUpdateRequest(req)) {
		res
			.status(400)
			.send({ message: "Content can not be empty!" })
	} else {
		next()
	}
}