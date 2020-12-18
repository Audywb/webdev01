const http = require('http');
http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
        res.write(`<html>
        <head>
        </head>
        <body>
            <h1>ส่งงานครับ</h1>
            <span> 62114440288 นายวรนาถ บุญเอนก </span>
        </body>
        </html>
        `);
        res.end();
    })
    .listen(80);
console.log('Go!');