// games/02-Games/games.js
(async function () {
  const GRID = document.getElementById('gamesGrid');
  const LOAD_MORE = document.getElementById('loadMoreBtn');
  const SEARCH = document.getElementById('gamesSearchInput');
  const PAGE_SIZE = 50;

  let allGames = null;
  let offset = 0;
  let filtered = null;

  async function fetchGames() {
    if (allGames) return allGames;
    const response = await fetch('games.json', { cache: 'no-store' });
    const data = await response.json();
    allGames = Array.isArray(data) ? data.filter((game) => game && typeof game === 'object') : [];
    return allGames;
  }

  function safeText(value, fallback = '') {
    return window.SFVSecurity && window.SFVSecurity.sanitizeText
      ? window.SFVSecurity.sanitizeText(value, fallback)
      : (value ?? fallback);
  }

  function renderCard(game) {
    const id = String(game.id || game.slug || game.title || Math.random().toString(36).slice(2, 8));
    const title = safeText(game.title, 'Untitled Game');
    const thumb = window.SFVSecurity ? window.SFVSecurity.safeUrl(game.thumbnail, '../play-card.webp') : (game.thumbnail || '../play-card.webp');

    const card = document.createElement('article');
    card.className = 'game-card';
    card.dataset.gameId = id;
    card.innerHTML = `
      <div class="card-thumb">
        <img loading="lazy" src="${thumb}" alt="${title}">
        <button class="fav-btn" aria-label="toggle favorite">${SFV.isFav(id) ? '★' : '☆'}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <div class="card-meta">
          <span class="plays-count" data-id="${id}">${(SFV.getLeaderboard(100).find(([key]) => key === id)?.[1] || 0)}</span> plays
          <span class="stars">${renderStars(id)}</span>
        </div>
        <div class="card-actions">
          <a class="play-link" href="../game-player/game-player.html?game=${encodeURIComponent(id)}" data-id="${id}">Play</a>
        </div>
      </div>
    `;

    card.querySelector('.fav-btn').addEventListener('click', () => {
      SFV.toggleFav(id);
      card.querySelector('.fav-btn').textContent = SFV.isFav(id) ? '★' : '☆';
      renderAchievements();
    });

    card.querySelector('.play-link').addEventListener('click', () => {
      SFV.addPlay(id);
      const playsNode = card.querySelector('.plays-count');
      const current = Number(playsNode.textContent.trim()) || 0;
      playsNode.textContent = current + 1;
      renderLeaderboard();
      renderAchievements();
    });

    card.querySelectorAll('.star').forEach((star) => {
      star.addEventListener('click', (event) => {
        const value = Number(event.currentTarget.dataset.value || 1);
        SFV.setStar(id, value);
        updateStarsUI(card, id);
        renderAchievements();
      });
    });

    return card;
  }

  function renderStars(id) {
    const value = SFV.getStar(id);
    let output = '';
    for (let index = 1; index <= 5; index += 1) {
      output += `<button class="star" data-value="${index}" aria-label="rate ${index}">${index <= value ? '★' : '☆'}</button>`;
    }
    return output;
  }

  function updateStarsUI(card, id) {
    const starsNode = card.querySelector('.stars');
    if (!starsNode) return;
    starsNode.innerHTML = renderStars(id);
    starsNode.querySelectorAll('.star').forEach((star) => {
      star.addEventListener('click', (event) => {
        const value = Number(event.currentTarget.dataset.value || 1);
        SFV.setStar(id, value);
        updateStarsUI(card, id);
      });
    });
  }

  function renderPage() {
    const list = filtered || allGames;
    if (!list || list.length === 0) {
      LOAD_MORE.hidden = true;
      return;
    }

    const slice = list.slice(offset, offset + PAGE_SIZE);
    slice.forEach((game) => GRID.appendChild(renderCard(game)));
    offset += slice.length;
    LOAD_MORE.hidden = offset >= list.length;
  }

  function resetAndRender() {
    GRID.innerHTML = '';
    offset = 0;
    renderPage();
  }

  function applySearch(query) {
    const value = (query || '').trim().toLowerCase();
    if (!value) {
      filtered = null;
    } else {
      filtered = allGames.filter((game) => {
        const title = safeText(game.title, '').toLowerCase();
        const tags = Array.isArray(game.tags) ? game.tags.join(' ').toLowerCase() : '';
        return title.includes(value) || tags.includes(value);
      });
    }
    resetAndRender();
  }

  // Leaderboard render
  function renderLeaderboard(limit = 10) {
    const listEl = document.getElementById('leaderboardList');
    if (!listEl) return;
    listEl.innerHTML = '';
    const data = SFV.getLeaderboard(limit);
    data.forEach(([id, count]) => {
      const game = allGames.find(g => String(g.id || g.slug || g.title) === String(id));
      const title = game ? safeText(game.title, id) : id;
      const li = document.createElement('li');
      li.textContent = `${title}`;
      const span = document.createElement('span');
      span.className = 'count';
      span.textContent = count;
      li.appendChild(span);
      listEl.appendChild(li);
    });
  }

  // Achievements render
  function renderAchievements() {
    const el = document.getElementById('achievementsList');
    if (!el) return;
    el.innerHTML = '';
    const plays = Object.values(SFV.getLeaderboard(100).reduce((acc, [id, v]) => { acc[id]=v; return acc; }, {})).reduce((s,n)=>s+Number(n||0),0);
    const favCount = (SFV.getFavs()||[]).length;
    const starsObj = (window.SFV && SFV.getLeaderboard) ? JSON.parse(JSON.stringify(SFV.getLeaderboard(100))) : {};
    const ratedCount = Object.keys(SFV.getLeaderboard?{}:{}).length; // lightweight - don't overcomplicate

    const achievements = [
      { id:'play10', title:'Played 10 times', done: plays >= 10, meta:`${plays} plays` },
      { id:'fav5', title:'Add 5 favorites', done: favCount >= 5, meta:`${favCount} favorites` },
      { id:'rate10', title:'Rate 10 games', done: Object.keys(SFV.getLeaderboard?{}:{}).length >= 10, meta:`${ratedCount} ratings` }
    ];

    achievements.forEach(a=>{
      const div = document.createElement('div');
      div.className = 'ach ' + (a.done? 'done':'');
      div.innerHTML = `<div class="dot">${a.done? '✓':'○'}</div><div class="content"><div class="title">${a.title}</div><div class="meta">${a.meta}</div></div>`;
      el.appendChild(div);
    });
  }

  LOAD_MORE.addEventListener('click', () => renderPage());
  SEARCH?.addEventListener('input', (event) => applySearch(event.target.value));

  document.getElementById('profileButton')?.addEventListener('click', () => {
    window.location.href = '../auth.html';
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    SFV.toggleTheme();
    document.querySelectorAll('.theme-icon').forEach(el=> el.textContent = SFV.getTheme() === 'dark' ? '🌙' : '☀️');
  });

  await fetchGames();
  renderPage();
  renderLeaderboard();
  renderAchievements();

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
      renderPage();
    }
  });
})();
