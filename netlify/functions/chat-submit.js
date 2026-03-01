const https = require('https');
const querystring = require('querystring');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const formBody = querystring.stringify({
    'form-name': 'chat-booking',
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    projectType: data.projectType || '',
    datetime: data.datetime || '',
  });

  const siteUrl = process.env.URL || 'https://buggybutbrilliant.netlify.app';
  const urlObj = new URL(siteUrl);

  return new Promise((resolve) => {
    const bodyBuffer = Buffer.from(formBody, 'utf8');
    const options = {
      hostname: urlObj.hostname,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': bodyBuffer.length,
        'User-Agent': 'Mozilla/5.0 (compatible; BuggyButBrilliant/1.0)',
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: true, status: res.statusCode }),
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      });
    });

    req.write(bodyBuffer);
    req.end();
  });
};
