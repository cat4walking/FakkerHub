const express = require('express');
const path = require('path');
const route = require('./src/routes');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config({ path: path.resolve(__dirname, './src/.env') });

app.engine('hbs', hbs({
    extname: "hbs",
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "src", "resouce", "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(process.env.PORT || 5000, () => {
    console.log(`Sever running on http://localhost:${process.env.PORT}`);
});

route(app);