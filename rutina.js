// Funció serverless de Vercel per crear la rutina nocturna.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ valid: false, reason: 'Mètode no permès.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ valid: false, reason: "Falta configurar la variable d'entorn GEMINI_API_KEY a Vercel." });
  }

  const { habits, sopar, dormir, diary, lang } = req.body || {};
  const LANGS = { ca: 'català', es: 'castellà', en: 'anglès' };
  const langName = LANGS[lang] || 'català';
  if (!habits || !sopar || !dormir) {
    return res.status(400).json({ valid: false, reason: 'Falten dades.' });
  }

  const context = typeof diary === 'string' && diary ? `\nDiari del son: ${diary.slice(0, 300)}` : '';

  const prompt = `Ets un planificador de rutines nocturnes per a adolescents. Primer valida el text de "dificultats": si no té cap relació amb la son, les pantalles o les rutines de nit (és aleatori, ofensiu o d'un altre tema), respon NOMÉS amb aquest JSON: {"valid": false, "reason": "motiu breu i amable en ${langName}"}. Si és vàlid, crea una rutina pas a pas des d'uns 90 minuts abans de l'hora de dormir fins a l'hora de dormir, en trams de 15 a 30 minuts, tenint en compte l'hora de sopar i corregint les dificultats esmentades (i el diari del son si hi ha dades). Redacta cada activitat en ${langName}, en una frase curta. Respon NOMÉS amb aquest JSON, sense marques de codi: {"valid": true, "plan": [{"hora": "21:30", "activitat": "text breu"}]}

Hora de sopar: ${String(sopar).slice(0, 5)}. Hora de dormir: ${String(dormir).slice(0, 5)}. Dificultats: ${String(habits).slice(0, 500)}${context}`;

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: 'application/json', thinkingConfig: { thinkingBudget: 0 } }
        })
      }
    );

    if (!r.ok) {
      console.error('Error de Gemini:', await r.text());
      return res.status(502).json({ valid: false, reason: 'Error contactant amb la IA.' });
    }

    const data = await r.json();
    const raw = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '{}';
    return res.status(200).json(JSON.parse(raw));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ valid: false, reason: 'Error creant la rutina.' });
  }
}
