<script>
  import { fly, fade, slide } from 'svelte/transition';

  const games = [
    {
      id: 'gardenia-slayings',
      title: 'THE GARDENIA SLAYINGS',
      difficulty: 'Intermediate',
      tagline: 'CASE: RRP-2026-088',
      description:
        'A researcher found in River Road Park. A cold case pattern reappears.',
      image:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop',
      location: 'Nairobi',
      status: 'LOCKED'
    },
    {
      id: 'kamau-succession',
      title: 'THE KAMAU SUCCESSION',
      difficulty: 'Advanced',
      tagline: 'CASE: KSD-2026-012',
      description:
        'A billionaire dies during dinner. The will disappears.',
      image:
        'https://images.unsplash.com/photo-1514333130115-342379344843?q=80&w=2070&auto=format&fit=crop',
      location: 'Kiambu',
      status: 'LOCKED'
    },
    {
      id: 'coffee-house-murder',
      title: 'THE COFFEE HOUSE MURDER',
      difficulty: 'Beginner',
      tagline: 'CASE: CHM-2025-004',
      description:
        'A barista is found dead in the roasting room.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
      location: 'Nairobi',
      status: 'LOCKED'
    },
    {
      id: 'naomi-mwangi',
      title: "NAOMI MWANGI'S MURDER",
      difficulty: 'Intermediate',
      tagline: 'CASE: NMM-2025-009',
      description:
        'A socialite is found dead after a private gathering.',
      image:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
      location: 'Nairobi',
      status: 'LOCKED'
    }
  ];

  let unlocked = $state([]);
  let inputCode = $state('');
  let activeId = $state(null);
  let search = $state('');

  const codes = {
    'gardenia-slayings': 'GARDENIA',
    'kamau-succession': 'SUCCESSION77',
    'coffee-house-murder': 'COMMUNITYKE',
    'naomi-mwangi': 'MYSTERYFAM'
  };

  function unlock(id) {
    if (inputCode.toUpperCase() === codes[id]) {
      if (!unlocked.includes(id)) unlocked.push(id);
      activeId = null;
      inputCode = '';
    } else {
      alert('ACCESS DENIED');
      inputCode = '';
    }
  }
</script>

<svelte:head>
  <title>Case Archive</title>
</svelte:head>

<main class="container" in:fade>

  <header class="header">
    <h1>CENTRAL ARCHIVE</h1>
  </header>

  <input
    class="search"
    placeholder="SEARCH CASES..."
    bind:value={search}
  />

  <div class="grid">

    {#each games.filter(g =>
      g.title.toLowerCase().includes(search.toLowerCase())
    ) as game}

      <div class="card" in:fly>

        <img src={game.image} alt={game.title} />

        <div class="content">
          <h2>{game.title}</h2>
          <p>{game.description}</p>

          <div class="meta">
            <span>{game.difficulty}</span>
            <span>{game.location}</span>
          </div>

          {#if unlocked.includes(game.id)}

            <a class="open" href={`/games/${game.id}`}>
              ENTER ARCHIVE
            </a>

          {:else if activeId === game.id}

            <div class="gate" in:slide>

              <input
                placeholder="ENTER DECRYPT CODE"
                bind:value={inputCode}
                onkeydown={(e) =>
                  e.key === 'Enter' && unlock(game.id)}
              />

              <button onclick={() => unlock(game.id)}>
                DECRYPT
              </button>

              <button onclick={() => (activeId = null)}>
                CLOSE
              </button>

            </div>

          {:else}

            <button class="locked" onclick={() => (activeId = game.id)}>
              LOCKED — DECRYPT REQUIRED
            </button>

          {/if}

        </div>
      </div>

    {/each}

  </div>
</main>

<style>
  .container {
    background: #050505;
    color: white;
    min-height: 100vh;
    padding: 40px;
    font-family: monospace;
  }

  .header h1 {
    font-size: 3rem;
    letter-spacing: 3px;
  }

  .search {
    width: 100%;
    padding: 12px;
    margin: 20px 0;
    background: black;
    border: 1px solid #333;
    color: white;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 25px;
  }

  .card {
    background: #0d0d0f;
    border: 1px solid #222;
    overflow: hidden;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 18px;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    opacity: 0.7;
    margin: 10px 0;
  }

  .locked {
    width: 100%;
    padding: 12px;
    border: 1px solid #444;
    background: transparent;
    color: #aaa;
    cursor: pointer;
  }

  .open {
    display: block;
    padding: 12px;
    text-align: center;
    background: #1a4d2e;
    color: white;
    text-decoration: none;
    margin-top: 10px;
  }

  .gate input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
  }

  .gate button {
    width: 100%;
    margin-top: 8px;
    padding: 10px;
  }
</style>