import Controller from "./Control.js"
import serverless from "serverless-http"
const controller = new Controller()

controller.InitRouten()

controller.InitUse()


controller.InitMongoDB()
export default serverless(controller.App)