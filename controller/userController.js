const UserService = require("../services/userServices");

const createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
    res.json(user);
};

const getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
};

const getUserByUsername = async (req, res) => {
    const user = await UserService.getUserByUsername(req.params.username);
    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
};


const getUserById = async (req, res) => {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(user);
};


const updateUser = async (req, res) => {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
        return res.status(404).json({ message: "Usuario no encontrado para actualizar" });
    }
    res.json(updatedUser);
};


const deleteUser = async (req, res) => {
    const deletedUser = await UserService.deleteUser(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ message: "Usuario no encontrado para eliminar" });
    }
    res.json({ message: 'Usuario eliminado' });
};


module.exports = { createUser, getAllUsers, getUserByUsername, getUserById, updateUser, deleteUser };
