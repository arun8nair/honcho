const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("winston");
const mongoose = require("mongoose");
require('dotenv').config();
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

const PORT = process.env.PORT = 4000;
const app = express();

// connect to mongo db
// const mongoUri = config.mongo.host;
// mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
// mongoose.connection.on("error", () => {
	// throw new Error(`unable to connect to database: ${mongoUri}`);
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));

// app.use(logger("dev"));
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (_, res) => {
    res.send("Hello there!")
})
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	next(createError(404));
// });

app.listen(PORT, () => {
	console.log(
		`Honcho Server initialization complete. Running in ${process.env.NODE_ENV} mode. Listening on ${PORT}`
	);
});

// error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get("env") === "development" ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render("error");
// });

module.exports = app;
