<template>
  <div class="program container">
    <h1>Program</h1>
    <p class="lead">Upcoming events (placeholders):</p>
    <EventsSection />
  </div>
</template>

<script setup>
import EventsSection from '../components/EventsSection.vue'
</script>

<style scoped>
.program{padding:2rem 0}
.lead{color:var(--muted)}
</style>
