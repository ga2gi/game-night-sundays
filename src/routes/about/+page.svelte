<script>
  import { fade, fly } from 'svelte/transition';

  const faqs = [
    {
      q: "How do the mystery games work?",
      a: "Each case is an interactive investigation dossier containing suspect files, witness statements, timelines, digital evidence, forensic reports, and hidden contradictions. Your goal is to identify the killer before checking the official solution."
    },

    {
      q: "Can I play with friends?",
      a: "Yes. The investigations are designed for solo detectives, couples, friend groups, game nights, virtual hangouts, and team experiences."
    },

    {
      q: "How do premium cases work?",
      a: "Premium investigations are unlocked using digital access codes purchased through the official Murder Mystery Games KE store."
    },

    {
      q: "Why are some cases locked?",
      a: "Certain free community cases are shared exclusively with members of the Murder Mystery Games KE WhatsApp community using rotating access codes."
    },

    {
      q: "Are the stories based in Kenya?",
      a: "Yes. Our mysteries are inspired by Nairobi nightlife, apartment scandals, elite families, campus drama, and modern Kenyan urban culture."
    },

    {
      q: "Do I need to download an app?",
      a: "No downloads are required. All cases are browser-based and playable on mobile, tablet, or desktop."
    },

    {
      q: "How difficult are the investigations?",
      a: "Cases range from beginner-friendly mysteries to advanced psychological investigations requiring deep deduction and attention to detail."
    },

    {
      q: "Can I replay a case after solving it?",
      a: "Yes. Once unlocked, cases remain accessible so you can replay them with new friends or during future game nights."
    },

    {
      q: "What goes on in the WhatsApp community?",
      a: "Our WhatsApp community is the primary central hub where we host virtual community Sunday game nights, broadcast early drops, share exclusive file updates, and swap fan theories between cases."
    }
  ];
</script>

<svelte:head>
  <title>About | Murder Mystery Games KE</title>
</svelte:head>

<main class="about-container">

  <!-- HERO -->
  <section class="hero-section" in:fade={{ duration: 900 }}>
    <div class="overlay"></div>

    <div class="hero-glow"></div>

    <div class="content">
      <span class="serial-no">
        MURDER MYSTERY GAMES KE // INTERACTIVE DETECTIVE EXPERIENCES
      </span>

      <h1>
        MURDER MYSTERY
        <span class="accent">GAMES KE</span>
      </h1>

      <p class="lead-text">
        Interactive Kenyan crime stories designed for curious minds,
        game nights, date nights, and detectives who love solving
        impossible cases.
      </p>

      <div class="hero-tags">
        <span>FORENSIC FILES</span>
        <span>GAME NIGHTS</span>
        <span>KENYAN MYSTERIES</span>
        <span>IMMERSIVE STORYTELLING</span>
      </div>
    </div>
  </section>

  <!-- INFO GRID -->
  <section class="grid-section">

    <div
      class="grid-item info-card"
      in:fly={{ y: 20, delay: 150 }}
    >
      <span class="number">01</span>

      <h3>REALISTIC INVESTIGATIONS</h3>

      <p>
        Every case is built like a cinematic police dossier —
        complete with evidence files, timelines, witness statements,
        chat screenshots, forensic reports, CCTV contradictions,
        and hidden motives waiting to be uncovered.
      </p>
    </div>

    <div
      class="grid-item info-card"
      in:fly={{ y: 20, delay: 300 }}
    >
      <span class="number">02</span>

      <h3>KENYAN CRIME STORIES</h3>

      <p>
        Our mysteries are rooted in Nairobi culture —
        from luxury apartments and elite scandals
        to university drama, family succession wars,
        nightlife secrets, and high-profile disappearances.
      </p>
    </div>

    <div
      class="grid-item info-card"
      in:fly={{ y: 20, delay: 450 }}
    >
      <span class="number">03</span>

      <h3>BUILT FOR EXPERIENCES</h3>

      <p>
        Whether you're investigating solo, hosting a game night,
        planning a date night, or competing with friends online,
        every case is designed to spark theories, debates,
        and unforgettable reactions.
      </p>
    </div>

  </section>

  <!-- FEATURE STRIP -->
  <section class="feature-strip">

    <div class="feature-box">
      <span class="feature-label">INVESTIGATE</span>
      <p>Analyze suspects, motives, evidence, and timelines.</p>
    </div>

    <div class="feature-box">
      <span class="feature-label">DISCUSS</span>
      <p>Debate theories with friends before making accusations.</p>
    </div>

    <div class="feature-box">
      <span class="feature-label">SOLVE</span>
      <p>Reveal the killer and discover what everyone missed.</p>
    </div>

  </section>

  <!-- MANIFESTO -->
  <section class="manifesto">

    <div class="manifesto-box">

      <span class="quote-label">CASE PHILOSOPHY</span>

      <p>
        “The truth is never hidden.
        It is simply buried beneath distractions,
        lies, and the details people ignored.”
      </p>

      <div class="signature">
        <p>CREATIVE DIRECTOR</p>
        <p class="agency-name">Murder Mystery Games KE</p>
      </div>

    </div>

  </section>

  <!-- FAQ -->
  <section class="faq-section">

    <div class="faq-header">
      <span class="faq-label">DETECTIVE DATABASE</span>

      <h2 class="faq-title">
        FREQUENTLY ASKED QUESTIONS
      </h2>
    </div>

    <div class="faq-grid">

      {#each faqs as faq, i}

        <div
          class="faq-card"
          in:fly={{ y: 20, delay: i * 80 }}
        >
          <h4>{faq.q}</h4>
          <p>{faq.a}</p>
        </div>

      {/each}

    </div>

  </section>

</main>

<style>
  :root {
    --accent: #b02a2a;
    --bg-dark: #050505;
    --border: #1a1a1a;
    --mono: "Courier New", monospace;
  }

  .about-container {
    background:
      radial-gradient(circle at top right, rgba(176,42,42,0.08), transparent 30%),
      linear-gradient(to bottom, #050505, #080808);
    overflow: hidden;
    padding-top: 40px;
    padding-bottom: 120px;
  }

  /* HERO */
  .hero-section {
    position: relative;
    min-height: 78vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image:
      linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.92)),
      url('https://images.unsplash.com/photo-1453723490680-79a17402d647?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    border-top: 1px solid rgba(255,255,255,0.04);
    border-bottom: 1px solid var(--border);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        to bottom,
        rgba(5,5,5,0.2),
        rgba(5,5,5,0.95)
      );
  }

  .hero-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    background: rgba(176,42,42,0.12);
    filter: blur(120px);
    border-radius: 50%;
  }

  .content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    padding: 0 20px;
  }

  .serial-no {
    font-family: var(--mono);
    color: var(--accent);
    font-size: 0.68rem;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 20px;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(2.4rem, 6vw, 4.4rem);
    letter-spacing: 5px;
    margin: 0;
    line-height: 1.08;
  }

  .accent {
    color: var(--accent);
    display: block;
    margin-top: 8px;
  }

  .lead-text {
    max-width: 760px;
    margin: 28px auto 0;
    font-size: 1.08rem;
    line-height: 1.9;
    color: #d1d1d1;
    font-weight: 300;
  }

  .hero-tags {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 35px;
  }

  .hero-tags span {
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    padding: 10px 18px;
    font-size: 0.68rem;
    letter-spacing: 2px;
    font-family: var(--mono);
    color: #bbb;
    backdrop-filter: blur(10px);
  }

  /* GRID */
  .grid-section {
    max-width: 1250px;
    margin: -90px auto 0;
    padding: 0 20px;
    position: relative;
    z-index: 10;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .info-card {
    background:
      linear-gradient(to bottom right, #0b0b0d, #090909);

    border: 1px solid var(--border);
    padding: 45px;
    transition: 0.35s ease;
    position: relative;
    overflow: hidden;
  }

  .info-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(176,42,42,0.05),
      transparent
    );
    opacity: 0;
    transition: 0.3s;
  }

  .info-card:hover::before {
    opacity: 1;
  }

  .info-card:hover {
    transform: translateY(-10px);
    border-color: var(--accent);
  }

  .number {
    font-family: 'Cinzel', serif;
    color: var(--accent);
    font-size: 0.8rem;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 20px;
    font-weight: 900;
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    margin-bottom: 18px;
    letter-spacing: 1px;
  }

  .info-card p {
    color: #8f8f8f;
    line-height: 1.8;
    font-size: 0.92rem;
  }

  /* FEATURE STRIP */
  .feature-strip {
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 0 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .feature-box {
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02);
    padding: 30px;
    text-align: center;
  }

  .feature-label {
    display: block;
    color: var(--accent);
    font-family: var(--mono);
    letter-spacing: 3px;
    font-size: 0.68rem;
    margin-bottom: 12px;
  }

  .feature-box p {
    color: #9a9a9a;
    line-height: 1.7;
    font-size: 0.9rem;
  }

  /* MANIFESTO */
  .manifesto {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }

  .manifesto-box {
    max-width: 820px;
    text-align: center;
    padding: 80px 60px;

    background:
      linear-gradient(to bottom right,
      rgba(255,255,255,0.03),
      rgba(255,255,255,0.01));

    border: 1px solid rgba(255,255,255,0.06);
    backdrop-filter: blur(14px);
  }

  .quote-label {
    color: var(--accent);
    font-family: var(--mono);
    letter-spacing: 4px;
    font-size: 0.68rem;
    display: block;
    margin-bottom: 30px;
  }

  .manifesto-box p {
    font-family: 'Cinzel', serif;
    font-size: 1.45rem;
    line-height: 1.9;
    color: white;
    font-style: italic;
  }

  .signature {
    margin-top: 45px;
  }

  .signature p {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: #555;
    margin: 4px;
    letter-spacing: 2px;
    font-style: normal;
  }

  .agency-name {
    color: var(--accent) !important;
    font-weight: 700;
  }

  /* FAQ */
  .faq-section {
    max-width: 1200px;
    margin: 130px auto 0;
    padding: 0 20px;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .faq-label {
    font-family: var(--mono);
    color: var(--accent);
    font-size: 0.72rem;
    letter-spacing: 4px;
  }

  .faq-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    margin-top: 18px;
    letter-spacing: 4px;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .faq-card {
    background: #0a0a0c;
    border: 1px solid var(--border);
    padding: 38px;
    transition: 0.3s ease;
  }

  .faq-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
  }

  .faq-card h4 {
    margin: 0 0 16px;
    color: white;
    font-size: 1rem;
    line-height: 1.5;
  }

  .faq-card p {
    color: #8d8d8d;
    line-height: 1.8;
    font-size: 0.92rem;
    margin: 0;
  }

  /* RESPONSIVE */
  @media (max-width: 950px) {

    .grid-section,
    .faq-grid,
    .feature-strip {
      grid-template-columns: 1fr;
    }

    .hero-section {
      min-height: auto;
      padding: 140px 0;
    }

    h1 {
      letter-spacing: 3px;
    }

    .manifesto-box {
      padding: 55px 28px;
    }

    .manifesto-box p {
      font-size: 1.15rem;
    }

    .lead-text {
      font-size: 1rem;
    }
  }
</style>