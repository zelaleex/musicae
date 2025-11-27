<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
// preserve Hero and Events for specific pages; main content will be rendered by router
const router = useRouter()
onMounted(() => {
  // no-op; router available
})
</script>

<template>
  <div id="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<style scoped>
/* small layout adjustments for App wrapper */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app > :nth-child(2) {
  flex: 1;
}

#app > :last-child {
  margin-top: auto;
}

main.container{padding:2rem 0}
</style>
