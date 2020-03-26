<template>
  <div>
    <router-link :to="{path: '/detail', query: {field: 'hotel', id: viewInfo.id}}" class="sub-wrapper">
      <div class="img-box">
        <img :src="viewInfo.img" alt="">
      </div>
      <div class="info-box">
        <h1 class="title">{{viewInfo.name}}</h1>
        <div class="star-box">
          <span class="num">{{viewInfo.score}}分</span>
        </div>
        <div class="tip-box">
          <span>{{viewInfo.area}}</span>
        </div>
        <div class="others">
          <span>￥<em>{{viewInfo.default_price}}</em>起</span>
          <span class="city">{{viewInfo.city_name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import Stars from '../sub/Stars'
export default {
  name: 'FoodsSub',
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
  // div {
  //   box-sizing: border-box;
  // }
  .sub-wrapper {
    display: flex;
    width: 100%;
    padding: .1rem .1rem .06rem .1rem;
    border-bottom: 1px solid #ddd;
    .img-box {
      width: 1.1rem;
      height: 1.1rem;
      padding: .03rem;
		  box-sizing: border-box;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .info-box {
      flex: 1;
      @include flex-column;
      overflow: hidden;
      padding-left: .12rem;
      padding-right: .12rem;
      .title {
        @include ellipsis;
        flex: 1;
        font-size: .16rem;
        color: #000;
      }
      .star-box {
        @include flex-row;
        flex: 1;
        font-size: .12rem;
        .num {
          color: $starColor;
        }
      }
      .tip-box {
        flex: 1;
        font-size: .14rem;
      }
      .others {
        display: flex;
        flex: 1;
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
  }
</style>