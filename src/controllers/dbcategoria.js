const config = require("../dbconfig");
const sql = require("mssql");

async function getCategorias() {
  try {
    let pool = await sql.connect(config);
    let categorias = await pool.request().query("SELECT * FROM TM_CATEGORIAS");
    return categorias.recordset; // Ajustado a `recordset` en lugar de `recordsets`
  } catch (error) {
    console.log(error);
    throw error; // Asegúrate de lanzar el error para que la ruta pueda manejarlo
  }
}

async function getCategoriaPorId(id) {
  try {
    let pool = await sql.connect(config);
    let categoria = await pool
      .request()
      .input("input_parameter", sql.Int, id)
      .query("SELECT * FROM TM_CATEGORIAS WHERE CAT_ID = @input_parameter");
    return categoria.recordset; // Ajustado a `recordset` en lugar de `recordsets`
  } catch (error) {
    console.log(error);
    throw error; // Asegúrate de lanzar el error para que la ruta pueda manejarlo
  }
}

async function insertCategoria(categoria) {
  try {
    let pool = await sql.connect(config);
    let insert = await pool
      .request()
      .input("CAT_NOMBRE", sql.NVarChar, categoria.CAT_NOMBRE)
      .input("CAT_OBSERVACION", sql.NVarChar, categoria.CAT_OBSERVACION)
      .execute("SP_I_CATEGORIA01"); // Usar el procedimiento almacenado

    return insert.recordset;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getCategorias,
  getCategoriaPorId,
  insertCategoria,
};
