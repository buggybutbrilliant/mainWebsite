export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Honeypot check — if bot-field has a value, silently ignore
  const { botField, name, email, phone, service, details, budget, timeline, notes } = req.body;
  if (botField) {
    return res.status(200).json({ success: true });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const html = `
    <div style="font-family: monospace; background: #0a0a0f; color: #f0f0f5; padding: 32px; border-radius: 12px; max-width: 600px;">
      <h2 style="color: #00e5ff; margin-bottom: 24px;">🐞 New Project Inquiry</h2>

      <p style="color: #8888a0; font-size: 12px; margin-bottom: 24px;">
        Received from buggybutbrilliant.com contact form
      </p>

      <div style="border-top: 1px solid #222; padding-top: 16px; margin-bottom: 16px;">
        <p style="color: #555568; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Contact Details</p>
        <p><span style="color: #555568;">Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;${name || '—'}</p>
        <p><span style="color: #555568;">Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;${email || '—'}</p>
        <p><span style="color: #555568;">Phone:</span>&nbsp;&nbsp;&nbsp;&nbsp;${phone || 'Not provided'}</p>
      </div>

      <div style="border-top: 1px solid #222; padding-top: 16px; margin-bottom: 16px;">
        <p style="color: #555568; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Project Info</p>
        <p><span style="color: #555568;">Services:</span>&nbsp;&nbsp;${Array.isArray(service) ? service.join(', ') : service || '—'}</p>
        <p><span style="color: #555568;">Budget:</span>&nbsp;&nbsp;&nbsp;&nbsp;${budget || '—'}</p>
        <p><span style="color: #555568;">Timeline:</span>&nbsp;&nbsp;${timeline || '—'}</p>
      </div>

      <div style="border-top: 1px solid #222; padding-top: 16px; margin-bottom: 16px;">
        <p style="color: #555568; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Project Details</p>
        <p style="line-height: 1.7;">${details || '—'}</p>
      </div>

      ${notes ? `
      <div style="border-top: 1px solid #222; padding-top: 16px; margin-bottom: 16px;">
        <p style="color: #555568; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Additional Notes</p>
        <p style="line-height: 1.7;">${notes}</p>
      </div>
      ` : ''}

      <div style="border-top: 1px solid #222; padding-top: 16px;">
        <p style="color: #555568; font-size: 11px;">
          Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' })} IST
        </p>
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Change this to your verified domain email once you verify your domain on Resend
        // Until then onboarding@resend.dev works for testing
        from: 'BuggyButBrilliant <onboarding@resend.dev>',
        to: ['frombugs2brilliance@gmail.com'],
        reply_to: email,
        subject: `🐞 New Project Inquiry — ${name}`,
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(500).json({ error: 'Resend error', detail: data });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: 'Email send failed', detail: err.message });
  }
}
