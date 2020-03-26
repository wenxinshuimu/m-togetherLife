<template>
  <div class="container">
    <common-header :title=title></common-header>
    <key-word-input @onSearch=onSearch></key-word-input>
    <search-scroll :title=title :searchDatas=searchDatas></search-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/header/Common'
import KeyWordInput from 'components/keyWordInput'
import SearchScroll from 'components/scrollWrapper/Search'
export default {
  name: 'Search',
  data() {
    return {
      title: '商家搜索',
      searchDatas: {}
    }
  },
  components: {
    CommonHeader,
    SearchScroll,
    KeyWordInput
  },
  methods: {
    onSearch (res) {
      if (res && res.status == 0) {
        this.searchDatas = res.data.data;
      }else {
        this.searchDatas = res;
					console.log(this.searchDatas);
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>