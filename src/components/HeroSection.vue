<template>
  <section class="hero" ref="hero">
    <div class="hero-inner container" ref="heroInner">
      <h1 class="hero-title">Musicae<br>Concerts & Events</h1>
      <p class="hero-sub">Program and events for the baroque community — concerts, workshops and more.</p>
      <div class="hero-actions">
        <a class="btn" href="/program">Upcoming Events</a>
        <a class="link" href="/festival">Learn more</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const hero = ref(null)
const heroInner = ref(null)

const route = useRoute()
let ticking = false

function updateHero() {
  if (!hero.value || !heroInner.value) return
  const rect = hero.value.getBoundingClientRect()
  const offset = Math.max(0, -rect.top)
  const offsetRatio = Math.min(1, offset / window.innerHeight)

  // translate and slightly scale the inner content
  const translate = offset * 0.12
  const scale = 1 + Math.min(0.03, offsetRatio * 0.03)
  heroInner.value.style.transform = `translateY(${translate}px) scale(${scale})`

  // subtle background parallax by adjusting background position
  const bgOffset = 50 + offset * 0.02
  hero.value.style.backgroundPosition = `center ${bgOffset}%`
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHero()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // only activate scroll animation on the Home route
  if (route.name !== 'Home') return
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateHero)
  // initial
  updateHero()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateHero)
})
</script>

<style scoped>
.hero{
  /* background image + gradient overlay */
  background-image: linear-gradient(180deg, rgba(34,32,82,0.6), rgba(34,32,82,0.45)), url('/assets/hero.jpeg');
  background-size: cover;
  background-position: center center;
  color:var(--bg);
  padding:0; /* we'll center content with height */
  overflow:hidden;
  min-height:80vh;
  display:flex;
  align-items:center;
}
.hero-inner{max-width:1000px;margin:0 auto;text-align:center;transition:transform 220ms ease-out, opacity 220ms ease-out;padding:4rem 1rem}
.hero-title{font-size:2.3rem;margin-bottom:0.5rem;transform:translateZ(0);color:#fff;letter-spacing:0.6px}
.hero-sub{color:#fff;margin-bottom:1.2rem}
.btn{background:var(--accent);color:var(--text);padding:0.8rem 1.2rem;border-radius:6px;text-decoration:none;margin-right:1rem;box-shadow:0 10px 30px rgba(34,32,82,0.12);transition:transform 180ms ease, box-shadow 180ms ease}
.btn:hover{transform:translateY(-3px);box-shadow:0 18px 36px rgba(34,32,82,0.14)}
.link{color:#fff;text-decoration:underline}

/* subtle CTA pulse */
.btn{animation: pulse 6s infinite linear}
@keyframes pulse{0%{box-shadow:0 10px 30px rgba(34,32,82,0.08)}50%{box-shadow:0 14px 34px rgba(34,32,82,0.12)}100%{box-shadow:0 10px 30px rgba(34,32,82,0.08)}}

@media(min-width:768px){.hero-title{font-size:3.8rem}}
</style>