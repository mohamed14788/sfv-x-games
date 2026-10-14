// games/auth.js
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const avatarInput = document.getElementById('avatarInput');
  const createBtn = document.getElementById('createBtn');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loggedOutView = document.getElementById('loggedOutView');
  const loggedInView = document.getElementById('loggedInView');
  const displayName = document.getElementById('displayName');
  const avatarPreview = document.getElementById('avatarPreview');
  const backBtn = document.getElementById('backBtn');

  function refresh() {
    const user = SFV.getUser();
    if (user.loggedIn) {
      loggedInView.hidden = false;
      loggedOutView.hidden = true;
      displayName.textContent = user.name || 'User';
      avatarPreview.textContent = user.avatar || '👤';
      document.getElementById('accountTitle').textContent = 'Account Details';
    } else {
      loggedInView.hidden = true;
      loggedOutView.hidden = false;
      document.getElementById('accountTitle').textContent = 'Sign in / Create';
    }
    // show quick stats
    const stats = document.getElementById('accountStats');
    if (stats) {
      const plays = Object.values(SFV.getLeaderboard(100).reduce((acc, [id, v]) => { acc[id]=v; return acc; }, {})).reduce((s,n)=>s+Number(n||0),0);
      const favs = (SFV.getFavs()||[]).length;
      stats.textContent = `Plays: ${plays} · Favorites: ${favs}`;
    }
  }

  function saveUser() {
    const safeName = (window.SFVSecurity && window.SFVSecurity.sanitizeText)
      ? window.SFVSecurity.sanitizeText(nameInput.value, 'Player')
      : (nameInput.value || 'Player');
    const safeAvatar = (window.SFVSecurity && window.SFVSecurity.sanitizeText)
      ? window.SFVSecurity.sanitizeText(avatarInput.value, '👤')
      : (avatarInput.value || '👤');

    SFV.setUser({ name: safeName, avatar: safeAvatar, loggedIn: true });
    refresh();
  }

  createBtn?.addEventListener('click', saveUser);
  loginBtn?.addEventListener('click', saveUser);
  logoutBtn?.addEventListener('click', () => {
    SFV.logout();
    refresh();
  });
  backBtn?.addEventListener('click', () => {
    window.location.href = '../02-Games/games.html';
  });

  refresh();
});
