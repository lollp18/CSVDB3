import Controller from "./Control.js"

const controller = new Controller()

controller.InitMongoDB()
controller.InitRouten()
controller.InitUse()


export default controller.App
