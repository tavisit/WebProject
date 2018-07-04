const fs = require('fs');
const path = require('path');

//Function serveStatic construct the URL of the desired page
function serveStatic (req, res) {
  console.log(req.url);
  let filePath = path.join(__dirname, req.url);
  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('File not found on this server');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', getType(req.url));
      res.end(content);
    }
  });
}

//Function getType sees the extension of the file and it build the Type of the URL for the HTTP 
function getType (fileName) {
  if (/.html/i.test(fileName))
    return 'text/html';
  if (/.css/i.test(fileName))
    return 'text/css';
  if (/.js/i.test(fileName))
    return 'application/javascript';
  return 'text/plain';
}

module.exports = serveStatic;