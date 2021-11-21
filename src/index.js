const express = require("express");
const indexRouter = require("./routes/index.routes");

const app = express();

app.use(indexRouter);

app.listen(3000, () => console.log("Servidor enn http://localhost:3000"));
