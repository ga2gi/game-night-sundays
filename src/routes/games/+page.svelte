<script>
  import { fly, fade, slide } from 'svelte/transition';

  const games = [
    {
      id: 'gardenia-slayings',
      title: 'THE GARDENIA SLAYINGS',
      difficulty: 'Advanced',
      tagline: 'CASE: RRP-2026-088',
      description:
        'A researcher is found in River Road Park, the scene meticulously staged to mirror an unsolved 1969 cold case. Solve a high-complexity psychological puzzle involving historical reenactment.',
      image:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
      location: 'Nairobi',
      price: 'KSH. 250/-',
      isFree: false
    },
    {
      id: 'kamau-succession',
      title: 'THE KAMAU SUCCESSION',
      difficulty: 'Intermediate',
      tagline: 'CASE: KSD-2026-012',
      description:
        'A billionaire collapses during a family dinner. With the will missing, you must navigate a web of inheritance, betrayal, and hidden fractures beneath a polished public image.',
      image:
        'https://images.unsplash.com/photo-1514333130115-342379344843?q=80&w=2070&auto=format&fit=crop',
      location: 'Kiambu',
      price: 'KSH. 250/-',
      isFree: false
    },
    {
      id: 'coffee-house-murder',
      title: 'THE COFFEE HOUSE MURDER',
      difficulty: 'Beginner',
      tagline: 'CASE: CHM-2025-004',
      description:
        'A locked-room mystery where a barista is found dead in a sealed roasting room. An entry-level case focused on contradiction detection and logical elimination among staff.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
      location: 'Nairobi',
      price: 'FREE',
      isFree: true
    },
    {
      id: 'naomi-mwangi',
      title: 'NAOMI MWANGIS MURDER',
      difficulty: 'Intermediate',
      tagline: 'CASE: NMM-2025-009',
      description:
        'Law student Naomi Mwangi is found dead in her locked Riverside penthouse. No forced entry, four suspects, and a web of overlapping emotional motives and physical evidence.',
      image:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
      location: 'Riverside',
      price: 'FREE',
      isFree: true
    }
  ];

  let unlocked = $state([]);
  let inputCode = $state('');
  let activeId = $state(null);
  let search = $state('');

  const codes = {
    'gardenia-slayings': 'GARDENIA',
    'kamau-succession': 'SUCCESSION77',
    'coffee-house-murder': 'COMMUNITYKE',
    'naomi-mwangi': 'MYSTERYFAM'
  };

  function unlock(id) {
    if (inputCode.toUpperCase() === codes[id]) {
      if (!unlocked.includes(id)) unlocked.push(id);
      activeId = null;
      inputCode = '';
    } else {
      alert('ACCESS DENIED');
      inputCode = '';
    }
  }
</script>

<svelte:head>
  <title>Case Archive</title>
</svelte:head>

<main class="container" in:fade>

  <header class="header">
    <div class="header-pre">CLASSIFIED RECORDS SYSTEM</div>
    <h1>CENTRAL ARCHIVE</h1>
    <div class="header-line"></div>
  </header>

  <!-- OPERATIONAL INSTRUCTIONS (HOW TO PLAY) -->
  <section class="instructions-panel">
    <div class="panel-tag">SECURITY PROTOCOL</div>
    <h2>OPERATIONAL BRIEFING: HOW TO PLAY</h2>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-num">01</div>
        <h3>PAID CASE ACCESS</h3>
        <p>
          Purchase an access invite on 
          <a class="hustlesasa-link" href="https://murdermysterygameske.hustlesasa.shop/" target="_blank" rel="noopener noreferrer">
            HustleSasa (KSH. 250/-)
          </a> 
          to receive your unique physical or digital decryption credential.
        </p>
      </div>
      <div class="step-card">
        <div class="step-num">02</div>
        <h3>FREE COMMUNITY GAMES</h3>
        <p>Decryption keys for free investigative cases are distributed directly within our official Community WhatsApp Group.</p>
      </div>
      <div class="step-card">
        <div class="step-num">03</div>
        <h3>DECRYPT & EXPLORE</h3>
        <p>Select your targeted file below, enter your received access code into the secure gate, and unlock the interactive network.</p>
      </div>
    </div>
  </section>

  <!-- SEARCH TERMINAL -->
  <div class="search-wrapper">
    <span class="search-icon">//</span>
    <input
      class="search"
      placeholder="FILTER BY CASE TITLE..."
      bind:value={search}
    />
  </div>

  <div class="grid">

    {#each games.filter(g =>
      g.title.toLowerCase().includes(search.toLowerCase())
    ) as game}

      <div class="card" in:fly>
        <div class="img-wrapper">
          <img src={game.image} alt={game.title} />
          <div class="case-badge">{game.tagline}</div>
        </div>

        <div class="content">
          <h2>{game.title}</h2>
          <p class="description">{game.description}</p>

          <div class="meta">
            <span class="tag-difficulty">INTEL: {game.difficulty}</span>
            <span class="tag-location">SECTOR: {game.location}</span>
            <span class="tag-price" class:free-highlight={game.isFree}>{game.price}</span>
          </div>

          {#if unlocked.includes(game.id)}

            <a class="open" href={`/games/${game.id}`}>
              ACCESS CASE RECORDS // ENTER
            </a>

          {:else if activeId === game.id}

            <div class="gate" in:slide>

              <input
                placeholder="ENTER DECRYPT CODE"
                bind:value={inputCode}
                onkeydown={(e) =>
                  e.key === 'Enter' && unlock(game.id)}
              />

              <div class="gate-actions">
                <button class="btn-decrypt" onclick={() => unlock(game.id)}>
                  EXECUTE DECRYPTION
                </button>

                <button class="btn-close" onclick={() => (activeId = null)}>
                  ABORT
                </button>
              </div>

            </div>

          {:else}

            <button class="locked" onclick={() => (activeId = game.id)}>
              <span class="lock-icon">🔒</span> SECURE DATA — DECRYPT REQUIRED
            </button>

          {/if}

        </div>
      </div>

    {/each}

  </div>
</main>

<style>
  .container {
    max-width: 1350px;
    margin: 0 auto;
    background: #050505;
    color: #f1f1f1;
    min-height: 100vh;
    padding: 60px 2rem;
    font-family: 'JetBrains Mono', monospace;
  }

  /* HEADER */
  .header {
    margin-bottom: 3rem;
  }

  .header-pre {
    color: #b02a2a;
    font-size: 0.75rem;
    letter-spacing: 4px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .header h1 {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin: 0;
    font-weight: 900;
  }

  .header-line {
    width: 60px;
    height: 2px;
    background: #b02a2a;
    margin-top: 1rem;
  }

  /* INSTRUCTIONS PANEL (HOW TO PLAY) */
  .instructions-panel {
    background: #0b0b0d;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 2rem;
    margin-bottom: 3.5rem;
    position: relative;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
  }

  .panel-tag {
    position: absolute;
    top: -10px;
    left: 20px;
    background: #b02a2a;
    color: white;
    font-size: 0.6rem;
    padding: 2px 10px;
    letter-spacing: 2px;
    font-weight: 700;
  }

  .instructions-panel h2 {
    font-size: 1rem;
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 2rem;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 0.75rem;
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .step-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .step-num {
    color: rgba(176, 42, 42, 0.3);
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
  }

  .step-card h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 0;
    color: #e5e5e5;
  }

  .step-card p {
    font-size: 0.75rem;
    line-height: 1.6;
    color: #8a8a93;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  .hustlesasa-link {
    color: #b02a2a;
    text-decoration: underline;
    font-weight: 700;
    transition: color 0.2s ease;
  }

  .hustlesasa-link:hover {
    color: #cd3737;
  }

  /* SEARCH TERMINAL */
  .search-wrapper {
    position: relative;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: 16px;
    color: #b02a2a;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .search {
    width: 100%;
    padding: 16px 16px 16px 45px;
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.06);
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    transition: all 0.3s ease;
  }

  .search:focus {
    outline: none;
    border-color: #b02a2a;
    box-shadow: 0 0 15px rgba(176, 42, 42, 0.1);
    background: #0d0d11;
  }

  /* GRID */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 30px;
  }

  /* CARD */
  .card {
    background: #09090b;
    border: 1px solid rgba(255, 255, 255, 0.06);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    border-color: rgba(176, 42, 42, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(176, 42, 42, 0.05);
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: #020202;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.75;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .card:hover img {
    transform: scale(1.05);
    opacity: 0.9;
  }

  .case-badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: rgba(5, 5, 5, 0.85);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4px 10px;
    font-size: 0.62rem;
    letter-spacing: 1px;
    color: #c5c5ca;
  }

  /* CONTENT */
  .content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content h2 {
    font-family: 'Cinzel', serif;
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin: 0 0 0.75rem 0;
    color: #ffffff;
  }

  .description {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    line-height: 1.6;
    color: #a1a1aa;
    margin: 0 0 1.5rem 0;
    flex-grow: 1;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
    padding-top: 0.85rem;
  }

  .tag-difficulty {
    color: #e2e8f0;
  }

  .tag-location {
    color: #8a8a93;
  }

  .tag-price {
    color: #b02a2a;
    font-weight: 700;
  }

  .tag-price.free-highlight {
    color: #1f5c35;
  }

  /* ACTIONS & BUTTONS */
  .locked {
    width: 100%;
    padding: 14px;
    border: 1px solid #262626;
    background: linear-gradient(to bottom, #121214, #09090b);
    color: #a1a1aa;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .locked:hover {
    border-color: #b02a2a;
    color: #ffffff;
    background: linear-gradient(to bottom, #1a1a1f, #0d0d11);
    box-shadow: 0 0 15px rgba(176, 42, 42, 0.15);
  }

  .lock-icon {
    font-size: 0.75rem;
  }

  .open {
    display: block;
    padding: 14px;
    text-align: center;
    background: linear-gradient(to bottom, #164227, #0e2a19);
    border: 1px solid #1f5c35;
    color: #ffffff;
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .open:hover {
    background: linear-gradient(to bottom, #1c5332, #11351e);
    border-color: #2b7a48;
    box-shadow: 0 0 15px rgba(31, 92, 53, 0.3);
  }

  /* DECRYPTION GATE WINDOW */
  .gate {
    background: #0d0d11;
    border: 1px solid rgba(176, 42, 42, 0.2);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .gate input {
    width: 100%;
    padding: 12px;
    background: #050507;
    border: 1px solid #26262b;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-align: center;
  }

  .gate input:focus {
    outline: none;
    border-color: #b02a2a;
  }

  .gate-actions {
    display: flex;
    gap: 8px;
  }

  .btn-decrypt {
    flex-grow: 2;
    padding: 10px;
    background: #b02a2a;
    border: 1px solid #cd3737;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .btn-decrypt:hover {
    background: #cd3737;
  }

  .btn-close {
    flex-grow: 1;
    padding: 10px;
    background: transparent;
    border: 1px solid #26262b;
    color: #71717a;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-close:hover {
    background: rgba(255, 255, 255, 0.03);
    color: #e4e4e7;
  }

  /* RESPONSIVE */
  @media (max-width: 640px) {
    .container {
      padding: 40px 1rem;
    }
    
    .header h1 {
      font-size: 2rem;
    }

    .instructions-panel {
      padding: 1.5rem 1rem;
    }
    
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>