const path = require('path');
const { auto } = require('./utils/auto');

const TM = path.resolve(__dirname, '../../tm/csv');
const DM = path.resolve(__dirname, '../../dm/csv');
const HT = path.resolve(__dirname, '../../ht/csv');
const HD = path.resolve(__dirname, '../../hd/csv');


const directories = [ DM, TM, HT, HD ];

directories.forEach((directory) => auto(directory));
