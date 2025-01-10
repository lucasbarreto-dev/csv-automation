const path = require('path');
const { auto } = require('./utils/auto');

const directories = {
  TM: path.resolve(__dirname, '../../tm/csv'),
  DM: path.resolve(__dirname, '../../dm/csv'),
  HT: path.resolve(__dirname, '../../ht/csv'),
  HD: path.resolve(__dirname, '../../hd/csv'),
  AT: path.resolve(__dirname, '../../at/csv'),
};

Object.values(directories).forEach((directory) => auto(directory));
