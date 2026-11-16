const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  try {

    // Home / Books page
    if (pathname === '/' || pathname === '/home') {

      const data = fs.readFileSync(
        path.join(__dirname, 'templates', 'page.html'),
        'utf8'
      );

      const name = query.name || 'Guest';

      const personalizedContent = data.replace('{{name}}', name);

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(personalizedContent);
    }

    // About page
    else if (pathname === '/about') {

      const data = fs.readFileSync(
        path.join(__dirname, 'templates', 'about.html'),
        'utf8'
      );

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(data);
    }

    // Contact page
    else if (pathname === '/contact') {

      const data = fs.readFileSync(
        path.join(__dirname, 'templates', 'contact.html'),
        'utf8'
      );

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(data);
    }

    // CSS
    else if (req.url.match(/[.]css$/)) {

      const cssPath = path.join(
        __dirname,
        'templates',
        'css',
        req.url
      );

      const fileStream = fs.createReadStream(cssPath, 'utf8');

      res.writeHead(200, {
        'Content-Type': 'text/css'
      });

      fileStream.pipe(res);
    }

    // JPG Images
    else if (req.url.match(/[.]jpg$/)) {

      const imagePath = path.join(
        __dirname,
        'templates',
        'images',
        req.url
      );

      const fileStream = fs.createReadStream(imagePath);

      res.writeHead(200, {
        'Content-Type': 'image/jpeg'
      });

      fileStream.pipe(res);
    }
    // 404
    else {

      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(`
                <h1>404 - Page Not Found</h1>
                <a href="/">Back to Home</a>
            `);
    }

  } catch (err) {

    res.writeHead(500, {
      'Content-Type': 'text/html; charset=utf-8'
    });

    res.end('<h1>Server Error</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});