// games/auth.js - simple local account handling
document.addEventListener('DOMContentLoaded', ()=>{
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

  function refresh(){
    const u = SFV.getUser();
    if(u.loggedIn){
      loggedInView.hidden = false; loggedOutView.hidden = true;
      displayName.textContent = u.name || 'User';
      avatarPreview.textContent = u.avatar || '👤';
      document.getElementById('accountTitle').textContent = 'Account Details';
    } else {
      loggedInView.hidden = true; loggedOutView.hidden = false;
      document.getElementById('accountTitle').textContent = 'Sign in / Create';
    }
  }

  createBtn.addEventListener('click', ()=>{
    const name = nameInput.value.trim() || 'Player';
    const avatar = avatarInput.value.trim() || '👤';
    SFV.setUser({name, avatar, loggedIn:true});
    refresh();
  });
  loginBtn.addEventListener('click', ()=>{
    const name = nameInput.value.trim() || 'Player';
    const avatar = avatarInput.value.trim() || '👤';
    SFV.setUser({name, avatar, loggedIn:true});
    refresh();
  });
  logoutBtn?.addEventListener('click', ()=>{
    SFV.logout(); refresh();
  });
  backBtn.addEventListener('click', ()=> window.location.href = '../02-Games/games.html');

  refresh();
});
