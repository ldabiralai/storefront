import axios from 'axios'

export function get(url) {
  return axios.get(url, {headers: {'Authorization': 'Auth TGF3cmVuY2UgRGFiaXItQWxhaQ=='}})
}
