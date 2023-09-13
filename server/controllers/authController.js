const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const searchedUser = await User.findOne({ username: user }).exec();
  if (!searchedUser) return res.sendStatus(401);
  // evaluate password
  const passwordCompare = await bcrypt.compare(password, searchedUser.password);
  if (passwordCompare) {
    const roles = Object.values(searchedUser.roles).filter(Boolean);
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: searchedUser.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    const refreshToken = jwt.sign(
      { username: searchedUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // Saving refreshToken with current user
    searchedUser.refreshToken = refreshToken;
    const result = await searchedUser.save();
    console.log(result);
    console.log(roles);

    // Creates Secure Cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    res.json({ roles, accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
