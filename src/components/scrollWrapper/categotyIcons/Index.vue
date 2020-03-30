<template>
  <div class="icon-wrapper">
    <category-sub 
      v-for="item of iconList"
      :key="item.id"
      :iconInfos="item"
    ></category-sub>
  </div>
</template>
<script>
import CategorySub from './Sub';
import CategoryDatas from 'data/fields.js';
export default {
  name: 'CategoryIndex',
  data() {
    return {
      iconList: CategoryDatas
    }
  },
  components: {
    CategorySub
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .icon-wrapper {
    @include flex-row;
    background-color: #fff;
    border-top: 1px solid #ccc;
  }
</style>