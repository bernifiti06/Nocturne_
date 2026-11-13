// Funció serverless de Vercel: s'executa al servidor, així la clau mai és visible al navegador.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Mètode no permès.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Falta configurar la variable d'entorn GEMINI_API_KEY a Vercel." });
  }

  const { messages, diary, lang } = req.body || {};
  const LANGS = { ca: 'català', es: 'castellà', en: 'anglès' };
  const langName = LANGS[lang] || 'català';
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Falten missatges.' });
  }

  const context = typeof diary === 'string' && diary
    ? `\nContext del diari del son de la persona (usa'l només si és útil): ${diary.slice(0, 300)}`
    : '';

  const systemPrompt = `Ets Nocturne, un acompanyant tranquil per a adolescents que tenen dificultats per dormir. Respon en l'idioma de l'últim missatge de la persona (català, castellà o anglès); si no queda clar, fes servir ${langName}. Fes servir frases curtes (màxim 4) i un to càlid i serè. Parla només de son, descans, relaxació i hàbits nocturns; si et parlen d'un altre tema (política, notícies, deures, feina), redirigeix amb amabilitat cap al descans sense entrar-hi. No diagnostiquis ni donis consells mèdics. Si algú expressa un malestar greu o pensaments de fer-se mal, anima'l amb calidesa a parlar amb un adult de confiança i digues-li que pot trucar al 112 o al 024 (línia d'atenció a la conducta suïcida).${context}`;

  const contents = messages.slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: String(m.content || '').slice(0, 1000) }]
  }));

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: { thinkingConfig: { thinkingBudget: 0 } }
        })
      }
    );

    if (!r.ok) {
      console.error('Error de Gemini:', await r.text());
      return res.status(502).json({ error: 'Error contactant amb la IA.' });
    }

    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('\n')?.trim() || '';
    return res.status(200).json({ text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error contactant amb la IA.' });
  }
}
