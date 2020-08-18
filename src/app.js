import bodyParser from "body-parser"
import express from "express"
import morgan from "morgan"
import { registerRoutes } from "./router/router"

const app = express()
app.use(morgan(process.env.MORGAN_FORMAT, {
	skip: ({ url }) => url.includes("/favicon.ico")
}))
app.disable("etag")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
registerRoutes({ app })

export {
	app
}