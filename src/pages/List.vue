<template>
  <div class="container">
    <common-header :title=title></common-header>
    <tab></tab>
    <list-scroll></list-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header/Common'
import Tab from 'components/tab/Index'
import ListScroll from 'components/scrollWrapper/List'
import FieldsData from 'data/fields.js'
import { mapState } from 'vuex';
export default {
  name: 'List',
  data() {
    return {
      // title: '列表'
    }
  },
  components: {
    CommonHeader,
    Tab,
    ListScroll
  },
  computed: {
    ...mapState(['field']),
    title() {
      const data = FieldsData.filter((item) => {
          return item.field == this.field 
      })
      return data[0].iconText + '列表';
    }
  }
}
</script>
<style lang="scss" scoped>

</style>