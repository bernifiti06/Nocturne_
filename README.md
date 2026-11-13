# Nocturne

App per desconnectar abans de dormir: respiració guiada, entorn sonor amb temporitzador, un acompanyant d'IA, una rutina nocturna personalitzada i un diari del son amb gràfica setmanal.

Disponible en català, castellà i anglès, amb tema fosc i clar. S'instal·la al mòbil com una app (PWA) i s'obre també sense connexió.

## Estructura

```
nocturne/
├── index.html              → pantalles (Avui, Respira, Sons, Parla, Diari) i configuració
├── style.css               → disseny (tema fosc i clar)
├── app.js                  → lògica del client (idiomes, respiració, sons, diari, xat, rutina)
├── manifest.webmanifest    → dades per instal·lar l'app al mòbil
├── sw.js                   → mode sense connexió
├── icon-192.png, icon-512.png, apple-touch-icon.png
├── api/chat.js             → funció de servidor: acompanyant d'IA
├── api/rutina.js           → funció de servidor: rutina nocturna
└── package.json
```

La respiració, els sons i el diari funcionen al navegador. El diari i la configuració es desen només al dispositiu de cada persona.
L'acompanyant i la rutina criden `/api/chat` i `/api/rutina`, que són les úniques que parlen amb la IA: així la clau secreta no queda mai visible.

## Publicar-la

1. Puja tots els fitxers d'aquesta carpeta a un repositori de GitHub (la carpeta `api` ha de quedar amb `chat.js` i `rutina.js` a dins).
2. A Vercel: **Add New → Project**, importa el repositori.
3. A **Environment Variables** afegeix `GEMINI_API_KEY` amb la teva clau de Google AI Studio.
4. **Deploy**. Cada canvi que pugis a GitHub es publica sol.
