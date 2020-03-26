export default {
  selectCity (state, cityinfo) {
    state.cityName = cityinfo.cityName;
    state.cityId = cityinfo.cityId;
    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      
    }
  },
  selectField (state, field) {
    console.log(field);
    state.field = field;
    try {
      localStorage.cityInfo = JSON.stringify(state);
    } catch (error) {
      
    }
  }
}