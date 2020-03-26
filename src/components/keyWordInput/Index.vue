<template>
  <div class="key-word">
    <div class="key-input">
      <span class="iconfont icon-header-search"></span>
      <input type="text" class="input" v-model="keyWord" :placeholder="placeholder" @input='onSearch'/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import tools from 'utils/tools'
import { SearchModel } from 'models/search';
export default {
  name: 'KeyWordInput',
  data () {
    return {
      keyWord: '',
      placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
     onSearch: tools.throttle(function () {
        const keyWord = tools.trimSpace(this.keyWord);
        let searchDatas = new SearchModel();
        if (keyWord.length <= 0) {
          this.$emit('onSearch', {});
          return;
        }
      console.log(keyWord);
        searchDatas.getSearchDatas(keyWord, this.cityId).then((res) => {
          this.$emit('onSearch', res);
        })
      },1000)
  }
}
</script>
<style lang="scss" scoped>
  .key-word {
    height: .44rem;
    width: 100%;
    background-color: #fff;
    padding: .05rem .15rem;
		box-sizing: border-box;
    .key-input {
      position: relative;
      height: 100%;
      width: 100%;
      .iconfont {
        position: absolute;
        left: .08rem;
        top: .12rem;
        font-size: .16rem;
      }
      .input {
        width: 100%;
        height: 100%;
        font-size: .14rem;
        text-indent: .32rem;
        border: 1px solid #eee;
      }
    }
  }
</style>