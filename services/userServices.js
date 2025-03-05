const User = require("../model/userModel");

const createUser = async (user) => {
    return await User.create(user);
};

const getAllUsers = async () => {
    return await User.find();
};

const getUserByUsername = async (username) => {
    return await User.findOne({ username });
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByUsername,
    getUserById,
    updateUser,
    deleteUser
};
