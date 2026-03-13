export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const OPENROUTER_KEY = process.env.OPENROUTER_KEY;

  if (!OPENROUTER_KEY) {
    return res.status(500).json({
      error: 'API key not configured',
      hint: 'OPENROUTER_KEY env var is missing in Vercel',
    });
  }

  try {
    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + OPENROUTER_KEY,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://buggybutbrilliant.vercel.app',
        'X-Title': 'BuggyButBrilliant',
      },
      body,
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Proxy error', detail: err.message });
  }
}
