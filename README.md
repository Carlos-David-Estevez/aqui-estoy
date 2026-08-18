:root{
  --bg:#0b1220;
  --card:#141e30;
  --card-hover:#1a2740;
  --card-active-border: rgba(232,185,120,.55);
  --accent:#e8b978;
  --accent-soft: rgba(232,185,120,.16);
  --lavender:#9fb0d9;
  --text:#eef1f7;
  --text-dim:#8f9bb5;
  --border: rgba(159,176,217,.14);
  --radius: 20px;
  --font-display: 'Fraunces', serif;
  --font-body: 'Work Sans', sans-serif;
}

*{box-sizing:border-box;}

html,body{
  margin:0;
  padding:0;
  min-height:100%;
}

body{
  background:
    radial-gradient(ellipse 900px 500px at 50% -10%, #182644 0%, transparent 60%),
    var(--bg);
  color:var(--text);
  font-family:var(--font-body);
  min-height:100vh;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}

.stars{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
}
.star{
  position:absolute;
  width:2px;
  height:2px;
  border-radius:50%;
  background:var(--lavender);
  opacity:.5;
  animation:twinkle 4s ease-in-out infinite;
}
@keyframes twinkle{
  0%,100%{opacity:.15;}
  50%{opacity:.7;}
}

.orb{
  position:fixed;
  top:-10vh;
  left:50%;
  transform:translateX(-50%);
  width:min(640px, 80vw);
  aspect-ratio:1;
  border-radius:50%;
  background:radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  filter:blur(30px);
  animation:breathe 11s ease-in-out infinite alternate;
  z-index:0;
  pointer-events:none;
}
@keyframes breathe{
  from{transform:translateX(-50%) scale(1); opacity:.55;}
  to{transform:translateX(-50%) scale(1.14); opacity:.9;}
}

main{
  position:relative;
  z-index:1;
  max-width:640px;
  margin:0 auto;
  padding:11vh 24px 8vh;
}

.intro{
  text-align:center;
  margin-bottom:52px;
}
.eyebrow{
  font-size:13px;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--accent);
  margin:0 0 14px;
  font-weight:500;
}
h1{
  font-family:var(--font-display);
  font-weight:500;
  font-size:clamp(38px, 7vw, 54px);
  margin:0 0 12px;
  letter-spacing:-.01em;
}
.subtitle{
  color:var(--text-dim);
  font-size:16px;
  margin:0;
}

.moments{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
@media (max-width:520px){
  .moments{grid-template-columns:1fr;}
}

.moment-card{
  text-align:left;
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:22px 20px;
  color:var(--text);
  cursor:pointer;
  display:flex;
  flex-direction:column;
  gap:10px;
  transition:background .2s ease, border-color .2s ease, transform .2s ease;
  font-family:inherit;
}
.moment-card:hover{
  background:var(--card-hover);
  transform:translateY(-2px);
}
.moment-card:focus-visible{
  outline:2px solid var(--accent);
  outline-offset:3px;
}
.moment-icon{
  width:26px;
  height:26px;
  color:var(--accent);
}
.moment-label{
  font-family:var(--font-display);
  font-size:19px;
  font-weight:500;
}
.moment-desc{
  font-size:13.5px;
  color:var(--text-dim);
  line-height:1.5;
}

.player{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:32px 28px;
}
.back{
  background:none;
  border:none;
  color:var(--text-dim);
  font-family:inherit;
  font-size:13.5px;
  cursor:pointer;
  padding:0 0 22px;
}
.back:hover{color:var(--accent);}

.player h2{
  font-family:var(--font-display);
  font-weight:500;
  font-size:28px;
  margin:0 0 8px;
}
.player-desc{
  color:var(--text-dim);
  font-size:14.5px;
  margin:0 0 30px;
}

.player-controls{
  display:flex;
  align-items:center;
  gap:20px;
  margin-bottom:26px;
}
.play-btn{
  flex:none;
  width:58px;
  height:58px;
  border-radius:50%;
  border:1px solid var(--card-active-border);
  background:var(--accent-soft);
  color:var(--accent);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:background .2s ease, transform .15s ease;
}
.play-btn:hover{background:rgba(232,185,120,.26);}
.play-btn:active{transform:scale(.94);}
.play-btn svg{width:22px;height:22px;}
.play-btn:focus-visible{outline:2px solid var(--accent); outline-offset:3px;}

.progress-wrap{flex:1;}
.progress-bar{
  height:6px;
  border-radius:3px;
  background:rgba(159,176,217,.15);
  cursor:pointer;
  position:relative;
}
.progress-fill{
  height:100%;
  width:0%;
  border-radius:3px;
  background:var(--accent);
}
.time-row{
  display:flex;
  justify-content:space-between;
  font-size:12px;
  color:var(--text-dim);
  margin-top:8px;
  font-variant-numeric:tabular-nums;
}

.secondary-controls{
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  border-top:1px solid var(--border);
  padding-top:22px;
}
.control{
  display:flex;
  flex-direction:column;
  gap:8px;
  font-size:13px;
  color:var(--text-dim);
  flex:1;
  min-width:150px;
}
.control input[type="range"]{
  accent-color:var(--accent);
}
.control select{
  background:var(--bg);
  color:var(--text);
  border:1px solid var(--border);
  border-radius:8px;
  padding:8px 10px;
  font-family:inherit;
  font-size:13.5px;
}

.timer-status{
  margin:18px 0 0;
  font-size:12.5px;
  color:var(--accent);
}

.missing{
  margin:22px 0 0;
  padding:14px 16px;
  border-radius:12px;
  background:rgba(232,185,120,.08);
  border:1px dashed var(--card-active-border);
  color:var(--text-dim);
  font-size:13px;
  line-height:1.6;
}
.missing code{
  color:var(--accent);
}

.foot{
  text-align:center;
  margin-top:54px;
  color:var(--text-dim);
  font-size:12px;
  letter-spacing:.04em;
}

@media (prefers-reduced-motion: reduce){
  .orb, .star{animation:none !important;}
}
