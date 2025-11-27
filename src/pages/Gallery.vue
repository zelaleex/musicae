<template>
  <div class="gallery container">
    <h1>Gallery</h1>
    <p class="lead">Images and videos from both projects. Placeholders used here.</p>
    <div class="grid">
      <div class="item">
        <img src="/assets/pic1.jpg" alt="Lumen Musicae" />
        <p>Lumen Musicae - Kulturverein für Musikvermittlung und Bildung</p>
      </div>
      <div class="item">
        <img src="https://placehold.co/300x200?text=Photo+2" alt="Placeholder 2" />
        <p>Photo 2 description</p>
      </div>
      <div class="item">
        <img src="https://placehold.co/300x200?text=Photo+3" alt="Placeholder 3" />
        <p>Photo 3 description</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery{padding:2rem 0}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem}
.item{background:var(--surface);padding:1rem;border-radius:6px;color:var(--text);text-align:center}
.item img{max-width:100%;border-radius:4px;margin-bottom:0.5rem}

/* Animated placeholder styles */
.item{
  overflow: hidden;
  position: relative;
}
.item img{
  display:block;
  width:100%;
  height:auto;
  transform-origin:50% 50%;
  transition: transform 300ms cubic-bezier(.2,.9,.2,1), filter 300ms ease;
  animation: floaty 6s ease-in-out infinite;
}
.item::after{
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(210,182,182,0.08), rgba(34,32,82,0.04));
  mix-blend-mode: multiply;
  pointer-events: none;
  transition: opacity 300ms ease, transform 500ms ease;
}
.item:hover img{transform: scale(1.06) translateY(-4px);filter:brightness(1.03)}
.item:hover::after{transform: translateY(-6px);opacity:0.95}

@keyframes floaty{
  0%{transform: translateY(0) rotate(0deg)}
  50%{transform: translateY(-6px) rotate(-0.25deg)}
  100%{transform: translateY(0) rotate(0deg)}
}
</style>
