<template>
<div class="container">
  <home-header></home-header>
  <home-scroll></home-scroll>
</div>
</template>

<script>
import HomeHeader from 'components/header/Home'
import HomeScroll from 'components/scrollWrapper/Home'
export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeScroll
  }
}
</script>
<style lang="scss" scoped>

</style>