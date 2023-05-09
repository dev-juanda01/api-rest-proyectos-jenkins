const app = require("../app"),
  connectDB = require('../database/connection_mongo')

connectDB();

app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get("port")}`);
});
