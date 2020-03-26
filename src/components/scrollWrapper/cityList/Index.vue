<template>
  <div>
    <city-sub v-for="(item, index) of cityList" :key="index" :cityInfo=item></city-sub>
  </div>
</template>

<script>
import CitySub from './Sub'
import CityDatas from 'data/cities'
export default {
  name: 'CityList',
  data() {
    return {
      cityList: CityDatas
    }
  },
  components: {
    CitySub
  }
}
</script>