//this restrictes the user from seeing pages they are not allowed to visit if not logged import in
module.exports = function(req, res, next) {
//if logged in continue
  if (req.user) {
    return next();
  }
//if user isn't logged in, send to login page
return res.redirect("/login");
}; //module.exports