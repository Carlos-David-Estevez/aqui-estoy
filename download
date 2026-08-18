<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Aquí estoy</title>
<meta name="description" content="Un rincón con tu voz, para cuando cuesta dormir.">
<meta name="theme-color" content="#0b1220">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="stars" id="stars" aria-hidden="true"></div>
<div class="orb" aria-hidden="true"></div>

<main>

  <header class="intro">
    <p class="eyebrow">Para ti, esta noche</p>
    <h1>Aquí estoy</h1>
    <p class="subtitle">Toca según cómo te sientas ahora mismo</p>
  </header>

  <section class="moments" id="moments" aria-label="Cómo te sientes ahora">

    <button class="moment-card" data-moment="agobio" aria-pressed="false">
      <svg class="moment-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 8c-6 0-10 4.5-10 10 0 3 1.5 5.5 3.8 7.2-.6 1.4-1.6 2.4-1.6 2.4s2.4.2 4.3-1.1c1.1.4 2.3.6 3.5.6 6 0 10-4.5 10-10S26 8 20 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        <path d="M15 19c1-1.5 2.5-1.5 3.5 0M21.5 19c1-1.5 2.5-1.5 3.5 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <span class="moment-label">No paro de pensar</span>
      <span class="moment-desc">Cuando la cabeza no se calla y sientes que no vas a poder dormir.</span>
    </button>

    <button class="moment-card" data-moment="ruido" aria-pressed="false">
      <svg class="moment-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 20c0-1.5 1-2.5 2.5-2.5S13 18.5 13 20s-1 2.5-2.5 2.5S8 21.5 8 20Z" stroke="currentColor" stroke-width="1.6"/>
        <path d="M16 14v12M20 10v20M24 15v10M28 17v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <span class="moment-label">Algo me ha sobresaltado</span>
      <span class="moment-desc">Un ruido, un pensamiento raro, algo que te ha desvelado de golpe.</span>
    </button>

    <button class="moment-card" data-moment="tarde" aria-pressed="false">
      <svg class="moment-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="11" stroke="currentColor" stroke-width="1.6"/>
        <path d="M20 13v7l5 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="moment-label">He mirado la hora</span>
      <span class="moment-desc">Ves que es tarde y eso te agobia todavía más.</span>
    </button>

    <button class="moment-card" data-moment="general" aria-pressed="false">
      <svg class="moment-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 28s-8.5-5.2-8.5-11.4c0-3.3 2.6-5.6 5.5-5.6 1.7 0 3.3.9 3.9 2.3.6-1.4 2.2-2.3 3.9-2.3 2.9 0 5.5 2.3 5.5 5.6C30.3 22.8 20 28 20 28Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
      </svg>
      <span class="moment-label">Solo quiero oírte</span>
      <span class="moment-desc">Sin motivo concreto. Solo necesitas mi voz un rato.</span>
    </button>

  </section>

  <section class="player" id="player" hidden>
    <button class="back" id="backBtn">← Elegir otro momento</button>

    <h2 id="playerTitle"></h2>
    <p class="player-desc" id="playerDesc"></p>

    <div class="player-controls">
      <button class="play-btn" id="playPauseBtn" aria-label="Reproducir">
        <svg id="iconPlay" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"/></svg>
        <svg id="iconPause" viewBox="0 0 24 24" fill="currentColor" hidden><path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z"/></svg>
      </button>

      <div class="progress-wrap">
        <div class="progress-bar" id="progressBar">
          <div class="progress-fill" id="progressFill"></div>
        </div>
        <div class="time-row">
          <span id="currentTime">0:00</span>
          <span id="duration">0:00</span>
        </div>
      </div>
    </div>

    <div class="secondary-controls">
      <label class="control">
        <span>Volumen</span>
        <input type="range" id="volume" min="0" max="1" step="0.01" value="0.85">
      </label>
      <label class="control">
        <span>Apagar solo en</span>
        <select id="sleepTimer">
          <option value="0">No, déjalo sonar</option>
          <option value="15">15 minutos</option>
          <option value="30" selected>30 minutos</option>
          <option value="45">45 minutos</option>
          <option value="60">60 minutos</option>
        </select>
      </label>
    </div>

    <p class="timer-status" id="timerStatus" hidden></p>

    <p class="missing" id="missingAudio" hidden>
      Todavía no hay un audio subido para este momento.<br>
      Añádelo en <code>/audios/</code> con el nombre indicado en el <code>README</code>.
    </p>

    <audio id="audioEl" preload="none"></audio>
  </section>

  <footer class="foot">
    <p>hecho para ti · buenas noches</p>
  </footer>

</main>

<script src="script.js"></script>
</body>
</html>
