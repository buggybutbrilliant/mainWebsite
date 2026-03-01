const { URL } = require('url');
const https = require('https');

function httpsPost(url, headers, body) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const bodyBuffer = Buffer.from(body, 'utf8');
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        ...headers,
        'Content-Length': bodyBuffer.length,
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(bodyBuffer);
    req.end();
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const OPENROUTER_KEY = process.env.OPENROUTER_KEY;

  if (!OPENROUTER_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured', hint: 'OPENROUTER_KEY env var is missing in Netlify' })
    };
  }

  const bodyStr = typeof event.body === 'string'
    ? event.body
    : JSON.stringify(event.body);

  try {
    const result = await httpsPost(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        'Authorization': 'Bearer ' + OPENROUTER_KEY,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://buggybutbrilliant.netlify.app',
        'X-Title': 'BuggyButBrilliant',
      },
      bodyStr
    );

    return {
      statusCode: result.status,
      headers: { 'Content-Type': 'application/json' },
      body: result.body,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Proxy error', detail: err.message }),
    };
  }
};
