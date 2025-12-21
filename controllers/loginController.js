import bcrypt from "bcrypt";
import passport from "passport";

async function showLoginForm(req, res) {
  res.render("loginForm", {error:req.flash("error")[0]});
}



export default { showLoginForm};
