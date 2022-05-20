const express = require("express");
const morgan = require("morgan");
const path = require("path");
const compression = require("compression");
const app = express();
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const AppError = require("./utils/appError");

app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(mongoSanitize());
app.use(helmet());
app.use(xss());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 500,
  message: `Too many requests from this IP , please try again in an hour`,
});

app.use(cors());
app.use("/api", limiter);


const homeRouter = require("./routes/homeRoutes");

app.use("/api/scrap", homeRouter);


app.all("*", (req, res, next) => {
  return next(new AppError(`Cant find ${req.originalUrl} on this server.`));
});

// app.use(globalErrorHandler);

module.exports = app;

