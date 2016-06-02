if (process.env.NODE_ENV === undefined) process.env.NODE_ENV = 'development'
var path = require('path');
var cwd = process.cwd();
var basedir = path.resolve(cwd, '..');
var outputdir;
var rootdir;
if (process.env.NODE_ENV === 'production') {
    rootdir = '/node/';
    outputdir = path.join(__dirname, 'node');
} else {
    outputdir = path.join(__dirname, 'dist', process.env.NODE_ENV);
    rootdir = '/';
}

module.exports = {
    rootdir: rootdir,
    basedir: basedir,
    outputdir: outputdir
};
