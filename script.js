/**
 * Lunar New Year Countdown
 * Countries with timezones, LNY dates, countdown, weeks, fireworks, Day 1–3 then next year.
 */

// Lunar New Year dates (first day) — Gregorian calendar
const LNY_DATES = [
  '2025-01-29', '2026-02-17', '2027-02-06', '2028-01-26', '2029-02-13', '2030-02-03',
  '2031-01-23', '2032-02-11', '2033-01-31', '2034-02-19', '2035-02-08', '2036-01-28'
];

// Countries that celebrate Lunar New Year (name in English, name in country's language, timezone, offset, locale)
const COUNTRIES = [
  { id: 'CN', name: 'China', nameLocal: '中国', zone: 'Asia/Shanghai', offset: 8, lang: 'zh' },
  { id: 'HK', name: 'Hong Kong', nameLocal: '香港', zone: 'Asia/Hong_Kong', offset: 8, lang: 'zh-Hant' },
  { id: 'TW', name: 'Taiwan', nameLocal: '台灣', zone: 'Asia/Taipei', offset: 8, lang: 'zh-Hant' },
  { id: 'VN', name: 'Vietnam', nameLocal: 'Việt Nam', zone: 'Asia/Ho_Chi_Minh', offset: 7, lang: 'vi' },
  { id: 'KR', name: 'South Korea', nameLocal: '한국', zone: 'Asia/Seoul', offset: 9, lang: 'ko' },
  { id: 'SG', name: 'Singapore', nameLocal: '新加坡', zone: 'Asia/Singapore', offset: 8, lang: 'en' },
  { id: 'MY', name: 'Malaysia', nameLocal: 'Malaysia', zone: 'Asia/Kuala_Lumpur', offset: 8, lang: 'en' },
  { id: 'ID', name: 'Indonesia', nameLocal: 'Indonesia', zone: 'Asia/Jakarta', offset: 7, lang: 'en' },
  { id: 'MN', name: 'Mongolia', nameLocal: 'Монгол Улс', zone: 'Asia/Ulaanbaatar', offset: 8, lang: 'mn' },
  { id: 'TH', name: 'Thailand', nameLocal: 'ประเทศไทย', zone: 'Asia/Bangkok', offset: 7, lang: 'th' },
  { id: 'PH', name: 'Philippines', nameLocal: 'Pilipinas', zone: 'Asia/Manila', offset: 8, lang: 'en' },
  { id: 'BN', name: 'Brunei', nameLocal: 'Brunei', zone: 'Asia/Brunei', offset: 8, lang: 'en' },
];

// UI strings per language (Lunar New Year name, greetings, countdown labels, etc.)
const STRINGS = {
  en: {
    title: 'Lunar New Year',
    titleSub: '新年快樂',
    subtitle: 'Countdown to the next celebration',
    celebrateIn: 'Celebrate in',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    weeksUntil: (weeks, year) => `${weeks} weeks until Lunar New Year ${year}`,
    weeksUntilNext: (weeks, year) => `${weeks} weeks until next Lunar New Year (${year})`,
    nextLNY: (year) => `Next Lunar New Year: ${year}`,
    targetDate: (year, dateStr) => `Lunar New Year ${year} — ${dateStr}`,
    firstDay: 'First',
    secondDay: 'Second',
    thirdDay: 'Third',
    dayOfLNY: 'day of Lunar New Year',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: 'Happy Lunar New Year!',
    happyLNYSub: '新年快樂 · 恭喜發財',
    footer: 'Lunar New Year is celebrated in many East and Southeast Asian countries.',
  },
  zh: {
    title: '春节',
    titleSub: '新年快樂',
    subtitle: '距離下次慶祝',
    celebrateIn: '慶祝地區',
    days: '天',
    hours: '時',
    minutes: '分',
    seconds: '秒',
    weeksUntil: (weeks, year) => `距${year}年春節還有 ${weeks} 週`,
    weeksUntilNext: (weeks, year) => `距下個春節（${year}年）還有 ${weeks} 週`,
    nextLNY: (year) => `下一個春節：${year}年`,
    targetDate: (year, dateStr) => `${year}年春節 — ${dateStr}`,
    firstDay: '初一',
    secondDay: '初二',
    thirdDay: '初三',
    dayOfLNY: '春節',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: '春節快樂！',
    happyLNYSub: '新年快樂 · 恭喜發財',
    footer: '春節在許多東亞與東南亞國家慶祝。',
  },
  'zh-Hant': {
    title: '農曆新年',
    titleSub: '新年快樂',
    subtitle: '距離下次慶祝',
    celebrateIn: '慶祝地區',
    days: '天',
    hours: '時',
    minutes: '分',
    seconds: '秒',
    weeksUntil: (weeks, year) => `距${year}年農曆新年還有 ${weeks} 週`,
    weeksUntilNext: (weeks, year) => `距下個農曆新年（${year}年）還有 ${weeks} 週`,
    nextLNY: (year) => `下一個農曆新年：${year}年`,
    targetDate: (year, dateStr) => `${year}年農曆新年 — ${dateStr}`,
    firstDay: '初一',
    secondDay: '初二',
    thirdDay: '初三',
    dayOfLNY: '農曆新年',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: '農曆新年快樂！',
    happyLNYSub: '新年快樂 · 恭喜發財',
    footer: '農曆新年在許多東亞與東南亞國家慶祝。',
  },
  vi: {
    title: 'Tết Nguyên Đán',
    titleSub: 'Chúc mừng năm mới',
    subtitle: 'Đếm ngược đến dịp Tết',
    celebrateIn: 'Đón Tết tại',
    days: 'Ngày',
    hours: 'Giờ',
    minutes: 'Phút',
    seconds: 'Giây',
    weeksUntil: (weeks, year) => `Còn ${weeks} tuần đến Tết ${year}`,
    weeksUntilNext: (weeks, year) => `Còn ${weeks} tuần đến Tết năm sau (${year})`,
    nextLNY: (year) => `Tết năm sau: ${year}`,
    targetDate: (year, dateStr) => `Tết ${year} — ${dateStr}`,
    firstDay: 'Mùng 1',
    secondDay: 'Mùng 2',
    thirdDay: 'Mùng 3',
    dayOfLNY: 'Tết Nguyên Đán',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: 'Chúc mừng năm mới!',
    happyLNYSub: 'Tết vui vẻ · An khang thịnh vượng',
    footer: 'Tết được tổ chức tại nhiều quốc gia Đông Á và Đông Nam Á.',
  },
  ko: {
    title: '설날',
    titleSub: '새해 복 많이 받으세요',
    subtitle: '다음 명절까지 카운트다운',
    celebrateIn: '축하 지역',
    days: '일',
    hours: '시간',
    minutes: '분',
    seconds: '초',
    weeksUntil: (weeks, year) => `${year}년 설날까지 ${weeks}주`,
    weeksUntilNext: (weeks, year) => `다음 설날(${year}년)까지 ${weeks}주`,
    nextLNY: (year) => `다음 설날: ${year}년`,
    targetDate: (year, dateStr) => `${year}년 설날 — ${dateStr}`,
    firstDay: '첫날',
    secondDay: '둘째 날',
    thirdDay: '셋째 날',
    dayOfLNY: '설날',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: '새해 복 많이 받으세요!',
    happyLNYSub: '설날 축하합니다',
    footer: '설날은 많은 동아시아 및 동남아시아 국가에서 축하합니다.',
  },
  th: {
    title: 'ตรุษจีน',
    titleSub: 'สวัสดีปีใหม่',
    subtitle: 'นับถอยหลังถึงเทศกาล',
    celebrateIn: 'ฉลองที่',
    days: 'วัน',
    hours: 'ชม.',
    minutes: 'นาที',
    seconds: 'วินาที',
    weeksUntil: (weeks, year) => `อีก ${weeks} สัปดาห์ถึงตรุษจีน ${year}`,
    weeksUntilNext: (weeks, year) => `อีก ${weeks} สัปดาห์ถึงตรุษจีนปีหน้า (${year})`,
    nextLNY: (year) => `ตรุษจีนปีหน้า: ${year}`,
    targetDate: (year, dateStr) => `ตรุษจีน ${year} — ${dateStr}`,
    firstDay: 'วันแรก',
    secondDay: 'วันสอง',
    thirdDay: 'วันสาม',
    dayOfLNY: 'ตรุษจีน',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: 'สวัสดีปีใหม่!',
    happyLNYSub: '恭喜發財',
    footer: 'ตรุษจีนจัดในหลายประเทศในเอเชียตะวันออกและตะวันออกเฉียงใต้',
  },
  mn: {
    title: 'Tsagaan Sar',
    titleSub: 'Сар шинийн мэнд хүргэе',
    subtitle: 'Дараагийн баяраар хүртэл',
    celebrateIn: 'Тэмдэглэх улс',
    days: 'Өдөр',
    hours: 'Цаг',
    minutes: 'Минут',
    seconds: 'Секунд',
    weeksUntil: (weeks, year) => `${year} он Цагаан сар хүртэл ${weeks} долоо хоног`,
    weeksUntilNext: (weeks, year) => `Дараагийн Цагаан сар (${year}) хүртэл ${weeks} долоо хоног`,
    nextLNY: (year) => `Дараагийн Цагаан сар: ${year}`,
    targetDate: (year, dateStr) => `Цагаан сар ${year} — ${dateStr}`,
    firstDay: 'Нэгдүгээр',
    secondDay: 'Хоёрдугаар',
    thirdDay: 'Гуравдугаар',
    dayOfLNY: 'Цагаан сар',
    day1Cn: '初一',
    day2Cn: '初二',
    day3Cn: '初三',
    happyLNY: 'Сар шинийн мэнд хүргэе!',
    happyLNYSub: 'Цагаан сар баяр хүргэе',
    footer: 'Цагаан сарыг Зүүн болон Зүүн Өмнөд Азийн олон улс тэмдэглэнэ.',
  },
};

/**
 * Get UTC timestamp for midnight on the given date in a timezone (using offset).
 */
function midnightInTimezone(dateStr, offsetHours) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const utcMidnight = Date.UTC(y, m - 1, d, 0, 0, 0, 0);
  return utcMidnight - offsetHours * 60 * 60 * 1000;
}

/**
 * Find the next Lunar New Year moment (midnight in selected country) from a given timestamp.
 * Returns { timestamp, dateStr, year } or null.
 */
function getNextLNY(nowUtc, offsetHours) {
  if (testMidnightTimestamp != null && nowUtc < testMidnightTimestamp) {
    return { timestamp: testMidnightTimestamp, dateStr: '2026-02-17', year: '2026' };
  }
  for (const dateStr of LNY_DATES) {
    const ts = midnightInTimezone(dateStr, offsetHours);
    if (ts > nowUtc) return { timestamp: ts, dateStr, year: dateStr.split('-')[0] };
  }
  return null;
}

/**
 * Find the "current" LNY (the one we're in or just passed) for day 1/2/3 logic.
 */
function getCurrentLNYMidnight(nowUtc, offsetHours) {
  if (testMidnightTimestamp != null && nowUtc >= testMidnightTimestamp) {
    return { timestamp: testMidnightTimestamp, dateStr: '2026-02-17', year: '2026' };
  }
  let last = null;
  for (const dateStr of LNY_DATES) {
    const ts = midnightInTimezone(dateStr, offsetHours);
    if (ts <= nowUtc) last = { timestamp: ts, dateStr, year: dateStr.split('-')[0] };
    else break;
  }
  return last;
}

/**
 * Which day of LNY is it in the selected timezone? (1, 2, 3, or 0 if before or 4+)
 */
function getLNYDay(nowUtc, offsetHours) {
  const lny = getCurrentLNYMidnight(nowUtc, offsetHours);
  if (!lny) return 0;
  const dayStart = lny.timestamp;
  const oneDay = 24 * 60 * 60 * 1000;
  const dayIndex = Math.floor((nowUtc - dayStart) / oneDay);
  if (dayIndex < 0) return 0;
  if (dayIndex >= 3) return 4; // 4th day onward
  return dayIndex + 1; // 1, 2, or 3
}

/**
 * Are we in the first few seconds of LNY (for showing fireworks)?
 */
function isLNYMidnightMoment(nowUtc, offsetHours, windowSeconds = 15) {
  if (testMidnightTimestamp != null) {
    const diff = (nowUtc - testMidnightTimestamp) / 1000;
    return diff >= 0 && diff <= windowSeconds;
  }
  const lny = getCurrentLNYMidnight(nowUtc, offsetHours);
  if (!lny) return false;
  const diff = (nowUtc - lny.timestamp) / 1000;
  return diff >= 0 && diff <= windowSeconds;
}

// ?test=midnight: countdown from 10s then celebration at 0 (auto-start)
const isTestMidnight = typeof location !== 'undefined' && new URLSearchParams(location.search).get('test') === 'midnight';
let testMidnightTimestamp = null;
if (isTestMidnight) testMidnightTimestamp = Date.now() + 10000;

// DOM
const countrySelect = document.getElementById('country');
const timezoneHint = document.getElementById('timezone-hint');
const titleMain = document.getElementById('title-main');
const titleSub = document.getElementById('title-sub');
const subtitleEl = document.getElementById('subtitle');
const countryLabel = document.getElementById('country-label');
const weeksText = document.getElementById('weeks-text');
const countdownGrid = document.getElementById('countdown-grid');
const targetDateEl = document.getElementById('target-date');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const daysLabel = document.getElementById('days-label');
const hoursLabel = document.getElementById('hours-label');
const minutesLabel = document.getElementById('minutes-label');
const secondsLabel = document.getElementById('seconds-label');
const celebrationSection = document.getElementById('celebration-section');
const celebrationContent = document.getElementById('celebration-content');
const lnyDaysSection = document.getElementById('lny-days-section');
const lnyDayMessage = document.getElementById('lny-day-message');
const nextYearHint = document.getElementById('next-year-hint');
const fireworksCanvas = document.getElementById('fireworks');
const footerText = document.getElementById('footer-text');

function getStrings() {
  const lang = getSelectedCountry().lang || 'en';
  return STRINGS[lang] || STRINGS.en;
}

// Populate country dropdown
COUNTRIES.forEach((c) => {
  const opt = document.createElement('option');
  opt.value = c.id;
  opt.textContent = c.nameLocal && c.nameLocal !== c.name ? `${c.name} (${c.nameLocal})` : c.name;
  countrySelect.appendChild(opt);
});

// Timezone aliases (some browsers/OS use different IANA names)
const TZ_TO_COUNTRY = {
  'Asia/Saigon': 'VN',
  'Asia/Chongqing': 'CN',
  'Asia/Chungking': 'CN',
  'Asia/Harbin': 'CN',
  'Asia/Ulan_Bator': 'MN',
};

function normalizeTz(s) {
  return s.replace(/\s+/g, '_').toLowerCase();
}

/**
 * Detect user's timezone and pre-select matching country if we have one.
 */
function tryDetectCountry() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return;
    const tzNorm = normalizeTz(tz);
    let countryId =
      TZ_TO_COUNTRY[tz] ||
      COUNTRIES.find((c) => c.zone === tz)?.id ||
      COUNTRIES.find((c) => normalizeTz(c.zone) === tzNorm)?.id;
    if (countryId) {
      countrySelect.value = countryId;
    }
  } catch (_) {}
}

function getSelectedCountry() {
  const id = countrySelect.value;
  return COUNTRIES.find((c) => c.id === id) || COUNTRIES[0];
}

/**
 * In test mode (?test=...), return a fake "now" so you can see Day 1–3.
 * For ?test=midnight we use real time so the 10s countdown ticks; other modes use fake "now".
 */
function getNowUtc() {
  const real = Date.now();
  const mode = new URLSearchParams(location.search).get('test');
  if (!mode) return real;
  if (mode === 'midnight') return real;  // real time so countdown ticks 10→0
  const country = getSelectedCountry();
  const lnyStr = '2026-02-17';
  const midnight = midnightInTimezone(lnyStr, country.offset);
  if (mode === 'day1') return midnight + 12 * 60 * 60 * 1000;
  if (mode === 'day2') return midnight + 36 * 60 * 60 * 1000;
  if (mode === 'day3') return midnight + 60 * 60 * 60 * 1000;
  return real;
}

function updateTimezoneHint() {
  const c = getSelectedCountry();
  const now = new Date();
  const inTz = now.toLocaleString('en-US', { timeZone: c.zone, timeZoneName: 'short' });
  const match = inTz.match(/GMT[+-]\d+/);
  timezoneHint.textContent = match ? `Timezone: ${match[0]}` : `Timezone: ${c.zone}`;
}

function updateHeaderAndLabels() {
  const country = getSelectedCountry();
  const s = getStrings();
  const lang = country.lang || 'en';
  document.documentElement.lang = lang === 'zh-Hant' ? 'zh-Hant' : lang;
  if (titleMain) titleMain.textContent = s.title;
  if (titleSub) titleSub.textContent = s.titleSub;
  if (subtitleEl) subtitleEl.textContent = s.subtitle;
  if (countryLabel) countryLabel.textContent = s.celebrateIn;
  if (daysLabel) daysLabel.textContent = s.days;
  if (hoursLabel) hoursLabel.textContent = s.hours;
  if (minutesLabel) minutesLabel.textContent = s.minutes;
  if (secondsLabel) secondsLabel.textContent = s.seconds;
  if (footerText) footerText.textContent = s.footer;
}

// Countdown tick
let fireworksShown = false;



function formatTwo(n) {
  return String(Math.max(0, Math.floor(n))).padStart(2, '0');
}

function tick() {
  const country = getSelectedCountry();
  const nowUtc = getNowUtc();
  const now = new Date(nowUtc);
  const offsetHours = country.offset;

  const lnyDay = getLNYDay(nowUtc, offsetHours);
  const nextLNY = getNextLNY(nowUtc, offsetHours);
  const isMidnightMoment = isLNYMidnightMoment(nowUtc, offsetHours);

  const s = getStrings();

  // 1) Show fireworks at the moment countdown hits 0 (first ~15 seconds of LNY)
  if (isMidnightMoment && !fireworksShown) {
    fireworksShown = true;
    showFireworks();
    // Keep countdown and target date visible; fireworks draw above as overlay
    celebrationSection.hidden = false;
    celebrationContent.innerHTML = `<p class="celebration-title">${s.happyLNY}</p><p class="celebration-sub">${s.happyLNYSub}</p>`;
    lnyDaysSection.hidden = true;
    weeksText.textContent = '';
  }

  // 2) After fireworks period, or if we're on Day 1/2/3 (and not in midnight moment)
  if (lnyDay >= 1 && lnyDay <= 3 && !isMidnightMoment) {
    if (fireworksCanvas && !fireworksCanvas.classList.contains('hidden')) {
      fireworksCanvas.classList.add('hidden');
    }
    countdownGrid.hidden = true;
    targetDateEl.hidden = true;
    celebrationSection.hidden = true;
    lnyDaysSection.hidden = false;
    const dayNames = { 1: s.firstDay, 2: s.secondDay, 3: s.thirdDay };
    const dayCns = { 1: s.day1Cn, 2: s.day2Cn, 3: s.day3Cn };
    lnyDayMessage.innerHTML = `${dayNames[lnyDay]} ${s.dayOfLNY}<br><span class="day-cn">${dayCns[lnyDay]}</span>`;
    const currentLNY = getCurrentLNYMidnight(nowUtc, offsetHours);
    const nextYear = getNextLNY(nowUtc, offsetHours)?.year || currentLNY?.year + 1;
    nextYearHint.textContent = s.nextLNY(nextYear);
    const next = getNextLNY(nowUtc, offsetHours);
    if (next) {
      const weeks = Math.floor((next.timestamp - nowUtc) / (7 * 24 * 60 * 60 * 1000));
      weeksText.textContent = s.weeksUntilNext(weeks, next.year);
    } else {
      weeksText.textContent = '';
    }
  }

  // 3) From 4th day onward: countdown to next year
  if (lnyDay >= 4 || (lnyDay === 0 && nextLNY && !isMidnightMoment)) {
    if (fireworksCanvas && !fireworksCanvas.classList.contains('hidden')) {
      fireworksCanvas.classList.add('hidden');
    }
    celebrationSection.hidden = true;
    lnyDaysSection.hidden = true;
    countdownGrid.hidden = false;
    targetDateEl.hidden = false;
    fireworksShown = false;

    if (nextLNY) {
      const diff = nextLNY.timestamp - nowUtc;
      const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
      weeksText.textContent = s.weeksUntil(weeks, nextLNY.year);

      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        targetDateEl.textContent = s.targetDate(nextLNY.year, nextLNY.dateStr);
      } else {
        const d = Math.floor(diff / (24 * 60 * 60 * 1000));
        const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        const sec = Math.floor((diff % (60 * 1000)) / 1000);
        daysEl.textContent = formatTwo(d);
        hoursEl.textContent = formatTwo(h);
        minutesEl.textContent = formatTwo(m);
        secondsEl.textContent = formatTwo(sec);
        const inTz = new Date(nextLNY.timestamp).toLocaleString(country.lang, { timeZone: country.zone, dateStyle: 'long', timeStyle: 'short' });
        targetDateEl.textContent = s.targetDate(nextLNY.year, inTz);
      }
    } else {
      weeksText.textContent = '';
      targetDateEl.textContent = '';
    }
  }

  // 4) Normal countdown (before LNY)
  if (lnyDay === 0 && nextLNY && !isMidnightMoment && !fireworksShown) {
    const diff = nextLNY.timestamp - nowUtc;
    if (diff > 0) {
      const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
      weeksText.textContent = s.weeksUntil(weeks, nextLNY.year);
      countdownGrid.hidden = false;
      targetDateEl.hidden = false;
      const d = Math.floor(diff / (24 * 60 * 60 * 1000));
      const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const sec = Math.floor((diff % (60 * 1000)) / 1000);
      daysEl.textContent = formatTwo(d);
      hoursEl.textContent = formatTwo(h);
      minutesEl.textContent = formatTwo(m);
      secondsEl.textContent = formatTwo(sec);
      const inTz = new Date(nextLNY.timestamp).toLocaleString(country.lang, { timeZone: country.zone, dateStyle: 'long', timeStyle: 'short' });
      targetDateEl.textContent = s.targetDate(nextLNY.year, inTz);
      if (isTestMidnight) targetDateEl.textContent += ' · Tap anywhere to hear sound at zero';
    }
  }
}

// Fireworks
let fireworksAnimationId = null;

function showFireworks() {
  fireworksCanvas.classList.remove('hidden');
  const ctx = fireworksCanvas.getContext('2d');
  const particles = [];
  const colors = ['#c41e3a', '#e63946', '#d4af37', '#f4e4bc', '#ff6b6b', '#ffd93d'];

  function resize() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function createFirework(x, y) {
    const count = 60 + Math.floor(Math.random() * 40);
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random();
      const speed = 2 + Math.random() * 4;
      particles.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        color, life: 1, decay: 0.008 + Math.random() * 0.01
      });
    }
  }

  function animate() {
    ctx.fillStyle = 'rgba(13, 10, 8, 0.06)';
    ctx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    if (Math.random() < 0.08) {
      createFirework(
        Math.random() * fireworksCanvas.width,
        fireworksCanvas.height * (0.3 + Math.random() * 0.4)
      );
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      const [r, g, b] = hexToRgb(p.color);
      const particleOpacity = 0.65;
      ctx.fillStyle = `rgba(${r},${g},${b},${p.life * particleOpacity})`;
      ctx.fill();
    }
    fireworksAnimationId = requestAnimationFrame(animate);
  }

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  createFirework(fireworksCanvas.width / 2, fireworksCanvas.height / 2);
  createFirework(fireworksCanvas.width * 0.3, fireworksCanvas.height * 0.5);
  createFirework(fireworksCanvas.width * 0.7, fireworksCanvas.height * 0.5);
  animate();

  setTimeout(() => {
    cancelAnimationFrame(fireworksAnimationId);
    fireworksCanvas.classList.add('hidden');
    celebrationSection.hidden = true;
    const country = getSelectedCountry();
    const nowUtc = getNowUtc(); // use test time so ?test=midnight → Day 1 after fireworks
    const lnyDay = getLNYDay(nowUtc, country.offset);
    const str = getStrings();
    if (lnyDay >= 1 && lnyDay <= 3) {
      countdownGrid.hidden = true;
      targetDateEl.hidden = true;
      lnyDaysSection.hidden = false;
      const dayNames = { 1: str.firstDay, 2: str.secondDay, 3: str.thirdDay };
      const dayCns = { 1: str.day1Cn, 2: str.day2Cn, 3: str.day3Cn };
      lnyDayMessage.innerHTML = `${dayNames[lnyDay]} ${str.dayOfLNY}<br><span class="day-cn">${dayCns[lnyDay]}</span>`;
      const next = getNextLNY(nowUtc, country.offset);
      nextYearHint.textContent = next ? str.nextLNY(next.year) : '';
      if (next) {
        const weeks = Math.floor((next.timestamp - nowUtc) / (7 * 24 * 60 * 60 * 1000));
        weeksText.textContent = str.weeksUntilNext(weeks, next.year);
      }
    }
  }, 12000);
}

function onFirstUserGesture() {
  updateTimezoneHint();
}

// Init
tryDetectCountry();
countrySelect.addEventListener('change', () => {
  onFirstUserGesture();
  updateTimezoneHint();
  updateHeaderAndLabels();
  fireworksShown = false;
});
document.addEventListener('click', onFirstUserGesture, { once: true });
document.addEventListener('touchstart', onFirstUserGesture, { once: true, passive: true });
document.addEventListener('keydown', onFirstUserGesture, { once: true });
updateTimezoneHint();
updateHeaderAndLabels();
tick();
setInterval(tick, 1000);
