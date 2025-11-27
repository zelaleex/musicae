<template>
  <header class="site-header">
    <div class="container">
      <a class="brand" href="/">Lumen Musicae</a>

      <!-- CSS-only toggle: hidden checkbox + label (hamburger) -->
      <input id="nav-toggle" class="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
      <label for="nav-toggle" class="hamburger" aria-hidden="true">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </label>

      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/artist">Artist</router-link>
        <router-link to="/festival">Festival</router-link>
        <router-link to="/program">Program</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <!-- Overlay for closing menu on click outside -->
      <label for="nav-toggle" class="nav-overlay"></label>
    </div>
  </header>
</template>

<style scoped>
.site-header{
  background: var(--surface);
  color: var(--text);
  border-bottom: 1px solid var(--muted);
}
.site-header .container{
  max-width: 1100px;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 1rem;
}
.site-header .brand{
  color:var(--text);
  text-decoration:none;
  font-weight:700;
}
.site-header .nav{
  display:flex;
  align-items:center;
}
.site-header .nav a,
.site-header .nav .router-link-active{
  color:var(--muted);
  text-decoration:none;
  padding:0.5rem 0.8rem;
  border-radius:4px;
  transition: background-color 200ms ease, color 200ms ease;
}
.site-header .nav a:hover,
.site-header .nav .router-link-active{
  color:var(--text);
  background-color:rgba(34,32,82,0.08);
}

/* hide native checkbox */
.nav-toggle{position:absolute;left:-9999px}

/* Hamburger button - hidden on desktop */
.hamburger{
  display:none;
  width:36px;
  height:28px;
  padding:6px;
  background:transparent;
  border:0;
  flex-direction:column;
  justify-content:space-between;
  cursor:pointer;
}
.hamburger .bar{
  display:block;
  height:3px;
  background:var(--text);
  border-radius:2px;
  transition: transform 180ms ease, opacity 180ms ease, background 180ms ease;
}

/* Responsive: mobile layout */
@media (max-width: 767px) {
  .hamburger{display:flex}
  .site-header .nav{
    position: absolute;
    left: 0;
    right: 0;
    top: 64px;
    background: var(--surface);
    flex-direction: column;
    padding: 1rem;
    gap: 0.6rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease;
    z-index: 20;
  }
  /* show menu when checkbox is checked */
  .nav-toggle:checked ~ .nav{
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
  .site-header .nav a{margin:0;padding:0.5rem 0.8rem;color:var(--text)}

  /* Overlay: only visible when menu is open */
  .nav-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.2);
    z-index: 10;
    cursor: pointer;
  }
  .nav-toggle:checked ~ .nav-overlay {
    display: block;
  }
}

/* Hamburger -> X animation when checked */
.nav-toggle:checked + .hamburger .bar:nth-child(1){
  transform: translateY(8px) rotate(45deg);
}
.nav-toggle:checked + .hamburger .bar:nth-child(2){
  opacity: 0;
}
.nav-toggle:checked + .hamburger .bar:nth-child(3){
  transform: translateY(-8px) rotate(-45deg);
}

</style>