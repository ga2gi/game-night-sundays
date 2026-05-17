<script>
  import { fade, scale } from 'svelte/transition';

  const suspects = [
    {
      id: 'janet',
      name: 'Janet Otieno',
      role: 'Accountant / Regular Customer',
      color: '#8be9fd'
    },
    {
      id: 'brian',
      name: 'Brian Kamau',
      role: 'Former Employee / Student',
      color: '#ff5555'
    },
    {
      id: 'esther',
      name: 'Esther Njeri',
      role: 'Social Media Influencer',
      color: '#f1fa8c'
    },
    {
      id: 'james',
      name: 'James Mwangi',
      role: 'Property Owner / Politician',
      color: '#bd93f9'
    }
  ];

  let selectedSuspect = $state(null);
  let showVerdict = $state(false);
  let isCorrect = $state(false);

  const KILLER_ID = 'brian';
  const SOLUTION_CODE = '1212';

  function handleAccuse() {
    if (!selectedSuspect) return;
    isCorrect = selectedSuspect.id === KILLER_ID;
    showVerdict = true;
  }
</script>

<div class="accuse-container">

  <!-- NAV -->
  <div class="case-navigation">
    <a href="/games/coffee-house-murder" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/coffee-house-murder/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/coffee-house-murder/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/coffee-house-murder/accuse" class="nav-link active">ACCUSATION</a>
  </div>

  <!-- HEADER -->
  <header>
    <span class="warning-label">JUDICIAL INTERFACE // FINAL WARRANT</span>
    <h1>WHO IS THE <span class="accent">KILLER?</span></h1>
    <p>Select a suspect. One wrong move will permanently close this case file.</p>
  </header>

  <!-- SUSPECT GRID -->
  <div class="suspect-grid">
    {#each suspects as s}
      <button
        class="suspect-card"
        class:selected={selectedSuspect?.id === s.id}
        on:click={() => selectedSuspect = s}
        style="--accent: {s.color}"
      >
        <div class="card-header">
          <span>CASE FILE</span>
          <span class="dot">●</span>
        </div>

        <div class="card-body">
          <h3 style="color: {s.color}">{s.name}</h3>
          <p>{s.role}</p>
        </div>

        <div class="card-footer">
          ID: {s.id.toUpperCase()}
        </div>
      </button>
    {/each}
  </div>

  <!-- ACTION -->
  <div class="actions">
    <button
      class="btn-accuse"
      disabled={!selectedSuspect}
      on:click={handleAccuse}
    >
      ISSUE ARREST WARRANT
    </button>
  </div>

  <!-- VERDICT -->
  {#if showVerdict}
    <div class="modal-backdrop" transition:fade>
      <div class="verdict-modal" in:scale={{ duration: 300 }}>

        {#if isCorrect}
          <div class="verdict success">
            <span class="icon">⚖️</span>
            <h2>JUSTICE SERVED</h2>

            <p>
              Correct. <strong>{selectedSuspect.name}</strong> has been apprehended.
            </p>

            <div class="code-box">
              <span class="label">CLEARANCE CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/coffee-house-murder/solution" class="btn-final">
              VIEW CASE RESOLUTION
            </a>
          </div>

        {:else}
          <div class="verdict failure">
            <span class="icon">🩸</span>
            <h2>WRONG ACCUSATION</h2>

            <p>
              You accused <strong>{selectedSuspect.name}</strong>.
            </p>

            <p class="note">
              The real killer remains undetected.
            </p>

            <div class="code-box">
              <span class="label">ACCESS CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/coffee-house-murder/solution" class="btn-final">
              REVEAL TRUTH
            </a>
          </div>
        {/if}

      </div>
    </div>
  {/if}

</div>

<style>
  .accuse-container {
    min-height: 100vh;
    background: radial-gradient(circle at top, #1a1a1a, #0a0a0a);
    color: #e6e6e6;
    font-family: 'Courier New', monospace;
    padding: 80px 24px;
    text-align: center;
  }

  /* NAV */
  .case-navigation {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 50px;
  }

  .nav-link {
    text-decoration: none;
    padding: 12px 16px;
    border: 1px solid #333;
    background: #111;
    color: #aaa;
    font-size: 0.75rem;
    letter-spacing: 2px;
    transition: 0.2s;
  }

  .nav-link:hover {
    border-color: #b02a2a;
    color: #fff;
  }

  .nav-link.active {
    background: #b02a2a;
    color: #000;
  }

  /* HEADER */
  header {
    margin-bottom: 60px;
  }

  .warning-label {
    font-size: 0.6rem;
    color: #b02a2a;
    letter-spacing: 3px;
    font-weight: 900;
  }

  h1 {
    font-size: 2.8rem;
    margin: 20px 0;
    font-family: serif;
  }

  header p {
    max-width: 600px;
    margin: auto;
    color: #aaa;
    line-height: 1.6;
  }

  /* GRID */
  .suspect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }

  .suspect-card {
    background: #111;
    border: 1px solid #333;
    padding: 20px;
    cursor: pointer;
    text-align: left;
    transition: 0.25s;
  }

  .suspect-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }

  .suspect-card.selected {
    border-color: var(--accent);
    box-shadow: 0 0 18px rgba(255,255,255,0.08);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #666;
    margin-bottom: 10px;
  }

  .dot {
    color: var(--accent);
  }

  .card-body h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 900;
    text-shadow: 0 0 6px rgba(255,255,255,0.08);
  }

  .card-body p {
    font-size: 0.75rem;
    color: #bbb;
    margin-top: 5px;
    text-transform: uppercase;
  }

  .card-footer {
    margin-top: 15px;
    font-size: 0.65rem;
    color: #555;
    border-top: 1px dashed #333;
    padding-top: 10px;
  }

  /* BUTTON */
  .btn-accuse {
    background: #b02a2a;
    color: #000;
    padding: 18px 45px;
    font-weight: 900;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
  }

  .btn-accuse:disabled {
    background: #333;
    color: #666;
  }

  /* MODAL */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .verdict-modal {
    background: #111;
    border: 1px solid #333;
    padding: 40px;
    max-width: 500px;
  }

  .icon {
    font-size: 3rem;
  }

  h2 {
    margin: 20px 0;
  }

  .success h2 { color: #50fa7b; }
  .failure h2 { color: #ff5555; }

  .code-box {
    background: #000;
    border: 1px dashed #444;
    padding: 20px;
    margin: 25px 0;
  }

  .code {
    font-size: 2rem;
    letter-spacing: 6px;
    color: #b02a2a;
  }

  .btn-final {
    display: inline-block;
    background: #fff;
    color: #000;
    padding: 12px 18px;
    text-decoration: none;
    font-weight: 900;
    margin-top: 10px;
  }

  .note {
    color: #aaa;
    font-style: italic;
  }
</style>