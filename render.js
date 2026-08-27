

function esc(str){ return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function safeJson(obj){ return JSON.stringify(obj).replace(/</g,'\\u003c'); }

function buildPublicHTML(c, opts) {
  opts = opts || {};
  const realViews = typeof opts.views === 'number' ? opts.views : 0;
  const fp = FONT_PRESETS[c.theme.font] || FONT_PRESETS['space-grotesk'];
  const avatarShapeRadius = c.theme.avatarShape === 'circle' ? '50%' : '22%';
  const bannerBg = c.identity.bannerImg
    ? `background-image:url('${esc(c.identity.bannerImg)}'); background-size:cover; background-position:center;`
    : `background: radial-gradient(ellipse 90% 140% at 30% -20%, ${c.theme.accent1}59, transparent 60%), radial-gradient(ellipse 70% 120% at 90% 0%, ${c.theme.accent2}40, transparent 60%), linear-gradient(160deg, #191a29, #0f1019);`;
  const avatarInner = c.identity.avatarImg
    ? `<img src="${esc(c.identity.avatarImg)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" alt="">`
    : esc(c.identity.avatarText || '?');

  const bgLayer = ({
    particles:`<canvas id="bg-canvas"></canvas>`, grid:`<div class="bg-grid"></div>`, plasma:`<div class="bg-plasma"><span></span><span></span></div>`,
    aurora:`<div class="bg-aurora"><span></span><span></span><span></span></div>`, snow:`<canvas id="bg-canvas"></canvas>`,
    rain:`<canvas id="bg-canvas"></canvas>`, fireflies:`<canvas id="bg-canvas"></canvas>`, stars:`<canvas id="bg-canvas"></canvas>`, dither:`<div class="bg-dither"></div>`,
    image:`<div class="bg-image"></div>`, video:`<video class="bg-video" autoplay muted loop playsinline src="${esc(c.background.mediaUrl)}"></video>`,
    none:`<div class="bg-flat"></div>`
  })[c.background.style] || `<canvas id="bg-canvas"></canvas>`;

  const socialsHTML = c.socials.map(s => `
    <a class="social" href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(s.label||s.platform)}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${ICONS[s.platform] || `<circle cx="12" cy="12" r="9"/><text x="12" y="15.5" font-size="8" text-anchor="middle" fill="currentColor" stroke="none" font-family="sans-serif">${monogram(s.platform)}</text>`}</svg>
    </a>`).join('');

  const badgesHTML = c.widgets.badges.map(k=>{
    const b = BADGES[k]; if(!b) return '';
    return `<span class="badge-pill" style="color:${b.color};border-color:${b.color}55;background:${b.color}18" title="${esc(b.name)}">${b.glyph}</span>`;
  }).join('');

  const extraFieldsHTML = [
    c.identity.locationShow && c.identity.location ? `<div class="meta-chip">📍 ${esc(c.identity.location)}</div>` : '',
    c.identity.ageShow && c.identity.age ? `<div class="meta-chip">${esc(c.identity.age)} yrs</div>` : '',
    c.identity.joinedShow && c.identity.joined ? `<div class="meta-chip">${esc(c.identity.joined)}</div>` : ''
  ].filter(Boolean).join('');

  const statusColors = { online:'#7fd8a6', idle:'#f6c343', dnd:'#f65b5b', offline:'#6a6d80' };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(c.meta.title || c.identity.display)} — profile</title>
<meta name="description" content="${esc(c.meta.description || c.identity.bio)}">
${c.meta.ogImage ? `<meta property="og:image" content="${esc(c.meta.ogImage)}">` : ''}
${c.meta.favicon ? `<link rel="icon" href="${esc(c.meta.favicon)}">` : ''}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="${fp.href}" rel="stylesheet">
<style>
:root{
  --void:#0a0a10; --panel:rgba(19,20,32,${(c.theme.glass/100).toFixed(2)}); --panel-solid:#131420;
  --border:rgba(255,255,255,0.07); --border-hi:rgba(255,255,255,0.14);
  --accent1:${c.theme.accent1}; --accent2:${c.theme.accent2};
  --text:#eceef5; --text-dim:#8a8ea3; --text-faint:#4b4e63; --success:#7fd8a6;
  --radius:${c.theme.radius}px; --card-w:${c.theme.cardWidth}px; --glow:${(c.theme.glow/100).toFixed(2)};
  --font-display:${fp.display}; --font-body:${fp.body}; --font-mono:${fp.mono};
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{background:var(--void);color:var(--text);font-family:var(--font-body);overflow-x:hidden;height:100%;${c.effects.cursor?'cursor:none;':''}}
@media (prefers-reduced-motion: reduce){ *{ animation-duration:.01ms !important; animation-iteration-count:1 !important; transition-duration:.01ms !important; } }
::selection{background:var(--accent1);color:var(--void);}
a{color:inherit;text-decoration:none;}
#bg-canvas{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 60% 45% at 25% 20%, ${c.theme.accent1}1a, transparent 60%), radial-gradient(ellipse 55% 40% at 80% 75%, ${c.theme.accent2}12, transparent 60%), var(--void);filter:blur(${c.background.blur}px);}
.bg-grid{position:fixed;inset:0;z-index:0;background-color:var(--void);filter:blur(${c.background.blur}px);
  background-image:linear-gradient(${c.theme.accent1}22 1px, transparent 1px), linear-gradient(90deg, ${c.theme.accent1}22 1px, transparent 1px);
  background-size:42px 42px; animation:gridmove 14s linear infinite;}
@keyframes gridmove{ to{ background-position:42px 42px, 42px 42px; } }
.bg-plasma{position:fixed;inset:0;z-index:0;background:var(--void);overflow:hidden;filter:blur(${c.background.blur}px);}
.bg-plasma span{position:absolute;width:60vw;height:60vw;border-radius:50%;filter:blur(90px);opacity:.35;}
.bg-plasma span:nth-child(1){background:var(--accent1);top:-10%;left:-10%;animation:plasma1 16s ease-in-out infinite;}
.bg-plasma span:nth-child(2){background:var(--accent2);bottom:-15%;right:-10%;animation:plasma2 18s ease-in-out infinite;}
@keyframes plasma1{0%,100%{transform:translate(0,0);}50%{transform:translate(15vw,10vh);}}
@keyframes plasma2{0%,100%{transform:translate(0,0);}50%{transform:translate(-12vw,-8vh);}}
.bg-aurora{position:fixed;inset:0;z-index:0;background:var(--void);overflow:hidden;filter:blur(${20+c.background.blur}px);}
.bg-aurora span{position:absolute;width:140%;height:32%;left:-20%;border-radius:50%;opacity:.3;}
.bg-aurora span:nth-child(1){background:var(--accent1);top:-6%;animation:auro1 12s ease-in-out infinite;}
.bg-aurora span:nth-child(2){background:var(--accent2);top:18%;animation:auro2 15s ease-in-out infinite;}
.bg-aurora span:nth-child(3){background:var(--accent1);top:4%;animation:auro1 9s ease-in-out infinite reverse;opacity:.18;}
@keyframes auro1{0%,100%{transform:translateX(0) scaleY(1);}50%{transform:translateX(8%) scaleY(1.3);}}
@keyframes auro2{0%,100%{transform:translateX(0) scaleY(1);}50%{transform:translateX(-10%) scaleY(.8);}}
.bg-dither{position:fixed;inset:0;z-index:0;background:var(--void);
  background-image:radial-gradient(${c.theme.accent1}33 1px, transparent 1px); background-size:5px 5px;
  animation:dithermove 3.5s steps(4) infinite;filter:blur(${c.background.blur}px);}
@keyframes dithermove{ 0%{background-position:0 0;} 100%{background-position:5px 5px;} }
.bg-image{position:fixed;inset:0;z-index:0;background-image:url('${esc(c.background.mediaUrl)}');background-size:cover;background-position:center;filter:blur(${c.background.blur}px);}
.bg-video{position:fixed;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;filter:blur(${c.background.blur}px);}
.bg-flat{position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 70% 50% at 50% 0%, ${c.theme.accent1}14, transparent 60%), var(--void);}
.bg-dim{position:fixed;inset:0;z-index:1;background:#000;opacity:${(c.background.dim/100).toFixed(2)};pointer-events:none;}
.grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.035;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}
#cursor-dot,#cursor-ring,#cursor-glow{position:fixed;top:0;left:0;pointer-events:none;z-index:999;border-radius:50%;will-change:transform;}
#cursor-dot{width:5px;height:5px;background:var(--accent2);box-shadow:0 0 8px var(--accent2);}
#cursor-ring{width:30px;height:30px;border:1px solid var(--border-hi);transition:width .18s ease,height .18s ease,border-color .18s ease,background .18s ease;}
#cursor-ring.hover{width:54px;height:54px;border-color:var(--accent1);background:${c.theme.accent1}14;}
#cursor-glow{width:240px;height:240px;z-index:997;background:radial-gradient(circle,${c.theme.accent1}3d,transparent 70%);filter:blur(6px);display:none;}
.cursor-particle{position:fixed;top:0;left:0;width:4px;height:4px;border-radius:50%;background:var(--accent1);pointer-events:none;z-index:998;opacity:0;}
body.cursor-dot #cursor-ring,body.cursor-dot #cursor-glow{display:none;}
body.cursor-glow #cursor-ring,body.cursor-glow #cursor-dot{display:none;}
body.cursor-glow #cursor-glow{display:block;}
#entrance{position:fixed;inset:0;z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--void);transition:opacity .9s ease,visibility .9s ease;text-align:center;padding:20px;}
#entrance.hidden{opacity:0;visibility:hidden;pointer-events:none;}
.entrance-eyebrow{font-family:var(--font-mono);font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:var(--text-faint);margin-bottom:22px;opacity:0;animation:fadeUp .8s ease .2s forwards;}
.entrance-name{font-family:var(--font-display);font-weight:700;font-size:clamp(38px,9vw,84px);letter-spacing:-0.02em;line-height:1;
  background:linear-gradient(120deg,#fff 20%,var(--accent1) 60%,var(--accent2) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;opacity:0;animation:fadeUp .9s ease .35s forwards;}
.entrance-sub{margin-top:16px;font-size:13px;color:var(--text-dim);opacity:0;animation:fadeUp .9s ease .5s forwards;}
#enter-btn{margin-top:56px;font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:16px 38px;background:transparent;color:var(--text);border:1px solid var(--border-hi);border-radius:999px;cursor:${c.effects.cursor?'none':'pointer'};position:relative;overflow:hidden;opacity:0;animation:fadeUp .9s ease .7s forwards;}
#enter-btn::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--accent1),var(--accent2));opacity:0;transition:opacity .35s ease;}
#enter-btn span{position:relative;z-index:1;transition:color .35s ease;}
#enter-btn:hover::before{opacity:1;} #enter-btn:hover span{color:var(--void);} #enter-btn:hover{border-color:transparent;}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
#app{position:relative;z-index:5;min-height:100vh;width:100%;display:flex;align-items:center;justify-content:center;padding:50px 20px;opacity:0;transform:translateY(18px) scale(.985);transition:opacity 1s ease,transform 1s ease;}
#app.show{opacity:1;transform:translateY(0) scale(1);}
.card{width:100%;max-width:var(--card-w);background:var(--panel);${c.theme.cardGradient?`background-image:linear-gradient(160deg, ${c.theme.accent1}14, transparent 40%, ${c.theme.accent2}0d);`:''}
  border:${c.theme.borderStyle==='none'?'none':'1px solid var(--border)'};border-radius:var(--radius);
  backdrop-filter:blur(22px) saturate(140%);-webkit-backdrop-filter:blur(22px) saturate(140%);padding:36px 30px 26px;
  box-shadow:0 30px 80px -30px rgba(0,0,0,.7)${c.theme.borderStyle==='glow'?`, 0 0 ${40*c.theme.glow/50}px -6px var(--accent1)`:''};position:relative;}
.banner{position:absolute;top:0;left:0;right:0;height:96px;border-radius:var(--radius) var(--radius) 0 0;overflow:hidden;${bannerBg}}
.avatar-wrap{position:relative;width:92px;height:92px;margin:20px auto 0;border-radius:${avatarShapeRadius};cursor:${c.effects.cursor?'none':'pointer'};}
.avatar-ring{position:absolute;inset:-4px;border-radius:${avatarShapeRadius};background:conic-gradient(from 0deg,var(--accent1),var(--accent2),var(--accent1));animation:spin 6s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
.avatar{position:absolute;inset:3px;border-radius:${avatarShapeRadius};background:linear-gradient(145deg,#232438,#131420);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:30px;color:var(--text);overflow:hidden;z-index:1;transition:transform .3s cubic-bezier(.34,1.8,.64,1);}
.avatar-wrap.pulse .avatar{transform:scale(1.12);}
.status-dot{position:absolute;bottom:2px;right:2px;z-index:2;width:16px;height:16px;border-radius:50%;background:var(--success);border:3px solid var(--panel-solid);box-shadow:0 0 8px rgba(127,216,166,.7);}
.identity{text-align:center;margin-top:16px;}
.name-row{display:flex;align-items:center;justify-content:center;gap:7px;flex-wrap:wrap;}
.display-name{font-family:var(--font-display);font-weight:600;font-size:22px;letter-spacing:-0.01em;}
.name-gradient{background:linear-gradient(90deg,var(--accent1),var(--accent2),var(--accent1));background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:gradShift 4s linear infinite;}
@keyframes gradShift{to{background-position:200% center;}}
.name-glow{animation:nameGlow 2s ease-in-out infinite;}
@keyframes nameGlow{0%,100%{text-shadow:0 0 8px var(--accent1);}50%{text-shadow:0 0 20px var(--accent1),0 0 6px var(--accent2);}}
.name-rainbow{animation:rainbow 4s linear infinite;}
@keyframes rainbow{0%{color:#ff6b6b;}20%{color:#f6c343;}40%{color:#7fd8a6;}60%{color:#7fb8f6;}80%{color:#c78bf6;}100%{color:#ff6b6b;}}
.name-shake{display:inline-block;animation:shake 3s ease-in-out infinite;}
@keyframes shake{0%,92%,100%{transform:translateX(0) rotate(0);}93%{transform:translateX(-2px) rotate(-1deg);}95%{transform:translateX(2px) rotate(1deg);}97%{transform:translateX(-1px) rotate(0);}}
.badge-pill{width:20px;height:20px;border-radius:50%;border:1px solid;display:inline-flex;align-items:center;justify-content:center;font-size:11px;}
.handle{margin-top:3px;font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);}
.meta-row{display:flex;justify-content:center;flex-wrap:wrap;gap:8px;margin-top:9px;}
.meta-chip{font-family:var(--font-mono);font-size:10.5px;color:var(--text-dim);background:rgba(255,255,255,.04);border:1px solid var(--border);padding:4px 9px;border-radius:99px;}
.tagline{margin-top:16px;text-align:center;font-size:14px;color:var(--text-dim);min-height:20px;font-family:var(--font-mono);}
.cursor-blink{display:inline-block;width:1px;height:13px;background:var(--accent2);margin-left:2px;vertical-align:middle;animation:blink 1s steps(1) infinite;}
@keyframes blink{50%{opacity:0;}}
.bio{margin-top:16px;text-align:center;font-size:13.5px;line-height:1.65;color:#b7bad0;padding:0 6px;}
.stats{display:flex;justify-content:center;gap:26px;margin-top:22px;padding:15px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
.stat{text-align:center;} .stat b{display:block;font-family:var(--font-display);font-size:17px;font-weight:600;}
.stat span{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint);font-family:var(--font-mono);}
.widget{margin-top:16px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:12px;padding:11px 12px;}
.now-playing{display:flex;align-items:center;gap:11px;}
.np-art{width:36px;height:36px;border-radius:8px;flex-shrink:0;background:linear-gradient(145deg,var(--accent1),#2a2550);display:flex;align-items:center;justify-content:center;cursor:${c.effects.cursor?'none':'pointer'};}
.np-info{flex:1;min-width:0;} .np-title{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.np-artist{font-size:11px;color:var(--text-faint);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;}
.eq{display:flex;align-items:flex-end;gap:3px;height:15px;flex-shrink:0;}
.eq span{width:3px;background:var(--accent2);border-radius:2px;animation:eq .9s ease-in-out infinite;animation-play-state:paused;}
.eq.playing span{animation-play-state:running;}
.eq span:nth-child(1){animation-delay:-0.6s;} .eq span:nth-child(2){animation-delay:-0.3s;} .eq span:nth-child(3){animation-delay:-0.9s;} .eq span:nth-child(4){animation-delay:-0.15s;}
@keyframes eq{0%,100%{height:3px;}50%{height:15px;}}
.np-progress{height:3px;background:rgba(255,255,255,.08);border-radius:2px;margin-top:9px;overflow:hidden;cursor:${c.effects.cursor?'none':'pointer'};}
.np-progress-fill{height:100%;width:0%;background:linear-gradient(90deg,var(--accent1),var(--accent2));}
.np-controls{display:flex;align-items:center;gap:8px;margin-top:8px;}
.np-btn{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.06);border:none;color:var(--text);display:flex;align-items:center;justify-content:center;cursor:${c.effects.cursor?'none':'pointer'};}
.np-btn svg{width:11px;height:11px;}
.discord-widget{display:flex;align-items:center;gap:10px;}
.dc-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(145deg,var(--accent1),#2a2550);flex-shrink:0;position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:13px;font-weight:700;}
.dc-status{position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;border:2px solid var(--panel-solid);}
.dc-info{flex:1;min-width:0;} .dc-name{font-size:12.5px;font-weight:600;} .dc-activity{font-size:11px;color:var(--text-faint);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.dc-join{font-family:var(--font-mono);font-size:10px;padding:6px 10px;border-radius:7px;background:${c.theme.accent1}22;color:var(--accent1);white-space:nowrap;}
.countdown-widget{text-align:center;}
.countdown-label{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);margin-bottom:6px;}
.countdown-time{font-family:var(--font-display);font-size:19px;font-weight:600;letter-spacing:.02em;}
.socials{display:flex;justify-content:center;flex-wrap:wrap;gap:13px;margin-top:20px;}
.social{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03);border:1px solid var(--border);transition:border-color .25s ease,background .25s ease,box-shadow .25s ease;cursor:${c.effects.cursor?'none':'pointer'};}
.social svg{width:16px;height:16px;}
.social:hover{border-color:var(--border-hi);background:${c.theme.accent1}1a;box-shadow:0 0 ${18*c.theme.glow/50}px -3px var(--accent1);}
.footer-row{margin-top:24px;display:flex;align-items:center;justify-content:space-between;font-family:var(--font-mono);font-size:10px;color:var(--text-faint);}
.views{display:flex;align-items:center;gap:6px;}
.live-dot{width:6px;height:6px;border-radius:50%;background:var(--success);box-shadow:0 0 6px var(--success);animation:pulse 1.6s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.35;}}
.footer-actions{display:flex;gap:8px;}
.footer-actions button{background:none;border:none;color:var(--text-faint);cursor:${c.effects.cursor?'none':'pointer'};padding:2px;}
.footer-actions svg{width:13px;height:13px;}
#ctx-menu{position:fixed;z-index:1000;background:var(--panel-solid);border:1px solid var(--border-hi);border-radius:9px;padding:5px;display:none;box-shadow:0 12px 30px rgba(0,0,0,.5);min-width:150px;}
#ctx-menu button{display:block;width:100%;text-align:left;background:none;border:none;color:var(--text);font-size:12px;padding:8px 10px;border-radius:6px;cursor:${c.effects.cursor?'none':'pointer'};font-family:var(--font-body);}
#ctx-menu button:hover{background:rgba(255,255,255,.06);}
body.layout-stacked .card{text-align:left;} body.layout-stacked .identity,body.layout-stacked .tagline,body.layout-stacked .bio{text-align:left;}
body.layout-stacked .name-row,body.layout-stacked .meta-row{justify-content:flex-start;} body.layout-stacked .avatar-wrap{margin:20px 0 0;}
body.layout-stacked .socials{justify-content:flex-start;}
body.layout-compact .card{padding:24px 22px 18px;} body.layout-compact .avatar-wrap{width:64px;height:64px;} body.layout-compact .banner{height:64px;}
body.layout-compact .bio{display:none;} body.layout-compact .stats{margin-top:16px;padding:11px 0;}
body.layout-minimal .card{background:transparent;border:none;backdrop-filter:none;box-shadow:none;padding:20px 10px;}
body.layout-minimal .banner{display:none;} body.layout-minimal .avatar-wrap{margin-top:0;}
body.layout-terminal .card{border-radius:6px;font-family:var(--font-mono);} body.layout-terminal .display-name{font-family:var(--font-mono);}
body.layout-terminal .banner{display:none;} body.layout-terminal .avatar-wrap{border-radius:6px;} body.layout-terminal .avatar-ring{border-radius:6px;}
body.layout-terminal .avatar{border-radius:4px;}
body.layout-split .card{display:flex;flex-wrap:wrap;align-items:center;text-align:left;padding-top:30px;}
body.layout-split .banner{height:64px;}
body.layout-split .avatar-wrap{order:1;margin:26px 16px 0 0;flex:0 0 auto;}
body.layout-split .identity{order:2;flex:1 1 auto;min-width:0;margin-top:22px;text-align:left;}
body.layout-split .name-row,body.layout-split .meta-row{justify-content:flex-start;}
body.layout-split .tagline,body.layout-split .bio,body.layout-split .stats,body.layout-split .widget,body.layout-split .socials,body.layout-split .footer-row{flex:0 0 100%;order:3;}
body.layout-split .tagline,body.layout-split .bio{text-align:left;}
body.layout-split .bio{padding:0;}
body.layout-split .socials{justify-content:flex-start;}
${c.effects.tilt ? '.card{transition:transform .12s ease-out;will-change:transform;}' : ''}
@media(max-width:460px){.card{padding:32px 20px 22px;} .stats{gap:16px;} body.layout-split .card{padding-top:32px;}}
</style>
</head>
<body class="layout-${c.theme.layout}">
${bgLayer}
<div class="bg-dim"></div>
<div class="grain"></div>
${c.effects.cursor ? '<div id="cursor-dot"></div><div id="cursor-ring"></div><div id="cursor-glow"></div>' : ''}
<div id="ctx-menu"><button id="ctx-copy">Copy profile link</button><button id="ctx-share">Share</button></div>

${c.effects.entrance ? `
<div id="entrance">
  <div class="entrance-eyebrow">// profile</div>
  <div class="entrance-name">${esc(c.effects.entranceTitle)}</div>
  <div class="entrance-sub">${esc(c.effects.entranceSub)}</div>
  <button id="enter-btn"><span>Enter</span></button>
</div>` : ''}

<div id="app" class="${c.effects.entrance ? '' : 'show'}">
  <div class="card">
    <div class="banner"></div>
    <div class="avatar-wrap" id="avatar-wrap">
      <div class="avatar-ring"></div>
      <div class="avatar">${avatarInner}</div>
      <div class="status-dot"></div>
    </div>
    <div class="identity">
      <div class="name-row">
        <span class="display-name ${c.theme.usernameEffect==='gradient'?'name-gradient':c.theme.usernameEffect==='glow'?'name-glow':c.theme.usernameEffect==='rainbow'?'name-rainbow':c.theme.usernameEffect==='shake'?'name-shake':''}">${esc(c.identity.display)}</span>
        ${badgesHTML}
      </div>
      <div class="handle">@${esc(c.identity.handle)}</div>
      ${extraFieldsHTML ? `<div class="meta-row">${extraFieldsHTML}</div>` : ''}
    </div>
    <div class="tagline"><span id="tagline-text"></span><span class="cursor-blink"></span></div>
    <p class="bio">${esc(c.identity.bio)}</p>
    <div class="stats">
      ${c.widgets.viewCounter ? `<div class="stat"><b id="stat-views">0</b><span>Views</span></div>` : ''}
      <div class="stat"><b>${c.widgets.badges.length}</b><span>Badges</span></div>
      <div class="stat"><b>${c.socials.length}</b><span>Links</span></div>
    </div>

    ${c.audio.enabled ? `
    <div class="widget now-playing-widget">
      <div class="now-playing">
        <div class="np-art" id="np-toggle"><svg id="np-icon" width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M8 5v14l11-7z"/></svg></div>
        <div class="np-info"><div class="np-title" id="np-title"></div><div class="np-artist" id="np-artist"></div></div>
        <div class="eq" id="np-eq"><span></span><span></span><span></span><span></span></div>
      </div>
      <div class="np-progress" id="np-progress"><div class="np-progress-fill" id="np-progress-fill"></div></div>
      <div class="np-controls">
        <button class="np-btn" id="np-prev"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 6h2v12H6zm3.5 6l10-6v12z" transform="scale(-1,1) translate(-24,0)"/></svg></button>
        <button class="np-btn" id="np-play"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg></button>
        <button class="np-btn" id="np-next"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 6h2v12H6zm3.5 6l10-6v12z"/></svg></button>
      </div>
      <audio id="audio-el"></audio>
    </div>` : ''}

    ${c.widgets.discord.enabled ? `
    <div class="widget discord-widget">
      <div class="dc-avatar">${esc((c.widgets.discord.username||'?').slice(0,1).toUpperCase())}<span class="dc-status" style="background:${statusColors[c.widgets.discord.status]}"></span></div>
      <div class="dc-info"><div class="dc-name">${esc(c.widgets.discord.username)}</div><div class="dc-activity">${esc(c.widgets.discord.activity || (c.widgets.discord.status==='offline'?'Offline':'Online'))}</div></div>
      ${c.widgets.discord.inviteUrl ? `<a class="dc-join" href="${esc(c.widgets.discord.inviteUrl)}" target="_blank" rel="noopener">Join</a>` : ''}
    </div>` : ''}

    ${c.widgets.countdown.enabled && c.widgets.countdown.target ? `
    <div class="widget countdown-widget">
      <div class="countdown-label">${esc(c.widgets.countdown.label || 'countdown')}</div>
      <div class="countdown-time" id="countdown-time">--</div>
    </div>` : ''}

    <div class="socials">${socialsHTML}</div>
    <div class="footer-row">
      <div class="views"><span class="live-dot"></span> live</div>
      <div class="footer-actions">
        <button id="copy-link" title="Copy link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg></button>
        <button id="share-link" title="Share"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/></svg></button>
      </div>
      ${c.widgets.clock ? `<div id="clock">--:--:--</div>` : `<div></div>`}
    </div>
  </div>
</div>

<script>
(function(){
  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CURSOR_ON = ${c.effects.cursor ? 'true' : 'false'};
  var CURSOR_STYLE = ${JSON.stringify(c.effects.cursorStyle)};
  var REACTION = ${JSON.stringify(c.effects.reaction)};
  var BG_STYLE = ${JSON.stringify(c.background.style)};
  var ACCENT1 = ${JSON.stringify(c.theme.accent1)};
  var TAGLINES = ${safeJson(c.identity.taglines.length ? c.identity.taglines : ['welcome.'])};
  var TRACKS = ${safeJson(c.audio.tracks.length ? c.audio.tracks : [{title:'Untitled',artist:'Unknown',url:''}])};
  var AUDIO_AUTOPLAY = ${c.audio.autoplay ? 'true' : 'false'};
  var AUDIO_VOLUME = ${(c.audio.volume/100).toFixed(2)};
  var REAL_VIEWS = ${realViews};
  var HAS_ENTRANCE = ${c.effects.entrance ? 'true' : 'false'};
  var COUNTDOWN_TARGET = ${JSON.stringify(c.widgets.countdown.target || '')};
  var TILT_ON = ${c.effects.tilt ? 'true' : 'false'};

  var pageVisible = !document.hidden;
  var resumeCallbacks = [];
  document.addEventListener('visibilitychange', function(){
    pageVisible = !document.hidden;
    if(pageVisible){ var cbs=resumeCallbacks; resumeCallbacks=[]; cbs.forEach(function(fn){ fn(); }); }
  });

  if(CURSOR_ON && !REDUCED){
    document.body.classList.add('cursor-'+CURSOR_STYLE);
    var dot=document.getElementById('cursor-dot'), ring=document.getElementById('cursor-ring'), glow=document.getElementById('cursor-glow');
    var mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
    var mouseMoved=false;
    window.addEventListener('mousemove', function(e){ mx=e.clientX; my=e.clientY; mouseMoved=true; }, {passive:true});
    var trailPool=[], POOL_SIZE=14, poolIdx=0;
    if(CURSOR_STYLE==='trail'){
      for(var pi=0;pi<POOL_SIZE;pi++){
        var tp=document.createElement('div'); tp.className='cursor-particle'; tp.style.background=ACCENT1;
        document.body.appendChild(tp); trailPool.push(tp);
      }
    }
    var cursorStopped=false;
    function cursorLoop(){
      if(!pageVisible){ cursorStopped=true; resumeCallbacks.push(function(){ cursorStopped=false; requestAnimationFrame(cursorLoop); }); return; }
      dot.style.transform='translate3d('+mx+'px,'+my+'px,0) translate(-50%,-50%)';
      rx+=(mx-rx)*.18; ry+=(my-ry)*.18;
      var ringTransform='translate3d('+rx+'px,'+ry+'px,0) translate(-50%,-50%)';
      ring.style.transform=ringTransform;
      if(glow) glow.style.transform=ringTransform;
      if(CURSOR_STYLE==='trail' && mouseMoved){
        mouseMoved=false;
        var tp2=trailPool[poolIdx]; poolIdx=(poolIdx+1)%POOL_SIZE;
        tp2.style.transition='none'; tp2.style.opacity='0.9';
        tp2.style.transform='translate3d('+mx+'px,'+my+'px,0) translate(-50%,-50%) scale(1)';
        void tp2.offsetWidth;
        tp2.style.transition='opacity .5s ease, transform .5s ease';
        tp2.style.opacity='0'; tp2.style.transform='translate3d('+mx+'px,'+my+'px,0) translate(-50%,-50%) scale(.3)';
      }
      requestAnimationFrame(cursorLoop);
    }
    cursorLoop();
    document.querySelectorAll('a,button,.avatar-wrap,.np-art,.np-progress').forEach(function(el){
      el.addEventListener('mouseenter', function(){ ring.classList.add('hover'); });
      el.addEventListener('mouseleave', function(){ ring.classList.remove('hover'); });
    });
  }

  if(TILT_ON && !REDUCED){
    var tiltCard=document.querySelector('.card');
    if(tiltCard){
      tiltCard.addEventListener('mousemove', function(e){
        var r=tiltCard.getBoundingClientRect();
        var px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
        tiltCard.style.transform='perspective(900px) rotateX('+(-py*6)+'deg) rotateY('+(px*8)+'deg)';
      }, {passive:true});
      tiltCard.addEventListener('mouseleave', function(){ tiltCard.style.transform='perspective(900px) rotateX(0) rotateY(0)'; });
    }
  }

  var ctxMenu=document.getElementById('ctx-menu');
  document.addEventListener('contextmenu', function(e){
    e.preventDefault(); ctxMenu.style.display='block';
    ctxMenu.style.left=Math.min(e.clientX,innerWidth-160)+'px';
    ctxMenu.style.top=Math.min(e.clientY,innerHeight-90)+'px';
  });
  document.addEventListener('click', function(){ ctxMenu.style.display='none'; });
  function doCopy(){ try{ navigator.clipboard.writeText(location.href); }catch(e){} }
  function doShare(){ if(navigator.share){ navigator.share({ title: document.title, url: location.href }).catch(function(){}); } else { doCopy(); } }
  document.getElementById('ctx-copy').addEventListener('click', doCopy);
  document.getElementById('ctx-share').addEventListener('click', doShare);
  var copyBtn=document.getElementById('copy-link'); if(copyBtn) copyBtn.addEventListener('click', doCopy);
  var shareBtn=document.getElementById('share-link'); if(shareBtn) shareBtn.addEventListener('click', doShare);

  var avatarWrap=document.getElementById('avatar-wrap');
  if(avatarWrap){ avatarWrap.addEventListener('click', function(){ avatarWrap.classList.add('pulse'); setTimeout(function(){ avatarWrap.classList.remove('pulse'); }, 350); }); }

  if(['particles','snow','rain','fireflies','stars'].indexOf(BG_STYLE)!==-1){
    var canvas=document.getElementById('bg-canvas'), ctx=canvas.getContext('2d'), W,H,DPR,particles=[];
    var COUNT = BG_STYLE==='rain' ? 140 : (BG_STYLE==='stars' ? 160 : 90);
    function resize(){
      DPR=Math.min(window.devicePixelRatio||1,2);
      W=innerWidth; H=innerHeight;
      canvas.width=Math.round(W*DPR); canvas.height=Math.round(H*DPR);
      canvas.style.width=W+'px'; canvas.style.height=H+'px';
      ctx.setTransform(DPR,0,0,DPR,0,0);
    }
    resize();
    var resizeScheduled=false;
    window.addEventListener('resize', function(){
      if(!resizeScheduled){ resizeScheduled=true; requestAnimationFrame(function(){ resizeScheduled=false; resize(); }); }
    });
    function hexToRgb(h){ h=h.replace('#',''); if(h.length===3) h=h.split('').map(function(c){return c+c;}).join(''); var n=parseInt(h,16); return [(n>>16)&255,(n>>8)&255,n&255]; }
    var rgb = hexToRgb(ACCENT1);
    for(var i=0;i<COUNT;i++){
      if(BG_STYLE==='snow') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.3,vy:Math.random()*.6+.3,r:Math.random()*2+1});
      else if(BG_STYLE==='rain') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:-0.5,vy:Math.random()*6+8,r:1});
      else if(BG_STYLE==='fireflies') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.8+1,phase:Math.random()*Math.PI*2});
      else if(BG_STYLE==='stars') particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.03,vy:(Math.random()-.5)*.03,r:Math.random()*1.3+.4,phase:Math.random()*Math.PI*2,speed:.008+Math.random()*.02});
      else particles.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.6+.6});
    }
    var pointer={x:-9999,y:-9999};
    window.addEventListener('mousemove', function(e){ pointer.x=e.clientX; pointer.y=e.clientY; }, {passive:true});
    window.addEventListener('mouseleave', function(){ pointer.x=-9999; pointer.y=-9999; });
    var t=0, canvasStopped=false;
    function drawFrame(){
      if(!pageVisible){ canvasStopped=true; resumeCallbacks.push(function(){ canvasStopped=false; requestAnimationFrame(drawFrame); }); return; }
      ctx.clearRect(0,0,W,H);
      for(var i=0;i<particles.length;i++){
        var p=particles[i]; p.x+=p.vx; p.y+=p.vy;
        if(BG_STYLE==='particles' && REACTION!=='none'){
          var dx=p.x-pointer.x, dy=p.y-pointer.y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<110){ var f=(110-d)/110; var sign=REACTION==='attract'?-1:1; p.x+=sign*(dx/d)*f*1.6; p.y+=sign*(dy/d)*f*1.6; }
        }
        if(p.x<-10)p.x=W+10; if(p.x>W+10)p.x=-10; if(p.y<-10)p.y=H+10; if(p.y>H+10)p.y=-10;
        ctx.beginPath();
        if(BG_STYLE==='rain'){ ctx.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.35)'; ctx.lineWidth=1; ctx.moveTo(p.x,p.y); ctx.lineTo(p.x+p.vx*2,p.y-14); ctx.stroke(); }
        else if(BG_STYLE==='fireflies'){ var op=0.3+0.5*Math.abs(Math.sin(t*0.02+p.phase)); ctx.shadowBlur=8; ctx.shadowColor='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',1)'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+op+')'; ctx.fill(); ctx.shadowBlur=0; }
        else if(BG_STYLE==='stars'){ var tw=0.35+0.65*Math.abs(Math.sin(t*p.speed+p.phase)); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,'+(tw*0.85)+')'; ctx.fill(); }
        else { ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle= BG_STYLE==='snow' ? 'rgba(255,255,255,0.7)' : 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.55)'; ctx.fill(); }
      }
      if(BG_STYLE==='particles'){
        for(var i=0;i<particles.length;i++){ for(var j=i+1;j<particles.length;j++){
          var a=particles[i], b=particles[j], dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<130){ ctx.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+(0.12*(1-d/130))+')'; ctx.lineWidth=.6; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
        }}
      }
      t++;
      if(!REDUCED) requestAnimationFrame(drawFrame);
    }
    drawFrame();
  }

  var entrance=document.getElementById('entrance'), app=document.getElementById('app');
  function enter(){
    if(entrance){ entrance.classList.add('hidden'); }
    setTimeout(function(){ app.classList.add('show'); startTagline(); animateViews(); if(AUDIO_AUTOPLAY) playAudio(); }, HAS_ENTRANCE ? 250 : 0);
  }
  if(HAS_ENTRANCE){
    document.getElementById('enter-btn').addEventListener('click', function(e){ e.stopPropagation(); enter(); });
    entrance.addEventListener('click', enter);
  } else { enter(); }

  var taglineEl=document.getElementById('tagline-text'), li=0, ci=0, deleting=false;
  function startTagline(){ if(taglineEl) typeLoop(); }
  function typeLoop(){
    var full=TAGLINES[li];
    if(!deleting){ ci++; taglineEl.textContent=full.slice(0,ci); if(ci===full.length){ deleting=true; setTimeout(typeLoop,1600); return; } }
    else { ci--; taglineEl.textContent=full.slice(0,ci); if(ci===0){ deleting=false; li=(li+1)%TAGLINES.length; } }
    setTimeout(typeLoop, deleting?28:48);
  }

  function animateViews(){
    var el=document.getElementById('stat-views'); if(!el) return;
    var target=REAL_VIEWS, cur=0, step=Math.max(1,Math.ceil(target/40));
    (function inc(){ cur=Math.min(target,cur+step); el.textContent=cur.toLocaleString(); if(cur<target) requestAnimationFrame(inc); })();
  }

  var clockEl=document.getElementById('clock');
  if(clockEl){ (function tickClock(){ var d=new Date(); clockEl.textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}); setTimeout(tickClock,1000); })(); }

  var cdEl=document.getElementById('countdown-time');
  if(cdEl && COUNTDOWN_TARGET){
    (function tickCd(){
      var diff = new Date(COUNTDOWN_TARGET).getTime() - Date.now();
      if(diff<=0){ cdEl.textContent='ended'; return; }
      var d=Math.floor(diff/86400000), h=Math.floor(diff%86400000/3600000), m=Math.floor(diff%3600000/60000), s=Math.floor(diff%60000/1000);
      cdEl.textContent=d+'d '+h+'h '+m+'m '+s+'s';
      setTimeout(tickCd,1000);
    })();
  }

  var audioEl=document.getElementById('audio-el');
  var npTitle=document.getElementById('np-title'), npArtist=document.getElementById('np-artist');
  var npEq=document.getElementById('np-eq'), npPlayBtn=document.getElementById('np-play'), npToggle=document.getElementById('np-toggle');
  var npProgress=document.getElementById('np-progress'), npFill=document.getElementById('np-progress-fill');
  var npPrev=document.getElementById('np-prev'), npNext=document.getElementById('np-next');
  var tIdx=0, isPlaying=false;
  var PLAY_ICON='<path d="M8 5v14l11-7z"/>', PAUSE_ICON='<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>';
  function loadTrack(i, autoplay){
    tIdx=((i%TRACKS.length)+TRACKS.length)%TRACKS.length;
    var tr=TRACKS[tIdx];
    if(npTitle) npTitle.textContent=tr.title; if(npArtist) npArtist.textContent=tr.artist;
    if(audioEl){ if(tr.url){ audioEl.src=tr.url; } else { audioEl.removeAttribute('src'); } audioEl.volume=AUDIO_VOLUME; }
    if(autoplay) playAudio();
  }
  function playAudio(){
    if(!audioEl || !audioEl.src){ isPlaying=!isPlaying; updatePlayUI(); return; }
    audioEl.play().then(function(){ isPlaying=true; updatePlayUI(); }).catch(function(){ isPlaying=false; updatePlayUI(); });
  }
  function pauseAudio(){ if(audioEl) audioEl.pause(); isPlaying=false; updatePlayUI(); }
  function updatePlayUI(){
    var icon = isPlaying ? PAUSE_ICON : PLAY_ICON;
    if(npPlayBtn) npPlayBtn.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">'+icon+'</svg>';
    if(npToggle) npToggle.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none">'+icon+'</svg>';
    if(npEq) npEq.classList.toggle('playing', isPlaying);
  }
  if(npTitle){
    loadTrack(0,false);
    if(npPlayBtn) npPlayBtn.addEventListener('click', function(){ isPlaying ? pauseAudio() : playAudio(); });
    if(npToggle) npToggle.addEventListener('click', function(){ isPlaying ? pauseAudio() : playAudio(); });
    if(npPrev) npPrev.addEventListener('click', function(){ loadTrack(tIdx-1, isPlaying); });
    if(npNext) npNext.addEventListener('click', function(){ loadTrack(tIdx+1, isPlaying); });
    if(npProgress) npProgress.addEventListener('click', function(e){
      if(!audioEl || !audioEl.duration) return;
      var rect=npProgress.getBoundingClientRect(); var pct=(e.clientX-rect.left)/rect.width;
      audioEl.currentTime = pct*audioEl.duration;
    });
    if(audioEl){
      audioEl.addEventListener('timeupdate', function(){ if(audioEl.duration && npFill) npFill.style.width=(audioEl.currentTime/audioEl.duration*100)+'%'; });
      audioEl.addEventListener('ended', function(){ loadTrack(tIdx+1, true); });
    }
  }
})();
</script>
</body>
</html>`;
}

module.exports = { buildPublicHTML, FONT_PRESETS, PLATFORMS_ICONS: ICONS, BADGES };
