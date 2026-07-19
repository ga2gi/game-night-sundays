<script>
  import { fly, fade, scale } from 'svelte/transition';

  const suspects = [
    { 
      id: 'diana', 
      name: 'Diana Kamau', 
      role: 'The Sister',
      age: 36,
      motive: 'Blackmailed over Edwin Kamau case'
    },
    { 
      id: 'marcus', 
      name: 'Marcus Mutugi', 
      role: 'The Retired Prosecutor',
      age: 62,
      motive: 'Brother named in Kimani Deposition'
    },
    { 
      id: 'walter', 
      name: 'Walter "Wally" Mulandi', 
      role: 'The Retired Magician',
      age: 67,
      motive: 'Killed Liza Mueni, blackmailing Salim'
    },
    { 
      id: 'sharon', 
      name: 'Sharon Mukiri', 
      role: 'The Former Co-Host',
      age: 41,
      motive: 'Accidentally killed Zoe Muli'
    },
    { 
      id: 'oliver', 
      name: 'Oliver Kili', 
      role: 'The Researcher',
      age: 39,
      motive: 'Blackmailing Salim with stolen evidence'
    },
    { 
      id: 'beatrice', 
      name: 'Beatrice "Birdie" Pesa', 
      role: 'The Retired Cryptographer',
      age: 68,
      motive: 'Wanted Liza\'s notebook back'
    },
    { 
      id: 'sylvia', 
      name: 'Sylvia Mwende', 
      role: 'The Retired Detective',
      age: 58,
      motive: 'Wanted truth about Kimani Deposition'
    }
  ];

  let selectedSuspect = $state(null);
  let showVerdict = $state(false);
  let isCorrect = $state(false);

  const KILLER_ID = 'walter'; // Wally Mulandi is the killer
  const SOLUTION_CODE = '088-2026';

  function handleAccuse() {
    if (!selectedSuspect) return;
    isCorrect = selectedSuspect.id === KILLER_ID;
    showVerdict = true;
  }
</script>

<div class="accuse-container">

  <!-- CASE NAVIGATION -->
  <div class="case-navigation">
    <a href="/games/echoes-in-the-tower" class="nav-link">INCIDENT REPORT</a>
    <a href="/games/echoes-in-the-tower/evidence" class="nav-link">EVIDENCE</a>
    <a href="/games/echoes-in-the-tower/suspects" class="nav-link">SUSPECTS</a>
    <a href="/games/echoes-in-the-tower/accuse" class="nav-link active">ACCUSATION</a>
  </div>

  <header>
    <span class="warning-label">JUDICIAL INTERFACE // FINAL WARRANT</span>
    <h1>WHO KILLED <span class="accent">SALIM JUMA?</span></h1>
    <p>
      Select a suspect to issue an immediate arrest warrant. The killer used cyanide-laced whiskey in the War Room. Caution: An incorrect arrest will result in the permanent closure of this case file.
    </p>
  </header>

  <!-- SUSPECT CARDS -->
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
          <span class="age-tag">{suspect.age} years</span>
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
              has been taken into custody for the murder of Salim Juma.
            </p>

            <p class="case-detail">
              Walter Mulandi poisoned Salim with cyanide in the whiskey glass, 
              then retrieved Liza Mueni's notebook from the War Room.
            </p>

            <div class="code-box">
              <span class="label">CASE CLEARANCE CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/echoes-in-the-tower/solution" class="btn-final">
              VIEW DECRYPTED DOSSIER
            </a>
          </div>

        {:else}
          <div class="verdict-content failure">
            <span class="icon">🩸</span>
            <h2>JUSTICE FAILED</h2>

            <p>
              You issued a warrant for <strong>{selectedSuspect.name}</strong>.
              The real killer remains free to strike again.
            </p>

            <p class="dramatic-text">
              A misstep has distorted the truth of this case. The killer's 
              identity remains hidden in the echoes of the tower.
            </p>

            <div class="code-box">
              <span class="label">ACCESS CODE</span>
              <span class="code">{SOLUTION_CODE}</span>
            </div>

            <a href="/games/echoes-in-the-tower/solution" class="btn-final">
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

  .accent {
    color: #ff79c6;
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

  .age-tag {
    display: inline-block;
    font-size: 0.65rem;
    color: #666;
    margin-top: 8px;
    padding: 2px 8px;
    border: 1px solid #333;
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
    transition: 0.3s;
  }

  .btn-accuse:hover:not(:disabled) {
    background: #ff92d0;
    transform: scale(1.02);
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
    z-index: 9999;
  }

  .verdict-modal {
    background: #111;
    border: 1px solid #333;
    max-width: 500px;
    padding: 40px;
    margin: 20px;
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

  .case-detail {
    font-size: 0.9rem;
    color: #aaa;
    margin: 15px 0;
    line-height: 1.6;
  }

  .dramatic-text {
    font-style: italic;
    color: #888;
    margin: 15px 0;
    line-height: 1.6;
  }

  .code-box {
    background: #000;
    border: 1px dashed #444;
    padding: 20px;
    margin: 25px 0;
  }

  .code-box .label {
    display: block;
    font-size: 0.6rem;
    color: #666;
    letter-spacing: 2px;
    margin-bottom: 8px;
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
    transition: 0.3s;
  }

  .btn-final:hover {
    background: #ff79c6;
    transform: scale(1.05);
  }
</style>