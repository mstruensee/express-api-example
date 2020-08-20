export class Logger {
	static debug(message) {
		console.log(`[DEBUG] ${ message }`)
	}

	static info(message) {
		console.log(`[INFO] ${ message }`)
	}

	static warn(message) {
		console.log(`[WARN] ${ message }`)
	}

	static error(message) {
		console.log(`[ERROR] ${ message }`)
	}
}
