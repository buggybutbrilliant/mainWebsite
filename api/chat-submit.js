export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const { name, email, phone, projectType, datetime } = req.body;

  const html = `
    <div style="font-family: monospace; background: #0a0a0f; color: #f0f0f5; padding: 32px; border-radius: 12px; max-width: 600px;">
      <h2 style="color: #00e5ff; margin-bottom: 24px;">💡 New Call Booking</h2>

      <p style="color: #8888a0; font-size: 12px; margin-bottom: 24px;">
        Received via AI chat on buggybutbrilliant.com
      </p>

      <div style="border-top: 1px solid #222; padding-top: 16px; margin-bottom: 16px;">
        <p style="color: #555568; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Booking Details</p>
        <p><span style="color: #555568;">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${name || '—'}</p>
        <p><span style="color: #555568;">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${email || '—'}</p>
        <p><span style="color: #555568;">Phone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${phone || 'Not provided'}</p>
        <p><span style="color: #555568;">Project Type:&nbsp;&nbsp;</span>${projectType || '—'}</p>
        <p><span style="color: #555568;">Preferred Time:&nbsp;</span>${datetime || '—'}</p>
      </div>

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
        from: 'BuggyButBrilliant <onboarding@resend.dev>',
        to: ['frombugs2brilliance@gmail.com'],
        reply_to: email,
        subject: `💡 New Call Booking — ${name}`,
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
