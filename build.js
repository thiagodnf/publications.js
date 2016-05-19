var buildify = require('buildify');
var fs = require('fs');

var jsFiles = [
    'lib/js/jquery.min.js',
    'lib/js/BibTex-0.1.2.js',
    'lib/js/highcharts.js',
    'lib/js/jquery.dataTables.min.js',
    'lib/js/remodal.min.js',
    'src/js/publications.js'
];

var cssFiles = [
    'lib/css/jquery.dataTables.css',
    'lib/css/remodal.css',
    'lib/css/remodal-default-theme.css',
    'src/css/publications.css'
];

var isRelease = false;

function createDirectory(dir){
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function release(){
    createDirectory("dist");

    buildify()
        .concat(jsFiles)
        .save('dist/publications.js')
        .uglify()
        .save('dist/publications.min.js');

    buildify()
        .concat(cssFiles)
        .save('dist/publications.css');
}

function build(){
    createDirectory("build")

    buildify()
        .concat(jsFiles)
        .save('build/publications.js')
        .save('build/publications.min.js');

    buildify()
        .concat(cssFiles)
        .save('build/publications.css');
}

// Get parameters
process.argv.forEach(function (val, index, array) {
    if(val === '--release'){
        isRelease = true;
    }
});

if(isRelease){
    release();
}else{
    build();
}
