<template>
  <Layout></Layout>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/user/new/main')
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
