module.exports = { 
    devtool : 'source-map',
    mode : 'development',
    entry: __dirname + '/src/app.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    } 
 };
 