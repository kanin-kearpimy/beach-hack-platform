<template>
  <Layout>
    <div class="overlay" v-if="!loaded">
      <img src="~/assets/loading.gif" >
    </div>
    <Header :reachContainer="reachContainer" :handleLoading="loadedImg" />
    <Container ref="sa">
      <Content></Content>
    </Container>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      reachContainer: false,
      loaded: false,
    }
  },
  created() {
    if(process.client) window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    if(process.client) window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if(window.scrollY >= this.$refs.sa.$el.offsetTop - 50) {
        this.reachContainer = true
      }else {
        this.reachContainer = false
      }
    },
    loadedImg() {
      this.loaded = true;
    }
  }
})
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 99;
}

.overlay img {
  background-color: white;
  width: 150px;
  height: 150px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
