const dbcategorias = require("./controllers/dbcategoria");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

router.route("/categorias").get(async (req, res) => {
  try {
    dbcategorias.getCategorias().then((result) => {
      res.json(result[0]);
    });
  } catch (error) {
    console.log(error);
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});