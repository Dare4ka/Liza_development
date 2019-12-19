<template lang="pug">
  section
    .container
      img(src='/assets/img/logo.png', :alt='message')
      p {{ message }}
</template>

<script>
export default {
  data () {
    return {
      message: 'Example Vue component',
    }
  }
}
</script>

<style lang="css" scoped>
.container {
    text-align: center;
}
</style>
