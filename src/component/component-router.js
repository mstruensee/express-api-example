import { Router } from "express"
import { GvpComponentController } from "./component-controller"
import { validateComponentCreateRequest } from "./component-middleware"

const router = Router()

router.post("/api/v1/components", validateComponentCreateRequest, GvpComponentController.create)
router.get("/api/v1/components", GvpComponentController.findAll)
router.get("/api/v1/components/:packageName/:version", GvpComponentController.findOne)
// router.put("/api/v1/components/:packageName/:version", validateComponentUpdateRequest, GvpComponentController.update)
router.delete("/api/v1/components/:packageName/:version", GvpComponentController.delete)
router.delete("/api/v1/components", GvpComponentController.deleteAll)

export const componentRouter = router
