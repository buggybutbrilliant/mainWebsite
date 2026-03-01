import { useState, useRef, useEffect } from 'react';
import { BUGGY_SYSTEM, BRILLIANT_SYSTEM, INITIAL_BUGGY_MESSAGE } from './chatConfig';
import './chat-widget.css';

const MODEL = 'arcee-ai/trinity-large-preview:free';

async function callAI(messages, systemPrompt) {
  const res = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content }))
      ],
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'Sorry, something went wrong.';
}

async function submitToNetlify(formData) {
  await fetch('/.netlify/functions/chat-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || '',
      projectType: formData.projectType || '',
      datetime: formData.datetime || '',
    }),
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('buggy');
  const [messages, setMessages] = useState([INITIAL_BUGGY_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [brilliantData, setBrilliantData] = useState({});
  const [step, setStep] = useState(0);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      if (mode === 'buggy') {
        const reply = await callAI(newMessages, BUGGY_SYSTEM);
        if (reply.trim().toUpperCase() === 'HAND_OFF_TO_BRILLIANT') {
          setMode('brilliant');
          const handoff = { role: 'brilliant', content: "Great, let me take it from here! 💡 I'm Brilliant. I'll help set up a quick call. First — what's your full name?" };
          setMessages(prev => [...prev, handoff]);
        } else {
          setMessages(prev => [...prev, { role: 'buggy', content: reply }]);
        }
      } else {
        const steps = ['name', 'email', 'phone', 'projectType', 'datetime'];
        const newData = { ...brilliantData, [steps[step]]: input.trim() };
        setBrilliantData(newData);

        const reply = await callAI(newMessages, BRILLIANT_SYSTEM);
        if (reply.trim().toUpperCase() === 'SUBMIT_FORM') {
          await submitToNetlify(brilliantData);
          setMessages(prev => [...prev, { 
            role: 'brilliant', 
            content: "✅ All done! Your meeting request has been sent. We'll reach out within 24 hours. 💡 Is there anything else I can help you with?" 
          }]);
          setMode('buggy');
          setStep(0);
          setBrilliantData({});
        } else {
          setMessages(prev => [...prev, { role: 'brilliant', content: reply }]);
          setStep(prev => Math.min(prev + 1, 4));
        }
      }
    } catch {
      setMessages(prev => [...prev, { role: 'buggy', content: 'Oops, something went wrong. Please try again!' }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const reset = () => {
    setMode('buggy');
    setMessages([INITIAL_BUGGY_MESSAGE]);
    setInput('');
    setBrilliantData({});
    setStep(0);
  };

  return (
    <>
      <button className={`cw-fab${open ? ' cw-fab--open' : ''}`} onClick={() => setOpen(p => !p)} aria-label="Chat with us">
        {open ? <span className="cw-fab__close">✕</span> : <span className="cw-fab__icon">{mode === 'brilliant' ? '💡' : '🐞'}</span>}
        {!open && <span className="cw-fab__pulse" />}
      </button>

      <div className={`cw-panel${open ? ' cw-panel--open' : ''}`} role="dialog" aria-label="Chat">
        <div className="cw-header">
          <div className="cw-header__avatar">{mode === 'brilliant' ? '💡' : '🐞'}</div>
          <div>
            <div className="cw-header__name">{mode === 'brilliant' ? 'Brilliant' : 'Buggy'}</div>
            <div className="cw-header__status">
              <span className="cw-status-dot" />{mode === 'done' ? 'Done' : 'Online'}
            </div>
          </div>
          <button className="cw-reset" onClick={reset} title="Start over">↺</button>
        </div>

        <div className="cw-messages">
          {messages.map((m, i) => (
            <div key={i} className={`cw-msg cw-msg--${m.role === 'user' ? 'user' : 'ai'}`}>
              {m.role !== 'user' && (
                <span className="cw-msg__avatar">{m.role === 'brilliant' ? '💡' : '🐞'}</span>
              )}
              <div className={`cw-msg__bubble cw-msg__bubble--${m.role === 'brilliant' ? 'brilliant' : m.role === 'user' ? 'user' : 'buggy'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="cw-msg cw-msg--ai">
              <span className="cw-msg__avatar">{mode === 'brilliant' ? '💡' : '🐞'}</span>
              <div className="cw-msg__bubble cw-msg__bubble--buggy cw-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="cw-input-row">
          <input
            className="cw-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={mode === 'brilliant' ? 'Type your answer...' : 'Ask me anything...'}
            disabled={loading}
          />
          <button className="cw-send" onClick={sendMessage} disabled={loading || !input.trim()} aria-label="Send">→</button>
        </div>
      </div>
    </>
  );
}
