import express from "express";
import passport from "passport";
import loginController from "../controllers/loginController.js";
import signupController from "../controllers/signupController.js";

const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

const redirectIfAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
   next();
};

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("homePage");
});

router.get("/login", redirectIfAuthenticated,loginController.showLoginForm);

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/signup",redirectIfAuthenticated, signupController.showsignupForm);

router.post("/signup", signupController.registerUser);

export default router;
