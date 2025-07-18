import { Router } from "express";
import container from "../config/container";
import { INTERFACE_TYPE } from "../utils";
import { TestController } from "../controller/TestController";

const testRoute = Router()

const controller = container.get<TestController>(INTERFACE_TYPE.TestController)

testRoute.post("/test", controller.onCreate)
testRoute.get("/test", controller.getAllTest)
testRoute.get("/test/:id", controller.getTest)
testRoute.put("/test/:id", controller.updateTest)
testRoute.delete("/test/:id", controller.deleteTest)

export default testRoute;