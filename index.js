const path = require('path')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home page
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    })
  } else if (req.url === "/about") {
    // About page
    fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    })
  } else if (req.url === "/contact-me") {
    // Contact page
    fs.readFile(path.join(__dirname, 'contact-me.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    })
  } else {
    // 404 error page
    fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content)
    })
  }
})

const PORT = process.env.PORT || 5000;

server.listen(5000,()=>console.log("Server running on port: 5000"))