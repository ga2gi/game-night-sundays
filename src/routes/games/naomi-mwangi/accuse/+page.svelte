<script>
  import { fade, scale } from 'svelte/transition';

  const suspects = [
    {
      id: 'jayden',
      name: 'Jayden Otieno',
      role: 'Charismatic • Close to victim',
      color: '#8be9fd'
    },
    {
      id: 'sharon',
      name: 'Sharon Muli',
      role: 'Composed • Scarf owner',
      color: '#50fa7b'
    },
    {
      id: 'brian',
      name: 'Brian Mwangi',
      role: 'Ex-boyfriend • Tense relationship',
      color: '#ff5555'
    },
    {
      id: 'joyce',
      name: 'Joyce Naliaka',
      role: 'Law Student • Last phone contact',
      color: '#bd93f9'
    }
  ];

  let selectedSuspect = $state(null);
  let showVerdict = $state(false);
  let isCorrect = $state(false);

  /* 🎯 CANONICAL STORY ANSWER (based on your case logic build) */
  const KILLER_ID = 'joyce';
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
    <a href="/games/naomi-mwangi" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/naomi-mwangi/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/naomi-mwangi/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/naomi-mwangi/accuse" class="nav-link active">ACCUSATION</a>
  </div>

  <!-- HEADER -->
  <header>
    <span class="warning-label">INVESTIGATOR INTERFACE // FINAL DECISION</span>

    <h1>
      WHO KILLED <span class="accent">NAOMI MWANGI?</span>
    </h1>

    <p>
      Review all evidence carefully. One wrong accusation closes the case permanently.
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
      FILE FINAL ACCUSATION ⚖️
    </button>
  </div>

  <!-- VERDICT -->
  {#if showVerdict}
    <div class="modal-backdrop" transition:fade>
      <div class="verdict-modal" in:scale={{ duration: 300 }}>

        {#if isCorrect}
          <div class="verdict success">
            <span class="icon">⚖️</span>
            <h2>CASE CLOSED</h2>

            <p>
              Correct. <strong>{selectedSuspect.name}</strong> is responsible for Naomi Mwangi’s death.
            </p>

            <div class="code-box">
              <span class="label">CASE RESOLUTION CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/naomi-mwangi/solution" class="btn-final">
              VIEW FULL TRUTH
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
              The real killer remains concealed within conflicting testimonies…
            </p>

            <div class="code-box">
              <span class="label">ACCESS CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/naomi-mwangi/solution" class="btn-final">
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
  flex-wrap: wrap;
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
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #666;
}

.card-body h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 900;
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
  margin-top: 30px;
  background: #b02a2a;
  color: #000;
  padding: 18px 45px;
  font-weight: 900;
  border: none;
  cursor: pointer;
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
  font-weight: 900;
  text-decoration: none;
}
</style>