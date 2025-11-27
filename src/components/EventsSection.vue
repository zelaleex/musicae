<template>
  <section id="events" class="events container">
    <h2>Upcoming Events</h2>
    <div class="grid">
      <article class="event">
        <h3>Baroque Ensemble — Chamber Night</h3>
        <p>Dec 6, 2025 — Small Hall, Town</p>
        <a class="btn" href="#">Tickets</a>
      </article>
      <article class="event">
        <h3>Early Music Workshop</h3>
        <p>Jan 15, 2026 — Community Centre</p>
        <a class="btn" href="#">Register</a>
      </article>
      <article class="event">
        <h3>Baroque Recital</h3>
        <p>Feb 2, 2026 — St. Mary's</p>
        <a class="btn" href="#">Details</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.events{padding:3rem 0}
.events h2{margin-bottom:1rem}
.events .grid{display:grid;grid-template-columns:1fr;gap:1rem}
.event{background:var(--surface-elevated);color:var(--text);padding:1rem;border-radius:8px;box-shadow:0 6px 18px rgba(34,32,82,0.04);border:1px solid rgba(0,0,0,0.04)}
.event h3{margin:0 0 0.2rem 0}
.btn{background:var(--accent);color:var(--bg);padding:0.4rem 0.6rem;border-radius:4px;text-decoration:none}
@media(min-width:768px){.events .grid{grid-template-columns:repeat(3,1fr)}}
</style>