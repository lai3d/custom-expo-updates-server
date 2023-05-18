module.exports = () => {
    if (process.env.APP_ENV === "production") {
      return require("./app.production.json");
    } else if (process.env.APP_ENV === "staging") {
    //   return require("./app.staging.json");
        return require("./app.json");
    } else if (process.env.APP_ENV === "development") {
      return require("./app.development.json");
    } else {
      return require("./app.staging.json");
    }
  };
  