<script>
  import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
  <title>The Bureau | Murder Mystery Games KE</title>
</svelte:head>

<main class="bureau-container">
  <section class="hero-section" in:fade={{ duration: 800 }}>
    <div class="overlay"></div>
    <div class="content">
      <span class="serial-no">ID: DEPT-ABOUT-2026</span>
      <h1>THE <span class="accent">BUREAU</span></h1>
      <p class="lead-text">
        Murder Mystery Games KE is Kenya's premier forensic entertainment platform. 
        We specialize in hyper-realistic, narrative-driven investigations that challenge 
        the sharpest minds.
      </p>
    </div>
  </section>

  <section class="grid-section">
    <div class="grid-item info-card" in:fly={{ y: 20, delay: 200 }}>
      <span class="number">01</span>
      <h3>THE INVESTIGATION</h3>
      <p>
        Every case is a self-contained digital dossier. You are provided with crime scene photos, 
        CCTV transcripts, witness statements, and physical evidence that must be cross-referenced 
        to find inconsistencies.
      </p>
    </div>

    <div class="grid-item info-card" in:fly={{ y: 20, delay: 400 }}>
      <span class="number">02</span>
      <h3>THE AUTHENTICITY</h3>
      <p>
        Our stories are set in the heart of Kenya—from the bustling streets of River Road to 
        the high-stakes boardrooms of Upper Hill. We blend local culture with classic noir 
        to create an atmosphere that feels uncomfortably real.
      </p>
    </div>

    <div class="grid-item info-card" in:fly={{ y: 20, delay: 600 }}>
      <span class="number">03</span>
      <h3>THE RESOLUTION</h3>
      <p>
        We don't hold your hand. There are no "hint" buttons that give away the answer. 
        You must lock in your accusation. If you're wrong, the killer walks free. If you're 
        right, you gain clearance for the next high-profile case.
      </p>
    </div>
  </section>

  <section class="manifesto">
    <div class="manifesto-box">
      <h2>OPERATIONAL PROTOCOL</h2>
      <p>
        "At Murder Mystery Games KE, we believe the best stories aren't just told—they are 
        discovered. We treat our players as Investigators, not just users. Our mission is to 
        provide a world where every detail matters and every lie has a crack in it."
      </p>
      <div class="signature">
        <p>CHIEF ARCHIVIST</p>
        <p class="agency-name">Murder Mystery Games KE</p>
      </div>
    </div>
  </section>
</main>

<style>
  .bureau-container {
    padding-bottom: 100px;
  }

  /* HERO SECTION */
  .hero-section {
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('https://images.unsplash.com/photo-1453723490680-79a17402d647?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid var(--border);
  }

  .overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to bottom, rgba(5,5,5,0.4), var(--bg-dark));
  }

  .content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
  }

  .serial-no {
    font-family: var(--mono);
    color: var(--accent);
    font-size: 0.7rem;
    letter-spacing: 4px;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: 4rem;
    margin: 10px 0;
    letter-spacing: 10px;
  }

  .lead-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ccc;
    font-weight: 300;
  }

  /* GRID SECTION */
  .grid-section {
    max-width: 1200px;
    margin: -80px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 20px;
    position: relative;
    z-index: 10;
  }

  .info-card {
    background: #0a0a0c;
    border: 1px solid var(--border);
    padding: 40px;
    transition: 0.3s;
  }

  .info-card:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
  }

  .number {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem;
    color: var(--accent);
    display: block;
    margin-bottom: 20px;
    font-weight: 900;
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }

  .info-card p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #888;
  }

  /* MANIFESTO SECTION */
  .manifesto {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }

  .manifesto-box {
    max-width: 700px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.05);
    padding: 60px;
    background: rgba(255,255,255,0.01);
  }

  h2 {
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 5px;
    color: var(--accent);
    margin-bottom: 30px;
  }

  .manifesto-box p {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    line-height: 1.8;
    color: #fff;
    font-style: italic;
  }

  .signature {
    margin-top: 40px;
  }

  .signature p {
    font-family: var(--mono);
    font-size: 0.6rem;
    font-style: normal;
    color: #444;
    margin: 2px;
    letter-spacing: 2px;
  }

  .agency-name {
    color: var(--accent) !important;
    font-weight: 700;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .grid-section {
      grid-template-columns: 1fr;
      margin-top: 40px;
    }
    h1 { font-size: 2.5rem; }
    .hero-section { height: auto; padding: 100px 0; }
  }
</style>