import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import user from "../models/user.model.js";

export const dashboard = (req, res, next) => {
  res.locals.title = "Dashboard";
  res.locals.activeMenu = "dashboard_m";
  res.render("pages/dashboard", {
    layout: "layouts/admin",
  });
  //return res.json({ msg: "i am good ok" });
  //console.log("dashboard");
};

export const login = (req, res, next) => {
  res.render("pages/login", {
    layout: "layouts/auth",
  });
};

export const addUser = (req, res, next) => {
  res.locals.title = "Add new user";
  res.locals.activeMenu = "";
  res.locals.activeMenu = "addUser_m";
  res.render("pages/add", {
    layout: "layouts/admin",
  });
};

export const createUser = async (req, res, next) => {
  try {
    const { username, mobile, email } = req.body;
    console.log("Normal fields = ", req.body);
    console.log("File = ", req.file);

    const userObj = new user();
    userObj.username = username;
    userObj.email = email;
    userObj.mobile = mobile;

    const newUser = await userObj.save();

    // const batchSize = 1000;

    // for (let batch = 0; batch < 10; batch++) {
    //   const users = [];

    //   for (let i = 1; i <= batchSize; i++) {
    //     const num = batch * batchSize + i;

    //     users.push({
    //       username: `user${num}`,

    //       email: `user${num}@gmail.com`,

    //       mobile: `${Math.floor(6000000000 + Math.random() * 3999999999)}`,
    //     });
    //   }

    //   await user.insertMany(users);

    //   console.log(`Batch ${batch + 1} inserted`);
    // }

    // console.log("10000 users inserted");

    res.status(201).json({
      success: true,
      data: newUser,
      status: 201,
    });
  } catch (error) {
    console.log(`Error in saving... ${error}`);
  }
};

export const users = (req, res, next) => {
  res.locals.title = "Users listing";
  res.locals.activeMenu = "userListing_m";
  res.render("pages/users", {
    layout: "layouts/admin",
  });
};

export const singleUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Invalid user id" });
    // }
    const userData = await user.findById(id).lean();

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("User data =", userData.save);

    return res.status(200).json({ success: true, data: userData });
  } catch (error) {
    console.error(`Error ${error}`);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

export const usersData = async (req, res) => {
  try {
    const draw = parseInt(req.query.draw) || 1;
    const start = parseInt(req.query.start) || 0;
    const length = parseInt(req.query.length) || 10;

    const search = req.query["search[value]"]?.trim() || "";

    const filter =
      search.length >= 3
        ? {
            $or: [
              {
                username: { $regex: search, $options: "i" },
              },
              {
                email: { $regex: search, $options: "i" },
              },
              {
                mobile: { $regex: search, $options: "i" },
              },
            ],
          }
        : {};

    const totalRecords = await userModel.countDocuments();
    const filteredRecords = await userModel.countDocuments(filter);

    const usersData = await userModel
      .find(filter)
      .select("username email mobile")
      .skip(start)
      .limit(length)
      .lean();

    const formattedUser = usersData.map((user) => {
      return {
        id: user._id,
        name: user.username,
        email: user.email,
        mobile: user.mobile,
        status: "Active",
      };
    });

    return res.json({
      draw,
      recordsTotal: totalRecords,
      recordsFiltered: filteredRecords,
      data: formattedUser,
    });
  } catch (error) {
    console.error(error);
  }
};
