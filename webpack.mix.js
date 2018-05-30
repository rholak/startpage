let mix = require('webpack-mix').mix;

mix.js('assets/javascript/site.js', '_site/js')
    .sass('assets/css/site.scss', '_site/css');