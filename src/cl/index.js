const path = require('path');
const { auto } = require('./utils/auto');

const src = path.resolve(__dirname, '../../');

auto(src);
