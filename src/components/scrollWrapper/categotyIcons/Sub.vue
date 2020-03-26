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
    padding: .1rem 0;
    .icon {
      @include vh-center;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      .iconfont {
        color: #fff;
        font-size: .22rem;
      }
    }
    .icon-text {
      font-size: .14rem;
      margin-top: .1rem;
    }
  }
</style>