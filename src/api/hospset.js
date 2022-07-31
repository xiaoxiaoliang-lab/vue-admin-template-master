import request from '@/utils/request'

export default {
     //添加医院设置
     saveHospSet(hospitalSet) {
      return request ({
        url: `/admin/hosp/hospitalSet/saveHospitalSet`,
        method: 'post',
        data: hospitalSet//使用json传数据
      })
    },
  //医院设置列表
  getHospSetList(current,limit,searchObj) {
    return request ({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj  //使用json
    })
  },

    //批量删除
    batchRemoveHospSet(idList) {
      return request ({
        url: `/admin/hosp/hospitalSet/batchRemove`,
        method: 'delete',
        data: idList
      })
    },
  //删除医院设置
  deleteHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/deleteById/${id}`,
      method: 'delete'
    })
  },

  //锁定和取消锁定
  lockHospSet(id,status) {
    return request ({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
 
  //院设置id查询
  getHospSet(id) {
    return request ({
      url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
      method: 'get'
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/updateHospSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
