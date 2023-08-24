const path = require('path');
const { auto } = require('./utils/auto');

const tm = path.resolve(__dirname, './tm/csv');
const dm = path.resolve(__dirname, './dm/csv');

const directories = [ dm, tm ];

directories.forEach((directory) => auto(directory));
