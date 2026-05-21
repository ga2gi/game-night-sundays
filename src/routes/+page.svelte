<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  type Game = {
    id: string;
    title: string;
    price: string;
    difficulty: string;
    tagline: string;
    description: string;
    image: string;
    category: 'premium' | 'free';
  };

  const games: Game[] = [
    {
      id: 'gardenia-slayings',
      title: 'THE GARDENIA SLAYINGS',
      price: 'KES 250',
      difficulty: 'Advanced',
      tagline: 'CASE: RRP-2026-088',
      description:
        'A researcher is found in River Road Park, the scene meticulously staged to mirror an unsolved 1969 cold case. Solve a high-complexity psychological puzzle involving historical reenactment.',
      image:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
      category: 'premium'
    },
    {
      id: 'kamau-succession',
      title: 'THE KAMAU SUCCESSION',
      price: 'KES 250',
      difficulty: 'Intermediate',
      tagline: 'CASE: KSD-2026-012',
      description:
        'A billionaire collapses during a family dinner. With the will missing, you must navigate a web of inheritance, betrayal, and hidden fractures beneath a polished public image.',
      image:
        'https://images.unsplash.com/photo-1514333130115-342379344843?q=80&w=2070&auto=format&fit=crop',
      category: 'premium'
    },
    {
      id: 'coffee-house-murder',
      title: 'THE COFFEE HOUSE MURDER',
      price: 'FREE',
      difficulty: 'Beginner',
      tagline: 'CASE: CHM-2025-004',
      description:
        'A locked-room mystery where a barista is found dead in a sealed roasting room. An entry-level case focused on contradiction detection and logical elimination among staff.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
      category: 'free'
    },
    {
      id: 'naomi-mwangi',
      title: 'NAOMI MWANGIS MURDER',
      price: 'FREE',
      difficulty: 'Intermediate',
      tagline: 'CASE: NMM-2025-009',
      description:
        'Law student Naomi Mwangi is found dead in her locked Riverside penthouse. No forced entry, four suspects, and a web of overlapping emotional motives and physical evidence.',
      image:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
      category: 'free'
    }
  ];

  let activeTab = $state<'all' | 'premium' | 'free'>('all');
  let systemTime = $state('');

  function updateClock() {
    systemTime = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    updateClock();
    interval = setInterval(updateClock, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  const filteredGames = $derived(
    activeTab === 'all'
      ? games
      : games.filter((game) => game.category === activeTab)
  );

  function setTab(tab: 'all' | 'premium' | 'free') {
    activeTab = tab;
  }
</script>

<svelte:head>
  <title>Murder Mystery Games KE | Official Case Files</title>
  <meta
    name="description"
    content="Digital archive of immersive murder mystery case files set across Kenya."
  />
</svelte:head>

<div class="page-wrapper">
  <section class="hero" in:fade={{ duration: 1000 }}>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="dispatch-header" in:fly={{ y: -20, delay: 200 }}>
        <span class="pulse-red"></span>
        <span class="dispatch-text">SYSTEM STATUS: ARCHIVES ONLINE</span>
        <span class="system-clock">{systemTime}</span>
      </div>

      <h1 in:fly={{ y: 20, delay: 350 }}>
        MURDER MYSTERY
        <span class="accent">GAMES KE</span>
      </h1>

      <p class="hero-lead" in:fly={{ y: 20, delay: 500 }}>
        Analyze evidence. Cross-reference alibis. Solve immersive criminal
        investigations inspired by Kenya’s darkest fictional mysteries.
      </p>

      <div class="cta-group" in:fly={{ y: 20, delay: 700 }}>
        <a href="/games" class="btn-main"> ACCESS CASE FILES </a>

        <a
          href="https://murdermysterygameske.hustlesasa.shop/"
          target="_blank"
          class="btn-main secondary"
        >
          SHOP CASES
        </a>

        <!-- WHATSAPP COMMUNITY LINK -->
        <a
          href="https://chat.whatsapp.com/LDB3Fdc2nfh8RhFaRt5fSj"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-main secondary whatsapp-btn"
        >
          JOIN COMMUNITY
        </a>
      </div>
    </div>
  </section>

  <section class="intel-feed">
    <div class="container">
      <div class="intel-bar">
        <div class="intel-label">SYSTEM LOGS //</div>
        <div class="ticker-wrapper">
          <div class="ticker">
            <span>[UPDATE] New forensic evidence decrypted.</span>
            <span>[SECURE] 256-bit archive encryption active.</span>
            <span>[ARCHIVE] The Penthouse Silence now public.</span>
            <span>[ALERT] Suspect activity detected in River Road.</span>
            <span>[SYSTEM] Case database synchronized.</span>
            <span>[UPDATE] New forensic evidence decrypted.</span>
            <span>[SECURE] 256-bit archive encryption active.</span>
            <span>[ARCHIVE] Coffee House Murder now public.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class="container" id="directory">
    <div class="section-heading">
      <div>
        <p class="section-label">ARCHIVE DIRECTORY</p>
        <h2>LATEST FILES</h2>
      </div>

      <nav class="library-nav" role="tablist">
        <button class:active={activeTab === 'all'} onclick={() => setTab('all')}>
          ALL
        </button>
        <button class:active={activeTab === 'premium'} onclick={() => setTab('premium')}>
          CLASSIFIED
        </button>
        <button class:active={activeTab === 'free'} onclick={() => setTab('free')}>
          PUBLIC
        </button>
      </nav>
    </div>

    <div class="game-grid">
      {#each filteredGames as game (game.id)}
        <div class="game-card" in:fade={{ duration: 350 }}>
          <figure class="card-image">
            <img src={game.image} alt={game.title} loading="lazy" />
            <div class="price-tag" class:is-free={game.price === 'FREE'}>
              {game.price}
            </div>
          </figure>

          <div class="card-body">
            <div class="card-header">
              <span class="diff">{game.difficulty}</span>
              <span class="case-id">{game.tagline}</span>
            </div>
            <h3>{game.title}</h3>
            <p class="description">{game.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="directory-footer">
      <a href="/games" class="btn-main secondary">
        VIEW ALL FULL DOSSIERS
      </a>
    </div>
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #050505;
    font-family: 'Inter', sans-serif;
  }

  :root {
    --bg: #050505;
    --card-bg: rgba(16, 16, 20, 0.78);
    --border: rgba(255, 255, 255, 0.08);
    --text: #ffffff;
    --muted: #8d93a8;
    --accent: #b12020;
    --whatsapp-green: #25d366;
  }

  .page-wrapper {
    min-height: 100vh;
    background: radial-gradient(circle at top, rgba(177, 32, 32, 0.15), transparent 40%), var(--bg);
    color: var(--text);
    overflow-x: hidden;
  }

  .container {
    width: min(1200px, 92%);
    margin: 0 auto;
  }

  .hero {
    position: relative;
    padding: 7rem 1.5rem 5rem;
    text-align: center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9));
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 850px;
    margin: 0 auto;
  }

  .dispatch-header {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.1rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .dispatch-text {
    font-size: 0.72rem;
    letter-spacing: 0.18rem;
    color: var(--muted);
  }

  .system-clock {
    color: var(--accent);
    font-family: monospace;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .pulse-red {
    width: 0.55rem;
    height: 0.55rem;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 1.8s infinite;
    box-shadow: 0 0 12px var(--accent);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.45; transform: scale(1.25); }
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(2.8rem, 8vw, 5.5rem);
    line-height: 0.95;
    margin: 0;
    letter-spacing: 0.05em;
  }

  .accent {
    display: block;
    color: var(--accent);
    text-shadow: 0 0 24px rgba(177, 32, 32, 0.5);
  }

  .hero-lead {
    max-width: 650px;
    margin: 2rem auto 0;
    color: var(--muted);
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .cta-group {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }

  .btn-main {
    background: white;
    color: black;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 0.15rem;
    transition: 0.3s ease;
    border-radius: 0.4rem;
    display: inline-block;
  }

  .btn-main:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(177, 32, 32, 0.4);
  }

  .btn-main.secondary {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--muted);
  }

  .btn-main.secondary:hover {
    background: var(--accent);
    color: white;
  }

  /* Target specifically the WhatsApp community button for unique hover colors */
  .btn-main.secondary.whatsapp-btn:hover {
    background: var(--whatsapp-green);
    border-color: var(--whatsapp-green);
    color: #000000;
    box-shadow: 0 0 30px rgba(37, 211, 102, 0.3);
  }

  .pricing-mini {
    border: 1px solid var(--border);
    padding: 0.9rem 1.2rem;
    border-radius: 0.4rem;
    background: rgba(255, 255, 255, 0.03);
    text-align: left;
  }

  .label {
    display: block;
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.14rem;
  }

  .amt {
    display: block;
    margin-top: 0.2rem;
    font-weight: 800;
  }

  .intel-feed {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: #09090b;
    overflow: hidden;
  }

  .intel-bar {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .intel-label {
    color: var(--accent);
    font-size: 0.72rem;
    font-weight: 900;
    white-space: nowrap;
    letter-spacing: 0.12rem;
  }

  .ticker-wrapper {
    overflow: hidden;
    flex: 1;
  }

  .ticker {
    display: flex;
    gap: 4rem;
    width: max-content;
    white-space: nowrap;
    animation: scroll 30s linear infinite;
  }

  .ticker span {
    color: var(--muted);
    font-family: monospace;
    font-size: 0.78rem;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  main { padding: 5rem 0; }

  .section-heading {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: end;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .section-label {
    color: var(--accent);
    font-size: 0.72rem;
    letter-spacing: 0.14rem;
    margin-bottom: 0.5rem;
  }

  h2 { font-family: 'Cinzel', serif; margin: 0; font-size: 2rem; }

  .library-nav { display: flex; gap: 1rem; flex-wrap: wrap; }

  .library-nav button {
    background: transparent;
    border: none;
    color: var(--muted);
    font-weight: 700;
    cursor: pointer;
    padding-bottom: 0.35rem;
    transition: 0.2s ease;
    border-bottom: 2px solid transparent;
  }

  .library-nav button:hover { color: white; }
  .library-nav button.active { color: var(--accent); border-color: var(--accent); }

  .game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .game-card {
    display: flex;
    flex-direction: column;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 1rem;
    overflow: hidden;
    backdrop-filter: blur(14px);
  }

  .card-image {
    position: relative;
    height: 220px;
    overflow: hidden;
    margin: 0;
  }

  .card-image img { width: 100%; height: 100%; object-fit: cover; }

  .price-tag {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background: black;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 800;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .price-tag.is-free { background: var(--accent); color: white; }

  .card-body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }

  .card-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  .diff { color: var(--accent); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08rem; }
  .case-id { color: var(--muted); font-size: 0.72rem; font-family: monospace; }

  h3 { font-family: 'Cinzel', serif; margin: 0 0 1rem; line-height: 1.3; font-size: 1.3rem; }

  .description { color: var(--muted); line-height: 1.7; font-size: 0.94rem; flex: 1; }

  .directory-footer { margin-top: 4rem; text-align: center; }

  @media (max-width: 768px) {
    .section-heading { flex-direction: column; align-items: flex-start; }
    .dispatch-header { flex-wrap: wrap; justify-content: center; }
    .cta-group { flex-direction: column; }
    .btn-main, .pricing-mini { width: 100%; max-width: 320px; text-align: center; }
  }
</style>

```