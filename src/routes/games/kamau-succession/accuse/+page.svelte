<script>
  import { fade, scale } from 'svelte/transition';

  const suspects = [
    {
      id: 'victor',
      name: 'Victor Kamau',
      role: 'Eldest Son / CEO of Kamau Estates',
      color: '#ff5555'
    },
    {
      id: 'grace',
      name: 'Grace Kamau',
      role: 'Matriarch / Wife of Edward Kamau',
      color: '#f1c27d'
    },
    {
      id: 'david',
      name: 'David Kamau',
      role: 'CFO / Second Son',
      color: '#50fa7b'
    },
    {
      id: 'lisa',
      name: 'Lisa Kamau',
      role: 'Marketing Director / Daughter',
      color: '#8be9fd'
    },
    {
      id: 'brian',
      name: 'Brian Kamau',
      role: 'Artist / Younger Son',
      color: '#bd93f9'
    },
    {
      id: 'chloe',
      name: 'Chloe Kamau',
      role: 'Law Student / Youngest Daughter',
      color: '#ff79c6'
    }
  ];

  let selectedSuspect = $state(null);
  let showVerdict = $state(false);
  let isCorrect = $state(false);

  const KILLER_ID = 'victor';
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
    <a href="/games/kamau-succession" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/kamau-succession/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/kamau-succession/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/kamau-succession/accuse" class="nav-link active">ACCUSATION</a>
  </div>

  <!-- HEADER -->
  <header>
    <span class="warning-label">JUDICIAL INTERFACE // FINAL WARRANT</span>
    <h1>WHO KILLED <span class="accent">EDWARD KAMAU?</span></h1>
    <p>
      The evidence is complete. The poison was in Victor’s glass. The father drank it.
      Now decide who placed it there.
    </p>
  </header>

  <!-- SUSPECT GRID -->
  <div class="suspect-grid">
    {#each suspects as s}
      <button
        class="suspect-card"
        class:selected={selectedSuspect?.id === s.id}
        on:click={() => (selectedSuspect = s)}
        style="--accent: {s.color}"
      >
        <div class="card-header">
          <span>CASE FILE</span>
          <span class="dot">●</span>
        </div>

        <div class="card-body">
          <h3 style="color:{s.color}">{s.name}</h3>
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
              Correct. <strong>{selectedSuspect.name}</strong> is responsible for Edward Kamau’s death.
            </p>

            <p class="note">
              The succession war has finally been exposed.
            </p>

            <div class="code-box">
              <span class="label">CLEARANCE CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/kamau-succession/solution" class="btn-final">
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
              The truth remains buried inside the Kamau dynasty.
            </p>

            <div class="code-box">
              <span class="label">ACCESS CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/kamau-succession/solution" class="btn-final">
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
    font-size: 2.6rem;
    margin: 20px 0;
  }

  header p {
    max-width: 650px;
    margin: auto;
    color: #aaa;
    line-height: 1.6;
  }

  /* GRID */
  .suspect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }

  .suspect-card {
    background: #111;
    border: 1px solid #333;
    padding: 20px;
    cursor: pointer;
    text-align: left;
    transition: 0.2s;
  }

  .suspect-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }

  .suspect-card.selected {
    border-color: var(--accent);
    box-shadow: 0 0 18px rgba(255,255,255,0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #666;
  }

  .dot {
    color: var(--accent);
  }

  .card-body h3 {
    margin: 10px 0 5px;
  }

  .card-body p {
    font-size: 0.75rem;
    color: #bbb;
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

  .success h2 { color: #50fa7b; }
  .failure h2 { color: #ff5555; }

  .code-box {
    background: #000;
    border: 1px dashed #444;
    padding: 20px;
    margin: 20px 0;
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
    font-weight: 900;
    text-decoration: none;
  }

  .note {
    color: #aaa;
    font-style: italic;
  }
</style>