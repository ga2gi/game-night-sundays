<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  // Simple fade-in logic for the surface
  let visible = $state(false);
  onMount(() => visible = true);
</script>

<div class="app-shell">
  <header class="main-header">
    <div class="container">
      <div class="brand">
        <h1 class="logo">THE GARDENIA SLAYINGS</h1>
        <div class="status-bar">
          <span class="dot"></span>
          <span class="case-number">CASE: RRP-2026-088</span>
          <span class="divider">|</span>
          <span class="event-tag">GIRLS' NIGHT EDITION</span>
        </div>
      </div>
    </div>
  </header>

  <main class="content-surface" class:visible>
    <div class="container">
      <slot />
    </div>
  </main>

  {#if $page.url.pathname !== '/'}
    <footer class="dock-wrapper">
      <nav class="glass-dock">
        <a href="/incident-report" class:active={$page.url.pathname === '/incident-report'}>
          <span class="nav-icon">📝</span>
          <span class="nav-label">THE TEA</span>
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
          <span class="nav-label">EXPOSE</span>
        </a>
      </nav>
    </footer>
  {/if}
</div>

<style>
  :root {
    --bg-dark: #0a0a0f;
    --bg-surface: #12121e;
    --accent-pink: #ff79c6;
    --accent-purple: #bd93f9;
    --text-main: #e2e2e9;
    --text-dim: #9494b8;
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.1);
  }

  :global(body) {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at 50% -20%, #1e1e3f 0%, #0a0a0f 100%);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
  }

  /* HEADER STYLING */
  .main-header {
    padding: 40px 0 20px;
    border-bottom: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .logo {
    font-family: 'Cinzel', serif; /* Or any high-end serif */
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 6px;
    margin: 0;
    text-align: center;
    background: linear-gradient(to right, #fff, var(--accent-pink));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .status-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--text-dim);
  }

  .dot {
    width: 6px;
    height: 6px;
    background: var(--accent-pink);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--accent-pink);
    animation: pulse 2s infinite;
  }

  /* MAIN SURFACE */
  .content-surface {
    flex: 1;
    padding: 60px 0 140px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .content-surface.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* NAVIGATION DOCK */
  .dock-wrapper {
    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 100;
    pointer-events: none;
  }

  .glass-dock {
    pointer-events: auto;
    display: flex;
    gap: 8px;
    background: rgba(18, 18, 30, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    padding: 8px;
    border-radius: 24px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .glass-dock a {
    text-decoration: none;
    color: var(--text-dim);
    padding: 10px 20px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .nav-icon { font-size: 1.2rem; }
  .nav-label { 
    font-size: 0.6rem; 
    font-weight: 800; 
    letter-spacing: 1px; 
    opacity: 0.7;
  }

  .glass-dock a:hover {
    background: var(--glass);
    color: #fff;
  }

  .glass-dock a.active {
    background: var(--accent-pink);
    color: #0a0a0f;
    box-shadow: 0 4px 15px rgba(255, 121, 198, 0.3);
  }

  .glass-dock a.active .nav-label { opacity: 1; }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  /* Responsive tweaks */
  @media (max-width: 600px) {
    .nav-label { display: none; }
    .glass-dock { padding: 6px; gap: 4px; }
    .glass-dock a { padding: 12px 18px; }
    .logo { font-size: 1.1rem; }
  }
</style>