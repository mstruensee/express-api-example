import { UserService } from "./user-service"

export class UserController {
	static create = (req, res) => {
		UserService.create(req, res)
	}
	static findAll = (req, res) => {
		UserService.findAll(req, res)
	}
	static findOne = (req, res) => {
		UserService.findOne(req, res)
	}
	static update = (req, res) => {
		UserService.update(req, res)
	}
	static delete = (req, res) => {
		UserService.delete(req, res)
	}
	static deleteAll = (req, res) => {
		UserService.deleteAll(req, res)
	}
}