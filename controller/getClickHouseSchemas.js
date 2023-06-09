const  clickhouse  = require('../config/database');
const tableSchema = require('../model/mongooseSchema')

function getClickHouseSchemas(req, res) {
    
   const query = 'SHOW databases';
      clickhouse.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    response = result
    // console.log("result", result);
    res.json({
      success: true, result
    })
  }
  );
}


module.exports = { getClickHouseSchemas };
