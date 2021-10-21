const express = require('express');
const app = express();

// Add verbose logging of requests (see below)
app.use(logRequests);

// Check if has API Key
app.all('*', function (req, res) {
  if (req.headers['authorization'] &&
      req.headers['authorization'] === process.env.API_KEY) {
    
    return res.send('OK (authenticated)');
  }

  return res.status(401).send('unauthorized');
})

const port = process.env.PORT || '8080';
app.listen(port, function () {
  console.log(`Subrequest auth server sample listening on port ${port}`);
})

// Middleware to log requests, including basic auth header info
function logRequests (req, res, next) {
  console.log('\nNew request')
  console.log(`  Path: ${req.path}`)
  console.log(`  Incoming headers >>>`)
  Object.entries(req.headers).forEach(
    ([key, value]) => console.log(`    ${key}: ${value}`)
  )
  return next();
}
