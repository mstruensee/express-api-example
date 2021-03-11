import { resolve } from "path"
import { config } from "dotenv"

const { error } = config({
	path: resolve(__dirname, `../properties/${ process.env.NODE_ENV }.env`),
	debug: process.env.DEBUG
})

if (error) throw error

