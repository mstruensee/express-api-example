import { pool } from "../database/connection-pool"

export class ComponentRepository {
	static create = (component, cb) => {
		pool.query("insert into components set ?", component, (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, { id: results.insertId, ...component })
			}
		})
	}

	static findAll = cb => {
		pool.query("select * from components", (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, results)
			}
		})
	}

	static findOne = (packageName, version, cb) => {
		pool.query("select * from components where packageName = ? and version = ?", [
			packageName,
			version
		], (error, results) => {
			if (error) {
				results(error, null)
			} else if (results.length) {
				cb(null, results[ 0 ])
			} else {
				cb({ kind: "not_found" }, null)
			}
		})
	}

	// static update = (id, user, cb) => {
	// 	pool.query(
	// 		"update components set email = ?, name = ?, active = ? where id = ?",
	// 		[
	// 			user.email,
	// 			user.name,
	// 			user.active,
	// 			id,
	// 		],
	// 		(error, results) => {
	// 			if (error) {
	// 				cb(error, null)
	// 			} else if (Number(results.affectedRows) === 0) {
	// 				cb({ kind: "not_found" }, null)
	// 			} else {
	// 				cb(null, { id, ...user })
	// 			}
	// 		}
	// 	)
	// }

	static remove = (packageName, version, cb) => {
		pool.query("delete from components where packageName = ? and version = ?", [
			packageName,
			version
		], (error, results) => {
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
		pool.query("delete from components", (error, results) => {
			if (error) {
				cb(error, null)
			} else {
				cb(null, results)
			}
		})
	}
}
