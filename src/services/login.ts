import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginWxMinParams = {
  code: string
  encryptedData?: string
  iv?: string
}

/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data: LoginWxMinParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple1',
    data: {
      phoneNumber,
    },
  })
}

/********************************************************************/

const postLoginWxMinSimple = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '294',
      account: 'heima294',
      mobile: '13123456789',
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuYW1lXCI6XCLnjonnmoflpKfluJ1cIixcImlkXCI6XCIyOTRcIixcInVzZXJuYW1lXCI6XCJoZWltYTI5NFwifSIsImlhdCI6MTY5NDYyMDQ5MSwiZXhwIjoxNjk0ODc5NjkxfQ.wNTWNC1bEgi98wC7OubSiWYAhH8qhN1EX-MHQgXPCZY',
      avatar:
        'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/avatar/2023-09-13/67193128-f213-4381-9595-30b7e3715878.png',
      nickname: '玉皇大帝',
    },
  }
}
