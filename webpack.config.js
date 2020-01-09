const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    mode: 'development',    // 배포할때는 'production'변경
    devtool: 'eval',        // eval은 빌드하는 속도를 빠르게 해준다. 배포할때는 'hidden-source-map' 변경
    context: __dirname, 
    resolve: {       //entry에 확장자들 지정
        extensions: ['.js', '.css', '.scss', '.html']
    },
    entry: {
        app: path.join(__dirname, '/main.js'),
    },
    module: {                                            //module가 바로 Loader을 말한다.
        rules: [ 
            { // images css에서 background-image 속성 loader
                test: /\.(png|svg|jpe?g|gif)$/,
                loader:'url-loader',
                options: {
                  outputPath: 'images/',
                  limit: 10000
                }
            },
            { // font loader
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
            {  // scss 또는 css loader
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',              // style-loader는 읽어들인 내용을 html에 추가해줍니다. 2)
                    use: ['css-loader', 'sass-loader']    // css-loader와 sass-loader는 app.js에서 css 내용을 읽어들이고, 1)
                })
            },
            {  //babel loader
                test: /\.js$/,                      //정규표현식에서 확장자가 .js 모든 파일에대해서 build 시키겠다.
                include: path.join(__dirname,'dist'),
                exclude: /(node_modules)|(dist)/,   //node_modules디렉토리 아래있는 파일들은 제외하고, | dist디렉토리 제외하고
                loader: 'babel-loader',
                options: {
                    presets: [
                         // plugin들의 모음이 preset입니다. (preset안에 수십개의 플러그인들이 존재함)
                         ['@babel/preset-env',{
                            targets: {
                                //브라우저 호환 옵션을 구체적으로 지정할수 있다.
                                browsers: [
                                    '> 5% in KR',
                                    "ie 9-11:"
                                ],
                            },
                            debug: true,
                         }],
                    ]
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    output: {
        publicPath: '/dist/',    //웹 서버에서 배포할 기본 경로를 뜻한다.  webpack-dev-server을 사용할때 추가해줘야 한다. 안그러면 에러난다.
        filename: '[name].js',   //[name].js으로 해주면 아라서 위에 entry에 있는 app이 [name].js로 들어간다.
        path: path.join(__dirname, 'dist')
    },
};