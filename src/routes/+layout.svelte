<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  let { children } = $props();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Case Files', path: '/games' },
    { name: 'How to Play', path: '/how-to-play' },
    { name: 'About', path: '/about' }
  ];

  // HustleSasa Agent Access Link
  const agentAccessLink = 'https://murdermysterygameske.hustlesasa.shop';

  // Mobile menu open/closed state
  let isMobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
</script>

<svelte:head>
  <title>Murder Mystery Games KE | Investigative Case Experience</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500;700&family=JetBrains+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  >
</svelte:head>

<div class="app-shell">

  <!-- NAVIGATION -->
  <header class="bureau-nav">
    <div class="nav-inner">

      <!-- LOGO -->
      <div class="logo">
        <a href="/" onclick={closeMobileMenu}>
          <img
            src="/logo.png"
            alt="Murder Mystery Games KE"
            class="logo-img"
          />
        </a>
      </div>

      <!-- NAV LINKS (DESKTOP) -->
      <nav class="desktop-nav">
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

      <!-- AGENT ACCESS (DESKTOP) -->
      <div class="nav-actions">
        <a
          href={agentAccessLink}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-terminal"
        >
          <span class="status-dot"></span>
          AGENT ACCESS
        </a>
      </div>

      <!-- MOBILE HAMBURGER BUTTON -->
      <button 
        class="mobile-menu-toggle" 
        onclick={toggleMobileMenu}
        aria-label="Toggle Navigation Menu"
        class:open={isMobileMenuOpen}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

    </div>
  </header>

  <!-- MOBILE NAVIGATION DRAWER -->
  {#if isMobileMenuOpen}
    <div class="mobile-drawer" transition:fade={{ duration: 200 }}>
      <nav class="mobile-nav">
        <ul class="mobile-nav-links">
          {#each navLinks as link}
            <li>
              <a
                href={link.path}
                class:active={$page.url.pathname === link.path}
                onclick={closeMobileMenu}
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
        
        <div class="mobile-nav-actions">
          <a
            href={agentAccessLink}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-terminal"
            onclick={closeMobileMenu}
          >
            <span class="status-dot"></span>
            AGENT ACCESS
          </a>
        </div>
      </nav>
    </div>
  {/if}

  <!-- MAIN -->
  <main>
    {#key $page.url.pathname}
      <div in:fade={{ duration: 350 }}>
        {@render children()}
      </div>
    {/key}
  </main>

  <!-- FOOTER -->
  <footer class="bureau-footer">

    <div class="footer-glow"></div>

    <div class="footer-content">

      <div class="legal-tag">
        <p class="copyright">
          © 2026 MURDER MYSTERY GAMES KE
        </p>

        <p class="tagline">
          INTERACTIVE DETECTIVE EXPERIENCES // NAIROBI OPERATIONS DIVISION
        </p>
      </div>

      <div class="footer-links">
        <a href="/terms">TERMS</a>
        <a href="/privacy">PRIVACY</a>
      </div>

    </div>

  </footer>

</div>

<style>
:global(:root) {
  --bg-dark: #050505;
  --bg-soft: #0a0a0c;

  --accent: #b02a2a;

  --text-main: #f1f1f1;
  --text-dim: #7d7d7d;

  --glass: rgba(5, 5, 5, 0.78);

  --border: rgba(255,255,255,0.06);

  --mono: 'JetBrains Mono', monospace;

  --nav-height: 88px;
}

:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
  background:
    radial-gradient(circle at top right,
    rgba(176,42,42,0.08),
    transparent 30%),
    var(--bg-dark);

  color: var(--text-main);

  font-family: 'Inter', sans-serif;

  overflow-x: hidden;
}

:global(*) {
  box-sizing: border-box;
}

/* APP SHELL */
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* NAVBAR */
.bureau-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);

  background: var(--glass);

  backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);

  z-index: 1000;
}

.nav-inner {
  max-width: 1450px;

  height: 100%;

  margin: 0 auto;

  padding: 0 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 46px;

  object-fit: contain;

  transition: 0.35s ease;
}

.logo-img:hover {
  transform: scale(1.04);
}

/* NAV LINKS */
.nav-links {
  display: flex;
  align-items: center;
  gap: 3rem;

  list-style: none;

  margin: 0;
  padding: 0;
}

.nav-links a {
  position: relative;

  text-decoration: none;

  color: var(--text-dim);

  font-family: var(--mono);

  font-size: 0.72rem;

  letter-spacing: 2px;

  text-transform: uppercase;

  transition: 0.3s ease;
}

.nav-links a::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -8px;

  width: 0%;
  height: 1px;

  background: var(--accent);

  transition: 0.3s ease;
}

.nav-links a:hover {
  color: white;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.active {
  color: var(--accent);
}

.nav-links a.active::after {
  width: 100%;
}

/* AGENT BUTTON */
.nav-actions {
  display: flex;
  align-items: center;
}

.btn-terminal {
  display: flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  background:
    linear-gradient(to bottom,
    #111,
    #090909);

  border: 1px solid #262626;

  color: white;

  padding: 12px 18px;

  font-family: var(--mono);

  font-size: 0.68rem;

  letter-spacing: 1.5px;

  transition: 0.3s ease;

  cursor: pointer;
}

.btn-terminal:hover {
  border-color: var(--accent);

  background:
    linear-gradient(to bottom,
    #181818,
    #0f0f0f);

  transform: translateY(-2px);

  box-shadow:
    0 0 18px rgba(176,42,42,0.15);
}

.status-dot {
  width: 7px;
  height: 7px;

  background: var(--accent);

  border-radius: 50%;

  box-shadow:
    0 0 10px var(--accent);
}

/* MOBILE MENU HAMBURGER ELEMENT */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s ease;
}

/* Hamburger animations when menu is open */
.mobile-menu-toggle.open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background-color: var(--accent);
}

.mobile-menu-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background-color: var(--accent);
}

/* MOBILE DRAWER INTERFACE */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(5, 5, 5, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  width: 100%;
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.mobile-nav-links a {
  text-decoration: none;
  color: var(--text-dim);
  font-family: var(--mono);
  font-size: 1.1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.active {
  color: var(--accent);
}

.mobile-nav-actions {
  margin-top: 1rem;
}

/* MAIN */
main {
  flex: 1;
  margin-top: var(--nav-height);
}

/* FOOTER */
.bureau-footer {
  position: relative;

  margin-top: 80px;

  padding: 5rem 2.5rem;

  border-top: 1px solid var(--border);

  background:
    linear-gradient(to bottom,
    #050505,
    #020202);

  overflow: hidden;
}

.footer-glow {
  position: absolute;

  width: 350px;
  height: 350px;

  right: -120px;
  bottom: -150px;

  background: rgba(176,42,42,0.08);

  filter: blur(120px);

  border-radius: 50%;
}

.footer-content {
  position: relative;
  z-index: 2;

  max-width: 1450px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  gap: 30px;
}

/* LEGAL */
.copyright {
  margin: 0;

  font-family: var(--mono);

  font-size: 0.68rem;

  letter-spacing: 1px;

  color: #555;
}

.tagline {
  margin-top: 8px;

  font-size: 0.62rem;

  letter-spacing: 2px;

  color: #303030;

  font-weight: 700;
}

/* FOOTER LINKS */
.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  text-decoration: none;

  color: #555;

  font-family: var(--mono);

  font-size: 0.66rem;

  letter-spacing: 1px;

  transition: 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent);
}

/* RESPONSIVE */
@media (max-width: 950px) {

  .desktop-nav,
  .nav-actions {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-inner {
    justify-content: space-between;
    padding: 0 1.5rem;
  }

  .logo-img {
    height: 42px;
  }

  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .bureau-footer {
    padding: 4rem 1.5rem;
  }
}
</style>