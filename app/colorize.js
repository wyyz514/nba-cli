var chalk = require("chalk");

module.exports = function colorizeString(d, toColorize) {
    return chalk.hex(d.fg).bgHex(d.bg).bold(toColorize);
}