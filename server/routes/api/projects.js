const express = require("express");
const router = express.Router();
// const usersController = require("../../controllers/usersController");
const projectController = require("../../controllers/projectController");
const ROLES_LIST = require("../../config/rolesList");
const verifyRoles = require("../../middleware/verifyRoles");

router
  .route("/")
  .post(verifyRoles(ROLES_LIST.Admin), projectController.createNewProject);
//   .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
//   .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

// router
//   .route("/:id")
//   .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;
