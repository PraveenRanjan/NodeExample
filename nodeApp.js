const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req);
    res.setHeader('content-typw', 'text/html');
    if(req.url === '/'){
        
        res.write('<html>');
        res.write('<h1>node js</h1>');
        res.write('<body><div><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button> </form> </div></body>');
        res.write('<html>');
        return res.end();
    }
    if(req.url === '/message'){
        const buffer = [];
        req.on('data', (chunk) => {
            console.log("chunk:: ", chunk);
            buffer.push(chunk);
        });
        req.on('end', () => {
        const body =  Buffer.concat(buffer).toString();
        console.log("body: ", body);
        fs.writeFile('message.txt', body, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.write('<h1>submit suggesful</h1>');
            console.log("submit suggesful");
            return res.end();
        });
        });
        
        
    }
    

})

server.listen(3000);