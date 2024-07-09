const config = require("../dbconfig");
const sql = require("mssql");

export async function getCategorias() {
  try {
    let pool = await sql.connect(config);
    let categorias = await pool.request().query("SELECT * FROM TM_CATEGORIAS");
    return categorias.recordsets;
  } catch (error) {
    console.log(error);
  }
}
