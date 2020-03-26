import { HTTP } from 'utils/http';
import config from 'utils/config';
class SearchModel extends HTTP {
  getSearchDatas (keyword, cityId) {
    return new Promise((reslove, reject) => {
      this.axiosPost({
        url: config.API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
        },
        success (data) {
          reslove({
            data,
            status: 0
          })
        },
        error (err) {
          reslove({
            status: -1
          })
        }
      })
    })
  }
}
export { SearchModel }