import { HTTP } from 'utils/http';
import config from 'utils/config';
class DetailModel extends HTTP {
  getDetail (field, id) {
    return new Promise((reslove, reject) => {
      this.axiosPost({
        url: config.API.GET_DETAIL,
        data: {
          field,
          id
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
export { DetailModel }