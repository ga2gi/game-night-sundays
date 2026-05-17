<script>
  import { fly, fade, slide, scale } from 'svelte/transition';

  /**
   * @typedef {Object} Game
   * @property {string} id
   * @property {string} title
   * @property {string} price
   * @property {string} difficulty
   * @property {string} tagline
   * @property {string} description
   * @property {string} image
   * @property {'premium' | 'free'} category
   * @property {string} location
   * @property {string} status
   */
  
  /** @type {Game[]} */
  const games = [
    {
      id: 'gardenia-slayings',
      title: 'THE GARDENIA SLAYINGS',
      price: '250/-',
      difficulty: 'Intermediate',
      tagline: 'CASE: RRP-2026-088',
      description: 'A prominent researcher found in River Road Park. The scene mimics a 1969 cold case. Is it a copycat, or has the original killer returned?',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
      category: 'premium',
      location: 'Nairobi',
      status: 'UNSOLVED'
    },
    {
      id: 'kamau-succession',
      title: 'THE KAMAU SUCCESSION',
      price: '250/-',
      difficulty: 'Advanced',
      tagline: 'CASE: KSD-2026-012',
      description: 'A billionaire patriarch dies during dinner. The will is missing, and every heir has a motive for silence.',
      image: 'https://images.unsplash.com/photo-1514333130115-342379344843?q=80&w=2070&auto=format&fit=crop',
      category: 'premium',
      location: 'Kiambu',
      status: 'UNSOLVED'
    },
    {
      id: 'coffee-house-murder',
      title: 'THE COFFEE HOUSE MURDER',
      price: 'FREE',
      difficulty: 'Beginner',
      tagline: 'CASE: CHM-2025-004',
      description: 'A barista found dead in the roasting room. A simple dispute over beans, or something more bitter brewing under the surface?',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
      category: 'free',
      location: 'Nairobi',
      status: 'PUBLIC_RECORDS'
    },
    {
      id: 'naomi-mwangi',
      title: "NAOMI MWANGI'S MURDER",
      price: 'FREE',
      difficulty: 'Intermediate',
      tagline: 'CASE: NMM-2025-009',
      description: 'Socialite Naomi Mwangi vanished from a locked penthouse. No blood, no body—only a digital trail leading to the elite.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
      category: 'free',
      location: 'Nairobi',
      status: 'PUBLIC_RECORDS'
    }
  ];

  // --- ACCESS CONTROL STATE ---
  let unlockedCases = $state([]); 
  let inputCode = $state('');
  let activeVerificationId = $state(null);

  // Temporary local keys (Replace with Supabase fetch later)
  const masterCodes = {
    'gardenia-slayings': 'GARDENIA',
    'kamau-succession': 'SUCCESSION77'
  };

  function verifyAccess(gameId) {
    if (inputCode.toUpperCase() === masterCodes[gameId]) {
      unlockedCases.push(gameId);
      activeVerificationId = null;
      inputCode = '';
    } else {
      alert("UNAUTHORIZED ACCESS: INVALID SECURITY CODE");
      inputCode = '';
    }
  }

  // --- SEARCH & FILTER STATE ---
  let searchQuery = $state('');
  let activeTab = $state('all');
  let hoveredId = $state(null);

  const filteredGames = $derived(
    games.filter(game => {
      const matchesTab = activeTab === 'all' || game.category === activeTab;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    })
  );

  const stats = $derived({
    total: games.length,
    premium: games.filter(g => g.category === 'premium').length,
    free: games.filter(g => g.category === 'free').length
  });

  const dateStamp = $derived(new Date().toLocaleDateString('en-KE', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }));

  function resetFilters() {
    searchQuery = '';
    activeTab = 'all';
  }
</script>

<svelte:head>
  <title>Case Archive | Murder Mystery Games KE</title>
</svelte:head>

<main class="archive-container" in:fade>
  <header class="archive-header">
    <div class="top-meta">
      <span class="system-status">SYSTEM_ONLINE // ENCRYPTION_ACTIVE</span>
      <time class="date-stamp" datetime={new Date().toISOString()}>{dateStamp}</time>
    </div>
    
    <div class="title-block">
      <h1>CENTRAL <span class="accent">ARCHIVE</span></h1>
      <div class="stats-ribbon">
        <div class="stat"><span>TOTAL_FILES:</span> {stats.total}</div>
        <div class="stat"><span>PREMIUM_CLEARANCE:</span> {stats.premium}</div>
        <div class="stat"><span>PUBLIC_RECORDS:</span> {stats.free}</div>
      </div>
    </div>
  </header>

  <section class="console-panel">
    <div class="input-group">
      <div class="search-bar">
        <span class="prefix">SEARCH_DB ></span>
        <input type="text" placeholder="ENTER TITLE OR REGION..." bind:value={searchQuery} />
      </div>
    </div>

    <nav class="tab-nav">
      <button class:active={activeTab === 'all'} onclick={() => activeTab = 'all'}>
        <span class="btn-box"></span> ALL_CASES
      </button>
      <button class:active={activeTab === 'premium'} onclick={() => activeTab = 'premium'}>
        <span class="btn-box"></span> CLASSIFIED
      </button>
      <button class:active={activeTab === 'free'} onclick={() => activeTab = 'free'}>
        <span class="btn-box"></span> PUBLIC_FILES
      </button>
    </nav>
  </section>

  <div class="case-grid">
    {#each filteredGames as game, i (game.id)}
      <div 
        class="case-card" 
        in:fly={{ y: 20, delay: Math.min(i * 80, 400) }} 
        onmouseenter={() => hoveredId = game.id}
        onmouseleave={() => hoveredId = null}
      >
        <div class="folder-tab">{game.status}</div>
        
        <div class="card-visual">
          <img src={game.image} alt={game.title} loading="lazy" />
          <div class="location-badge">{game.location}</div>
          <div class="price-tag" class:is-free={game.category === 'free'}>
            {game.price}
          </div>
        </div>
        
        <div class="card-body">
          <div class="body-header">
            <span class="diff-tag">{game.difficulty}</span>
            <span class="serial">{game.tagline}</span>
          </div>
          
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          
          <div class="footer-actions">
            {#if game.category === 'free' || unlockedCases.includes(game.id)}
              <a href={`/games/${game.id}`} class="investigate-btn granted" in:fade>
                <span class="shimmer"></span>
                ENTER ARCHIVE
              </a>
            {:else if activeVerificationId === game.id}
              <div class="access-gate" in:slide>
                <input 
                  type="text" 
                  placeholder="CODE" 
                  bind:value={inputCode}
                  onkeydown={(e) => e.key === 'Enter' && verifyAccess(game.id)}
                  autofocus
                />
                <button onclick={() => verifyAccess(game.id)}>VERIFY</button>
                <button class="cancel" onclick={() => activeVerificationId = null}>×</button>
              </div>
            {:else}
              <button class="investigate-btn" onclick={() => activeVerificationId = game.id}>
                DECRYPT DOSSIER
              </button>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <div class="empty-state" in:scale>
        <div class="warning-icon">⚠</div>
        <h2>NO MATCHING DATA FOUND</h2>
        <button onclick={resetFilters}>RESET SYSTEM</button>
      </div>
    {/each}
  </div>
</main>

<style>
  :root {
    --accent: #b02a2a;
    --bg-dark: #050505;
    --card-bg: #0d0d0f;
    --text-dim: #888;
    --border-color: #222;
  }

  .archive-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: radial-gradient(circle at top right, #0a0a0c, transparent);
    min-height: 100vh;
  }

  /* HEADER */
  .archive-header {
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--border-color);
  }

  .top-meta {
    display: flex;
    justify-content: space-between;
    font-family: monospace;
    font-size: 0.65rem;
    color: var(--accent);
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(2rem, 8vw, 4rem);
    letter-spacing: 0.2em;
    margin: 0;
  }

  .stats-ribbon {
    display: flex;
    gap: 30px;
    margin-top: 15px;
    font-family: monospace;
    font-size: 0.7rem;
    color: var(--text-dim);
  }

  /* CONSOLE PANEL */
  .console-panel {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 40px;
    margin-bottom: 60px;
    background: #080808;
    padding: 20px 40px;
    border: 1px solid var(--border-color);
  }

  .search-bar { display: flex; align-items: center; gap: 15px; }
  .prefix { color: var(--accent); font-weight: bold; }
  input { background: none; border: none; color: #fff; font-family: monospace; font-size: 1rem; outline: none; width: 100%; }

  .tab-nav { display: flex; gap: 20px; }
  .tab-nav button { background: none; border: none; color: #555; font-family: monospace; cursor: pointer; display: flex; align-items: center; gap: 10px; }
  .btn-box { width: 10px; height: 10px; border: 1px solid #333; }
  .tab-nav button.active { color: var(--accent); }
  .tab-nav button.active .btn-box { background: var(--accent); border-color: var(--accent); }

  /* CASE GRID */
  .case-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 40px; }
  .case-card { background: var(--card-bg); border: 1px solid var(--border-color); position: relative; transition: all 0.25s ease; display: flex; flex-direction: column; }
  .case-card:hover { border-color: var(--accent); transform: translateY(-8px); }

  .folder-tab { position: absolute; top: -1px; left: -1px; background: var(--border-color); color: #fff; font-size: 0.6rem; padding: 5px 15px; z-index: 2; clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%); }
  .case-card:hover .folder-tab { background: var(--accent); }

  .card-visual { height: 250px; position: relative; overflow: hidden; border-bottom: 1px solid var(--border-color); }
  .card-visual img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.5); transition: 0.4s; }
  .case-card:hover img { filter: grayscale(0); transform: scale(1.05); }

  .location-badge { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.8); padding: 5px 12px; font-size: 0.65rem; border-left: 2px solid var(--accent); }
  .price-tag { position: absolute; bottom: 20px; right: 0; background: var(--accent); color: #fff; padding: 8px 25px; font-weight: bold; }
  .price-tag.is-free { background: #fff; color: #000; }

  .card-body { padding: 35px; flex: 1; display: flex; flex-direction: column; }
  h2 { font-family: 'Cinzel', serif; font-size: 1.5rem; margin: 15px 0; }
  p { color: #999; font-size: 0.9rem; line-height: 1.7; margin-bottom: 25px; }

  /* ACCESS GATE */
  .access-gate { display: flex; border: 1px solid var(--accent); background: #000; }
  .access-gate input { flex: 1; padding: 12px; font-size: 0.8rem; color: var(--accent); text-transform: uppercase; }
  .access-gate button { background: var(--accent); color: white; border: none; padding: 0 15px; cursor: pointer; }
  .access-gate .cancel { background: #222; color: #666; }

  .investigate-btn { display: block; width: 100%; padding: 18px; border: 1px solid #333; color: #fff; text-align: center; font-family: monospace; font-weight: bold; cursor: pointer; background: transparent; text-decoration: none; }
  .investigate-btn:hover { background: #fff; color: #000; }
  .investigate-btn.granted { background: #1a4d2e; border-color: #2eb872; }

  .empty-state { grid-column: 1 / -1; text-align: center; padding: 100px; border: 1px dashed #222; }

  @media (max-width: 900px) {
    .console-panel { grid-template-columns: 1fr; }
    .case-grid { grid-template-columns: 1fr; }
  }
</style>