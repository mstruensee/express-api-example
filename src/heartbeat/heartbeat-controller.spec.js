import supertest from "supertest"
import { app } from "../server"

describe("heartbeat-controller", () => {
	test("/heartbeat", async () => {
		const response = await supertest(app).get("/heartbeat")

		expect(response.status).toBe(200)
		expect(response.body.applicationName).toEqual("hadouken")
	})
})