const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization',
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Max-Age', '86400');
    next();
});
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());
app.use('/history/googleChrome', require('./chromeHistory'));

const host = 'localhost';
const port = 9878;

app.listen(
    {
        host,
        port,
    },
    () => {
        console.log(`request server: http://${host}:${port}`);
    },
);
