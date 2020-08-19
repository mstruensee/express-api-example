import { UserModel } from "./user-model"

export class UserService {
	static isValidUserCreateRequest = req => {
		return Object.keys(req.body).length > 0
	}
	static isValidUserUpdateRequest = req => {
		return Object.keys(req.body).length > 0
	}

	static create = (req, res) => {
		UserModel.create(new UserModel(req.body), (error, data) => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while creating the User." })
			} else {
				res.send(data)
			}
		})
	}

	static findAll = (req, res) => {
		UserModel.findAll((error, data) => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while retrieving users." })
			} else {
				res.send(data)
			}
		})
	}

	static findOne = (req, res) => {
		UserModel.findOne(req.params.id, (error, data) => {
			if (error) {
				if (error.kind === "not_found") {
					res.status(404).send({ message: `Not found User with id ${ req.params.id }.` })
				} else {
					res.status(500).send({ message: `Error retrieving User with id ${ req.params.id }.` })
				}
			} else {
				res.send(data)
			}
		})
	}

	static update = (req, res) => {
		UserModel.update(req.params.id, new UserModel(req.body), (error, data) => {
				if (error) {
					if (error.kind === "not_found") {
						res.status(404).send({ message: `Not found User with id ${ req.params.id }.` })
					} else {
						res.status(500).send({ message: `Error updating User with id ${ req.params.id }.` })
					}
				} else {
					res.send(data)
				}
			}
		)
	}

	static delete = (req, res) => {
		UserModel.remove(req.params.id, error => {
			if (error) {
				if (error.kind === "not_found") {
					res.status(404).send({ message: `Not found User with id ${ req.params.id }.` })
				} else {
					res.status(500).send({ message: "Could not delete User with id " + req.params.id })
				}
			} else {
				res.send({ message: `User was deleted successfully!` })
			}
		})
	}

	static deleteAll = (req, res) => {
		UserModel.removeAll(error => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while removing all users." })
			} else {
				res.send({ message: `All Users were deleted successfully!` })
			}
		})
	}
}