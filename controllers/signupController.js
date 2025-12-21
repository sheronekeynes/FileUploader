import prisma from "../db/prisma.js";
import bcrypt from "bcrypt";

async function showsignupForm(req, res) {
  res.render("signupForm");
}

async function registerUser(req, res) {
  const { fullname, username, password, confirmpassword} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
}

export default {
  showsignupForm,
  registerUser,
};
