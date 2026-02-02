const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client') + '/index.tsx',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.client.json",
                    transpileOnly: true
                }
            }],
            exclude: ['/node_modules/', '/server']
        },
        {
            test: /\.css$/i,
            exclude: ['/node_modules/', '/server'],
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.md$/,
            exclude: ['/node_modules/', '/server'],
            use: "raw-loader"
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.md', 'css'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname),
    },
};
