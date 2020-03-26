<template>
  <div>
    <router-link :to="{path: '/detail', query: {field: 'food', id: dataInfo.id}}" class="sub-wrapper">
      <div class="img-box">
        <img :src="dataInfo.img" alt="">
      </div>
      <div class="info-box">
        <h1 class="title">{{dataInfo.name}}</h1>
        <div class="star-box">
          <stars class="star" :num=Number(dataInfo.star)></stars>
          <span class="num">{{dataInfo.score}}分</span>
        </div>
        <div class="tip-box">
          <span 
          v-for="(item, index) in keyWords"
          :key="index">{{item}}</span>
        </div>
        <div class="others">
          <span>{{dataInfo.field}}</span>
          <span class="city">{{dataInfo.area}}</span>
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
    dataInfo: Object
  },
  computed: {
    keyWords() {
      let info = this.dataInfo.keyword;
      return info.split(',');
    }
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
        align-items: center;
        font-size: .16rem;
        color: #000;
      }
      .star-box {
        @include flex-row;
        flex: 1;
        font-size: .12rem;
        align-items: center;
        .num {
          padding-left: .05rem;
        }
      }
      .tip-box {
        align-items: center;
        flex: 1;
        height: .25rem;
        line-height: .25rem;
        font-size: .14rem;
        color: $starColor;
        @include ellipsis;
        
        span {
          margin-right: .08rem;
        }
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