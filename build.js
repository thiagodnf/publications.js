var buildify = require('buildify');

buildify()
    .concat(['lib/js/jquery.min.js', 'lib/js/BibTex-0.1.2.min.js', 'lib/js/highcharts.js', 'lib/js/jquery.dataTables.min.js', 'lib/js/remodal.min.js', 'src/js/publications.js'])
    .save('build/publications.js')
    .uglify()
    .save('build/publications.min.js');

buildify()
    .concat(['lib/css/jquery.dataTables.css', 'lib/css/remodal.css', 'lib/css/remodal-default-theme.css', 'src/css/publications.css'])
    .save('build/publications.css');
