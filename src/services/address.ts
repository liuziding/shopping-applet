import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}

/********************************************************************/

const getMemberAddress = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: [
      {
        id: '1701847950084280322',
        receiver: '刘先生',
        contact: '18211110000',
        provinceCode: '110000',
        cityCode: '110100',
        countyCode: '110101',
        address: '灯辉路银春小区202室',
        isDefault: 1,
        fullLocation: '上海市 上海市 闵行区',
        postalCode: null,
        addressTags: null,
      },
      {
        id: '1701933054215327746',
        receiver: '王先生',
        contact: '1863234545',
        provinceCode: '110000',
        cityCode: '110100',
        countyCode: '110101',
        address: '阳澄湖富贵路23号909室',
        isDefault: 0,
        fullLocation: '北京市 北京市 东城区',
        postalCode: null,
        addressTags: null,
      },
      {
        id: '1701847377062662145',
        receiver: '马先生',
        contact: '18812345678',
        provinceCode: '110000',
        cityCode: '110100',
        countyCode: '110101',
        address: '2356',
        isDefault: 0,
        fullLocation: '北京市 北京市 东城区',
        postalCode: null,
        addressTags: null,
      },
      {
        id: '1701847784262471682',
        receiver: '帅先生',
        contact: '18211110809',
        provinceCode: '110000',
        cityCode: '110100',
        countyCode: '110101',
        address: '是前二百',
        isDefault: 0,
        fullLocation: '北京市 北京市 东城区',
        postalCode: null,
        addressTags: null,
      },
      {
        id: '1701851863218917377',
        receiver: '345',
        contact: '13322223333',
        provinceCode: '110000',
        cityCode: '110100',
        countyCode: '110101',
        address: '245',
        isDefault: 0,
        fullLocation: '北京市 北京市 东城区',
        postalCode: null,
        addressTags: null,
      },
    ],
  }
}

const deleteMemberAddressById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '1701851863218917377',
    },
  }
}

const getMemberAddressById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '1701847950084280322',
      receiver: '刘先生',
      contact: '18211110000',
      provinceCode: '110000',
      cityCode: '110100',
      countyCode: '110101',
      address: '灯辉路银春小区202室',
      isDefault: 1,
      fullLocation: '上海市 上海市 闵行区',
      postalCode: null,
      addressTags: null,
    },
  }
}

const putMemberAddressById = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '1701847950084280322',
    },
  }
}

const postMemberAddress = () => {
  return {
    code: '1',
    msg: '操作成功',
    result: {
      id: '1701968857003986945',
    },
  }
}
