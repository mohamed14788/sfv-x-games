// games/02-Games/games.js
// Enhanced games rendering: lazy-load pages, language & theme persistence, favorites/stars, play count increment
(async function(){
  const GRID = document.getElementById('gamesGrid');
  const LOAD_MORE = document.getElementById('loadMoreBtn');
  const SEARCH = document.getElementById('gamesSearchInput');
  const PAGE_SIZE = 50; // load 50 games at a time

  let allGames = null;
  let offset = 0;
  let filtered = null;

  async function fetchGames(){
    if(allGames) return allGames;
    const res = await fetch('games.json');
    allGames = await res.json();
    // expect array
    return allGames;
  }

  function renderCard(g){
    const id = g.id || g.slug || g.title || Math.random().toString(36).slice(2,8);
    const card = document.createElement('article');
    card.className = 'game-card';
    card.dataset.gameId = id;
    card.innerHTML = `
      <div class="card-thumb">
        <img loading="lazy" src="${g.thumbnail||'../play-card.webp'}" alt="${escapeHtml(g.title||'Game')}">
        <button class="fav-btn" aria-label="toggle favorite">${SFV.isFav(id)?'★':'☆'}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(g.title)}</h3>
        <div class="card-meta">
          <span class="plays-count" data-id="${id}">${(SFV.getLeaderboard? (SFV.getLeaderboard(100).find(x=>x[0]===id)?.[1]||0):0)}</span> plays
          <span class="stars">${renderStars(id)}</span>
        </div>
        <div class="card-actions">
          <a class="play-link" href="../game-player/game-player.html?game=${encodeURIComponent(id)}" data-id="${id}">Play</a>
        </div>
      </div>
    `;
    // events
    card.querySelector('.fav-btn').addEventListener('click', e=>{
      const arr = SFV.toggleFav(id);
      e.currentTarget.textContent = SFV.isFav(id)?'★':'☆';
    });
    card.querySelector('.play-link').addEventListener('click', e=>{
      // increment plays (local only)
      SFV.addPlay(id);
      // update UI immediately
      const p = card.querySelector('.plays-count');
      p.textContent = parseInt(p.textContent||0) + 1;
    });
    // star clicks
    card.querySelectorAll('.star').forEach(s=> s.addEventListener('click', ev=>{
      const v = parseInt(ev.currentTarget.dataset.value,10);
      SFV.setStar(id,v);
      updateStarsUI(card, id);
    }));

    return card;
  }

  function renderStars(id){
    const v = (SFV.getStar?SFV.getStar(id):0);
    let out = '';
    for(let i=1;i<=5;i++){
      out += `<button class="star" data-value="${i}" aria-label="rate ${i}">${i<=v?'★':'☆'}</button>`;
    }
    return out;
  }
  function updateStarsUI(card, id){
    const stars = card.querySelector('.stars');
    if(!stars) return;
    stars.innerHTML = renderStars(id);
    stars.querySelectorAll('.star').forEach(s=> s.addEventListener('click', ev=>{
      const v = parseInt(ev.currentTarget.dataset.value,10);
      SFV.setStar(id,v);
      updateStarsUI(card,id);
    }));
  }

  function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function renderPage(){
    const list = filtered || allGames;
    if(!list) return;
    const slice = list.slice(offset, offset+PAGE_SIZE);
    slice.forEach(g=> GRID.appendChild(renderCard(g)));
    offset += slice.length;
    if(offset >= list.length) LOAD_MORE.hidden = true; else LOAD_MORE.hidden = false;
  }

  function resetAndRender(){
    GRID.innerHTML = '';
    offset = 0;
    renderPage();
  }

  // search
  function applySearch(q){
    if(!q) { filtered = null; } else {
      const qq = q.toLowerCase();
      filtered = allGames.filter(g=> (g.title||'').toLowerCase().includes(qq) || (g.tags||[]).join(' ').toLowerCase().includes(qq));
    }
    resetAndRender();
  }

  // wire controls
  LOAD_MORE.addEventListener('click', ()=> renderPage());
  SEARCH?.addEventListener('input', e=> { applySearch(e.target.value); });

  // profile button opens auth page
  document.getElementById('profileButton')?.addEventListener('click', ()=> window.location.href = '../auth.html');

  // theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', ()=> { SFV.toggleTheme(); });

  // initial load
  await fetchGames();
  renderPage();

  // infinite-scroll progressive load (optional)
  window.addEventListener('scroll', ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 400){
      renderPage();
    }
  });

})();
