const express = require("express");
const UserController = require("../controller/userController");

const router = express.Router();

router.post('/', UserController.createUser);

router.get('/', UserController.getAllUsers);

router.get('/username/:username', UserController.getUserByUsername);

router.get('/:id', UserController.getUserById);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;