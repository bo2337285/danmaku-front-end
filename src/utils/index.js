export const getQueryMap = () => {
  let queryMap = {}
  window.location.search
    .replace('?', '')
    .split('&')
    .forEach(item => {
      const [key, val] = item.split('=')
      queryMap[key] = val
    })
  return queryMap
}
