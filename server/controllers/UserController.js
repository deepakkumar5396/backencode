const userService = require("../services/UserService");

class UserController {
  async createUser(req, res, next) {
    console.log("controllr is getting called");
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const user = await userService.updateUser(userId, userData);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const userId = req.params.id;
      await userService.deleteUser(userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
