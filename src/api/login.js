import request from '@/utils/apiInterceptor'

export function login(data) {
  return request({
    url: 'api/v0.1/login',
    method: 'post',
    data
  })
}
