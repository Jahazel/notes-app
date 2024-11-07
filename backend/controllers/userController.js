//login user
const loginUser = async (req, res) => {
  res.send("login user");
};

//signup user
const signupUser = async (req, res) => {
  res.send("signup user");
};

module.exports = {
  signupUser,
  loginUser,
};
