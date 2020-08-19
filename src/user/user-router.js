import { Router } from "express"
import { UserController } from "./user-controller"
import {
 validateUserCreateRequest,
 validateUserUpdateRequest
} from "./user-middleware"
const router = Router()

router.post("/users", validateUserCreateRequest, UserController.create);
router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findOne);
router.put("/users/:id", validateUserUpdateRequest, UserController.update);
router.delete("/users/:id", UserController.delete);
router.delete("/users", UserController.deleteAll);

export const userRouter = router