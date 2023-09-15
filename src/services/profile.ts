import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}

/********************************************************************/

const getMemberProfile = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '294',
      nickname: '玉皇大帝',
      account: 'heima294',
      avatar:
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/avatar/2023-09-13/67193128-f213-4381-9595-30b7e3715878.png',
      gender: '男',
      birthday: '1908-01-01',
      fullLocation: '北京市 北京市 东城区',
      profession: '前端开发6666',
    },
  }
}

const putMemberProfile = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '294',
      nickname: '玉皇大帝',
      account: 'heima294',
      avatar:
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/avatar/2023-09-13/67193128-f213-4381-9595-30b7e3715878.png',
      gender: '男',
      birthday: '1908-01-01',
      fullLocation: '',
      profession: '前端开发6666',
    },
  }
}
