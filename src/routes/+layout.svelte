<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let visible = $state(false);
  let scrolled = $state(false);

  onMount(() => {
    visible = true;
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="app-shell">
  <!-- Dynamic Header -->
  <header class="main-header" class:scrolled>
    <div class="container">
      <div class="brand">
        <h1 class="logo">THE GARDENIA SLAYINGS</h1>
        <div class="status-bar">
          <span class="dot"></span>
          <span class="case-number">FILE: RRP-2026-088</span>
          <span class="divider">//</span>
          <span class="event-tag">NIGHT MODE ACTIVE</span>
        </div>
      </div>
    </div>
  </header>

  <!-- Animated Content Surface -->
  <main class="content-surface" class:visible>
    <div class="container">
      <slot />
    </div>
  </main>

  <!-- Frosted Glass Navigation -->
  {#if $page.url.pathname !== '/'}
    <footer class="dock-wrapper">
      <nav class="glass-dock">
        <a href="/incident-report" class:active={$page.url.pathname === '/incident-report'}>
          <span class="nav-icon">📝</span>
          <span class="nav-label">DOSSIER</span>
        </a>
        <a href="/suspects" class:active={$page.url.pathname === '/suspects'}>
          <span class="nav-icon">👥</span>
          <span class="nav-label">SUSPECTS</span>
        </a>
        <a href="/evidence" class:active={$page.url.pathname === '/evidence'}>
          <span class="nav-icon">🔍</span>
          <span class="nav-label">EVIDENCE</span>
        </a>
        <a href="/accuse" class:active={$page.url.pathname === '/accuse'}>
          <span class="nav-icon">💅</span>
          <span class="nav-label">VERDICT</span>
        </a>
      </nav>
    </footer>
  {/if}
</div>

<style>
  :root {
    --bg-dark: #07070a;
    --bg-surface: #0f0f18;
    --accent-pink: #ff79c6;
    --accent-purple: #bd93f9;
    --text-main: #f8f8f2;
    --text-dim: #6272a4;
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
  }

  :global(body) {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Inter', -apple-system, sans-serif;
    margin: 0;
    line-height: 1.6;
  }

  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: 
      radial-gradient(circle at 50% -10%, #1a1b2e 0%, transparent 60%),
      linear-gradient(180deg, var(--bg-dark) 0%, #050508 100%);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding: 0 24px;
  }

  /* HEADER */
  .main-header {
    padding: 48px 0 24px;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid transparent;
  }

  .main-header.scrolled {
    padding: 16px 0;
    background: rgba(7, 7, 10, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
  }

  .logo {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: 0.4em;
    margin: 0;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }

  .status-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    color: var(--text-dim);
    text-transform: uppercase;
  }

  .dot {
    width: 5px;
    height: 5px;
    background: var(--accent-pink);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-pink);
    animation: blink 2.5s ease-in-out infinite;
  }

  /* SURFACE ANIMATION */
  .content-surface {
    flex: 1;
    padding: 40px 0 160px;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .content-surface.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* DOCK */
  .dock-wrapper {
    position: fixed;
    bottom: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 1000;
    pointer-events: none;
  }

  .glass-dock {
    pointer-events: auto;
    display: flex;
    background: rgba(15, 15, 24, 0.7);
    backdrop-filter: blur(24px) saturate(160%);
    padding: 6px;
    border-radius: 28px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6);
  }

  .glass-dock a {
    text-decoration: none;
    color: var(--text-dim);
    padding: 10px 24px;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: all 0.25s ease;
  }

  .nav-label { 
    font-size: 0.55rem; 
    font-weight: 900; 
    letter-spacing: 0.1em;
  }

  .glass-dock a:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  .glass-dock a.active {
    background: #fff;
    color: #000;
    box-shadow: 0 8px 20px -6px rgba(255, 255, 255, 0.3);
  }

  /* PRINT MODE */
  @media print {
    .dock-wrapper, .main-header.scrolled .dot { display: none !important; }
    .main-header { position: relative; padding: 20px 0; border-bottom: 2px solid #000; }
    .logo { color: #000; -webkit-text-fill-color: #000; }
    :global(body) { background: white; color: black; }
    .app-shell { background: white; }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
  }

  @media (max-width: 600px) {
    .nav-label { display: none; }
    .glass-dock a { padding: 14px 20px; }
    .logo { font-size: 1.1rem; letter-spacing: 0.2em; }
  }
</style>