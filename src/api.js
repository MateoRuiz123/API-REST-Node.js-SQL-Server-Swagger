const dbcategorias = require("./controllers/dbcategoria.js");
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
    let categorias = await dbcategorias.getCategorias();
    if (categorias.length === 0) {
      res.status(404).json({ message: "No se encontraron categorías" });
    } else {
      res.json(categorias); // Devolvemos todas las categorías
    }
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ message: "Error al obtener categorías" });
  }
});

router.route("/categorias/:id").get(async (req, res) => {
  try {
    let categoria = await dbcategorias.getCategoriaPorId(req.params.id);
    if (categoria.length === 0) {
      res.status(404).json({ message: "No se encontró la categoría" });
    } else {
      res.json(categoria[0]); // Devolvemos la primera categoría encontrada
    }
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(500).json({ message: "Error al obtener la categoría" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
