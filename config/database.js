const {ClickHouse}= require('clickhouse')
require("dotenv").config();

const clickhouse = new ClickHouse(
    {
      url: process.env.HOST,
    port: parseInt(process.env._PORT),
    debug: false,
    basicAuth: {
        username: "credm_click",
        password: "wZ31c88AnhfKKoxzHJ5Rt5Zm",
    }
    })

    module.exports = clickhouse