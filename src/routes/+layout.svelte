<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let { children } = $props();

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

  // helper
  const path = $derived($page.url.pathname);

  const isSolutionUnlocked = $derived(path === '/solution');
</script>

<div class="app-shell">

  <!-- HEADER -->
  <header class="main-header" class:scrolled>
    <div class="container">

      <div class="brand">
        <h1 class="logo">THE GARDENIA SLAYINGS</h1>

        <div class="status-bar">
          <span class="dot"></span>
          <span>FILE: RRP-2026-088</span>
          <span class="divider">//</span>
          <span>STATUS: ACTIVE REVIEW</span>
          <span class="divider">//</span>
          <span class="pulse">LIVE CASE</span>
        </div>
      </div>

    </div>
  </header>

  <!-- MAIN -->
  <main class="content-surface" class:visible>
    <div class="container">
      {@render children()}
    </div>
  </main>

  <!-- NAVIGATION DOCK -->
  {#if path !== '/'}
    <footer class="dock-wrapper">

      <nav class="glass-dock">

        <a href="/incident-report" class:active={path === '/incident-report'}>
          <span class="nav-icon">📝</span>
          <span class="nav-label">CASE</span>
        </a>

        <a href="/suspects" class:active={path === '/suspects'}>
          <span class="nav-icon">👥</span>
          <span class="nav-label">FILES</span>
        </a>

        <a href="/evidence" class:active={path === '/evidence'}>
          <span class="nav-icon">🔍</span>
          <span class="nav-label">EVIDENCE</span>
        </a>

        <!-- PRIMARY ACTION -->
        <a href="/accuse" class="accuse-btn" class:active={path === '/accuse'}>
          <span class="nav-icon">⚖️</span>
          <span class="nav-label">ACCUSE</span>
        </a>

        <!-- LOCKED SOLUTION -->
        <a 
          href="/solution" 
          class="solution-link"
          class:active={path === '/solution'}
        >
          <span class="nav-icon">
            {#if isSolutionUnlocked}🔓{:else}🔒{/if}
          </span>
          <span class="nav-label">SOLUTION</span>
        </a>

      </nav>

    </footer>
  {/if}

</div>

<style>
  :root {
    --bg-dark: #07070a;
    --accent: #ff79c6;
    --danger: #ff5555;
    --text-main: #f8f8f2;
    --text-dim: #6272a4;
    --glass-border: rgba(255,255,255,0.08);
  }

  :global(body) {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: var(--bg-dark);
    color: var(--text-main);
  }

  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background:
      radial-gradient(circle at 50% -10%, #1a1b2e 0%, transparent 60%),
      radial-gradient(circle at 80% 120%, #1a1b2e 0%, transparent 60%),
      #050508;
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
    transition: all 0.4s ease;
  }

  .main-header.scrolled {
    padding: 16px 0;
    background: rgba(7,7,10,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
  }

  .logo {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    letter-spacing: 0.4em;
    text-align: center;
    margin: 0;
  }

  .status-bar {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 12px;
    font-size: 0.6rem;
    color: var(--text-dim);
    align-items: center;
  }

  .divider { opacity: 0.3; }

  .dot {
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent);
  }

  .pulse {
    color: var(--accent);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  /* CONTENT */
  .content-surface {
    flex: 1;
    padding: 40px 0 160px;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.8s ease;
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
  }

  .glass-dock {
    display: flex;
    gap: 4px;
    background: rgba(15,15,24,0.7);
    backdrop-filter: blur(24px);
    padding: 6px;
    border-radius: 28px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  }

  .glass-dock a {
    text-decoration: none;
    color: var(--text-dim);
    padding: 10px 18px;
    border-radius: 22px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    transition: all 0.25s ease;
  }

  .glass-dock a:hover {
    color: #fff;
    transform: translateY(-2px);
  }

  .glass-dock a.active {
    background: #fff;
    color: #000;
  }

  /* ACCUSE BUTTON (PRIMARY CTA) */
  .accuse-btn {
    background: rgba(255,85,85,0.15);
    border: 1px solid rgba(255,85,85,0.3);
    color: var(--danger);
  }

  .accuse-btn.active {
    background: var(--danger);
    color: white;
  }

  /* SOLUTION LOCK */
  .solution-link {
    opacity: 0.6;
  }

  .solution-link:hover {
    opacity: 1;
  }

  .nav-icon { font-size: 1.1rem; }
  .nav-label {
    font-size: 0.55rem;
    font-weight: 900;
    letter-spacing: 1px;
  }

  @media (max-width: 700px) {
    .glass-dock a {
      padding: 8px 12px;
    }
  }
</style>