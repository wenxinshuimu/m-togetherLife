<template>
<div class="container">
  <home-header></home-header>
  <home-scroll></home-scroll>
  <category-icons></category-icons>
</div>
</template>

<script>
import HomeHeader from 'components/header/Home'
import HomeScroll from 'components/scrollWrapper/Home'
import CategoryIcons from 'components/scrollWrapper/categotyIcons/Index'
export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeScroll,
    CategoryIcons
  }
}
</script>
<style lang="scss" scoped>

</style>