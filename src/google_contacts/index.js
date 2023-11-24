const path = require('path');
const { auto } = require('./utils/auto');

const TM = path.resolve(__dirname, '../../tm/csv');
const DM = path.resolve(__dirname, '../../dm/csv');

const directories = [ DM, TM ];

directories.forEach((directory) => auto(directory));
