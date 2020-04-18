### src/setupProxy.js 파일을 작성한다.
```
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      proxy('/api', {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
            '^/api':''
        }
      })
    );
};
``` 
