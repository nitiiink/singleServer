const express = require('express');
const bodyParser = require('body-parser');
const bunyan = require('bunyan');

const log = bunyan.createLogger({name : "myapp"});
const PORT = 3000;

async function start () {
    log.info('Starting the server');
    const memoryLeak = [];

    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.get('/api/hello', (req, res) => {   
        log.info('request url is', req.url);
        return res.json({
            success: true,
            data: 'HELLO_WORLD_1',
            requestPath : req.url,
            requestorIP : req.headers['x-forwarded-for']    
        })
    })

    
    app.get('/api/welcome', (req, res) => {
            while(true) {
                memoryLeak.push(new Array(1e6).join('*'));  
            }
    });

    app.listen(PORT, () => {
        `Server listening on PORT ${PORT}`;
    })

}

start();