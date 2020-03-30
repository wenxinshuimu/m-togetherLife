<template>
  <div class="icon-item" @click="changeView(iconInfos.field)">
    <div class="icon" :style="{backgroundColor:iconInfos.bgColor}">
      <span class="iconfont" :class="iconInfos.icon"></span>
    </div>
    <span class="icon-text">{{iconInfos.iconText}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'CategorySub',
  props: {
    iconInfos: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    ...mapMutations(['selectField']),
    changeView(field) {
      this.selectField(field);
      this.$router.push({
         path: '/list'
        });
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  .icon-item {
    @include flex-column;
    @include vh-center;
    width: 20%;
    padding: .06rem 0;
    .icon {
      @include vh-center;
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
      .iconfont {
        color: #fff;
        font-size: .18rem;
      }
    }
    .icon-text {
      font-size: .13rem;
      margin-top: .05rem;
    }
  }
</style>