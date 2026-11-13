const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const pad = n => String(n).padStart(2, '0');
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());

/* ---------- Idiomes ---------- */
const LOCALES = { ca: 'ca-ES', es: 'es-ES', en: 'en-GB' };
const I18N = {
  ca: {
    settings: 'Configuració', navAvui: 'Avui', navRespira: 'Respira', navSons: 'Sons', navParla: 'Parla', navDiari: 'Diari',
    lede: 'Una estona de calma abans de dormir.', lastNight: 'La darrera nit', weekAvgTitle: 'Mitjana setmanal',
    btnBreathe: 'Respirar', btnListen: 'Escoltar', btnTalk: 'Parlar', goalShort: 'Objectiu {h}',
    noNight: 'Encara no has registrat cap nit.', goJournal: 'Anar al diari',
    noWeek: 'Registra unes quantes nits i aquí veuràs la teva mitjana.',
    nightsOne: '{n} nit registrada els últims 7 dies', nightsMany: '{n} nits registrades els últims 7 dies',
    screensWord: 'pantalles', greetNight: 'Bona nit.', greetMorning: 'Bon dia.', greetAfternoon: 'Bona tarda.',
    eyBreathe: 'Respiració guiada', hBreathe: 'Respira.', ledeBreathe: 'Segueix el cercle. Una respiració lenta ajuda el cos a baixar el ritme.',
    patBox: 'Quadrada', pat478: '4-7-8', patCoh: 'Coherent',
    ph0: 'Inspira', ph1: 'Reté', ph2: 'Expira', ph3: 'Reté', ready: 'Preparat', start: 'Començar', stop: 'Aturar',
    cycleOne: '{n} cicle', cycleMany: '{n} cicles',
    eySounds: 'Entorn sonor', hSounds: 'Escolta.', ledeSounds: 'Sons generats en directe al navegador. Combina\u2019ls i ajusta cada volum.',
    tPluja: 'Pluja', dPluja: 'Soroll suau i constant', tOnades: 'Onades', dOnades: 'Va i ve, molt lent',
    tVent: 'Vent', dVent: 'Una brisa que canvia', tBatec: 'Batec', dBatec: 'Un pols lent, a 60 per minut',
    timer: 'Temporitzador', timerOff: 'Sense temporitzador', timerMin: '{n} minuts', timerAt: 'S\u2019aturarà a les {t}',
    eyTalk: 'Acompanyament', hTalk: 'Parla.', segChat: 'Conversa', segRoutine: 'Rutina',
    chatPh: 'Escriu com et sents o què et passa pel cap…',
    welcome: 'Hola. Sóc Nocturne. Si no pots dormir o tens la ment accelerada, explica-m\u2019ho i ho anem baixant junts.',
    chatNoAnswer: 'Ara mateix no et puc respondre.', chatOffline: 'No tinc connexió ara mateix. Torna-ho a provar d\u2019aquí un moment.',
    rHabits: 'Què et costa de les nits?', rHabitsPh: 'Per exemple: miro el mòbil al llit fins tard…',
    rDinner: 'Sopar', rSleep: 'Dormir', rCreate: 'Crear la meva rutina', rCreating: 'Creant…',
    rFill: 'Omple els tres camps per crear la rutina.', rError: 'No he pogut crear la rutina. Torna-ho a provar.',
    eyJournal: 'Diari del son', hJournal: 'Diari.', ledeJournal: 'Anota com has dormit. Veure\u2019t la setmana ajuda a entendre què funciona.',
    thisWeek: 'Aquesta setmana', avgWord: 'Mitjana {h}', noData: 'Sense dades', goalLine: 'Línia puntejada: {h}',
    logNight: 'Registrar una nit', wakeDay: 'Dia en què t\u2019has despertat', bedAt: 'Vaig dormir a les', wakeAt: 'Em vaig llevar a les', rest: 'Com he descansat',
    q1: 'Molt malament', q2: 'Poc reparador', q3: 'Regular', q4: 'Bé', q5: 'Excel·lent',
    screensLabel: 'Pantalles abans de dormir', scr0: 'Cap', scr1: 'Menys de 30 min', scr2: '30–60 min', scr3: 'Més d\u2019una hora',
    noteLabel: 'Nota (opcional)', notePh: 'Cafè tard, examen, entrenament…', saveNight: 'Desar la nit',
    history: 'Històric', noEntries: 'Encara no hi ha cap nit registrada.', saved: 'Nit desada', fillNight: 'Omple el dia i les dues hores', del: 'Esborrar',
    stTitle: 'Configuració', stLang: 'Idioma', stLook: 'Aspecte', dark: 'Cel nocturn', light: 'Claredat diürna', stGoal: 'Objectiu de son', stData: 'Les teves dades',
    export: 'Exportar el diari (CSV)', erase: 'Esborrar el diari',
    confirmErase: 'Segur que vols esborrar tot el diari? No es pot desfer.', exported: 'Diari exportat', erased: 'Diari esborrat',
    stInstall: 'Instal·lar al mòbil',
    install: 'Android: Chrome › Menú (3 punts) › Instal·lar aplicació. iOS: Safari › Compartir › Afegir a la pantalla d\u2019inici.',
    about: 'Una app per desconnectar abans de dormir. El diari es desa només en aquest dispositiu.', close: 'Tancar'
  },
  es: {
    settings: 'Configuración', navAvui: 'Hoy', navRespira: 'Respira', navSons: 'Sonidos', navParla: 'Habla', navDiari: 'Diario',
    lede: 'Un rato de calma antes de dormir.', lastNight: 'La última noche', weekAvgTitle: 'Media semanal',
    btnBreathe: 'Respirar', btnListen: 'Escuchar', btnTalk: 'Hablar', goalShort: 'Objetivo {h}',
    noNight: 'Todavía no has registrado ninguna noche.', goJournal: 'Ir al diario',
    noWeek: 'Registra algunas noches y aquí verás tu media.',
    nightsOne: '{n} noche registrada en los últimos 7 días', nightsMany: '{n} noches registradas en los últimos 7 días',
    screensWord: 'pantallas', greetNight: 'Buenas noches.', greetMorning: 'Buenos días.', greetAfternoon: 'Buenas tardes.',
    eyBreathe: 'Respiración guiada', hBreathe: 'Respira.', ledeBreathe: 'Sigue el círculo. Una respiración lenta ayuda al cuerpo a bajar el ritmo.',
    patBox: 'Cuadrada', pat478: '4-7-8', patCoh: 'Coherente',
    ph0: 'Inspira', ph1: 'Mantén', ph2: 'Espira', ph3: 'Mantén', ready: 'Listo', start: 'Empezar', stop: 'Parar',
    cycleOne: '{n} ciclo', cycleMany: '{n} ciclos',
    eySounds: 'Entorno sonoro', hSounds: 'Escucha.', ledeSounds: 'Sonidos generados en directo en el navegador. Combínalos y ajusta cada volumen.',
    tPluja: 'Lluvia', dPluja: 'Ruido suave y constante', tOnades: 'Olas', dOnades: 'Va y viene, muy lento',
    tVent: 'Viento', dVent: 'Una brisa que cambia', tBatec: 'Latido', dBatec: 'Un pulso lento, a 60 por minuto',
    timer: 'Temporizador', timerOff: 'Sin temporizador', timerMin: '{n} minutos', timerAt: 'Se detendrá a las {t}',
    eyTalk: 'Acompañamiento', hTalk: 'Habla.', segChat: 'Conversación', segRoutine: 'Rutina',
    chatPh: 'Escribe cómo te sientes o qué te ronda la cabeza…',
    welcome: 'Hola. Soy Nocturne. Si no puedes dormir o tienes la mente acelerada, cuéntamelo y lo vamos bajando juntos.',
    chatNoAnswer: 'Ahora mismo no puedo responderte.', chatOffline: 'No tengo conexión ahora mismo. Inténtalo de nuevo en un momento.',
    rHabits: '¿Qué se te hace difícil de las noches?', rHabitsPh: 'Por ejemplo: miro el móvil en la cama hasta tarde…',
    rDinner: 'Cena', rSleep: 'Dormir', rCreate: 'Crear mi rutina', rCreating: 'Creando…',
    rFill: 'Rellena los tres campos para crear la rutina.', rError: 'No he podido crear la rutina. Inténtalo de nuevo.',
    eyJournal: 'Diario del sueño', hJournal: 'Diario.', ledeJournal: 'Anota cómo has dormido. Ver tu semana ayuda a entender qué funciona.',
    thisWeek: 'Esta semana', avgWord: 'Media {h}', noData: 'Sin datos', goalLine: 'Línea punteada: {h}',
    logNight: 'Registrar una noche', wakeDay: 'Día en que te despertaste', bedAt: 'Me dormí a las', wakeAt: 'Me levanté a las', rest: 'Cómo he descansado',
    q1: 'Muy mal', q2: 'Poco reparador', q3: 'Regular', q4: 'Bien', q5: 'Excelente',
    screensLabel: 'Pantallas antes de dormir', scr0: 'Ninguna', scr1: 'Menos de 30 min', scr2: '30–60 min', scr3: 'Más de una hora',
    noteLabel: 'Nota (opcional)', notePh: 'Café tarde, examen, entrenamiento…', saveNight: 'Guardar la noche',
    history: 'Histórico', noEntries: 'Todavía no hay ninguna noche registrada.', saved: 'Noche guardada', fillNight: 'Rellena el día y las dos horas', del: 'Borrar',
    stTitle: 'Configuración', stLang: 'Idioma', stLook: 'Aspecto', dark: 'Cielo nocturno', light: 'Claridad diurna', stGoal: 'Objetivo de sueño', stData: 'Tus datos',
    export: 'Exportar el diario (CSV)', erase: 'Borrar el diario',
    confirmErase: '¿Seguro que quieres borrar todo el diario? No se puede deshacer.', exported: 'Diario exportado', erased: 'Diario borrado',
    stInstall: 'Instalar en el móvil',
    install: 'Android: Chrome › Menú (3 puntos) › Instalar aplicación. iOS: Safari › Compartir › Añadir a pantalla de inicio.',
    about: 'Una app para desconectar antes de dormir. El diario se guarda solo en este dispositivo.', close: 'Cerrar'
  },
  en: {
    settings: 'Settings', navAvui: 'Today', navRespira: 'Breathe', navSons: 'Sounds', navParla: 'Talk', navDiari: 'Journal',
    lede: 'A moment of calm before bed.', lastNight: 'Last night', weekAvgTitle: 'Weekly average',
    btnBreathe: 'Breathe', btnListen: 'Listen', btnTalk: 'Talk', goalShort: 'Goal {h}',
    noNight: 'You haven\u2019t logged a night yet.', goJournal: 'Go to journal',
    noWeek: 'Log a few nights and your average will show up here.',
    nightsOne: '{n} night logged in the last 7 days', nightsMany: '{n} nights logged in the last 7 days',
    screensWord: 'screens', greetNight: 'Good night.', greetMorning: 'Good morning.', greetAfternoon: 'Good afternoon.',
    eyBreathe: 'Guided breathing', hBreathe: 'Breathe.', ledeBreathe: 'Follow the circle. Slow breathing helps your body wind down.',
    patBox: 'Box', pat478: '4-7-8', patCoh: 'Coherent',
    ph0: 'Breathe in', ph1: 'Hold', ph2: 'Breathe out', ph3: 'Hold', ready: 'Ready', start: 'Start', stop: 'Stop',
    cycleOne: '{n} cycle', cycleMany: '{n} cycles',
    eySounds: 'Soundscape', hSounds: 'Listen.', ledeSounds: 'Sounds generated live in your browser. Mix them and set each volume.',
    tPluja: 'Rain', dPluja: 'Soft, steady noise', tOnades: 'Waves', dOnades: 'Slowly coming and going',
    tVent: 'Wind', dVent: 'A shifting breeze', tBatec: 'Heartbeat', dBatec: 'A slow pulse, 60 per minute',
    timer: 'Timer', timerOff: 'No timer', timerMin: '{n} minutes', timerAt: 'Stops at {t}',
    eyTalk: 'Companion', hTalk: 'Talk.', segChat: 'Chat', segRoutine: 'Routine',
    chatPh: 'Write how you feel or what\u2019s on your mind…',
    welcome: 'Hi. I\u2019m Nocturne. If you can\u2019t sleep or your mind is racing, tell me and we\u2019ll slow things down together.',
    chatNoAnswer: 'I can\u2019t reply right now.', chatOffline: 'I\u2019m offline right now. Please try again in a moment.',
    rHabits: 'What makes nights hard?', rHabitsPh: 'For example: I scroll my phone in bed until late…',
    rDinner: 'Dinner', rSleep: 'Sleep', rCreate: 'Create my routine', rCreating: 'Creating…',
    rFill: 'Fill in all three fields to create the routine.', rError: 'I couldn\u2019t create the routine. Please try again.',
    eyJournal: 'Sleep journal', hJournal: 'Journal.', ledeJournal: 'Note how you slept. Seeing your week helps you understand what works.',
    thisWeek: 'This week', avgWord: 'Average {h}', noData: 'No data', goalLine: 'Dotted line: {h}',
    logNight: 'Log a night', wakeDay: 'Day you woke up', bedAt: 'I went to bed at', wakeAt: 'I got up at', rest: 'How rested I feel',
    q1: 'Terrible', q2: 'Not restful', q3: 'So-so', q4: 'Good', q5: 'Excellent',
    screensLabel: 'Screens before bed', scr0: 'None', scr1: 'Under 30 min', scr2: '30–60 min', scr3: 'Over an hour',
    noteLabel: 'Note (optional)', notePh: 'Late coffee, exam, workout…', saveNight: 'Save night',
    history: 'History', noEntries: 'No nights logged yet.', saved: 'Night saved', fillNight: 'Fill in the day and both times', del: 'Delete',
    stTitle: 'Settings', stLang: 'Language', stLook: 'Appearance', dark: 'Night sky', light: 'Daylight', stGoal: 'Sleep goal', stData: 'Your data',
    export: 'Export journal (CSV)', erase: 'Erase journal',
    confirmErase: 'Erase the whole journal? This can\u2019t be undone.', exported: 'Journal exported', erased: 'Journal erased',
    stInstall: 'Install on your phone',
    install: 'Android: Chrome › Menu (3 dots) › Install app. iOS: Safari › Share › Add to Home Screen.',
    about: 'An app to unwind before bed. Your journal is stored only on this device.', close: 'Close'
  }
};


Object.assign(I18N.ca, {
  tipTitle: 'Consell d\u2019avui', streakN: '{n} nits seguides',
  tip0: 'Abaixa la llum de l\u2019habitació una hora abans d\u2019anar a dormir.',
  tip1: 'Intenta anar a dormir i llevar-te a la mateixa hora, també el cap de setmana.',
  tip2: 'Carrega el mòbil lluny del llit: així no el tens a mà.',
  tip3: 'Una dutxa tèbia abans de dormir ajuda el cos a relaxar-se.',
  tip4: 'Deixa la cafeïna per al matí o per a la primera hora de la tarda.',
  tip5: 'Escriu en un paper el que et preocupa i deixa-ho per a demà.',
  tip6: 'Si en 20 minuts no t\u2019adorms, aixeca\u2019t i fes alguna cosa tranquil·la amb poca llum.'
});
Object.assign(I18N.es, {
  tipTitle: 'Consejo de hoy', streakN: '{n} noches seguidas',
  tip0: 'Baja la luz de la habitación una hora antes de irte a dormir.',
  tip1: 'Intenta acostarte y levantarte a la misma hora, también el fin de semana.',
  tip2: 'Carga el móvil lejos de la cama: así no lo tienes a mano.',
  tip3: 'Una ducha templada antes de dormir ayuda al cuerpo a relajarse.',
  tip4: 'Deja la cafeína para la mañana o la primera hora de la tarde.',
  tip5: 'Escribe en un papel lo que te preocupa y déjalo para mañana.',
  tip6: 'Si en 20 minutos no te duermes, levántate y haz algo tranquilo con poca luz.'
});
Object.assign(I18N.en, {
  tipTitle: 'Tip of the day', streakN: '{n}-night streak',
  tip0: 'Dim the lights in your room an hour before bed.',
  tip1: 'Try to go to bed and get up at the same time, even on weekends.',
  tip2: 'Charge your phone away from the bed so it isn\u2019t within reach.',
  tip3: 'A warm shower before bed helps your body unwind.',
  tip4: 'Keep caffeine for the morning or early afternoon.',
  tip5: 'Write down what\u2019s worrying you and leave it for tomorrow.',
  tip6: 'If you\u2019re still awake after 20 minutes, get up and do something calm in dim light.'
});

/* ---------- Configuració (localStorage) ---------- */
const SKEY = 'nocturne.settings.v1';
let settings = { lang: null, theme: 'dark', goal: 8 };
try { Object.assign(settings, JSON.parse(localStorage.getItem(SKEY) || '{}')); } catch (e) { /* res */ }
if (!I18N[settings.lang]) {
  const nav = (navigator.language || 'ca').slice(0, 2);
  settings.lang = I18N[nav] ? nav : 'ca';
}
function saveSettings() { try { localStorage.setItem(SKEY, JSON.stringify(settings)); } catch (e) { /* mode privat */ } }

const t = (k, v) => {
  let s = (I18N[settings.lang] && I18N[settings.lang][k]) ?? I18N.ca[k] ?? k;
  if (v) for (const name in v) s = s.replace('{' + name + '}', v[name]);
  return s;
};
const locale = () => LOCALES[settings.lang];
const num = (x, d = 1) => x.toFixed(d).replace('.', settings.lang === 'en' ? '.' : ',');
const fmtH = h => { const m = Math.round(h * 60); return Math.floor(m / 60) + ' h ' + pad(m % 60); };
const goalText = () => num(settings.goal).replace(/[.,]0$/, '') + ' h';

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- Navegació ---------- */
function go(tab) {
  $$('.screen').forEach(s => s.classList.toggle('active', s.id === 'screen-' + tab));
  $$('.dock button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  window.scrollTo({ top: 0 });
  if (tab === 'avui') renderHome();
  if (tab === 'diari') renderDiary();
}
$$('.dock button').forEach(b => b.addEventListener('click', () => go(b.dataset.tab)));
$$('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));

/* ---------- Diari del son ---------- */
const KEY = 'nocturne.diari.v1';
let diary = [];
try { diary = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { diary = []; }
function persist() { try { localStorage.setItem(KEY, JSON.stringify(diary)); } catch (e) { /* mode privat */ } }

function hoursBetween(bed, wake) {
  const [bh, bm] = bed.split(':').map(Number);
  const [wh, wm] = wake.split(':').map(Number);
  let mins = (wh * 60 + wm) - (bh * 60 + bm);
  if (mins <= 0) mins += 1440;
  return mins / 60;
}
function last7() {
  const out = [];
  for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); out.push(d); }
  return out;
}
function weekEntries() { const keys = new Set(last7().map(ymd)); return diary.filter(e => keys.has(e.date)); }
function weekAverage() {
  const w = weekEntries();
  if (!w.length) return null;
  return { hours: w.reduce((a, e) => a + e.hours, 0) / w.length, quality: w.reduce((a, e) => a + e.quality, 0) / w.length, n: w.length };
}
function diarySummary() {
  const a = weekAverage();
  if (!a) return '';
  return 'Mitjana de la darrera setmana: ' + a.hours.toFixed(1) + ' h de son en ' + a.n + ' nits registrades; qualitat mitjana ' + a.quality.toFixed(1) + '/5. Objectiu de son: ' + settings.goal + ' h.';
}
const screensText = e => (typeof e.screens === 'number' ? t('scr' + e.screens) : (e.screens || ''));
function dotsEl(q) {
  const d = document.createElement('div'); d.className = 'dots';
  for (let i = 1; i <= 5; i++) { const s = document.createElement('i'); if (i <= q) s.className = 'on'; d.appendChild(s); }
  return d;
}
const dayLetters = d => d.toLocaleDateString(locale(), { weekday: 'short' }).replace('.', '').slice(0, 2);

function renderChart() {
  const el = $('#chart');
  el.style.setProperty('--goal-pos', Math.min(settings.goal / 10, 1) * 100 + '%');
  const map = Object.fromEntries(diary.map(e => [e.date, e]));
  el.innerHTML = '';
  last7().forEach(d => {
    const e = map[ymd(d)];
    const col = document.createElement('div'); col.className = 'bar-col';
    const val = document.createElement('span'); val.className = 'bar-val'; val.textContent = e ? num(e.hours) : '';
    const track = document.createElement('div'); track.className = 'bar-track';
    const fill = document.createElement('div'); fill.className = 'bar-fill' + (e ? ' q' + e.quality : '');
    fill.style.height = e ? Math.min(e.hours / 10, 1) * 100 + '%' : '0%';
    track.appendChild(fill);
    const lab = document.createElement('span'); lab.className = 'bar-lab'; lab.textContent = dayLetters(d);
    col.append(val, track, lab);
    el.appendChild(col);
  });
  const a = weekAverage();
  $('#week-avg').textContent = a ? t('avgWord', { h: fmtH(a.hours) }) : t('noData');
  $('#goal-note').textContent = t('goalLine', { h: goalText() });
}
function renderList() {
  const list = $('#d-list'); list.innerHTML = '';
  if (!diary.length) {
    const p = document.createElement('p'); p.className = 'meta'; p.textContent = t('noEntries'); list.appendChild(p); return;
  }
  [...diary].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14).forEach(e => {
    const row = document.createElement('div'); row.className = 'entry';
    const left = document.createElement('div');
    const main = document.createElement('div'); main.className = 'entry-main'; main.textContent = fmtH(e.hours);
    const sub = document.createElement('div'); sub.className = 'entry-sub';
    const date = new Date(e.date + 'T12:00:00').toLocaleDateString(locale(), { weekday: 'short', day: 'numeric', month: 'short' });
    sub.textContent = date + ' · ' + e.bed + '–' + e.wake + ' · ' + t('q' + e.quality) + (e.note ? ' · ' + e.note : '');
    left.append(main, sub);
    const del = document.createElement('button'); del.className = 'entry-del'; del.setAttribute('aria-label', t('del')); del.textContent = '×';
    del.addEventListener('click', () => { diary = diary.filter(x => x.id !== e.id); persist(); renderDiary(); });
    row.append(left, del);
    list.appendChild(row);
  });
}
let quality = 3;
function renderDiary() { renderChart(); renderList(); $('#q-label').textContent = t('q' + quality); }

$$('#d-quality button').forEach(b => b.addEventListener('click', () => {
  quality = Number(b.dataset.q);
  $$('#d-quality button').forEach(x => x.classList.toggle('on', x === b));
  $('#q-label').textContent = t('q' + quality);
}));
$('#d-date').value = ymd(new Date());
$('#d-save').addEventListener('click', () => {
  const date = $('#d-date').value, bed = $('#d-bed').value, wake = $('#d-wake').value;
  if (!date || !bed || !wake) { toast(t('fillNight')); return; }
  diary = diary.filter(e => e.date !== date);
  diary.push({ id: Date.now(), date, bed, wake, hours: hoursBetween(bed, wake), quality, screens: Number($('#d-screens').value), note: $('#d-note').value.trim() });
  persist();
  $('#d-note').value = '';
  renderDiary();
  toast(t('saved'));
});
function renderScreensSelect() {
  const sel = $('#d-screens'), cur = sel.value || '0';
  sel.innerHTML = '';
  for (let i = 0; i < 4; i++) { const o = document.createElement('option'); o.value = i; o.textContent = t('scr' + i); sel.appendChild(o); }
  sel.value = cur;
}

/* ---------- Avui ---------- */
function streak() {
  const have = new Set(diary.map(e => e.date));
  const d = new Date();
  if (!have.has(ymd(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (have.has(ymd(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function ringSVG(p) {
  const C = 2 * Math.PI * 44;
  return '<svg viewBox="0 0 100 100" class="ring" aria-hidden="true">' +
    '<circle cx="50" cy="50" r="44" class="ring-bg"/>' +
    '<circle cx="50" cy="50" r="44" class="ring-fg" stroke-dasharray="' + C.toFixed(2) + '" stroke-dashoffset="' + (C * (1 - p)).toFixed(2) + '" transform="rotate(-90 50 50)"/>' +
    '<text x="50" y="56" text-anchor="middle" class="ring-t">' + Math.round(p * 100) + '%</text></svg>';
}
function renderHome() {
  const now = new Date(), h = now.getHours();
  $('#today-date').textContent = now.toLocaleDateString(locale(), { weekday: 'long', day: 'numeric', month: 'long' });
  $('#greet').textContent = h < 6 ? t('greetNight') : h < 13 ? t('greetMorning') : h < 20 ? t('greetAfternoon') : t('greetNight');

  const hero = $('#home-last'); hero.innerHTML = '';
  const head = document.createElement('div'); head.className = 'card-head';
  const hs = document.createElement('span'); hs.textContent = t('lastNight'); head.appendChild(hs);
  const latest = [...diary].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (latest) {
    const row = document.createElement('div'); row.className = 'hero-row';
    const left = document.createElement('div');
    const big = document.createElement('div'); big.className = 'big'; big.textContent = fmtH(latest.hours);
    const sub = document.createElement('p'); sub.className = 'meta'; sub.style.marginTop = '10px';
    sub.textContent = t('q' + latest.quality) + ' · ' + t('screensWord') + ': ' + screensText(latest).toLowerCase();
    left.append(head, big, sub, dotsEl(latest.quality));
    const ring = document.createElement('div');
    ring.innerHTML = ringSVG(Math.min(latest.hours / settings.goal, 1));
    row.append(left, ring);
    hero.appendChild(row);
  } else {
    const p = document.createElement('p'); p.className = 'meta'; p.textContent = t('noNight');
    const b = document.createElement('button'); b.className = 'pill'; b.style.cssText = 'margin-top:14px;width:100%'; b.textContent = t('goJournal');
    b.addEventListener('click', () => go('diari'));
    hero.append(head, p, b);
  }

  const wk = $('#home-week'); wk.innerHTML = '';
  const h2 = document.createElement('div'); h2.className = 'card-head';
  const s1 = document.createElement('span'); s1.textContent = t('weekAvgTitle');
  const s2 = document.createElement('span'); s2.textContent = t('goalShort', { h: goalText() });
  h2.append(s1, s2); wk.appendChild(h2);
  const a = weekAverage();
  if (a) {
    const big = document.createElement('div'); big.className = 'big'; big.textContent = fmtH(a.hours);
    const sub = document.createElement('p'); sub.className = 'meta'; sub.style.marginTop = '10px';
    sub.textContent = t(a.n === 1 ? 'nightsOne' : 'nightsMany', { n: a.n });
    wk.append(big, sub);
    const st = streak();
    if (st >= 2) { const c = document.createElement('span'); c.className = 'chip'; c.textContent = '🔥 ' + t('streakN', { n: st }); wk.appendChild(c); }
  } else {
    const p = document.createElement('p'); p.className = 'meta'; p.textContent = t('noWeek'); wk.appendChild(p);
  }

  const tip = $('#home-tip'); tip.innerHTML = '';
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 864e5);
  const ti = document.createElement('span'); ti.className = 'ti'; ti.textContent = '💡';
  const box = document.createElement('div');
  const th = document.createElement('div'); th.className = 'card-head'; th.textContent = t('tipTitle');
  const tp = document.createElement('p'); tp.textContent = t('tip' + (dayOfYear % 7));
  box.append(th, tp); tip.append(ti, box);
}

/* ---------- Respiració ---------- */
const PATTERNS = { box: [4, 4, 4, 4], '478': [4, 7, 8, 0], coh: [5, 0, 5, 0] };
let pat = 'box';
const br = { on: false, i: 0, cycles: 0, timer: null, tick: null };
let wakeLock = null;
async function lockScreen() { try { if ('wakeLock' in navigator) wakeLock = await navigator.wakeLock.request('screen'); } catch (e) { /* no passa res */ } }
function unlockScreen() { try { if (wakeLock) wakeLock.release(); } catch (e) { /* res */ } wakeLock = null; }

function cyclesText() { return t(br.cycles === 1 ? 'cycleOne' : 'cycleMany', { n: br.cycles }); }
function runPhase() {
  const durs = PATTERNS[pat];
  let guard = 0;
  while (durs[br.i] === 0 && guard++ < 4) { br.i = (br.i + 1) % 4; if (br.i === 0) br.cycles++; }
  const dur = durs[br.i], rings = $('#rings');
  $('#b-phase').textContent = t('ph' + br.i);
  $('#b-cycles').textContent = cyclesText();
  rings.style.transition = 'transform ' + dur + 's ease-in-out';
  if (br.i === 0) rings.style.transform = 'scale(1)';
  if (br.i === 2) rings.style.transform = 'scale(.55)';
  let left = dur;
  $('#b-count').textContent = left;
  clearInterval(br.tick);
  br.tick = setInterval(() => { left--; if (left >= 0) $('#b-count').textContent = left; }, 1000);
  br.timer = setTimeout(() => {
    br.i = (br.i + 1) % 4;
    if (br.i === 0) br.cycles++;
    if (br.on) runPhase();
  }, dur * 1000);
}
function resetBreathUI() {
  $('#b-toggle').textContent = br.on ? t('stop') : t('start');
  if (!br.on) {
    $('#b-phase').textContent = t('ready');
    $('#b-count').innerHTML = '&nbsp;';
    $('#b-cycles').textContent = cyclesText();
  }
}
function stopBreath() {
  br.on = false;
  clearTimeout(br.timer); clearInterval(br.tick);
  unlockScreen();
  const rings = $('#rings');
  rings.style.transition = 'transform 1.2s ease';
  rings.style.transform = 'scale(.55)';
  resetBreathUI();
}
$('#b-toggle').addEventListener('click', () => {
  if (br.on) { stopBreath(); return; }
  br.on = true; br.i = 0; br.cycles = 0;
  $('#b-toggle').textContent = t('stop');
  lockScreen();
  runPhase();
});
$$('#pattern-seg button').forEach(b => b.addEventListener('click', () => {
  pat = b.dataset.pat;
  $$('#pattern-seg button').forEach(x => x.classList.toggle('on', x === b));
  if (br.on) stopBreath();
}));
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && br.on) lockScreen(); });

/* ---------- Sons (Web Audio, sense fitxers externs) ---------- */
const TRACK_IDS = ['pluja', 'onades', 'vent', 'batec'];
const TRACK_ICO = { pluja: ['🌧️', 'rgba(59,130,246,.16)'], onades: ['🌊', 'rgba(15,168,154,.16)'], vent: ['🍃', 'rgba(34,197,94,.16)'], batec: ['💓', 'rgba(229,82,138,.16)'] };
const vols = { pluja: 50, onades: 50, vent: 50, batec: 50 };
let actx = null;
const live = {};
const audioCtx = () => (actx || (actx = new (window.AudioContext || window.webkitAudioContext)()));

function noiseBuffer(c) {
  const n = 2 * c.sampleRate, buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; d[i] = (last + 0.02 * w) / 1.02; last = d[i]; d[i] *= 3.5; }
  return buf;
}
const volOf = id => vols[id] / 100 * 0.6;

function startTrack(id) {
  const c = audioCtx(); if (c.state === 'suspended') c.resume();
  const gain = c.createGain(); gain.gain.value = 0; gain.connect(c.destination);
  const n = { gain, stops: [] };
  const noise = () => { const s = c.createBufferSource(); s.buffer = noiseBuffer(c); s.loop = true; s.start(); n.stops.push(s); return s; };
  const lfo = (freq, amount, target) => {
    const o = c.createOscillator(); o.frequency.value = freq;
    const g = c.createGain(); g.gain.value = amount;
    o.connect(g); g.connect(target); o.start(); n.stops.push(o);
  };
  if (id === 'pluja') {
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1100;
    noise().connect(f); f.connect(gain);
  } else if (id === 'onades') {
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 600;
    lfo(0.11, 420, f.frequency);
    noise().connect(f); f.connect(gain);
  } else if (id === 'vent') {
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 450; f.Q.value = 0.7;
    lfo(0.07, 260, f.frequency);
    noise().connect(f); f.connect(gain);
  } else if (id === 'batec') {
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 62;
    const pulse = c.createGain(); pulse.gain.value = 0.5;
    lfo(1, 0.5, pulse.gain);
    o.connect(pulse); pulse.connect(gain); o.start(); n.stops.push(o);
  }
  live[id] = n;
  gain.gain.linearRampToValueAtTime(volOf(id), c.currentTime + 0.8);
  if (!sleepT) armTimer();
}
function stopTrack(id) {
  const n = live[id]; if (!n) return;
  n.gain.gain.linearRampToValueAtTime(0, actx.currentTime + 0.5);
  setTimeout(() => n.stops.forEach(s => { try { s.stop(); } catch (e) { /* ja aturat */ } }), 600);
  delete live[id];
  if (!Object.keys(live).length) clearTimer();
}
function renderTracks() {
  const wrap = $('#tracks'); wrap.innerHTML = '';
  TRACK_IDS.forEach(id => {
    const cap = id.charAt(0).toUpperCase() + id.slice(1);
    const row = document.createElement('div'); row.className = 'track';
    row.innerHTML =
      '<div class="track-top"><div class="track-ico"></div><div class="track-txt"><div class="track-name"></div><div class="track-desc"></div></div>' +
      '<button class="switch" role="switch"></button></div><input type="range" min="0" max="100">';
    const ico = $('.track-ico', row); ico.textContent = TRACK_ICO[id][0]; ico.style.setProperty('--ico', TRACK_ICO[id][1]);
    $('.track-name', row).textContent = t('t' + cap);
    $('.track-desc', row).textContent = t('d' + cap);
    const sw = $('.switch', row), rng = $('input', row);
    sw.setAttribute('aria-label', t('t' + cap));
    sw.setAttribute('aria-checked', live[id] ? 'true' : 'false');
    if (live[id]) sw.classList.add('on');
    rng.value = vols[id];
    sw.addEventListener('click', () => {
      if (live[id]) { stopTrack(id); sw.classList.remove('on'); sw.setAttribute('aria-checked', 'false'); }
      else { startTrack(id); sw.classList.add('on'); sw.setAttribute('aria-checked', 'true'); }
    });
    rng.addEventListener('input', () => {
      vols[id] = Number(rng.value);
      if (live[id]) live[id].gain.gain.linearRampToValueAtTime(volOf(id), actx.currentTime + 0.15);
    });
    wrap.appendChild(row);
  });
}

/* Temporitzador de son */
let sleepMin = 0, sleepT = null, sleepAt = null;
function renderTimerSelect() {
  const sel = $('#sleep-timer');
  sel.innerHTML = '';
  [0, 15, 30, 60, 90].forEach(m => {
    const o = document.createElement('option'); o.value = m;
    o.textContent = m === 0 ? t('timerOff') : t('timerMin', { n: m });
    sel.appendChild(o);
  });
  sel.value = sleepMin;
}
function timerNote() {
  $('#timer-note').textContent = sleepAt ? t('timerAt', { t: pad(sleepAt.getHours()) + ':' + pad(sleepAt.getMinutes()) }) : '';
}
function clearTimer() { clearTimeout(sleepT); sleepT = null; sleepAt = null; timerNote(); }
function armTimer() {
  clearTimer();
  if (sleepMin > 0 && Object.keys(live).length) {
    sleepAt = new Date(Date.now() + sleepMin * 60000);
    sleepT = setTimeout(() => { Object.keys(live).forEach(stopTrack); clearTimer(); renderTracks(); }, sleepMin * 60000);
    timerNote();
  }
}
$('#sleep-timer').addEventListener('change', e => { sleepMin = Number(e.target.value); armTimer(); });

/* ---------- Parla: xat i rutina (criden les funcions /api) ---------- */
$$('#parla-seg button').forEach(b => b.addEventListener('click', () => {
  $$('#parla-seg button').forEach(x => x.classList.toggle('on', x === b));
  $('#sub-chat').hidden = b.dataset.sub !== 'chat';
  $('#sub-rutina').hidden = b.dataset.sub !== 'rutina';
}));

let history = [];
function bubble(kind, text) {
  const box = $('#chat-box');
  const d = document.createElement('div'); d.className = 'bubble ' + kind; d.textContent = text;
  box.appendChild(d); box.scrollTop = box.scrollHeight;
  return d;
}
function resetWelcome() { if (!history.length) { $('#chat-box').innerHTML = ''; bubble('bot', t('welcome')); } }

async function sendChat() {
  const input = $('#chat-input'), text = input.value.trim();
  if (!text) return;
  input.value = '';
  bubble('me', text);
  history.push({ role: 'user', content: text });
  const wait = bubble('bot wait', '…');
  try {
    const r = await fetch('/api/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, diary: diarySummary(), lang: settings.lang })
    });
    const data = await r.json();
    wait.classList.remove('wait');
    wait.textContent = data.text || t('chatNoAnswer');
    if (data.text) history.push({ role: 'assistant', content: data.text });
  } catch (e) {
    wait.classList.remove('wait');
    wait.textContent = t('chatOffline');
  }
}
$('#chat-send').addEventListener('click', sendChat);
$('#chat-input').addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });

$('#r-go').addEventListener('click', async () => {
  const habits = $('#r-habits').value.trim(), sopar = $('#r-sopar').value, dormir = $('#r-dormir').value;
  const out = $('#r-out'); out.innerHTML = '';
  const note = msg => { const p = document.createElement('p'); p.className = 'note'; p.textContent = msg; out.appendChild(p); };
  if (!habits || !sopar || !dormir) { note(t('rFill')); return; }
  const btn = $('#r-go'); btn.disabled = true; btn.textContent = t('rCreating');
  try {
    const r = await fetch('/api/rutina', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ habits, sopar, dormir, diary: diarySummary(), lang: settings.lang })
    });
    const data = await r.json();
    if (data.valid === true && Array.isArray(data.plan)) {
      const card = document.createElement('div'); card.className = 'card';
      const ol = document.createElement('ol'); ol.className = 'timeline';
      data.plan.forEach(s => {
        const li = document.createElement('li');
        const tm = document.createElement('span'); tm.className = 't'; tm.textContent = s.hora;
        const a = document.createElement('span'); a.textContent = s.activitat;
        li.append(tm, a); ol.appendChild(li);
      });
      card.appendChild(ol); out.appendChild(card);
    } else {
      note(data.reason || t('rError'));
    }
  } catch (e) {
    note(t('rError'));
  }
  btn.disabled = false; btn.textContent = t('rCreate');
});

/* ---------- Panell de configuració ---------- */
const dlg = $('#settings');
$('#open-settings').addEventListener('click', () => { syncSettingsUI(); dlg.showModal(); });
$('#close-settings').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

function syncSettingsUI() {
  $$('#set-lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === settings.lang));
  $$('#set-theme button').forEach(b => b.classList.toggle('on', b.dataset.theme === settings.theme));
  $('#goal-val').textContent = goalText();
}
$$('#set-lang button').forEach(b => b.addEventListener('click', () => {
  settings.lang = b.dataset.lang; saveSettings(); applyAll(); syncSettingsUI();
}));
$$('#set-theme button').forEach(b => b.addEventListener('click', () => {
  settings.theme = b.dataset.theme; saveSettings(); applyTheme(); syncSettingsUI();
}));
function stepGoal(delta) {
  settings.goal = Math.min(10, Math.max(6, Math.round((settings.goal + delta) * 2) / 2));
  saveSettings(); syncSettingsUI(); renderHome(); renderChart();
}
$('#goal-minus').addEventListener('click', () => stepGoal(-0.5));
$('#goal-plus').addEventListener('click', () => stepGoal(0.5));

$('#export-csv').addEventListener('click', () => {
  const safe = v => (/^[=+\-@]/.test(String(v)) ? "'" + v : v);
  const rows = [['date', 'bed', 'wake', 'hours', 'quality', 'screens', 'note']];
  [...diary].sort((a, b) => a.date.localeCompare(b.date)).forEach(e =>
    rows.push([e.date, e.bed, e.wake, e.hours.toFixed(2), e.quality, safe(screensText(e)), safe(e.note || '')]));
  const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = 'nocturne-diari.csv';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast(t('exported'));
});
$('#erase-diary').addEventListener('click', () => {
  if (!confirm(t('confirmErase'))) return;
  diary = []; persist(); renderDiary(); renderHome(); toast(t('erased'));
});

/* ---------- Aplicar idioma i aspecte ---------- */
function applyTheme() {
  document.documentElement.dataset.theme = settings.theme;
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.content = settings.theme === 'light' ? '#F4F1FF' : '#0B0E1F';
}
function applyAll() {
  document.documentElement.lang = settings.lang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  applyTheme();
  renderScreensSelect();
  renderTimerSelect();
  renderTracks();
  timerNote();
  resetBreathUI();
  resetWelcome();
  renderHome();
  renderDiary();
}
applyAll();

/* ---------- PWA: mode sense connexió ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => { /* opcional */ }); });
}
