// games/common.js
// Small shared utilities for theme, language, user, favorites, play counts
const SFV = (() => {
  const LS = window.localStorage;
  const keys = {
    lang: 'sfv_lang',
    theme: 'sfv_theme',
    user: 'sfv_user',
    favorites: 'sfv_favs',
    stars: 'sfv_stars',
    plays: 'sfv_plays',
    leaderboard: 'sfv_leaderboard'
  };

  function getJSON(k, def) {
    try { return JSON.parse(LS.getItem(k)) ?? def; } catch(e){ return def; }
  }
  function setJSON(k, v){ LS.setItem(k, JSON.stringify(v)); }

  // Language
  function getLang(){ return LS.getItem(keys.lang) || document.documentElement.lang || 'en'; }
  function setLang(code){ LS.setItem(keys.lang, code); document.documentElement.lang = code; applyLangToUI(code); }
  function applyLangToUI(code){
    // Simple: update any element with .language-current and data attributes
    document.querySelectorAll('.language-current').forEach(el=> el.textContent = code.toUpperCase());
  }

  // Theme
  function getTheme(){ return LS.getItem(keys.theme) || 'dark'; }
  function setTheme(t){ LS.setItem(keys.theme, t); document.documentElement.setAttribute('data-theme', t); }
  function toggleTheme(){ setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

  // User (lightweight local only)
  function getUser(){ return getJSON(keys.user, {name: 'Guest', avatar: '', loggedIn: false}); }
  function setUser(u){ setJSON(keys.user, u); applyUserToUI(); }
  function logout(){ setUser({name:'Guest', avatar:'', loggedIn:false}); }
  function applyUserToUI(){
    const u = getUser();
    document.querySelectorAll('.profile-name').forEach(el=> el.textContent = u.name || 'Guest');
    document.querySelectorAll('.profile-avatar').forEach(el=> el.textContent = u.avatar || '👤');
  }

  // Favorites
  function getFavs(){ return getJSON(keys.favorites, []); }
  function isFav(id){ return getFavs().includes(id); }
  function toggleFav(id){ const f=getFavs(); const i = f.indexOf(id); if(i===-1) f.push(id); else f.splice(i,1); setJSON(keys.favorites,f); return f; }

  // Stars (rating)
  function getStars(){ return getJSON(keys.stars, {}); }
  function setStar(id, value){ const s=getStars(); s[id]=value; setJSON(keys.stars,s); }
  function getStar(id){ return getStars()[id] || 0; }

  // Plays + leaderboard
  function getPlays(){ return getJSON(keys.plays, {}); }
  function addPlay(id){ const p=getPlays(); p[id] = (p[id]||0) + 1; setJSON(keys.plays,p); updateLeaderboard(id,p[id]); return p[id]; }
  function updateLeaderboard(id, plays){ const lb = getJSON(keys.leaderboard, {}); lb[id]=plays; setJSON(keys.leaderboard, lb); }
  function getLeaderboard(limit=10){ const lb = getJSON(keys.leaderboard, {}); return Object.entries(lb).sort((a,b)=>b[1]-a[1]).slice(0,limit); }

  // Init apply saved prefs
  function init(){ setTheme(getTheme()); applyLangToUI(getLang()); applyUserToUI(); }

  return { init, getLang, setLang, getTheme, setTheme, toggleTheme, getUser, setUser, logout, getFavs, toggleFav, isFav, setStar, getStar, addPlay, getLeaderboard };
})();

// initialize on load
document.addEventListener('DOMContentLoaded', ()=> SFV.init());
