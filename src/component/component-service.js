import { ComponentEntity } from "./component-entity"
import { ComponentRepository } from "./component-repository"

export class ComponentService {
	static isValidComponentCreateRequest = req => {
		return Object.keys(req.body).length > 0
	}
	// static isValidComponentUpdateRequest = req => {
	// 	return Object.keys(req.body).length > 0
	// }

	static create = (req, res) => {
		ComponentRepository.create(new ComponentEntity(req.body), (error, data) => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while creating the component." })
			} else {
				res.send(data)
			}
		})
	}

	static findAll = (req, res) => {
		ComponentRepository.findAll((error, data) => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while retrieving components." })
			} else {
				res.send(data)
			}
		})
	}

	static findOne = (req, res) => {
		ComponentRepository.findOne(req.params.packageName, req.params.version, (error, data) => {
			if (error) {
				if (error.kind === "not_found") {
					res.status(404).send({ message: `Not found Component with packageName ${ req.params.packageName } and version ${ req.params.version }.` })
				} else {
					res.status(500).send({ message: `Error retrieving Component with packageName ${ req.params.packageName } and version ${ req.params.version }.` })
				}
			} else {
				res.send(data)
			}
		})
	}

	// static update = (req, res) => {
	// 	ComponentRepository.update(req.params.id, new ComponentRepository(req.body), (error, data) => {
	// 			if (error) {
	// 				if (error.kind === "not_found") {
	// 					res.status(404).send({ message: `Not found Component with id ${ req.params.id }.` })
	// 				} else {
	// 					res.status(500).send({ message: `Error updating Component with id ${ req.params.id }.` })
	// 				}
	// 			} else {
	// 				res.send(data)
	// 			}
	// 		}
	// 	)
	// }

	static delete = (req, res) => {
		ComponentRepository.remove(req.params.packageName, req.params.version, error => {
			if (error) {
				if (error.kind === "not_found") {
					res.status(404).send({ message: `Not found Component with packageName ${ req.params.packageName } and version ${ req.params.version }.` })
				} else {
					res.status(500).send({ message: `Could not delete Component packageName ${ req.params.packageName } and version ${ req.params.version }.` })
				}
			} else {
				res.send({ message: `Component was deleted successfully!` })
			}
		})
	}

	static deleteAll = (req, res) => {
		ComponentRepository.removeAll(error => {
			if (error) {
				res.status(500).send({ message: error.message || "Some error occurred while removing all Components." })
			} else {
				res.send({ message: `All Components were deleted successfully!` })
			}
		})
	}
}
