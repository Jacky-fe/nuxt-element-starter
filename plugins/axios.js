import axios from 'axios'
const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)
// 修改默认提交为‘application/x-www-form-urlencoded’
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data, headers) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
if (!canUseDOM) {
  axios.defaults.baseURL = `http://${process.env.WEBSITE_HOSTNAME}/`
}
