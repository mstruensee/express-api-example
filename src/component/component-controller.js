import { ComponentService } from "./component-service"

export class GvpComponentController {
	static create = (req, res) => {
		ComponentService.create(req, res)
	}
	static findAll = (req, res) => {
		ComponentService.findAll(req, res)
	}
	static findOne = (req, res) => {
		ComponentService.findOne(req, res)
	}
	static update = (req, res) => {
		ComponentService.update(req, res)
	}
	static delete = (req, res) => {
		ComponentService.delete(req, res)
	}
	static deleteAll = (req, res) => {
		ComponentService.deleteAll(req, res)
	}
}
