<script>
  let accessCode = $state("");
  let unlocked = $state(false);
  let error = $state(false);

  const CORRECT_CODE = "1212";

  function unlock() {
    if (accessCode.trim() === CORRECT_CODE) {
      unlocked = true;
    } else {
      error = true;
      setTimeout(() => error = false, 1800);
    }
  }
</script>

<div class="solution-wrapper">

  {#if !unlocked}

  <!-- 🔐 LOCK SCREEN -->
  <div class="lock-card">
    <span class="stamp">RESTRICTED FILE</span>
    <h2>FINAL CASE RESOLUTION</h2>
    <p class="hint">Enter access code to view official findings</p>

    <input 
      type="password"
      bind:value={accessCode}
      placeholder="••••"
      class:error={error}
      onkeydown={(e) => e.key === 'Enter' && unlock()}
    />

    <button onclick={unlock}>UNLOCK</button>

    {#if error}
      <p class="error-text">ACCESS DENIED</p>
    {/if}
  </div>

  {:else}

  <!-- 📂 CASE FILE -->
  <div class="case-file">

    <div class="header">
      <span class="stamp red">OFFICIAL SOLUTION</span>
      <h1>THE GARDENIA SLAYINGS</h1>
      <p>FILE: RRP-2026-088</p>
    </div>

    <!-- KILLER -->
    <section>
      <h2>THE MURDERER</h2>
      <p class="highlight">Retired Detective Zamzam Hamisi</p>
    </section>

    <!-- MOTIVE -->
    <section>
      <h2>WHY SHE DID IT</h2>

      <p>The motive was not jealousy, money, or romance.</p>
      <p class="highlight">It was preservation.</p>

      <p>
        In 1969, Zamzam Hamisi was a young patrol officer assigned to the original Gardenia Slayings.
        She was first on the scene and became deeply involved in the investigation.
      </p>

      <p>
        The case was never truly solved. Evidence was manipulated, an innocent suspect was pushed forward,
        and the case was closed under a false resolution — one Zamzam helped construct.
      </p>

      <p>
        For decades, she lived with:
      </p>

      <ul>
        <li>The knowledge that the real killer was never caught</li>
        <li>The fear that her role would be exposed</li>
      </ul>

      <p>
        When Njoroge reopened the case, that fear became immediate.
        Susan Amani became a liability — and an opportunity.
      </p>

      <ul>
        <li>Silence Susan before she spoke</li>
        <li>Frame Njoroge as a copycat killer</li>
      </ul>
    </section>

    <!-- EXECUTION STEPS -->
    <section>
      <h2>HOW THE CRIME WAS EXECUTED</h2>

      <h3>1. Preparation</h3>
      <p>
        Zamzam understood investigations intimately. She knew how to plant evidence,
        exploit assumptions, and create multiple suspects.
      </p>

      <p>
        She used Michael Korir’s lost glove — recovered months later — and planted it at the scene.
        The cleaning solvent inconsistency proves it was handled elsewhere.
      </p>

      <h3>2. Diplomatic Diversion</h3>
      <p>
        A black Mercedes matching the diplomatic fleet was used to implicate Jan Snaw.
        CCTV failure was triggered remotely using public Wi-Fi — a method requiring institutional knowledge.
      </p>

      <h3>3. Framing Njoroge</h3>
      <p>
        Zamzam mirrored language from Njoroge’s notes:
        <em>"No encore for the runner."</em>
      </p>

      <p>
        Combined with his presence, obsession, and notes, he became the perfect scapegoat.
      </p>

      <h3>4. The Murder</h3>
      <p>
        Susan was intercepted during her run. Cause of death: blunt force trauma.
      </p>

      <p>
        The incision was post-mortem staging — precise, but intentionally imperfect.
        Only someone who had seen the original crime scenes could replicate this nuance.
      </p>

      <h3>5. Reinforcing Michael</h3>
      <p>
        Her headlamp was placed near Michael’s home to strengthen suspicion.
        His timeline, glove, and history created a believable but constructed narrative.
      </p>
    </section>

    <!-- WATCH -->
    <section>
      <h2>THE MISSING WATCH</h2>
      <p>
        The luxury watch was not stolen for money.
        It was taken to simulate robbery and retained as a trophy.
      </p>
    </section>

    <!-- ELIMINATION -->
    <section>
      <h2>WHY THE OTHERS FAIL</h2>

      <h3>Michael Korir</h3>
      <p>
        Strong motive, but evidence is too staged. The glove and solvent inconsistency expose planting.
      </p>

      <h3>Jan Snaw</h3>
      <p>
        Vehicle evidence relies on system manipulation — pointing away from him, not toward him.
      </p>

      <h3>Jane Toto</h3>
      <p>
        Financial motive exists, but no physical evidence supports involvement.
      </p>

      <h3>Njoroge Njoroge</h3>
      <p>
        Appears guilty by design. Symbolism outweighs actual proof.
      </p>
    </section>

    <!-- FINAL LOGIC -->
    <section class="final">
      <h2>FINAL ANALYSIS</h2>

      <p>
        This case is not solved by a single clue — but by consistency.
      </p>

      <ul>
        <li>Knowledgeable but imperfect staging</li>
        <li>Planted physical evidence</li>
        <li>Manipulated systems</li>
        <li>Layered misdirection</li>
        <li>Historical motive</li>
      </ul>

      <p class="highlight">
        Only one person explains everything.
      </p>

      <h1 class="killer-name">Zamzam Hamisi</h1>
    </section>

    <div class="end">CASE CLOSED</div>

  </div>

  {/if}

</div>

<style>
  .solution-wrapper {
    min-height: 100vh;
    background: #050505;
    color: #eaeaea;
    font-family: 'Courier New', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
  }

  .lock-card {
    background: #111;
    padding: 40px;
    border: 1px solid #333;
    text-align: center;
    max-width: 400px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background: #000;
    border: 1px solid #444;
    color: white;
    text-align: center;
  }

  input.error { border-color: red; }

  button {
    margin-top: 15px;
    padding: 10px;
    background: #8b0000;
    color: white;
    border: none;
  }

  .case-file {
    max-width: 800px;
  }

  .header {
    text-align: center;
    margin-bottom: 40px;
  }

  .stamp {
    border: 1px solid #555;
    padding: 4px 10px;
    font-size: 0.7rem;
  }

  .stamp.red {
    border-color: red;
    color: red;
  }

  section {
    margin-bottom: 35px;
    line-height: 1.7;
    color: #bbb;
  }

  h2 { color: #ff5555; }

  .highlight {
    color: white;
    font-weight: bold;
  }

  .killer-name {
    text-align: center;
    margin-top: 20px;
    font-size: 2rem;
  }

  .end {
    text-align: center;
    margin-top: 50px;
    opacity: 0.5;
  }
</style>