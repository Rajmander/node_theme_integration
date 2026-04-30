export const dashboard = (req, res, next) => {
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

export const users = (req, res, next) => {
  res.render("pages/users", {
    layout: "layouts/admin",
  });
};
