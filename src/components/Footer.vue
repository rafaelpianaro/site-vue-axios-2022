<template>
  <footer>

  </footer>
</template>

<script>
import api from '@/services/api.js'

export default {
    name: 'Footer',
    mounted() {
        api.get('/social-links.json').then(response => {
            console.log(response.data)
        })
    }
}
</script>

<style scoped>
    footer {
        width: 100%;
        height: 60px;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>