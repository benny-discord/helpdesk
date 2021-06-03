<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.path !== '/') this.$router.push('/')
  },
}
</script>