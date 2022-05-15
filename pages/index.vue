<template>
  <Layout>
    <Header :reachContainer="reachContainer" />
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
      reachContainer: false
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
    }
  }
})
</script>
