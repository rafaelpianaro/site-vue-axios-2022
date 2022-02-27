<template>
  <main>
      <section class="container">
          <h1>Vídeos</h1>
          <section class="videos" v-for="(video, index) in videos" :key="index">
              <a href="video.link" class="vide">
                  <img :src="video.thumb" :alt="video.title">
                  <div class="videos-title">
                      {{ video.title }}
                  </div>
              </a>
          </section>
      </section>
  </main>
</template>

<script>
import api from '@/services/api.js'
export default {
    name: 'Videos',
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        api.get('/videos.json').then(resonse => {
            this.videos = resonse.data
        })
    }

}
</script>

<style scoped>
 main {
     align-items: center;
 }
</style>