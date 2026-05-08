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

    const usersData = await userModel.find(filter).skip(start).limit(length);

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
