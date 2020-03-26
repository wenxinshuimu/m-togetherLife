import { HTTP } from 'utils/http';
import config from 'utils/config';
class ListModel extends HTTP {
  getListDatas (field, cityId) {
    return new Promise((reslove, reject) => {
      this.axiosPost({
        url: config.API.GET_LIST_DATAS,
        data: {
          field,
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
export { ListModel }