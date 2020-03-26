<template>
  <div class="sub-wrapper">
    <router-link :to="{path: '/detail', query: {field: 'view', id: viewInfo.id}}">
      <div class="img-box">
        <img :src="viewInfo.img" alt="">
      </div>
      <h1 class="title">{{viewInfo.name}}</h1>
      <div class="star-box">
        <stars class="star" :num=Number(viewInfo.star)></stars>
        <span class="num">{{viewInfo.score}}分</span>
      </div>
      <div class="others">
        <span>￥<em>{{viewInfo.default_price}}</em>起</span>
        <span class="city">{{viewInfo.city_name}}</span>
      </div>
    </router-link>
    
  </div>
</template>
<script>
import Stars from '../sub/Stars'
export default {
  name: 'ViewSub',
  components: {
    Stars
  },
  props: {
    viewInfo: Object
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables.scss';
  @import '~styles/mixins.scss';
  div {
    box-sizing: border-box;
  }
  .sub-wrapper {
    width: 50%;
    padding: .1rem;
    .img-box {
      width: 100%;
      height: 1.1rem;
      text-align: center;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .title {
      @include ellipsis;
			height: .3rem;
			font-size: .16rem;
			line-height: .3rem;
			color: #000;
    }
    .star-box {
      @include flex-row;
      font-size: .12rem;
      height: .25rem;
      line-height: .25rem;
      .num {
        padding-left: .05rem;
      }
    }
    .others {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .12rem;
      em {
        font-size: .20rem;
        color: $defaultGreen;
        padding: 0 .02rem 0 .02rem;
      }
      .city {
        padding-right: .1rem;
      }
    }
  }
</style>