// games/game-player/game-player.js
// When starting a game, increment play count via SFV.addPlay
document.addEventListener('DOMContentLoaded', ()=>{
  const params = new URLSearchParams(location.search);
  const gameId = params.get('game');
  // show game details normally (existing code) -- then increment
  if(gameId && window.SFV && typeof SFV.addPlay === 'function'){
    SFV.addPlay(gameId);
    // update any UI showing plays
    const el = document.querySelector('.plays-count[data-id="'+gameId+'"]');
    if(el) el.textContent = parseInt(el.textContent||0) + 1;
  }
});
