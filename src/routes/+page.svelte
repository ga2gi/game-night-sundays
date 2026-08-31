<script lang="ts">
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  type Game = {
    id: string;
    title: string;
    price: string;
    difficulty: string;
    tagline: string;
    description: string;
    image: string;
    code: string;
    featured?: boolean;
  };

  const games: Game[] = [
    {
      id: 'gardenia-slayings',
      title: 'THE GARDENIA SLAYINGS',
      price: 'KSH.500/-',
      difficulty: 'Advanced',
      tagline: 'CASE: RRP-2026-088',
      description:
        'A researcher is found in River Road Park, the scene meticulously staged to mirror an unsolved 1969 cold case. Solve a high-complexity psychological puzzle involving historical reenactment.',
      image:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
      code: 'GARDENIA',
      featured: true
    },
    {
      id: 'echoes-in-the-tower',
      title: 'ECHOES IN THE TOWER',
      price: 'KSH.500/-',
      difficulty: 'Advanced',
      tagline: 'CASE: RRP-2026-088',
      description:
        'Investigative journalist Salim Juma is found dead in a soundproofed War Room during a Blackout Masquerade. Cyanide poisoning, seven suspects, and a system clock drift that makes time itself a suspect.',
      image:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop',
      code: 'TOWER088',
      featured: true
    },
    {
      id: 'kamau-succession',
      title: 'THE KAMAU SUCCESSION',
      price: 'KSH.500/-',
      difficulty: 'Intermediate',
      tagline: 'CASE: KSD-2026-012',
      description:
        'A billionaire collapses during a family dinner. With the will missing, you must navigate a web of inheritance, betrayal, and hidden fractures beneath a polished public image.',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
      code: 'SUCCESSION77',
      featured: true
    }
  ];

  let systemTime = $state('');
  let unlockedGames = $state<string[]>([]);
  let activeUnlockId = $state<string | null>(null);
  let unlockCode = $state('');
  let errorMessage = $state('');

  const featuredGames = $derived(games.filter(g => g.featured));

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

  function handleUnlock(gameId: string) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    if (unlockCode.toUpperCase() === game.code) {
      if (!unlockedGames.includes(gameId)) {
        unlockedGames = [...unlockedGames, gameId];
      }
      activeUnlockId = null;
      unlockCode = '';
      errorMessage = '';
    } else {
      errorMessage = 'ACCESS DENIED: INVALID DECRYPTION CODE';
      unlockCode = '';
    }
  }

  function openUnlock(gameId: string) {
    activeUnlockId = gameId;
    unlockCode = '';
    errorMessage = '';
  }

  function closeUnlock() {
    activeUnlockId = null;
    unlockCode = '';
    errorMessage = '';
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
        investigations inspired by Kenya's darkest fictional mysteries.
      </p>

      <div class="cta-group" in:fly={{ y: 20, delay: 700 }}>
        <a href="#featured" class="btn-main"> ACCESS CASE FILES </a>

        <a
          href="https://murdermysterygameske.hustlesasa.shop/"
          target="_blank"
          class="btn-main secondary"
        >
          SHOP CASES
        </a>
      </div>
    </div>
  </section>

  <!-- HOW TO PLAY SECTION -->
  <section class="how-to-play">
    <div class="container">
      <div class="how-to-header">
        <p class="section-label">OPERATIONAL BRIEFING</p>
        <h2>HOW TO PLAY</h2>
        <div class="header-line"></div>
      </div>

      <div class="steps-grid">
        <div class="step-card" in:fly={{ y: 20, delay: 100 }}>
          <div class="step-number">01</div>
          <h3>PURCHASE CASE FILE</h3>
          <p>
            Visit our 
            <a href="https://murdermysterygameske.hustlesasa.shop/" target="_blank" rel="noopener noreferrer" class="inline-link">
              HustleSasa Shop
            </a> 
            and select your desired case file for KSH.500/-.
          </p>
        </div>

        <div class="step-card" in:fly={{ y: 20, delay: 200 }}>
          <div class="step-number">02</div>
          <h3>EMAIL DELIVERY</h3>
          <p>
            Your decryption credentials and case access codes will be delivered 
            directly to your email address. No physical delivery available.
          </p>
        </div>

        <div class="step-card" in:fly={{ y: 20, delay: 300 }}>
          <div class="step-number">03</div>
          <h3>DECRYPT & INVESTIGATE</h3>
          <p>
            Click on your case file below, enter the access code from your email, 
            and begin your investigation immediately.
          </p>
        </div>

        <div class="step-card" in:fly={{ y: 20, delay: 400 }}>
          <div class="step-number">04</div>
          <h3>LICENSING & USAGE</h3>
          <p>
            Can play with friends for personal use. No commercial use allowed. 
            Contact us for permission regarding any other usage.
          </p>
        </div>
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
            <span>[ARCHIVE] Echoes in the Tower now available.</span>
            <span>[ALERT] Suspect activity detected in Kilimani Arts Tower.</span>
            <span>[SYSTEM] Case database synchronized.</span>
            <span>[UPDATE] New forensic evidence decrypted.</span>
            <span>[SECURE] 256-bit archive encryption active.</span>
            <span>[ARCHIVE] Gardenia Slayings now available.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED FILES -->
  <main class="container" id="featured">
    <div class="section-heading">
      <div>
        <p class="section-label">ARCHIVE DIRECTORY</p>
        <h2>FEATURED FILES</h2>
      </div>
    </div>

    <div class="game-grid">
      {#each featuredGames as game (game.id)}
        <div class="game-card" in:fade={{ duration: 350 }}>
          <figure class="card-image">
            <img src={game.image} alt={game.title} loading="lazy" />
            <div class="price-tag">
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

            {#if unlockedGames.includes(game.id)}
              <a href={`/games/${game.id}`} class="btn-play">
                PLAY CASE FILE // ENTER
              </a>
            {:else if activeUnlockId === game.id}
              <div class="unlock-panel" in:slide={{ duration: 200 }}>
                <input
                  type="text"
                  placeholder="ENTER ACCESS CODE"
                  bind:value={unlockCode}
                  onkeydown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnlock(game.id);
                    }
                  }}
                />
                
                {#if errorMessage}
                  <div class="error-message">{errorMessage}</div>
                {/if}

                <div class="unlock-actions">
                  <button class="btn-decrypt" onclick={() => handleUnlock(game.id)}>
                    DECRYPT & PLAY
                  </button>
                  <button class="btn-cancel" onclick={closeUnlock}>
                    CANCEL
                  </button>
                </div>
              </div>
            {:else}
              <button class="btn-unlock" onclick={() => openUnlock(game.id)}>
                🔒 ENTER ACCESS CODE
              </button>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- ACCESS ALL FILES BUTTON -->
    <div class="access-all-wrapper">
      <a href="/games" class="btn-access-all">
        ACCESS ALL CASE FILES
        <span class="arrow">→</span>
      </a>
      <p class="access-all-text">
        Browse the complete archive of murder mystery case files
      </p>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <p>© 2026 Murder Mystery Games KE. All rights reserved.</p>
      <p class="footer-contact">
        For commercial use or licensing inquiries, 
        <a href="mailto:contact@murdermysterygameske.com" class="inline-link">contact us</a>.
      </p>
    </div>
  </footer>
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
    --success: #1f5c35;
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

  /* HOW TO PLAY SECTION */
  .how-to-play {
    padding: 5rem 0;
    background: #09090b;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .how-to-header {
    margin-bottom: 3rem;
  }

  .header-line {
    width: 60px;
    height: 2px;
    background: var(--accent);
    margin-top: 1rem;
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step-card {
    background: rgba(16, 16, 20, 0.5);
    border: 1px solid var(--border);
    padding: 2rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .step-card:hover {
    border-color: rgba(177, 32, 32, 0.3);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }

  .step-number {
    font-size: 2.5rem;
    font-weight: 900;
    color: rgba(177, 32, 32, 0.2);
    margin-bottom: 1rem;
    font-family: 'Cinzel', serif;
  }

  .step-card h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .step-card p {
    color: var(--muted);
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 0;
  }

  .inline-link {
    color: var(--accent);
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  .inline-link:hover {
    color: #cd3737;
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
    background: var(--accent);
    color: white;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 800;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

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

  .description { color: var(--muted); line-height: 1.7; font-size: 0.94rem; flex: 1; margin-bottom: 1.5rem; }

  /* BUTTONS */
  .btn-unlock {
    width: 100%;
    padding: 14px;
    background: linear-gradient(to bottom, #1a1a1f, #0d0d11);
    border: 1px solid var(--accent);
    color: white;
    font-weight: 700;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: all 0.3s ease;
    font-size: 0.85rem;
  }

  .btn-unlock:hover {
    background: var(--accent);
    box-shadow: 0 0 20px rgba(177, 32, 32, 0.3);
  }

  .btn-play {
    display: block;
    width: 100%;
    padding: 14px;
    background: linear-gradient(to bottom, #1c5332, #11351e);
    border: 1px solid var(--success);
    color: white;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-align: center;
    text-decoration: none;
    border-radius: 0.4rem;
    transition: all 0.3s ease;
    font-size: 0.85rem;
  }

  .btn-play:hover {
    background: linear-gradient(to bottom, #2b7a48, #1c5332);
    box-shadow: 0 0 20px rgba(31, 92, 53, 0.4);
  }

  .unlock-panel {
    background: rgba(13, 13, 17, 0.95);
    border: 1px solid var(--accent);
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .unlock-panel input {
    width: 100%;
    padding: 12px;
    background: #050507;
    border: 1px solid #26262b;
    color: white;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-align: center;
    border-radius: 0.3rem;
    box-sizing: border-box;
  }

  .unlock-panel input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .error-message {
    color: #ff4444;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: 0.05rem;
  }

  .unlock-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-decrypt {
    flex: 2;
    padding: 10px;
    background: var(--accent);
    border: 1px solid #cd3737;
    color: white;
    font-weight: 700;
    letter-spacing: 0.05rem;
    cursor: pointer;
    border-radius: 0.3rem;
    transition: background 0.2s ease;
    font-size: 0.75rem;
  }

  .btn-decrypt:hover {
    background: #cd3737;
  }

  .btn-cancel {
    flex: 1;
    padding: 10px;
    background: transparent;
    border: 1px solid #26262b;
    color: #71717a;
    font-weight: 700;
    letter-spacing: 0.05rem;
    cursor: pointer;
    border-radius: 0.3rem;
    transition: all 0.2s ease;
    font-size: 0.75rem;
  }

  .btn-cancel:hover {
    background: rgba(255, 255, 255, 0.03);
    color: #e4e4e7;
  }

  /* ACCESS ALL FILES */
  .access-all-wrapper {
    margin-top: 4rem;
    text-align: center;
    padding: 3rem 0;
  }

  .btn-access-all {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 2.5rem;
    background: var(--accent);
    color: white;
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 0.15rem;
    font-size: 1.1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    border: 2px solid var(--accent);
  }

  .btn-access-all:hover {
    background: transparent;
    color: var(--accent);
    box-shadow: 0 0 30px rgba(177, 32, 32, 0.3);
    transform: translateY(-2px);
  }

  .btn-access-all .arrow {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .btn-access-all:hover .arrow {
    transform: translateX(5px);
  }

  .access-all-text {
    margin-top: 1rem;
    color: var(--muted);
    font-size: 0.85rem;
    letter-spacing: 0.05rem;
  }

  /* FOOTER */
  .footer {
    background: #09090b;
    border-top: 1px solid var(--border);
    padding: 2rem 0;
    text-align: center;
  }

  .footer p {
    color: var(--muted);
    font-size: 0.85rem;
    margin: 0.5rem 0;
  }

  .footer-contact {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    .section-heading { flex-direction: column; align-items: flex-start; }
    .dispatch-header { flex-wrap: wrap; justify-content: center; }
    .cta-group { flex-direction: column; }
    .btn-main { width: 100%; max-width: 320px; text-align: center; }
    .steps-grid { grid-template-columns: 1fr; }
    
    .btn-access-all {
      width: 100%;
      justify-content: center;
    }
  }
</style>