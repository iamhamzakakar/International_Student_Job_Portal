const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/com",
        [authJwt.verifyToken, authJwt.isCompany],
        controller.companyBoard
    );

    app.get(
        "/api/test/student",
        [authJwt.verifyToken, authJwt.isStudent],
        controller.studentBoard
    );
};