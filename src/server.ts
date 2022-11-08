import app from "./app";
import { AppDataSource } from "./data-source";
import Logger from "./logs";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      Logger.debug("Data Source initialized");
    })
    .catch((err) => {
      Logger.error("Error during Data Source initialization", err);
    });

  app.listen(process.env.PORT || 3000);
})();
