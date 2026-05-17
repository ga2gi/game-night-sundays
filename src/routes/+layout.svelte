<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  let { children } = $props();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Case Files', path: '/games' },
    { name: 'The Bureau', path: '/about' },
    { name: 'Access Plans', path: '/pricing' }
  ];
</script>

<svelte:head>
  <title>Murder Mystery Games KE | Investigative Case Experience</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="app-shell">

  <!-- 🧭 BUREAU NAVIGATION -->
  <header class="bureau-nav">
    <div class="nav-inner">

      <div class="logo">
        <a href="/">
          <img src="/logo.png" alt="Murder Mystery Games KE" class="logo-img" />
        </a>
      </div>

      <nav>
        <ul class="nav-links">
          {#each navLinks as link}
            <li>
              <a 
                href={link.path}
                class:active={$page.url.pathname === link.path}
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <div class="nav-actions">
        <button class="btn-terminal">
          <span class="status-dot"></span>
          AGENT ACCESS
        </button>
      </div>

    </div>
  </header>

  <!-- 🎞️ MAIN OPERATIONS AREA -->
  <main>
    {#key $page.url.pathname}
      <div in:fade={{ duration: 400 }}>
        {@render children()}
      </div>
    {/key}
  </main>

  <!-- 🌑 BUREAU FOOTER -->
  <footer class="bureau-footer">
    <div class="footer-content">

      <div class="legal-tag">
        <p class="copyright">© 2026 MURDER MYSTERY GAMES KE</p>
        <p class="tagline">
          CRIMINAL INVESTIGATIONS UNIT // NAIROBI OPERATIONS DIVISION
        </p>
      </div>

      <div class="footer-links">
        <a href="/terms">OPERATIONAL PROTOCOLS</a>
        <a href="/privacy">DATA PRIVACY</a>
      </div>

    </div>
  </footer>

</div>

<style>
:global(:root) {
  --bg-dark: #050505;
  --accent: #ff5555;
  --text-main: #eaeaea;
  --text-dim: #777;
  --nav-height: 85px;
  --glass: rgba(5, 5, 5, 0.85);
  --border: rgba(255, 255, 255, 0.05);
  --mono: 'JetBrains Mono', monospace;
}

:global(body) {
  margin: 0;
  background: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* APP SHELL */
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* NAVIGATION */
.bureau-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  background: var(--glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
}

.nav-inner {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-img {
  height: 45px;
  transition: 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

/* NAV LINKS */
.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dim);
  font-size: 0.7rem;
  font-family: var(--mono);
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a.active {
  color: var(--accent);
}

/* ACCESS BUTTON */
.btn-terminal {
  background: #111;
  border: 1px solid #333;
  color: white;
  padding: 10px 18px;
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
}

.btn-terminal:hover {
  border-color: var(--accent);
  background: #181818;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent);
}

/* MAIN */
main {
  flex: 1;
  margin-top: var(--nav-height);
}

/* FOOTER */
.bureau-footer {
  padding: 5rem 2.5rem;
  border-top: 1px solid var(--border);
  background: #030303;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.copyright {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: #444;
}

.tagline {
  font-size: 0.6rem;
  color: #222;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: 5px;
}

/* FOOTER LINKS */
.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: #444;
  text-decoration: none;
  font-size: 0.65rem;
  font-family: var(--mono);
  transition: 0.3s;
}

.footer-links a:hover {
  color: var(--accent);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav-links,
  .nav-actions {
    display: none;
  }

  .nav-inner {
    justify-content: center;
  }
}
</style>