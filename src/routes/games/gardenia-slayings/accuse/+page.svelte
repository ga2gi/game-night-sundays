<script>
  import { fly, fade, scale } from 'svelte/transition';

  const suspects = [
    { id: 'michael', name: 'Michael Korir', role: 'The Rival' },
    { id: 'jan', name: 'Jan Snaw', role: 'The Diplomat' },
    { id: 'zamzam', name: 'Zamzam Hamisi', role: 'The Retired Detective' },
    { id: 'njoroge', name: 'Njoroge Njoroge', role: 'The Researcher' }
  ];

  let selectedSuspect = $state(null);
  let showVerdict = $state(false);
  let isCorrect = $state(false);

  const KILLER_ID = 'zamzam';
  const SOLUTION_CODE = '1212';

  function handleAccuse() {
    if (!selectedSuspect) return;
    isCorrect = selectedSuspect.id === KILLER_ID;
    showVerdict = true;
  }
</script>

<div class="accuse-container">

  <!-- CASE NAVIGATION -->
  <div class="case-navigation">
    <a href="/games/gardenia-slayings" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/gardenia-slayings/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/gardenia-slayings/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/gardenia-slayings/accuse" class="nav-link active">ACCUSATION</a>
  </div>

  <header>
    <span class="warning-label">JUDICIAL INTERFACE // FINAL WARRANT</span>
    <h1>WHO IS THE <span class="accent">KILLER?</span></h1>
    <p>
      Select a suspect to issue an immediate arrest warrant. Caution: An incorrect arrest will result in the permanent closure of this case file.
    </p>
  </header>

  <!-- SUSPECT CARDS (TEXT-ONLY) -->
  <div class="suspect-grid">
    {#each suspects as suspect}
      <button
        class="suspect-card"
        class:selected={selectedSuspect?.id === suspect.id}
        onclick={() => selectedSuspect = suspect}
      >
        <div class="card-header">
          <span class="file-tag">CASE FILE</span>
          <span class="threat-indicator">●</span>
        </div>

        <div class="card-body">
          <h3>{suspect.name}</h3>
          <p>{suspect.role}</p>
        </div>

        <div class="card-footer">
          ID: {suspect.id.toUpperCase()}
        </div>
      </button>
    {/each}
  </div>

  <div class="actions">
    <button
      class="btn-accuse"
      disabled={!selectedSuspect}
      onclick={handleAccuse}
    >
      ISSUE ARREST WARRANT
    </button>
  </div>

  <!-- VERDICT MODAL -->
  {#if showVerdict}
    <div class="modal-backdrop" transition:fade>
      <div class="verdict-modal" in:scale={{ start: 0.9, duration: 400 }}>

        {#if isCorrect}
          <div class="verdict-content success">
            <span class="icon">⚖️</span>
            <h2>JUSTICE SERVED</h2>

            <p>
              Your intuition was correct. <strong>{selectedSuspect.name}</strong>
              has been taken into custody.
            </p>

            <div class="code-box">
              <span class="label">CLEARANCE CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/gardenia-slayings/solution" class="btn-final">
              VIEW DECRYPTED DOSSIER
            </a>
          </div>

        {:else}
          <div class="verdict-content failure">
            <span class="icon">🩸</span>
            <h2>JUSTICE FAILED</h2>

            <p>
              You issued a warrant for <strong>{selectedSuspect.name}</strong>.
              The real killer remains free.
            </p>

            <p class="dramatic-text">
              A misstep has distorted the truth of this case.
            </p>

            <div class="code-box">
              <span class="label">ACCESS CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/gardenia-slayings/solution" class="btn-final">
              REVEAL THE TRUTH
            </a>
          </div>
        {/if}

      </div>
    </div>
  {/if}
</div>

<style>
  .accuse-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px;
    text-align: center;
  }

  /* NAVIGATION */
  .case-navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 50px;
  }

  .nav-link {
    text-decoration: none;
    padding: 12px 18px;
    border: 1px solid #333;
    color: #aaa;
    font-size: 0.75rem;
    letter-spacing: 2px;
    font-weight: 800;
    transition: 0.3s;
    background: rgba(255,255,255,0.02);
  }

  .nav-link:hover {
    border-color: #ff79c6;
    color: #fff;
  }

  .nav-link.active {
    background: #ff79c6;
    color: #000;
  }

  header {
    margin-bottom: 60px;
  }

  .warning-label {
    font-size: 0.6rem;
    color: #ff79c6;
    letter-spacing: 3px;
    font-weight: 900;
  }

  h1 {
    font-size: 3rem;
    margin: 20px 0;
    font-family: serif;
  }

  header p {
    max-width: 600px;
    margin: 0 auto;
    color: #aaa;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  /* SUSPECT GRID */
  .suspect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 25px;
    margin-bottom: 60px;
  }

  .suspect-card {
    background: #0e0e10;
    border: 1px solid #333;
    padding: 20px;
    cursor: pointer;
    transition: 0.3s;
    text-align: left;
  }

  .suspect-card:hover {
    border-color: #555;
    transform: translateY(-3px);
  }

  .suspect-card.selected {
    border-color: #ff79c6;
    box-shadow: 0 0 15px rgba(255,121,198,0.2);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 0.7rem;
    color: #666;
    letter-spacing: 2px;
  }

  .threat-indicator {
    color: #ff5555;
    font-size: 1rem;
  }

  .card-body h3 {
    margin: 0;
    color: #fff;
    font-size: 1.1rem;
  }

  .card-body p {
    font-size: 0.75rem;
    color: #ff79c6;
    text-transform: uppercase;
    margin-top: 5px;
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
    background: #ff79c6;
    color: #000;
    padding: 20px 50px;
    border: none;
    font-weight: 900;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .btn-accuse:disabled {
    background: #333;
    color: #666;
    cursor: not-allowed;
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
    max-width: 500px;
    padding: 40px;
  }

  .icon {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
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
    color: #ff79c6;
  }

  .btn-final {
    display: inline-block;
    background: #fff;
    color: #000;
    padding: 12px 20px;
    font-weight: 900;
    text-decoration: none;
    margin-top: 15px;
  }
</style>