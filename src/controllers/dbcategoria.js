const config = require("../dbconfig");
const sql = require("mssql");

async function getCategorias() {
  try {
    let pool = await sql.connect(config);
    let categorias = await pool.request().query("SELECT * FROM TM_CATEGORIAS");
    return categorias.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCategoriaPorId(id) {
  try {
    let pool = await sql.connect(config);
    let categoria = await pool
      .request()
      .input("input_parameter", sql.Int, id)
      .query("SELECT * FROM TM_CATEGORIAS WHERE CAT_ID = @input_parameter");
    return categoria.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategorias,
  getCategoriaPorId,
};
