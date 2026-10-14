// games/auth-supabase.js
// Frontend signup/login flow using Supabase Auth.
// This is a starter implementation; in production you must install `@supabase/supabase-js`.

(function () {
  const form = document.getElementById('authForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameInput = document.getElementById('displayName');
  const status = document.getElementById('authStatus');
  const modeLabel = document.getElementById('modeLabel');
  const toggleMode = document.getElementById('toggleMode');
  const googleBtn = document.getElementById('googleLogin');
  const facebookBtn = document.getElementById('facebookLogin');

  let isSignup = false;

  function setStatus(message, error = false) {
    status.textContent = message;
    status.style.color = error ? '#ff8a8a' : '#8ae7a8';
  }

  function getSupabase() {
    if (!window.supabase || !window.supabase.auth) {
      throw new Error('Supabase client is not initialized. Install @supabase/supabase-js and provide real values.');
    }
    return window.supabase;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const email = (emailInput.value || '').trim();
    const password = (passwordInput.value || '').trim();
    const displayName = (nameInput.value || '').trim() || 'Player';

    if (!email || !password) {
      setStatus('Please enter email and password.', true);
      return;
    }

    const client = getSupabase();
    try {
      const result = isSignup
        ? await client.auth.signUp({ email, password, options: { data: { display_name: displayName } } })
        : await client.auth.signInWithPassword({ email, password });

      if (result.error) {
        setStatus(result.error.message || 'Authentication failed.', true);
        return;
      }

      setStatus(isSignup ? 'Account created successfully.' : 'Signed in successfully.');
      if (result.data && result.data.user) {
        window.location.href = '02-Games/games.html';
      }
    } catch (error) {
      setStatus(error.message || 'An unexpected error occurred.', true);
    }
  }

  async function handleOAuth(provider) {
    const client = getSupabase();
    try {
      const { error } = await client.auth.signInWithOAuth({ provider });
      if (error) {
        setStatus(error.message || `Sign in with ${provider} failed.`, true);
      }
    } catch (error) {
      setStatus(error.message || 'OAuth flow failed.', true);
    }
  }

  toggleMode.addEventListener('click', () => {
    isSignup = !isSignup;
    modeLabel.textContent = isSignup ? 'Create account' : 'Sign in';
    form.querySelector('button[type="submit"]').textContent = isSignup ? 'Create account' : 'Sign in';
    setStatus(isSignup ? 'New account mode enabled.' : 'Login mode enabled.');
    nameInput.parentElement.style.display = isSignup ? 'block' : 'none';
  });

  form.addEventListener('submit', handleSubmit);
  googleBtn.addEventListener('click', () => handleOAuth('google'));
  facebookBtn.addEventListener('click', () => handleOAuth('facebook'));
  nameInput.parentElement.style.display = 'none';
})();
