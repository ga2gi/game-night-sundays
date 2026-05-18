<script>
  import { fade, fly } from 'svelte/transition';

  const plans = [
    {
      name: "Community Access",
      price: "FREE",
      description: "Free case files available exclusively through the WhatsApp detective community.",
      features: [
        "Access to free community case files",
        "Community-only access codes",
        "Join detective discussions & theories",
        "Playable on mobile or desktop",
        "Includes Naomi Mwangi & Coffee House Murder"
      ],
      cta: "JOIN COMMUNITY",
      link: "https://chat.whatsapp.com/LDB3Fdc2nfh8RhFaRt5fSj",
      external: true,
      highlight: false
    },

    {
      name: "Field Agent",
      price: "250/-",
      unit: "per case",
      description: "Unlock a single premium investigation file with full evidence access.",
      features: [
        "Access one premium case",
        "Full suspect and evidence archive",
        "Official case conclusion included",
        "Permanent access to purchased case",
        "Delivered instantly as a digital access file"
      ],
      cta: "UNLOCK CASE FILE",
      link: "https://murdermysterygameske.hustlesasa.shop",
      external: true,
      highlight: true
    },

    {
      name: "Bureau Chief",
      price: "1,000/-",
      unit: "per month",
      description: "Unlimited access to the complete Murder Mystery Games KE archive.",
      features: [
        "Unlimited access to all cases",
        "Access all premium investigations",
        "New cases included during subscription",
        "Monthly digital access key",
        "Ideal for consistent players and game nights"
      ],
      cta: "GET FULL ACCESS",
      link: "https://murdermysterygameske.hustlesasa.shop",
      external: true,
      highlight: false
    }
  ];
</script>

<svelte:head>
  <title>Access Plans | Murder Mystery Games KE</title>
</svelte:head>

<main class="pricing-container">
  <header class="pricing-header" in:fade>
    <span class="protocol">PROTOCOL: CLEARANCE_LEVELS</span>

    <h1>
      CHOOSE YOUR <span class="accent">ACCESS</span>
    </h1>

    <p>
      Access classified investigations, unlock premium case archives,
      and join the detective community behind Murder Mystery Games KE.
    </p>
  </header>

  <div class="plans-grid">
    {#each plans as plan, i}
      <div
        class="plan-card"
        class:highlighted={plan.highlight}
        in:fly={{ y: 30, delay: i * 150, duration: 600 }}
      >
        {#if plan.highlight}
          <div class="ribbon">MOST POPULAR</div>
        {/if}

        <div class="card-top">
          <span class="plan-name">{plan.name}</span>

          <div class="price-area">
            <span class="currency">
              {plan.price === 'FREE' ? '' : 'KES'}
            </span>

            <span class="amount">{plan.price}</span>

            {#if plan.unit}
              <span class="unit">{plan.unit}</span>
            {/if}
          </div>

          <p class="desc">{plan.description}</p>
        </div>

        <ul class="features-list">
          {#each plan.features as feature}
            <li>
              <span class="check">✓</span>
              {feature}
            </li>
          {/each}
        </ul>

        <a
          href={plan.link}
          target={plan.external ? "_blank" : undefined}
          rel={plan.external ? "noopener noreferrer" : undefined}
          class="plan-btn"
        >
          {plan.cta}
        </a>
      </div>
    {/each}
  </div>

  <section class="faq-brief">
    <div class="brief-box">
      <h3>BUREAU FAQ</h3>

      <div>

        <div class="faq-item">
          <p class="q">How do the free community cases work?</p>

          <p class="a">
            Free cases are only accessible through the official WhatsApp detective
            community. Members receive access codes and updates directly in the group.
          </p>
        </div>

        <div class="faq-item">
          <p class="q">How do premium cases work?</p>

          <p class="a">
            After payment, you receive a downloadable PDF containing your
            access code and instructions for unlocking the case file.
          </p>
        </div>

        <div class="faq-item">
          <p class="q">Does the KES 250 plan include all cases?</p>

          <p class="a">
            No. The Field Agent plan unlocks one premium case at a time.
          </p>
        </div>

        <div class="faq-item">
          <p class="q">What does the monthly plan include?</p>

          <p class="a">
            The Bureau Chief plan gives unlimited access to the entire archive
            for one month.
          </p>
        </div>

        <div class="faq-item">
          <p class="q">Can I play with friends?</p>

          <p class="a">
            Yes. Many players use the cases during group game nights,
            virtual investigations, and team deduction sessions.
          </p>
        </div>

      </div>
    </div>
  </section>
</main>

<style>
  :root {
    --accent: #b02a2a;
    --bg-dark: #050505;
    --card-bg: #0a0a0c;
    --text-dim: #888;
    --border: #1c1c1c;
    --mono: "Courier New", monospace;
  }

  .pricing-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px;
  }

  .pricing-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .protocol {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--accent);
    letter-spacing: 4px;
    display: block;
    margin-bottom: 15px;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: 3.5rem;
    margin: 0;
    letter-spacing: 5px;
  }

  .accent {
    color: var(--accent);
  }

  .pricing-header p {
    color: var(--text-dim);
    max-width: 650px;
    margin: 20px auto 0;
    line-height: 1.7;
  }

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: stretch;
  }

  .plan-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 50px 40px;
    position: relative;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
  }

  .plan-card:hover {
    border-color: #333;
    transform: translateY(-10px);
  }

  .plan-card.highlighted {
    border-color: var(--accent);
    background: linear-gradient(145deg, #0f0f12, #050505);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }

  .ribbon {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--accent);
    color: #000;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 5px 15px;
    letter-spacing: 1px;
  }

  .plan-name {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    letter-spacing: 2px;
    display: block;
    margin-bottom: 20px;
  }

  .price-area {
    margin-bottom: 25px;
    display: flex;
    align-items: baseline;
    gap: 5px;
  }

  .amount {
    font-size: 3rem;
    font-weight: 900;
    font-family: 'Cinzel', serif;
    color: #fff;
  }

  .currency,
  .unit {
    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--text-dim);
  }

  .desc {
    font-size: 0.85rem;
    color: #888;
    line-height: 1.6;
    margin-bottom: 30px;
    min-height: 4rem;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
    flex: 1;
  }

  .features-list li {
    font-size: 0.8rem;
    color: #bbb;
    margin-bottom: 12px;
    display: flex;
    gap: 10px;
    line-height: 1.6;
  }

  .check {
    color: var(--accent);
    font-weight: bold;
  }

  .plan-btn {
    width: 100%;
    padding: 18px;
    background: transparent;
    border: 1px solid #444;
    color: #fff;
    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
  }

  .plan-card.highlighted .plan-btn {
    background: white;
    color: black;
    border-color: white;
  }

  .plan-btn:hover {
    background: var(--accent);
    color: #000;
    border-color: var(--accent);
  }

  .faq-brief {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }

  .brief-box {
    max-width: 800px;
    width: 100%;
    border-top: 1px solid var(--border);
    padding-top: 50px;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 40px;
  }

  h3 {
    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 3px;
  }

  .faq-item {
    margin-bottom: 30px;
  }

  .q {
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #fff;
  }

  .a {
    font-size: 0.85rem;
    color: #777;
    line-height: 1.6;
  }

  @media (max-width: 1000px) {
    .plans-grid {
      grid-template-columns: 1fr;
    }

    .brief-box {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
</style>