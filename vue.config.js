module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': '/api/' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            }/* ,
            '/movie': {
                target: 'http://203.195.242.11:8080',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/movie': '/movie/' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            } */
        }
    }


}