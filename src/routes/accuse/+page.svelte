<script>
  // Svelte 5 Runes
  let selectedSuspect = $state("");
  let accusationText = $state("");
  let detectiveNotes = $state("");
  let showResult = $state(false);

  const suspects = [
    { id: "michael", name: "Michael Korir", emoji: "🏃‍♂️", color: "#ff79c6" },
    { id: "jan", name: "Jan Snaw", emoji: "💼", color: "#bd93f9" },
    { id: "jane", name: "Jane Toto", emoji: "🐍", color: "#f1fa8c" },
    { id: "njoroge", name: "Njoroge Njoroge", emoji: "🎙️", color: "#50fa7b" },
    { id: "zamzam", name: "Zamzam Hamisi", emoji: "🕵️‍♀️", color: "#8be9fd" }
  ];

  // Derived state for the chosen suspect
  let selectedData = $derived(suspects.find(s => s.id === selectedSuspect));
  
  // Validation logic
  const minTheoryLength = 50;
  let theoryProgress = $derived(Math.min((accusationText.length / minTheoryLength) * 100, 100));
  let canSubmit = $derived(selectedSuspect !== "" && accusationText.length >= minTheoryLength);

  function lockInVote() {
    if (canSubmit) {
      showResult = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function resetCase() {
    showResult = false;
  }
</script>

<div class="accuse-wrapper">
  {#if !showResult}
    <div class="main-card">
      <div class="header-group">
        <span class="confidential-badge">COURTROOM // CASE RRP-2026-088</span>
        <h1 class="glitter-text">Court Is Now in Session</h1>
        <p class="tagline">
          You are not choosing a suspect. You are building a theory the court will test.
        </p>
      </div>

      <!-- SUSPECT GRID -->
      <div class="suspect-grid">
        {#each suspects as s (s.id)}
          <button 
            class="suspect-card" 
            class:selected={selectedSuspect === s.id} 
            onclick={() => selectedSuspect = s.id}
            style="--accent: {s.color}"
          >
            <div class="card-inner">
              <span class="emoji-large">{s.emoji}</span>
              <span class="suspect-name">{s.name}</span>
            </div>
          </button>
        {/each}
      </div>

      <!-- DETECTIVE NOTEBOOK -->
      <div class="notebook-section">
        <h3>🗒 Detective Working Notes</h3>
        <p class="hint">Private reasoning space. Observations made here will be archived with your theory.</p>
        <textarea
          bind:value={detectiveNotes}
          placeholder="Timeline inconsistencies, behavioral patterns, missing logic..."
        ></textarea>
      </div>

      <!-- CASE THEORY -->
      <div class="reasoning-area">
        <div class="label-row">
          <label for="opening">OPENING STATEMENT (THEORY)</label>
          <span class="char-count" class:ready={accusationText.length >= minTheoryLength}>
            {accusationText.length}/{minTheoryLength} characters
          </span>
        </div>
        
        <textarea 
          id="opening"
          bind:value={accusationText} 
          placeholder="Explain your reasoning as if presenting to a jury..."
        ></textarea>
        
        <div class="progress-bar">
          <div class="progress-fill" style="width: {theoryProgress}%"></div>
        </div>
      </div>

      <div class="thinking-prompt">
        <p>
          The court will not ask who looks guilty. It will ask what cannot be explained otherwise.
        </p>
      </div>

      <button 
        class="submit-button" 
        onclick={lockInVote} 
        disabled={!canSubmit}
      >
        SUBMIT TO COURT ⚖️
      </button>
    </div>

  {:else}
    <div class="final-verdict-card">
      <div class="stamp">CASE SUBMITTED</div>

      <div class="verdict-header">
        <h2 class="handwriting">Statement of Theory</h2>
        <p class="date-stamp">Nairobi Municipal Court // {new Date().toLocaleDateString()}</p>
      </div>

      <div class="exposed-display">
        <div class="exposed-circle" style="border-color: {selectedData?.color}">
          {selectedData?.emoji}
        </div>
        <div class="exposed-meta">
          <span class="label">ACCUSED:</span>
          <h3>{selectedData?.name}</h3>
        </div>
      </div>

      <div class="logic-paper">
        <h4>Opening Statement</h4>
        <p class="written-text">"{accusationText}"</p>
      </div>

      {#if detectiveNotes}
        <div class="notes-paper">
          <h4>Filed Observations</h4>
          <p>{detectiveNotes}</p>
        </div>
      {/if}

      <div class="courtroom-section">
        <h4>Case Status: PENDING ADJUDICATION</h4>
        <p>Your theory has been entered into the record. The panel will now cross-reference your logic against discovered evidence.</p>
      </div>

      <button class="retry" onclick={resetCase}>
        Modify Case File
      </button>
    </div>
  {/if}
</div>

<style>
  .accuse-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #0d1117;
    color: white;
    padding: 20px;
    font-family: 'Courier New', monospace;
  }

  .main-card {
    background: #1a1b26;
    padding: 40px;
    border-radius: 24px;
    width: 100%;
    max-width: 800px;
    border: 1px solid #333;
    text-align: center;
  }

  .confidential-badge {
    background: #f7768e;
    color: #1a1b26;
    font-size: 0.7rem;
    padding: 4px 12px;
    border-radius: 4px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .glitter-text { font-size: 1.8rem; margin: 15px 0; color: #a9b1d6; }
  .tagline { color: #565f89; font-size: 0.9rem; margin-bottom: 30px; }

  .suspect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    margin-bottom: 30px;
  }

  .suspect-card {
    background: #24283b;
    border: 2px solid #333;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
    color: white;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .suspect-card:hover { border-color: #565f89; transform: translateY(-2px); }
  .suspect-card.selected { border-color: var(--accent); background: rgba(255,255,255,0.05); box-shadow: 0 0 20px -5px var(--accent); }

  .emoji-large { font-size: 2.2rem; display: block; margin-bottom: 10px; }
  .suspect-name { font-size: 0.8rem; font-weight: bold; }

  .notebook-section {
    margin-top: 20px;
    padding: 20px;
    background: rgba(0,0,0,0.2);
    border: 1px dashed #444;
    border-radius: 12px;
    text-align: left;
  }

  .notebook-section h3 { margin: 0; color: #bb9af7; font-size: 1rem; }
  .hint { font-size: 0.75rem; color: #565f89; margin: 5px 0 15px; }

  .reasoning-area { margin-top: 30px; text-align: left; }
  .label-row { display: flex; justify-content: space-between; align-items: flex-end; }
  .label-row label { font-size: 0.8rem; font-weight: bold; color: #7aa2f7; }
  .char-count { font-size: 0.7rem; color: #f7768e; }
  .char-count.ready { color: #9ece6a; }

  textarea {
    width: 100%;
    height: 120px;
    background: #0d1117;
    border: 1px solid #333;
    color: #c0caf5;
    padding: 15px;
    margin: 10px 0 5px;
    resize: none;
    border-radius: 8px;
    font-family: inherit;
  }

  textarea:focus { outline: none; border-color: #7aa2f7; }

  .progress-bar { height: 4px; background: #333; border-radius: 2px; overflow: hidden; }
  .progress-fill { height: 100%; background: #9ece6a; transition: width 0.3s ease; }

  .thinking-prompt { margin: 25px 0; font-size: 0.8rem; color: #565f89; }

  .submit-button {
    background: #7aa2f7;
    color: #1a1b26;
    padding: 18px 40px;
    border-radius: 50px;
    font-weight: 900;
    border: none;
    cursor: pointer;
    transition: 0.2s;
  }

  .submit-button:disabled { opacity: 0.3; cursor: not-allowed; filter: grayscale(1); }
  .submit-button:hover:not(:disabled) { transform: scale(1.05); box-shadow: 0 10px 20px -10px #7aa2f7; }

  /* VERDICT VIEW */
  .final-verdict-card {
    background: #fff;
    color: #1a1b26;
    padding: 50px;
    border-radius: 4px;
    max-width: 700px;
    position: relative;
    box-shadow: 20px 20px 0 rgba(0,0,0,0.5);
  }

  .stamp {
    position: absolute;
    top: 20px;
    right: 20px;
    border: 3px solid #f7768e;
    color: #f7768e;
    padding: 5px 15px;
    font-weight: bold;
    transform: rotate(15deg);
    opacity: 0.8;
  }

  .verdict-header { border-bottom: 2px solid #1a1b26; margin-bottom: 30px; padding-bottom: 10px; }
  .handwriting { font-family: 'Brush Script MT', cursive; font-size: 2.5rem; margin: 0; }
  .date-stamp { font-size: 0.7rem; color: #666; margin-top: 5px; }

  .exposed-display { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
  .exposed-circle { width: 80px; height: 80px; border: 3px solid; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; }
  .exposed-meta .label { font-size: 0.7rem; color: #888; display: block; }
  .exposed-meta h3 { margin: 0; font-size: 1.5rem; }

  .logic-paper, .notes-paper { text-align: left; margin-bottom: 25px; }
  .logic-paper h4, .notes-paper h4 { font-size: 0.8rem; text-transform: uppercase; margin-bottom: 10px; color: #444; }
  .written-text { line-height: 1.6; background: #f9f9f9; padding: 20px; border-radius: 8px; font-style: italic; }

  .courtroom-section { background: #1a1b26; color: white; padding: 25px; border-radius: 8px; text-align: left; }
  .courtroom-section h4 { color: #7aa2f7; margin-top: 0; }

  .retry {
    margin-top: 30px;
    background: none;
    border: 1px solid #ccc;
    padding: 10px 20px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.8rem;
  }
  
  .retry:hover { background: #eee; }
</style>