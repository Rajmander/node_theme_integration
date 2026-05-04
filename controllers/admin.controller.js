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

export const usersData = (req, res) => {
  const usersData = [
    {
      id: 101,
      name: "Peter Parker",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 102,
      name: "Peter Parker1",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Inactive",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
    {
      id: 101,
      name: "Peter Parker2",
      email: "peter@gmail.com",
      mobile: "9696969696",
      status: "Active",
    },
  ];

  res.json({ data: usersData });
};
