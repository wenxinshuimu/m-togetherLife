<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) of picInfos"
        :key="index">
        <img class="swiper-img" :src="item"/>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css' // 轮播图
export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picInfos: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-wrap >>> .swiper-pagination-bullet-active {
  color: #fff;
  background-color: #fff;
}
  .swiper-slide {
    height: 2rem;;
  }
  .swiper-img {
    width: 100%;
    height: 100%;;
  }
</style>