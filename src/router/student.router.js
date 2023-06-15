const express = require("express");
const router = express.Router();
const controller = require("../controller/student.controller");

router.post("/student/add-record", controller.createMarks);
router.get("/student/get-record", controller.getMarks);
router.get("/student/get-recordOne/:studentId", controller.getStudentDataById);
router.put("/student/update-record/:studentId", controller.updateStudentData);
router.delete("/student/delete-record/:studentId", controller.deleteStudentData);
router.get("/student/get-averageMarks", controller.getAverageMarks);
router.get("/student/get-NameandMarks",controller.getNameandMarks);

module.exports = router;