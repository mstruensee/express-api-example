import { pool } from "../database/connection-pool"

export class UserModel {
	constructor({ email, name, active = true }) {
		this.email = email
		this.name = name
		this.active = active
	}

	static create = (user, cb) => {
		pool.query("insert into users set ?", user, (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, { id: results.insertId, ...user })
			}
		})
	}

	static findAll = cb => {
		pool.query("select * from users", (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, results)
			}
		})
	}

	static findOne = (id, cb) => {
		pool.query("select * from users where id = ?", id, (error, results) => {
			if (error) {
				result(error, null)
			} else if (results.length) {
				cb(null, results[ 0 ])
			} else {
				cb({ kind: "not_found" }, null)
			}
		})
	}

	static update = (id, user, cb) => {
		pool.query(
			"update users set email = ?, name = ?, active = ? where id = ?",
			[
				user.email,
				user.name,
				user.active,
				id,
			],
			(error, results) => {
				if (error) {
					cb(error, null)
				} else if (Number(results.affectedRows) === 0) {
					cb({ kind: "not_found" }, null)
				} else {
					cb(null, { id, ...user })
				}
			}
		)
	}

	static remove = (id, cb) => {
		pool.query("delete from users where id = ?", id, (error, results) => {
			if (error) {
				cb(error, null)
			} else if (Number(results.affectedRows) === 0) {
				cb({ kind: "not_found" }, null)
			} else {
				cb(null, results)
			}
		})
	}

	static removeAll = cb => {
		pool.query("delete from users", (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, results)
			}
		})
	}
}
