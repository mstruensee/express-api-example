import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import { registerRoutes } from "./router/router"

dotenv.config({ path: `../../config/${ process.env.ENVIRONMENT }.env` })
const app = express()

app.use(morgan(process.env.MORGAN_FORMAT, {
	skip: ({ url }) => url.includes("/favicon.ico")
}))
app.disable("etag")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

registerRoutes({ app })

export {
	app
}