// const User = require('../model/User');
const Project = require("../model/Project");

const createNewProject = async (req, res) => {
  if (
    !req?.body.projectName ||
    !req?.body?.projectDescription ||
    !req?.body?.teamMembers
  ) {
    return res.status(400).json({
      message: "Project name ,description and team members are required",
    });
  }

  try {
    const result = await Project.create({
      projectName: req.body.projectName,
      projectDescription: req.body.projectDescription,
      teamMembers: req.body.teamMembers,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

// const createNewEmployee = async (req, res) => {
//     if (!req?.body?.firstname || !req?.body?.lastname) {
//         return res.status(400).json({ 'message': 'First and last names are required' });
//     }

//     try {
//         const result = await Employee.create({
//             firstname: req.body.firstname,
//             lastname: req.body.lastname
//         });

//         res.status(201).json(result);
//     } catch (err) {
//         console.error(err);
//     }
// }

// const getAllUsers = async (req, res) => {
//     const users = await User.find();
//     if (!users) return res.status(204).json({ 'message': 'No users found' });
//     res.json(users);
// }

// const deleteUser = async (req, res) => {
//     if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
//     const user = await User.findOne({ _id: req.body.id }).exec();
//     if (!user) {
//         return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
//     }
//     const result = await user.deleteOne({ _id: req.body.id });
//     res.json(result);
// }

// const getUser = async (req, res) => {
//     if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
//     const user = await User.findOne({ _id: req.params.id }).exec();
//     if (!user) {
//         return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
//     }
//     res.json(user);
// }

module.exports = {
  // getAllUsers,
  // deleteUser,
  // getUser
  createNewProject,
};
