const  clickhouse  = require('../config/database');
const tableSchema = require('../model/mongooseSchema')


async function getClickHouseData(req, res) {
   const query = `SELECT database, table,name , type FROM system.columns WHERE table = 'data'`;
       clickhouse.query(query, (err,result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    // console.log("result", result);
    res.json({
      success: true, result
    })
  }
  );


}




module.exports = { getClickHouseData };
