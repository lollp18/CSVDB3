
import Controller from "./Control.js"

const controller = new Controller()

controller.InitUse()
controller.InitRouten()


controller.ListenServer()

controller.InitMongoDB()

export default controller.App