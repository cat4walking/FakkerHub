const login = require('./login');


const route = (app) => {
    app.use('/', login);
}

module.exports = route;