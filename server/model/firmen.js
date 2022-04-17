const db = require('../db');
const firmen = require('./firmen.json');

const getFirmen = async () => {
  const { rows } = await db.query('SELECT * from firma order by firmen_name');
  return rows;
};

const getFirmenJson = () => firmen;

module.exports = {
  getFirmen,
  getFirmenJson,
};
