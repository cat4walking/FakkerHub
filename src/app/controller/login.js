

class loginController {
    index(req, res, next) {
        res.render('authencation/login');
    }
}
module.exports = new loginController;