var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!doctype html>
            <html>
                <head>
                    <title>My Page</title>
                    <h1>My Page!</h1>
                </head>
                <body>
                    <p>Hello, My name is Anjuman.</p>
                    <p>I am a student at Goldsmiths University</p>
                </body> 
            </html>`)
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});
